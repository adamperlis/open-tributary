import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const compile=source=>ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const moduleUrl=source=>`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
const shape=moduleUrl(compile(await readFile(new URL('../src/lib/river-shape.ts',import.meta.url),'utf8')));
const source=compile(await readFile(new URL('../src/lib/river-story-state.ts',import.meta.url),'utf8')).replace("'./river-shape'",JSON.stringify(shape));
const {riverStoryState}=await import(moduleUrl(source));
// The longer story must preserve the accepted opening's physical scroll timing.
for(const height of [779,599,691,587])for(let scroll=0;scroll<=2*height;scroll+=37){
 assert.ok(Math.abs(riverStoryState(scroll/(4*height)).opening-scroll/(2*height))<1e-12);
}
assert.equal(riverStoryState(.5).morph,1,'Diagram settles before the camera turns');
assert.equal(riverStoryState(.5).turn,0,'Keep the accepted diagram vertical');
assert.equal(riverStoryState(.5).departure,0,'Give the settled diagram a reading hold');
assert.equal(riverStoryState(.9).follow,1,'Camera settles before the final reading hold');
assert.equal(riverStoryState(.9).thesis,1,'Final copy is visible during its reading hold');
assert.deepEqual(riverStoryState(-1),riverStoryState(0));
assert.deepEqual(riverStoryState(2),riverStoryState(1));
let previous=riverStoryState(0);
for(let step=1;step<=1000;step++){
 const current=riverStoryState(step/1000);
 for(const key of Object.keys(current)){
  assert.ok(Number.isFinite(current[key])&&current[key]>=0&&current[key]<=1,`${key} stays bounded`);
  assert.ok(Math.abs(current[key]-previous[key])<.02,`${key} must not jump between scroll positions`);
  assert.ok(current[key]>=previous[key],`${key} follows the camera monotonically`);
 }
 previous=current;
}
console.log('Verified opening timing across four frames, settled reading holds, and 1,000 continuous camera states.');
