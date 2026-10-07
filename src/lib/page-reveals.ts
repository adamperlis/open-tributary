/** Quiet, one-time entrances after the river story. Content is visible by default. */
const profiles = {
 lead: { distance: 28, duration: 900, opacity: .28 },
 body: { distance: 18, duration: 780, opacity: .42 },
 detail: { distance: 12, duration: 650, opacity: .58 },
 flow: { distance: 24, duration: 1100, opacity: .72 },
};
const arrival = 'cubic-bezier(.25, .8, .25, 1)';

export function mountPageReveals(root:ParentNode=document) {
 const targets=[...root.querySelectorAll<HTMLElement>('[data-reveal]')];
 if(!targets.length||!('IntersectionObserver' in window)||!('animate' in Element.prototype))return ()=>{};
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const narrow=window.matchMedia('(max-width: 768px)');
 const seen=new Set<HTMLElement>(),running=new Map<HTMLElement,Animation>();
 const prepared=new Map<HTMLElement,{opacity:number;resting:string;inlineOpacity:string;inlineTransform:string}>();
 const prepare=(element:HTMLElement)=>{
  if(prepared.has(element))return;
  const style=getComputedStyle(element),profile=profiles[element.dataset.reveal as keyof typeof profiles]??profiles.body;
  const state={opacity:Number(style.opacity),resting:style.transform==='none'?'':style.transform,inlineOpacity:element.style.opacity,inlineTransform:element.style.transform};
  prepared.set(element,state);
  // Stage outside the viewport, so the later trigger never dims already-visible content.
  element.style.opacity=String(state.opacity*profile.opacity);
  element.style.transform=`${state.resting} translate3d(0,${profile.distance*(narrow.matches?.55:1)}px,0)`;
 };
 const restore=(element:HTMLElement)=>{
  const state=prepared.get(element);if(!state)return;
  element.style.opacity=state.inlineOpacity;element.style.transform=state.inlineTransform;prepared.delete(element);
 };
 let disposed=false;
 const settle=(element:HTMLElement)=>{
  const animation=running.get(element);
  if(animation){animation.onfinish=null;animation.oncancel=null;animation.cancel();running.delete(element);}
  restore(element);
  element.dataset.revealState=reduced.matches?'static':'settled';
 };
 const settleAll=()=>new Set([...running.keys(),...prepared.keys()]).forEach(settle);
 const observer=new IntersectionObserver(entries=>{
  if(disposed||reduced.matches)return;
  const batches=new Map<Element,number>();
  for(const entry of entries){
   const element=entry.target as HTMLElement;
   if(!entry.isIntersecting||seen.has(element))continue;
   seen.add(element);observer.unobserve(element);
   // Deep links, fast scrolling and keyboard navigation never wait for an entrance.
   if(entry.boundingClientRect.top<0||document.hidden||element.contains(document.activeElement)){settle(element);continue;}
   const group=element.closest('[data-reveal-group]')??element;
   const index=batches.get(group)??0;batches.set(group,index+1);
   const profile=profiles[element.dataset.reveal as keyof typeof profiles]??profiles.body;
   const state=prepared.get(element);
   const style=getComputedStyle(element),opacity=state?.opacity??Number(style.opacity);
   const resting=state?.resting??(style.transform==='none'?'':style.transform);
   const distance=profile.distance*(narrow.matches?.55:1);
   try{
    const animation=element.animate([
     {opacity:opacity*profile.opacity,transform:`${resting} translate3d(0,${distance}px,0)`},
     {opacity,transform:resting||'none'},
    ],{duration:profile.duration*(narrow.matches?.8:1),delay:(narrow.matches?160:220)+Math.min(index*(narrow.matches?40:50),200),easing:arrival,fill:'backwards'});
    restore(element);
    running.set(element,animation);element.dataset.revealState='entering';
    animation.onfinish=()=>settle(element);animation.oncancel=()=>settle(element);
   }catch{settle(element);}
  }
 // Use viewport height: IntersectionObserver percentage margins resolve against width.
 },{threshold:0,rootMargin:`0px 0px -${Math.round(window.innerHeight*(narrow.matches?.14:.18))}px 0px`});
 const arm=()=>{
  observer.disconnect();settleAll();if(disposed)return;
  for(const element of targets){
   if(reduced.matches){element.dataset.revealState='static';continue;}
   if(seen.has(element)){settle(element);continue;}
   // Already visible on load/BFCache restore: don't make readers reread a moving page.
   if(element.getBoundingClientRect().top<window.innerHeight){seen.add(element);settle(element);}
   else{element.dataset.revealState='ready';prepare(element);observer.observe(element);}
  }
 };
 const interact=(event:Event)=>{
  if(!(event.target instanceof Element))return;
  for(const element of targets)if(element.contains(event.target)){
   seen.add(element);observer.unobserve(element);settle(element);
  }
 };
 const hide=()=>{observer.disconnect();settleAll();};
 const show=(event:PageTransitionEvent)=>{if(event.persisted)arm();};
 const visibility=()=>{if(document.hidden)settleAll();else arm();};
 reduced.addEventListener('change',arm);
 document.addEventListener('focusin',interact,true);
 document.addEventListener('pointerdown',interact,true);
 document.addEventListener('visibilitychange',visibility);
 window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);
 arm();
 return ()=>{
  disposed=true;hide();reduced.removeEventListener('change',arm);
  document.removeEventListener('focusin',interact,true);document.removeEventListener('pointerdown',interact,true);
  document.removeEventListener('visibilitychange',visibility);
  window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);
 };
}
