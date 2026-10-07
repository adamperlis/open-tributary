import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const compile=s=>ts.transpileModule(s,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const url=s=>`data:text/javascript;base64,${Buffer.from(s).toString('base64')}`;
const source=name=>readFile(new URL(`../src/lib/${name}.ts`,import.meta.url),'utf8');
const shape=url(compile(await source('river-shape')));
const state=url(compile(await source('river-story-state')).replace("'./river-shape'",JSON.stringify(shape)));
const camera=url(compile(await source('field-camera')).replace("'./river-shape'",JSON.stringify(shape)).replace("'./river-story-state'",JSON.stringify(state)));
const {fieldCamera}=await import(camera);
const {riverStoryState}=await import(state);
const {riverFrame}=await import(shape);
let points=0;
for(const [w,h] of [[1440,779],[3840,2039],[390,691],[320,587]])for(let i=0;i<=100;i++){
 const p=i/100,s=riverStoryState(p),c=fieldCamera(p,w,h);
 const j=.79+(riverFrame(w,h).junction-.79)*s.morph;
 const angle=-s.turn*Math.PI/2,zoom=1+.16*s.follow;
 assert.equal(c.stretch,1.65,'The hero and diagram must retain the same vertical height');
 for(const lane of [-.2,.15,.5,.85,1.2])for(const side of [-1,1])for(const t of [-3,-1,0,.3,.7,1]){
  const q=1-Math.max(0,t),u=Math.max(0,t);
  const x=q*q*q*lane+3*q*q*u*lane+3*q*u*u*.5+u*u*u*.5;
  let y=q*q*q*(j+side*.5)+3*q*q*u*(j+side*.25)+3*q*u*u*(j+side*.1)+u*u*u*j;
  if(t<0)y=j+side*.5-side*.75*t;
  y=j+(y-j)*1.65;
  const dx=(x-.5)*w,dy=(y-j)*h;
  const oldX=.5+.38*s.follow+(Math.cos(angle)*dx-Math.sin(angle)*dy)*zoom/w;
  const oldY=j+((w<769?.78:.70)-j)*s.turn+(Math.sin(angle)*dx+Math.cos(angle)*dy)*zoom/h;
  const newX=c.focusX+(c.rotationX*dx-c.rotationY*dy)/w;
  const newY=c.focusY+(c.rotationY*dx+c.rotationX*dy)/h;
  assert.ok(Math.abs(oldX-newX)*w<1e-8&&Math.abs(oldY-newY)*h<1e-8,'Camera optimization must preserve screen-space geometry');
  points++;
 }
}
const {fieldParticles}=await import(url(compile(await source('field-particles'))));
const rng=()=>{let state=731;return()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};};
let seeds=0;
for(const [stream,dust] of [[6500,14000],[3500,6500],[3,4]]){
 const randomBefore=rng(),randomAfter=rng(),packed=fieldParticles(stream,dust,randomAfter);
 let at=0;
 for(const [count,kind] of [[stream,1],[dust,2]])for(let i=0;i<count;i++){
  const previous=new Float32Array([1-(randomBefore()*1.4-.2),i%2,randomBefore(),randomBefore()]);
  assert.deepEqual(packed.slice(at,at+4),previous,'Every particle seed and its draw order must be preserved');
  assert.equal(packed[at+4],kind,'Keep the original stream/dust material');at+=5;seeds++;
 }
 assert.equal(packed.length,(stream+dust)*5,'No particle may be dropped');
}
console.log(`Verified ${points} camera positions and ${seeds} exact particle seeds/materials, with no detail removed.`);

const {productCurrent,productPosition}=await import(url(compile(await source('product-current')).replace("'./river-shape'",JSON.stringify(shape))));
const {gatewayRiverPath}=await import(shape);
let annotations=0;
for(const [w,h] of [[1440,779],[3840,2039],[390,691],[320,587]]){
 const c=fieldCamera(.4,w,h),lanes=w<769?96:160,spread=w<769?.60:.66;
 for(let i=0;i<7;i++){
  const desired=.5+(i/6*2-1)*spread;
  const l=Math.round((1.2-desired)/1.4*lanes/2)*2;
  // Compare against the canonical static source path, independently of annotation math.
  const controls=gatewayRiverPath(l/lanes*80,{spread:.26,source:.42,junction:c.junction}).match(/-?\d+(?:\.\d+)?/g).map(Number);
  for(const t of [.4,.55,.72,.84,1]){
   const q=1-t,p=productPosition(i,t,c,w,h);
   const expectedX=(q**3*controls[0]+3*q*q*t*controls[2]+3*q*t*t*controls[4]+t**3*controls[6])/1000*w;
   const pathY=(q**3*controls[1]+3*q*q*t*controls[3]+3*q*t*t*controls[5]+t**3*controls[7])/1000;
   const sourceY=controls[1]>c.junction*1000?2*c.junction-pathY:pathY;
   const expectedY=(c.junction+(sourceY-c.junction)*1.65)*h;
   assert.ok(Math.abs(p.x-expectedX)<.03&&Math.abs(p.y-expectedY)<.03,'Annotations must lie on the canonical incoming curves');annotations++;
  }
  const rate=.045+(i+1)/8*.035,base=.43+i*.137;
  const at=t=>productCurrent(i,(t-base)/rate,c,w,h);
  const wide=at(.43),near=at(.75),end=at(.85);
  assert.ok(Math.abs(near.x-w*.5)<=Math.abs(wide.x-w*.5),'Incoming products converge on the project');
  assert.ok(near.y>wide.y&&near.scale<wide.scale,'Products move down and shrink as they approach');
  assert.ok(near.opacity<at(.6).opacity&&end.opacity===0,'Products fade completely before the project');
  assert.ok(at(.6).y>at(.59).y,'Reversing integrated phase reverses the node motion');
  assert.equal(at(.99).opacity,0);assert.equal(at(.01).opacity,0,'Loop wraps while invisible');
 }
}
console.log(`Verified ${annotations} source-aligned product positions and seven reversible, shrinking, fading nodes at each viewport.`);
