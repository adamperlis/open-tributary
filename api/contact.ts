import { createFormEmailHandler } from '../src/server/form-email.js';
const handle = createFormEmailHandler();
export default {
 fetch(request: Request) {
  return handle(request, request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown');
 },
};
