import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
// Exercise authored geometry directly without an additional runtime/test dependency.
const source=await readFile(new URL('../src/lib/river-shape.ts',import.meta.url),'utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const {riverFrame,riverCurves,riverPath,arrowPath}=await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
let cases=0;
for(const [width,height] of [[1440,779],[1280,599],[390,691],[320,587]]){
 const frame=riverFrame(width,height);
 for(let step=0;step<=20;step++)for(let branch=0;branch<3;branch++){
  const morph=step/20,curves=riverCurves(branch,morph,frame);
  for(let join=0;join<2;join++){
  const incoming=curves[join],outgoing=curves[join+1];
  assert.deepEqual(incoming[3],outgoing[0],'A tributary must remain connected to its downstream current');
  for(let axis=0;axis<2;axis++){
   const before=(incoming[3][axis]-incoming[2][axis])/.35;
   const after=(outgoing[1][axis]-outgoing[0][axis])/(join===0?.35:.30);
   assert.ok(Math.abs(before-after)<1e-9,'Position and velocity must remain continuous through the confluence');
  }
  }
  assert.equal(curves[1][3][0],.5,'The confluence must remain centered');
  assert.equal((riverPath(branch,morph,frame).match(/M/g)||[]).length,1,'Fallback must be one continuous path');
  cases++;
 }
 for(let branch=0;branch<3;branch++){
  const coords=arrowPath(branch,frame).match(/-?\d+(?:\.\d+)?/g).map(Number);
  assert.ok(coords.every(v=>v>=0&&v<=1000),'Relationship arrows must remain inside the stage');
 }
}
console.log(`Verified ${cases} connected, tangent-continuous river states across desktop and phone frames.`);
