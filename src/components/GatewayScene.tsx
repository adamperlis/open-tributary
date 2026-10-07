import { useEffect, useRef, useState } from 'react';
import { mountTributaryField, type TributaryField } from '../lib/tributary-field';
import { mountRiverStory } from '../lib/river-story';
import { riverPath } from '../lib/river-shape';

function StillField() {
 const frame={spread:.26,source:.38,junction:.62};
 return <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
  <g fill="none" stroke="#737d9c" strokeWidth=".65" opacity=".22">
   {Array.from({length:90},(_,i)=><path key={i} d={riverPath(i%3,0,frame,i/90*2-1)}/>)}
  </g>
 </svg>;
}
export default function GatewayScene(){
 const host=useRef<HTMLDivElement>(null),canvas=useRef<HTMLCanvasElement>(null),field=useRef<TributaryField|null>(null);
 const [ready,setReady]=useState(false),[reduced,setReduced]=useState(false),[paused,setPaused]=useState(false),[available,setAvailable]=useState(false);
 const pausedRef=useRef(false),syncRef=useRef<()=>void>(()=>{});
 useEffect(()=>{
  const node=host.current,element=canvas.current;if(!node||!element)return;
  const story=node.closest<HTMLElement>('.river-story'),chrome=document.querySelector('.site-chrome');
  const preference=matchMedia('(prefers-reduced-motion:reduce)');
  let inView=true,failed=false;
  const choreography=mountRiverStory(node,()=>field.current);
  const sync=()=>field.current?.setRunning(inView&&!document.hidden&&!preference.matches&&!pausedRef.current);
  syncRef.current=sync;
  const mode=()=>field.current?.setDirection(document.querySelector('.connected-diagram')?.getAttribute('data-mode')==='code');
  const updatePreference=()=>{
   setReduced(preference.matches);
   if(!field.current&&!failed&&!preference.matches){field.current=mountTributaryField(element,node);failed=!field.current;setAvailable(!!field.current);mode();}
   choreography?.setEnabled(!!field.current&&!preference.matches);sync();
  };
  const resize=()=>{const height=`${chrome?.getBoundingClientRect().height??120}px`;story?.style.setProperty('--chrome-height',height);document.documentElement.style.setProperty('--chrome-height',height);};
  const sizing=new ResizeObserver(resize);if(chrome)sizing.observe(chrome);
  const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;sync();});if(story)visibility.observe(story);
  const lost=(event:Event)=>{event.preventDefault();failed=true;field.current?.dispose();field.current=null;node.dataset.renderer='fallback';setAvailable(false);choreography?.setEnabled(false);};
  const diagram=document.querySelector('.connected-diagram'),modes=new MutationObserver(mode);if(diagram)modes.observe(diagram,{attributes:true,attributeFilter:['data-mode']});
  element.addEventListener('webglcontextlost',lost);preference.addEventListener('change',updatePreference);document.addEventListener('visibilitychange',sync);
  resize();updatePreference();setReady(true);
  return()=>{choreography?.dispose();field.current?.dispose();field.current=null;syncRef.current=()=>{};sizing.disconnect();visibility.disconnect();modes.disconnect();element.removeEventListener('webglcontextlost',lost);preference.removeEventListener('change',updatePreference);document.removeEventListener('visibilitychange',sync);};
 },[]);
 useEffect(()=>{pausedRef.current=paused;syncRef.current();},[paused]);
 const label=reduced?'Motion reduced':!available?'Static flow':paused?'Resume flow':'Pause flow';
 return <div ref={host} className="gateway-host" data-renderer="fallback" data-reduced={reduced} data-available={available}>
  <div className="gateway-current"><div className="gateway-still"><StillField/></div><canvas ref={canvas} className="tributary-canvas" aria-hidden="true"/></div>
  <button className="motion-toggle" type="button" aria-label={label} title={label} disabled={!ready||reduced||!available} aria-pressed={paused||reduced} onClick={()=>setPaused(v=>!v)}>
   <span aria-hidden="true">{paused||reduced?'▷':'Ⅱ'}</span><span className="motion-label">{label}</span>
  </button>
  <span className="gateway-caption">MANY CONTRIBUTIONS. ONE CURRENT.</span>
 </div>;
}
