import { createHash } from 'node:crypto';

const recipient = 'support@b150.ai';
const maxBytes = 16_384;
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/;
const feedbackRoles = ['Creator / maintainer', 'Builder', 'Company', 'Other'];
const joinRoles: Record<string, string> = { maintainer: 'Creator / maintainer', builder: 'Builder', both: 'Creator and builder' };
type Env = { RESEND_API_KEY?: string; FORM_EMAIL_FROM?: string };
type Options = { env?: Env; send?: typeof fetch; now?: () => number };

class InvalidForm extends Error {}
const reply = (status: number, body: Record<string, unknown>, headers: Record<string, string> = {}) =>
 Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
const error = (status: number, message: string, headers?: Record<string, string>) => reply(status, { ok: false, message }, headers);
function text(input: Record<string, unknown>, key: string, max: number, required = false) {
 const raw = input[key];
 if (raw !== undefined && typeof raw !== 'string') throw new InvalidForm('Please check the form fields.');
 const value = (raw as string | undefined)?.trim() ?? '';
 if (value.length > max || (required && !value) || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) throw new InvalidForm('Please check the form fields.');
 return value;
}
async function readBody(request: Request) {
 const reader = request.body?.getReader();
 if (!reader) throw new InvalidForm('Please complete the form.');
 const chunks: Uint8Array[] = []; let bytes = 0;
 try {
  while (true) {
   const part = await reader.read(); if (part.done) break;
   bytes += part.value.byteLength;
   if (bytes > maxBytes) { await reader.cancel(); return null; }
   chunks.push(part.value);
  }
 } finally { reader.releaseLock(); }
 const body = new Uint8Array(bytes); let at = 0;
 for (const chunk of chunks) { body.set(chunk, at); at += chunk.byteLength; }
 return JSON.parse(new TextDecoder().decode(body)) as unknown;
}

/** One recipient, server-held credentials and no database. Throttling is per warm function instance. */
export function createFormEmailHandler(options: Options = {}) {
 const attempts = new Map<string, { count: number; expires: number }>();
 return async (request: Request, address = 'unknown'): Promise<Response> => {
  if (request.method !== 'POST') return error(405, 'Use the form to send a message.', { Allow: 'POST' });
  if (request.headers.get('origin') !== new URL(request.url).origin || request.headers.get('sec-fetch-site') === 'cross-site') return error(403, 'Please send this form from the Tributary website.');
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get('content-type') ?? '')) return error(415, 'Please send the form as JSON.');
  if (Number(request.headers.get('content-length')) > maxBytes) return error(413, 'Your message is too long.');
  try {
   const raw = await readBody(request);
   if (raw === null) return error(413, 'Your message is too long.');
   if (typeof raw !== 'object' || !raw || Array.isArray(raw)) throw new InvalidForm('Please complete the form.');
   const input = raw as Record<string, unknown>;
   if (text(input, 'website', 500)) return reply(202, { ok: true }); // Discard automated honeypot submissions.
   const kind = text(input, 'kind', 20, true);
   if (!['join', 'feedback'].includes(kind)) throw new InvalidForm('Please use a supported form.');
   const id = text(input, 'submissionId', 36, true);
   if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) throw new InvalidForm('Please reload the page and try again.');
   const name = text(input, 'name', 100);
   const email = text(input, 'email', 254, kind === 'join');
   if (email && !emailPattern.test(email)) throw new InvalidForm('Please enter a valid email address.');
   const role = text(input, 'role', 40, true);
   if (kind === 'join' ? !Object.prototype.hasOwnProperty.call(joinRoles, role) : !feedbackRoles.includes(role)) throw new InvalidForm('Please choose your perspective.');
   const source = text(input, 'source', 40, true);
   if (kind === 'join' ? !['/join', '/join/'].includes(source) : !['/license', '/license/', '/manifesto', '/manifesto/'].includes(source)) throw new InvalidForm('Please use the form on the relevant page.');
   const message = text(input, kind === 'join' ? 'note' : 'feedback', kind === 'join' ? 2000 : 5000, kind === 'feedback');
   const project = text(input, 'project', 500);
   if (project) {
    let url: URL; try { url = new URL(project); } catch { throw new InvalidForm('Please enter a complete project URL.'); }
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new InvalidForm('Please use an http or https project URL.');
   }
   const env = options.env ?? process.env;
   if (!env.RESEND_API_KEY?.trim()) return error(503, 'Email sending isn’t connected yet. Please email support@b150.ai.');
   const from = env.FORM_EMAIL_FROM?.trim() || 'Tributary <forms@b150.ai>';
   if (/[\r\n]/.test(from)) return error(503, 'Email sending is temporarily unavailable. Please email support@b150.ai.');
   const now = (options.now ?? Date.now)();
   for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
   const key = createHash('sha256').update(address).digest('hex');
   const recent = attempts.get(key);
   if (recent && recent.count >= 5) return error(429, 'Please wait a few minutes before sending another message.', { 'Retry-After': String(Math.ceil((recent.expires - now) / 1000)) });
   if (!recent && attempts.size >= 2000) return error(429, 'Please try again in a few minutes.');
   attempts.set(key, { count: (recent?.count ?? 0) + 1, expires: recent?.expires ?? now + 600_000 });
   const body = {
    from, to: [recipient], ...(email ? { reply_to: email } : {}),
    subject: kind === 'join' ? `Tributary — New interest (${joinRoles[role]})` : `Tributary — Proposal feedback (${role})`,
    text: [kind === 'join' ? 'New Tributary interest' : 'Tributary proposal feedback', '', `Name: ${name || 'Not provided'}`, `Email: ${email || 'Not provided'}`, `Perspective: ${kind === 'join' ? joinRoles[role] : role}`, `Page: ${source}`, ...(project ? [`Project: ${project}`] : []), '', message || 'No additional note.'].join('\n'),
   };
   const hash = createHash('sha256').update(JSON.stringify(body)).digest('hex');
   try {
    const response = await (options.send ?? fetch)('https://api.resend.com/emails', {
     method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `tributary-${id}-${hash}` },
     body: JSON.stringify(body), signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) { console.warn('Form email provider rejected request', { status: response.status, kind }); return error(502, 'We couldn’t confirm sending. Please try again or email support@b150.ai.'); }
    const accepted: unknown = await response.json();
    if (!accepted || typeof accepted !== 'object' || !('id' in accepted) || typeof accepted.id !== 'string' || !accepted.id) return error(502, 'We couldn’t confirm sending. Please try again or email support@b150.ai.');
    return reply(202, { ok: true });
   } catch { return error(502, 'We couldn’t confirm sending. Please try again or email support@b150.ai.'); }
  } catch (caught) {
   return error(400, caught instanceof InvalidForm ? caught.message : 'Please check the form and try again.');
  }
 };
}
