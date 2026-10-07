/** Static build preview plus the same email handler used by the Vercel /api function. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { Readable } from 'node:stream';
import ts from 'typescript';
import { loadEnv } from 'vite';
const args = process.argv.slice(2), portIndex = args.indexOf('--port');
const port = Number(portIndex < 0 ? 4325 : args[portIndex + 1]);
const cwd = new URL('../', import.meta.url).pathname, root = resolve(cwd, 'dist');
const env = { ...loadEnv('development', cwd, ''), ...process.env };
const source = await readFile(new URL('../src/server/form-email.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText;
const { createFormEmailHandler } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
const handle = createFormEmailHandler({ env });
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff': 'font/woff', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.mp4': 'video/mp4' };
const server = createServer(async (req, res) => {
 try {
  const url = new URL(req.url || '/', `http://${req.headers.host || `localhost:${port}`}`);
  if (url.pathname === '/api/contact') {
   const headers = new Headers();
   for (const [key, value] of Object.entries(req.headers)) if (value) headers.set(key, Array.isArray(value) ? value.join(',') : value);
   const hasBody = !['GET', 'HEAD'].includes(req.method || 'GET');
   const request = new Request(url, { method: req.method, headers, ...(hasBody ? { body: Readable.toWeb(req), duplex: 'half' } : {}) });
   const response = await handle(request, req.socket.remoteAddress);
   res.writeHead(response.status, Object.fromEntries(response.headers)); res.end(Buffer.from(await response.arrayBuffer())); return;
  }
  if (!['GET', 'HEAD'].includes(req.method || 'GET')) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  let path = resolve(root, `.${decodeURIComponent(url.pathname)}`);
  if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
  if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
  const data = await readFile(path);
  res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  res.end(req.method === 'HEAD' ? undefined : data);
 } catch { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Tributary preview and email endpoint: http://localhost:${port}/`));
process.on('SIGTERM', () => server.close());
process.on('SIGINT', () => server.close());
