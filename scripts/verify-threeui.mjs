import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const manifest = JSON.parse(readFileSync(new URL('../src/shaders/source-manifest.json', import.meta.url), 'utf8'));
for (const file of manifest.files) {
  const hash = createHash('sha256').update(readFileSync(new URL('../' + file.path, import.meta.url))).digest('hex');
  if (hash !== file.sha256) throw new Error('Registered source changed: ' + file.path);
  console.log('SHA-256 verified: ' + file.path);
}
