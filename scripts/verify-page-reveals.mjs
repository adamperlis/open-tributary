import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
// Exercise the reveal lifecycle without hiding content or depending on a GPU/browser runner.
class Target extends EventTarget {
 constructor(kind,top,group=null,opacity='1'){super();this.dataset={reveal:kind};this.top=top;this.group=group;this.opacity=opacity;this.style={opacity:'',transform:''};this.plays=[];}
 getBoundingClientRect(){return {top:this.top};}
 closest(){return this.group;}
 contains(target){return target===this;}
 animate(frames,options){
  if(this.fail)throw Error('Animation unavailable');
  const animation={frames,options,cancelled:false,onfinish:null,oncancel:null,cancel(){this.cancelled=true;}};
  this.plays.push(animation);return animation;
 }
}
class Observer {
 static all=[];
 constructor(callback,options){this.callback=callback;this.options=options;this.observed=new Set();Observer.all.push(this);}
 observe(target){this.observed.add(target);}
 unobserve(target){this.observed.delete(target);}
 disconnect(){this.observed.clear();}
 enter(...targets){this.callback(targets.filter(t=>this.observed.has(t)).map(target=>({target,isIntersecting:true,boundingClientRect:target.getBoundingClientRect()})));}
}
class Media extends EventTarget {constructor(matches=false){super();this.matches=matches;}change(value){this.matches=value;this.dispatchEvent(new Event('change'));}}
const reduced=new Media(),narrow=new Media(),win=new EventTarget(),doc=new EventTarget();
win.innerHeight=900;win.matchMedia=query=>query.includes('reduced-motion')?reduced:narrow;win.IntersectionObserver=Observer;
doc.activeElement=null;doc.hidden=false;
globalThis.window=win;globalThis.document=doc;globalThis.Element=Target;globalThis.IntersectionObserver=Observer;
globalThis.getComputedStyle=element=>({opacity:element.style.opacity||element.opacity,transform:element.style.transform||'none'});
const code=ts.transpileModule(await readFile(new URL('../src/lib/page-reveals.ts',import.meta.url),'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
const {mountPageReveals}=await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const group={},loaded=new Target('lead',100),lead=new Target('lead',1000,group),body=new Target('body',1300,group),detail=new Target('detail',1550,group),art=new Target('flow',1700,group,'.65'),fast=new Target('body',2200),focused=new Target('detail',2400),broken=new Target('body',2600),phone=new Target('lead',2800),next=new Target('body',3000);
const targets=[loaded,lead,body,detail,art,fast,focused,broken,phone,next];
const stop=mountPageReveals({querySelectorAll:()=>targets}),observer=Observer.all.at(-1);
assert.equal(observer.options.rootMargin,'0px 0px -162px 0px','Triggers are offset by viewport height rather than screen width');
assert.equal(loaded.dataset.revealState,'settled');assert.equal(loaded.plays.length,0,'Never animate content already being read');
assert.equal(lead.style.opacity,'0.28','Prepare below-screen content before its reveal trigger to prevent brightness blinking');
assert.match(lead.style.transform,/28px/,'Prepare the initial position before it is visible');
assert.equal(art.style.opacity,String(.65*.72),'Stage artwork relative to its authored opacity');
observer.enter(lead,body,detail,art);
assert.equal(lead.style.opacity,'','Release preparation to the animation without changing its resting style');
assert.deepEqual([lead,body,detail,art].map(t=>t.plays[0].options.delay),[220,270,320,370],'Visible entrances pause briefly, then use a bounded 50ms stagger');
for(const target of [lead,body,detail,art]){
 const {frames,options}=target.plays[0];assert.equal(options.easing,'cubic-bezier(.25, .8, .25, 1)');
 assert.ok(frames[0].opacity>0,'Content stays perceptible during arrival');assert.equal(frames[1].opacity,Number(target.opacity));
 assert.equal(frames[1].transform,'none');
}
assert.equal(art.plays[0].frames[1].opacity,.65,'Keep the mobile artwork’s authored opacity');
lead.plays[0].onfinish();assert.equal(lead.dataset.revealState,'settled');assert.equal(lead.plays[0].cancelled,true,'Release the animation after its entrance');
observer.enter(lead);assert.equal(lead.plays.length,1,'Do not replay when scrolling back');
fast.top=-20;observer.enter(fast);assert.equal(fast.plays.length,0,'Fast scroll/deep links reveal immediately');assert.equal(fast.style.opacity,'','Skipped entrances restore full brightness');
doc.activeElement=focused;observer.enter(focused);assert.equal(focused.plays.length,0,'Keyboard focus must never wait');doc.activeElement=null;
const focusEvent=new Event('focusin');Object.defineProperty(focusEvent,'target',{value:detail});doc.dispatchEvent(focusEvent);
assert.equal(detail.plays[0].cancelled,true,'Interrupt an active entrance on focus');
broken.fail=true;observer.enter(broken);assert.equal(broken.dataset.revealState,'settled','Failed animation leaves ordinary visible content');
reduced.change(true);assert.equal(observer.observed.size,0);assert.equal(body.plays[0].cancelled,true);assert.equal(next.dataset.revealState,'static');assert.equal(next.style.opacity,'','Reduced motion releases all staged styles');
reduced.change(false);narrow.change(true);observer.enter(phone);
assert.match(phone.plays[0].frames[0].transform,/15\.4/,'Phone entrances use shorter travel');assert.equal(phone.plays[0].options.duration,720);
assert.equal(phone.plays[0].options.delay,160,'Phone arrivals retain a visible beat');
const press=new Event('pointerdown');Object.defineProperty(press,'target',{value:phone});doc.dispatchEvent(press);assert.equal(phone.plays[0].cancelled,true,'Press feedback takes over immediately');
win.dispatchEvent(new Event('pagehide'));assert.equal(observer.observed.size,0);
const restore=new Event('pageshow');Object.defineProperty(restore,'persisted',{value:true});win.dispatchEvent(restore);assert.ok(observer.observed.has(next),'Restore pending entrances after BFCache return');
doc.hidden=true;doc.dispatchEvent(new Event('visibilitychange'));assert.equal(next.style.opacity,'','Backgrounding releases offscreen preparation');
doc.hidden=false;doc.dispatchEvent(new Event('visibilitychange'));assert.equal(next.style.opacity,'0.42','Returning stages pending offscreen entrances again');
stop();assert.equal(next.style.opacity,'','Cleanup releases unplayed preparation');assert.equal(observer.observed.size,0);observer.enter(next);assert.equal(next.plays.length,0,'Cleanup disconnects observation');
narrow.change(true);const mobileTarget=new Target('body',1200);const stopMobile=mountPageReveals({querySelectorAll:()=>[mobileTarget]});assert.equal(Observer.all.at(-1).options.rootMargin,'0px 0px -126px 0px','Phone trigger uses a shorter inset');stopMobile();
reduced.change(true);const still=new Target('lead',1200);const stopStatic=mountPageReveals({querySelectorAll:()=>[still]});assert.equal(still.dataset.revealState,'static');assert.equal(still.plays.length,0);stopStatic();
console.log('Verified no visible brightness reset, staged-style restoration, one-time staging, authored opacity, bounded stagger, mobile travel, focus/press interruption, reduced motion, animation failure, BFCache and cleanup.');
