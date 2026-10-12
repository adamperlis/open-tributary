/** The newest public GitHub Discussions about the proposal, cached at the edge so GitHub sees a few requests an hour. */
type Env = { GITHUB_TOKEN?: string };
type Options = { env?: Env; fetch?: typeof fetch };
export type DiscussionSummary = { title: string; url: string; category: string; replies: number; author: string; updatedAt: string };

const owner = 'adamperlis', name = 'open-tributary';
const discussionPrefix = `https://github.com/${owner}/${name}/discussions/`;
// GitHub serves Discussions only through GraphQL, which requires a token even for public repositories.
const query = `query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    discussions(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
      totalCount
      nodes { title url updatedAt category { name } comments { totalCount } author { login } }
    }
  }
}`;

const reply = (body: unknown, edgeSeconds: number) =>
  Response.json(body, { headers: { 'Cache-Control': `public, max-age=60, s-maxage=${edgeSeconds}, stale-while-revalidate=3600` } });

export function createDiscussionsHandler(options: Options = {}) {
  const env = options.env ?? (process.env as Env);
  const send = options.fetch ?? fetch;
  return async (request: Request): Promise<Response> => {
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
    const token = env.GITHUB_TOKEN?.trim();
    if (!token) return reply({ ok: true, connected: false, total: 0, discussions: [] }, 60);
    try {
      const response = await send('https://api.github.com/graphql', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'open-tributary-site' },
        body: JSON.stringify({ query, variables: { owner, name } }),
        signal: AbortSignal.timeout(8_000),
      });
      const payload: any = await response.json().catch(() => null);
      const found = payload?.data?.repository?.discussions;
      if (!response.ok || !found) {
        console.warn('GitHub discussions request failed', { status: response.status });
        return reply({ ok: false, connected: true, total: 0, discussions: [] }, 60);
      }
      // Pass through public fields only, and only links that point into this repository's Discussions.
      const discussions: DiscussionSummary[] = (found.nodes ?? [])
        .filter((node: any) => typeof node?.url === 'string' && node.url.startsWith(discussionPrefix) && typeof node.title === 'string')
        .map((node: any) => ({
          title: node.title.slice(0, 200),
          url: node.url,
          category: typeof node.category?.name === 'string' ? node.category.name : 'General',
          replies: Number(node.comments?.totalCount) || 0,
          author: typeof node.author?.login === 'string' ? node.author.login : 'ghost',
          updatedAt: typeof node.updatedAt === 'string' ? node.updatedAt : '',
        }));
      return reply({ ok: true, connected: true, total: Number(found.totalCount) || discussions.length, discussions }, 300);
    } catch {
      return reply({ ok: false, connected: true, total: 0, discussions: [] }, 60);
    }
  };
}
