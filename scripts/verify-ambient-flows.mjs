import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const compile=s=>ts.transpileModule(s,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const url=s=>`data:text/javascript;base64,${Buffer.from(s).toString('base64')}`;
const shapeUrl=url(compile(await readFile(new URL('../src/lib/ambient-shapes.ts',import.meta.url),'utf8')));
const {ambientCompositions,ambientPoint,ambientFrame}=await import(shapeUrl);
let positions=0;
for(const shape of ambientCompositions)for(let i=0;i<80;i++)for(let t=0;t<=64;t++){
 const p=ambientPoint(shape,i/80*1.4-.2,i%2,t/64);
 assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y));positions++;
}
for(const [w,h] of [[1440,640],[3840,2160],[390,460],[819,600]]){
 const [x,y,ox,oy]=ambientFrame(w,h);
 assert.equal(.5*x+ox,.5);assert.equal(.5*y+oy,.5);
 assert.ok(x>=1&&y>=1,'Slice fills the composition frame at every aspect ratio');
 assert.ok(Math.abs(x*w/(y*h)-1440/640)<1e-10,'Preserve native shape proportions');
}
for(const shape of ['orbit','ripple']){const a=ambientPoint(shape,.4,0,0),b=ambientPoint(shape,.4,0,1);assert.ok(Math.abs(a.x-b.x)+Math.abs(a.y-b.y)<1e-12,'Orbital paths close without a jump');}
// A central gap previously made the four curtains look like a black rectangle.
for(const lane of [-.1,.15,.6,1.1])for(const side of [0,1]){
 const a=ambientPoint('confluence',lane,side,.5-1e-6),b=ambientPoint('confluence',lane,side,.5+1e-6);
 const center=ambientPoint('confluence',lane,side,.5);
 assert.equal(center.x,.5,'Both banks meet at a shared junction');
 assert.ok(Math.hypot(a.x-b.x,a.y-b.y)<1e-5,'No position jump across the junction');
 const begin=ambientPoint('confluence',lane,side,0),end=ambientPoint('confluence',lane,side,1);
 assert.equal(begin.x,side);assert.equal(end.x,1-side,'Particles continue to the opposite bank');
 const before={x:(center.x-a.x)/1e-6,y:(center.y-a.y)/1e-6};
 const after={x:(b.x-center.x)/1e-6,y:(b.y-center.y)/1e-6};
 assert.ok(Math.hypot(before.x-after.x,before.y-after.y)<1e-4,'The joined curves share a smooth tangent');
}
class Canvas extends EventTarget {cloneNode(){return new Canvas();}replaceWith(next){this.replaced=next;}}
class Host {constructor(id,top){this.id=id;this.top=top;this.dataset={composition:'meander'};this.canvas=new Canvas();}querySelector(){return this.canvas;}getBoundingClientRect(){return {top:this.top};}}
class Observer {static all=[];constructor(cb,options){this.cb=cb;this.options=options;this.hosts=new Set();Observer.all.push(this);}observe(h){this.hosts.add(h);}disconnect(){this.hosts.clear();}enter(h,value=true){this.cb([{target:h,isIntersecting:value,intersectionRect:{width:value?100:0,height:value?100:0}}]);}}
class Media extends EventTarget {matches=false;change(value){this.matches=value;this.dispatchEvent(new Event('change'));}}
const reduced=new Media(),doc=new EventTarget(),win=new EventTarget();doc.hidden=false;
globalThis.document=doc;globalThis.window=win;globalThis.innerHeight=900;globalThis.matchMedia=()=>reduced;globalThis.IntersectionObserver=Observer;win.IntersectionObserver=Observer;
const fake=url(`export function mountTributaryField(canvas,host,options){host.dataset.mounted=String(Number(host.dataset.mounted||0)+1);host.dataset.initialPhase=String(options.phase);host.dataset.released='false';return {setRunning(v){host.dataset.fieldRunning=String(v);},getPhase(){return options.phase+12.5;},dispose(){host.dataset.released='true';}};}`);
const source=compile(await readFile(new URL('../src/lib/ambient-flows.ts',import.meta.url),'utf8')).replace("'./ambient-shapes'",JSON.stringify(shapeUrl)).replace("'./tributary-field'",JSON.stringify(fake));
const {mountAmbientFlows}=await import(url(source));
const a=new Host('a',400),b=new Host('b',1100),c=new Host('c',1600),hosts=[a,b,c];
const stop=mountAmbientFlows({querySelectorAll:()=>hosts});const [near,visible]=Observer.all;
assert.equal(a.dataset.mounted,undefined,'No eager GPU contexts');
near.enter(a);await new Promise(r=>setTimeout(r,0));assert.equal(a.dataset.mounted,'1');assert.equal(a.dataset.fieldRunning,'false','Prewarm renders once without an offscreen animation loop');
visible.enter(a);assert.equal(a.dataset.fieldRunning,'true');near.enter(b);near.enter(c);assert.equal(c.dataset.mounted,undefined,'Cache no more than two contexts');
visible.enter(a,false);near.enter(a,false);assert.equal(a.dataset.released,'true');assert.equal(c.dataset.mounted,'1');
visible.enter(c);assert.equal(c.dataset.fieldRunning,'true');doc.hidden=true;doc.dispatchEvent(new Event('visibilitychange'));assert.equal(c.dataset.fieldRunning,'false');doc.hidden=false;doc.dispatchEvent(new Event('visibilitychange'));assert.equal(c.dataset.fieldRunning,'true');
near.enter(a);visible.enter(a);assert.equal(a.dataset.mounted,'2');assert.equal(a.dataset.initialPhase,'12.5','Recreated fields preserve their exact paused phase');
reduced.change(true);assert.equal(a.dataset.released,'true');assert.equal(c.dataset.released,'true');assert.equal(a.dataset.available,'false');
reduced.change(false);assert.equal(a.dataset.mounted,'3');const hide=new Event('pagehide');Object.defineProperty(hide,'persisted',{value:true});win.dispatchEvent(hide);assert.equal(a.dataset.fieldRunning,'false');const show=new Event('pageshow');Object.defineProperty(show,'persisted',{value:true});win.dispatchEvent(show);assert.equal(a.dataset.fieldRunning,'true');
stop();assert.equal(near.hosts.size,0);assert.equal(visible.hosts.size,0);assert.equal(a.dataset.released,'true');
console.log(`Verified ${positions} finite fallback positions, aspect-preserving 4K/mobile crops, lazy loading, bounded cache, phase-preserving eviction, hidden tabs, reduced motion, BFCache and disposal.`);
