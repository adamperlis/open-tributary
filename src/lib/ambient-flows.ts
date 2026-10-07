import type { TributaryField } from './tributary-field';
import { ambientCompositions, type AmbientComposition } from './ambient-shapes';
interface Scene {host:HTMLElement;canvas:HTMLCanvasElement;field:TributaryField|null;near:boolean;visible:boolean;phase:number;lost:()=>void;}
/** Full detail in view; at most two cached contexts, unless more scenes are actually visible. */
export function mountAmbientFlows(root:ParentNode=document){
 const hosts=[...root.querySelectorAll<HTMLElement>('[data-ambient-flow]')];
 if(!hosts.length||!('IntersectionObserver' in window))return ()=>{};
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let disposed=false,suspended=false,loading=false;
 let mount:typeof import('./tributary-field').mountTributaryField|undefined;
 const scenes:Scene[]=hosts.map(host=>{
  const scene:Scene={host,canvas:host.querySelector('canvas')!,field:null,near:false,visible:false,phase:0,lost:()=>{host.dataset.available='false';}};
  return scene;
 });
 const retire=(scene:Scene)=>{
  if(!scene.field)return;
  scene.phase=scene.field.getPhase();scene.canvas.removeEventListener('webglcontextlost',scene.lost);
  scene.field.dispose();scene.field=null;
  // A fresh canvas allows a genuinely released context to be recreated later.
  const next=scene.canvas.cloneNode(false) as HTMLCanvasElement;scene.canvas.replaceWith(next);scene.canvas=next;
  scene.host.dataset.available='false';scene.host.dataset.fieldRunning='false';
 };
 const reconcile=()=>{
  if(disposed)return;
  scenes.forEach(scene=>{scene.host.dataset.reduced=String(reduced.matches);scene.field?.setRunning(scene.visible&&!document.hidden&&!suspended&&!reduced.matches);});
  if(document.hidden||suspended)return;
  if(reduced.matches){scenes.forEach(retire);return;}
  const candidates=scenes.filter(scene=>scene.near&&!scene.host.dataset.fieldError).sort((a,b)=>Number(b.visible)-Number(a.visible)||Math.abs(a.host.getBoundingClientRect().top-innerHeight/2)-Math.abs(b.host.getBoundingClientRect().top-innerHeight/2));
  const selected=new Set(candidates.slice(0,Math.max(2,candidates.filter(scene=>scene.visible).length)));
  scenes.forEach(scene=>{if(!selected.has(scene))retire(scene);});
  if(!mount){
   if(selected.size&&!loading){
    loading=true;
    import('./tributary-field').then(module=>{mount=module.mountTributaryField;loading=false;reconcile();}).catch(()=>{loading=false;scenes.forEach(scene=>{scene.host.dataset.fieldError='Renderer unavailable';});});
   }
   return;
  }
  for(const scene of selected){
   if(!scene.field){
    const composition=scene.host.dataset.composition as AmbientComposition;
    scene.field=mount(scene.canvas,scene.host,{surface:scene.host.dataset.surface==='light'?'light':'dark',composition:ambientCompositions.includes(composition)?composition:'gateway',orientation:scene.host.dataset.orientation==='horizontal'?'horizontal':'vertical',phase:scene.phase,releaseContextOnDispose:true});
    if(scene.field)scene.canvas.addEventListener('webglcontextlost',scene.lost);
   }
   scene.host.dataset.available=String(Boolean(scene.field)&&!scene.host.dataset.fieldError);
   scene.field?.setRunning(scene.visible&&!document.hidden&&!suspended);
  }
 };
 const near=new IntersectionObserver(entries=>{
  for(const entry of entries){const scene=scenes.find(s=>s.host===entry.target)!;scene.near=entry.isIntersecting&&entry.intersectionRect.width>0&&entry.intersectionRect.height>0;}
  reconcile();
 },{rootMargin:'300px 0px'});
 const visible=new IntersectionObserver(entries=>{
  for(const entry of entries){const scene=scenes.find(s=>s.host===entry.target)!;scene.visible=entry.isIntersecting&&entry.intersectionRect.width>0&&entry.intersectionRect.height>0;}
  reconcile();
 });
 scenes.forEach(scene=>{near.observe(scene.host);visible.observe(scene.host);});
 const hide=(event:PageTransitionEvent)=>{suspended=true;scenes.forEach(scene=>scene.field?.setRunning(false));if(!event.persisted)dispose();};
 const show=(event:PageTransitionEvent)=>{if(event.persisted){suspended=false;reconcile();}};
 const dispose=()=>{
  if(disposed)return;disposed=true;near.disconnect();visible.disconnect();scenes.forEach(retire);
  document.removeEventListener('visibilitychange',reconcile);reduced.removeEventListener('change',reconcile);window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);
 };
 document.addEventListener('visibilitychange',reconcile);reduced.addEventListener('change',reconcile);
 window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);reconcile();
 return dispose;
}
