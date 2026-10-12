import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  site: process.env.SITE_URL || 'https://open-tributary.vercel.app',
  integrations: [react()],
  // astro dev doesn't run the Vercel /api functions; borrow the live, read-only discussions list. /api/contact is never proxied.
  vite: { server: { proxy: { '/api/discussions': { target: 'https://open-tributary.vercel.app', changeOrigin: true } } }, optimizeDeps: { entries: ['src/components/GatewayScene.tsx', 'src/layouts/Layout.astro', 'src/components/River.astro'] }, resolve: { alias: [
    { find: '@designcodeio/threeui/style.css', replacement: fileURLToPath(new URL('./src/shaders/threeui.css', import.meta.url)) },
    { find: '@designcodeio/threeui', replacement: fileURLToPath(new URL('./src/shaders/threeui-entry.tsx', import.meta.url)) }
  ] } },
  devToolbar: { enabled: false }
});
