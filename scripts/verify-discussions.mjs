import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile(new URL('../src/server/discussions.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText;
const { createDiscussionsHandler } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const get = () => new Request('https://example.test/api/discussions');

// Without a token the page keeps its static link to GitHub.
let response = await createDiscussionsHandler({ env: {} })(get());
let body = await response.json();
assert.equal(body.connected, false);
assert.deepEqual(body.discussions, []);

// A good response passes public fields only, drops links outside this repository, and caches at the edge.
let sent;
const github = async (url, init) => {
 sent = { url, init };
 return Response.json({ data: { repository: { discussions: { totalCount: 3, nodes: [
  { title: 'Should forks owe royalties?', url: 'https://github.com/adamperlis/open-tributary/discussions/1', updatedAt: '2026-10-12T10:00:00Z', category: { name: 'Ideas' }, comments: { totalCount: 4 }, author: { login: 'maintainer' }, email: 'private@example.com' },
  { title: 'Look here', url: 'https://example.com/discussions/2', updatedAt: '2026-10-12T10:00:00Z', category: { name: 'General' }, comments: { totalCount: 0 }, author: { login: 'spammer' } },
  null,
 ] } } } });
};
response = await createDiscussionsHandler({ env: { GITHUB_TOKEN: 'test-token' }, fetch: github })(get());
body = await response.json();
assert.equal(sent.url, 'https://api.github.com/graphql');
assert.equal(sent.init.headers.Authorization, 'Bearer test-token');
assert.equal(body.discussions.length, 1, 'Links outside the repository are dropped');
assert.deepEqual(Object.keys(body.discussions[0]).sort(), ['author', 'category', 'replies', 'title', 'updatedAt', 'url']);
assert.equal(body.discussions[0].replies, 4);
assert.match(response.headers.get('cache-control'), /s-maxage=300/);

// GitHub failures degrade to an empty list with a short cache instead of throwing.
response = await createDiscussionsHandler({ env: { GITHUB_TOKEN: 'test-token' }, fetch: async () => new Response('unavailable', { status: 502 }) })(get());
body = await response.json();
assert.equal(body.ok, false);
assert.match(response.headers.get('cache-control'), /s-maxage=60/);

// The endpoint only reads.
response = await createDiscussionsHandler({ env: {} })(new Request('https://example.test/api/discussions', { method: 'POST' }));
assert.equal(response.status, 405);

console.log('Verified discussions: missing token, public fields only, foreign links dropped, edge caching, GitHub failures and read-only methods.');
