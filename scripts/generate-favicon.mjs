import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
const source = await readFile(new URL('../public/favicon.svg', import.meta.url));
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source, {density:384}).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (let i = 0; i < sizes.length; i++) {
  const entry = 6 + i * 16;
  header[entry] = sizes[i]; header[entry + 1] = sizes[i];
  header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[i].length, entry + 8); header.writeUInt32LE(offset, entry + 12);
  offset += images[i].length;
}
await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([header, ...images]));
await writeFile(new URL('../public/favicon-32.png', import.meta.url), images[1]);
await sharp(source, {density:384}).resize(180, 180).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
console.log('Generated 16/32/48px ICO, 32px PNG and 180px touch icon from the SVG.');
