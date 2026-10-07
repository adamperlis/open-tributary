import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
export default defineConfig({
  site: process.env.SITE_URL || 'https://open-tributary.vercel.app',
  integrations: [react()],
  vite: { resolve: { alias: [
    { find: '@designcodeio/threeui/style.css', replacement: fileURLToPath(new URL('./src/shaders/threeui.css', import.meta.url)) },
    { find: '@designcodeio/threeui', replacement: fileURLToPath(new URL('./src/shaders/threeui-entry.tsx', import.meta.url)) }
  ] } },
  devToolbar: { enabled: false }
});
