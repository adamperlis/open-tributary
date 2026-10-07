import { arrowPath, ease, riverCurves, riverFrame, riverPath } from './river-shape';
import type { TributaryField } from './tributary-field';

/** Scroll supplies a camera position; it never starts an independent scene animation. */
export function mountRiverStory(host: HTMLElement, getField: () => TributaryField | null) {
 const story = host.closest<HTMLElement>('.river-story');
 const stage = story?.querySelector<HTMLElement>('.river-stage');
 if (!story || !stage) return null;
 const hero = story.querySelector<HTMLElement>('.home-hero')!;
 const mechanism = story.querySelector<HTMLElement>('.mechanism-section')!;
 const copy = mechanism.querySelector<HTMLElement>('.mechanism-copy')!;
 const products = [...mechanism.querySelectorAll<HTMLElement>('.diagram-node:not(.project-node)')];
 const project = mechanism.querySelector<HTMLElement>('.project-node')!;
 const controls = mechanism.querySelector<HTMLElement>('.diagram-bottom')!;
 const afterword = mechanism.querySelector<HTMLElement>('.mechanism-afterword')!;
 const arrows = mechanism.querySelector<SVGGElement>('.direction-lines')!;
 const cue = hero.querySelector<HTMLElement>('.river-scroll-cue');
 const chrome = document.querySelector<HTMLElement>('.site-chrome');
 let enabled = false, disposed = false, frame = 0, last = 0, position = 0, target = 0;
 stage.tabIndex=-1;
 let pendingFocus: HTMLElement | null=null;
 let layout = riverFrame(stage.clientWidth, host.clientHeight);
 const opacity = (element: HTMLElement | SVGElement, value: number) => { element.style.opacity = value.toFixed(4); };
 const activate = (element: HTMLElement, active: boolean) => {
  if (element.inert === !active) return;
  // Never drop keyboard focus when its visible scene leaves the stage.
  if (!active && element.contains(document.activeElement)) {
   pendingFocus=element===hero?mechanism:hero;
   stage!.focus({preventScroll:true});
  }
  element.inert = !active;
 };
 function paint(value: number) {
  const morph = ease(.16,.64,value);
  getField()?.setStory(value);
  const leaving = ease(.08,.34,value), arriving = ease(.32,.54,value);
  opacity(hero,1-leaving);hero.style.transform=`translateY(${-leaving*56}px)`;
  opacity(mechanism,arriving);
  copy.style.transform=`translateY(${(1-arriving)*32}px)`;
  activate(hero,leaving<.97);activate(mechanism,arriving>.9);
  if(pendingFocus&&!pendingFocus.inert){if(document.activeElement===stage)pendingFocus.querySelector<HTMLElement>('h1,h2')?.focus({preventScroll:true});pendingFocus=null;}
  const labels = ease(.46,.64,value);
  products.forEach((product,branch) => {
   const [start] = riverCurves(branch,morph,layout)[1];
   product.style.left=`${start[0]*100}%`;product.style.top=`${start[1]*100}%`;
   opacity(product,labels);
  });
  const junction = .79 + (layout.junction-.79)*morph;
  project.style.top=`${junction*100}%`;opacity(project,ease(.42,.59,value));
  const details = ease(.61,.73,value);
  opacity(controls,details);opacity(afterword,details);opacity(arrows,ease(.58,.70,value)*.7);
  controls.inert=details<.95;afterword.inert=details<.95;
  if(cue)opacity(cue,1-ease(.02,.14,value));
  story!.dataset.storyProgress=value.toFixed(4);
  story!.dataset.riverMorph=morph.toFixed(4);
 }
 function measureTarget() {
  if(!enabled)return;
  const header=chrome?.getBoundingClientRect().height??120;
  const distance=Math.max(1,story!.offsetHeight-stage!.offsetHeight);
  target=Math.max(0,Math.min(1,(header-story!.getBoundingClientRect().top)/distance));
 }
 function tick(now:number) {
  frame=0;if(disposed||!enabled)return;
  const dt=last?Math.min(64,now-last):16.67;last=now;
  position+=(target-position)*(1-Math.exp(-dt/80));
  if(Math.abs(target-position)<.0005)position=target;
  paint(position);
  if(position!==target)frame=requestAnimationFrame(tick);else last=0;
 }
 const scroll=()=>{measureTarget();if(enabled&&!frame)frame=requestAnimationFrame(tick);};
 const resize=()=>{
  const height=host.clientHeight,width=stage!.clientWidth;
  if(!width||!height)return;
  layout=riverFrame(width,height);
  story!.style.setProperty('--source-spread',`${layout.spread*100}%`);
  story!.style.setProperty('--source-y',`${layout.source*100}%`);
  story!.style.setProperty('--project-y',`${layout.junction*100}%`);
  mechanism.querySelectorAll<SVGPathElement>('[data-river-arrow]').forEach((path,i)=>path.setAttribute('d',arrowPath(i,layout)));
  mechanism.querySelectorAll<SVGPathElement>('[data-static-branch]').forEach(path=>path.setAttribute('d',riverPath(Number(path.dataset.staticBranch),1,layout,Number(path.dataset.staticLane))));
  measureTarget();if(enabled)paint(position);
 };
 const sizing=new ResizeObserver(resize);sizing.observe(host);
 window.addEventListener('scroll',scroll,{passive:true});
 hero.querySelector('h1')?.setAttribute('tabindex','-1');copy.querySelector('h2')?.setAttribute('tabindex','-1');
 resize();
 return {
  setEnabled(value:boolean){
   enabled=value;story.dataset.storyReady=String(value);cancelAnimationFrame(frame);frame=0;last=0;
   if(value){resize();measureTarget();position=target;paint(position);}
   else{
    [hero,mechanism,controls,afterword,copy,project,...products].forEach(element=>{element.style.removeProperty('opacity');element.style.removeProperty('transform');element.inert=false;});
    opacity(arrows,.7);if(cue)cue.style.removeProperty('opacity');
    products.forEach(element=>{element.style.removeProperty('top');element.style.removeProperty('left');});
    project.style.removeProperty('top');getField()?.setStory(0);
   }
  },
  dispose(){disposed=true;cancelAnimationFrame(frame);sizing.disconnect();window.removeEventListener('scroll',scroll);}
 };
}
