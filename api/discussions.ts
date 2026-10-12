import { createDiscussionsHandler } from '../src/server/discussions.js';
const handle = createDiscussionsHandler();
export default {
 fetch(request: Request) {
  return handle(request);
 },
};
