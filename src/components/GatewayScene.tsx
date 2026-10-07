import { useEffect, useRef, useState } from 'react';
import { mountTributaryField, type TributaryField } from '../lib/tributary-field';

function StillField() {
 return <svg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
  <g fill="none" stroke="#73778f" strokeWidth=".8" opacity=".4">
   {Array.from({length:180},(_,i)=>{const left=i%2===0,y=i/180*980-140;return <path key={i} d={`M${left?0:1000} ${y}C${left?250:750} ${y} ${left?400:600} 350 500 350`}/>;})}
  </g>
 </svg>;
}

export default function GatewayScene(){
 const host=useRef<HTMLDivElement>(null),canvas=useRef<HTMLCanvasElement>(null),field=useRef<TributaryField|null>(null);
 const [ready,setReady]=useState(false),[reduced,setReduced]=useState(false),[paused,setPaused]=useState(false),[available,setAvailable]=useState(false);
 const pausedRef=useRef(false);
 useEffect(()=>{
  const node=host.current,element=canvas.current;if(!node||!element)return;
  const story=node.closest<HTMLElement>('.river-story'),chrome=document.querySelector('.site-chrome');
  const preference=matchMedia('(prefers-reduced-motion:reduce)');
  let inView=true,failed=false,scrollFrame=0;
  const sync=()=>field.current?.setRunning(inView&&!document.hidden&&!preference.matches&&!pausedRef.current);
  const create=()=>{if(!field.current&&!failed&&!preference.matches){field.current=mountTributaryField(element,node);failed=!field.current;setAvailable(!!field.current);}sync();};
  const updatePreference=()=>{setReduced(preference.matches);create();sync();};
  const scroll=()=>{
   if(scrollFrame)return;
   scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;if(!story)return;const rect=story.getBoundingClientRect();const header=chrome?.getBoundingClientRect().height??120;const stage=node.clientHeight;field.current?.setStory((header-rect.top)/stage);});
  };
  const resize=()=>{const height=`${chrome?.getBoundingClientRect().height??120}px`;story?.style.setProperty('--chrome-height',height);document.documentElement.style.setProperty('--chrome-height',height);scroll();};
  const sizing=new ResizeObserver(resize);if(chrome)sizing.observe(chrome);
  const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;sync();});if(story)visibility.observe(story);
  const pageVisibility=()=>sync();
  const lost=(event:Event)=>{event.preventDefault();failed=true;field.current?.dispose();field.current=null;node.dataset.renderer='fallback';setAvailable(false);};
  const mode=()=>field.current?.setDirection(document.querySelector('.connected-diagram')?.getAttribute('data-mode')==='code');
  const diagram=document.querySelector('.connected-diagram');const modes=new MutationObserver(mode);if(diagram)modes.observe(diagram,{attributes:true,attributeFilter:['data-mode']});
  element.addEventListener('webglcontextlost',lost);
  preference.addEventListener('change',updatePreference);document.addEventListener('visibilitychange',pageVisibility);window.addEventListener('scroll',scroll,{passive:true});
  resize();updatePreference();mode();setReady(true);
  return()=>{field.current?.dispose();field.current=null;sizing.disconnect();visibility.disconnect();modes.disconnect();cancelAnimationFrame(scrollFrame);element.removeEventListener('webglcontextlost',lost);preference.removeEventListener('change',updatePreference);document.removeEventListener('visibilitychange',pageVisibility);window.removeEventListener('scroll',scroll);};
 },[]);
 useEffect(()=>{pausedRef.current=paused;field.current?.setRunning(!paused&&!reduced&&!document.hidden&&!!host.current&&host.current.getBoundingClientRect().bottom>0&&host.current.getBoundingClientRect().top<innerHeight);},[paused,reduced]);
 return <div ref={host} className="gateway-host" data-renderer="fallback" data-reduced={reduced} data-available={available}>
  <div className="gateway-current">
   <div className="gateway-still"><StillField/></div>
   <canvas ref={canvas} className="tributary-canvas" aria-hidden="true"/>
  </div>
  <button className="motion-toggle" type="button" disabled={!ready||reduced||!available} aria-pressed={paused||reduced} onClick={()=>setPaused(v=>!v)}>
   <span aria-hidden="true">{paused||reduced?'▷':'Ⅱ'}</span>{reduced?'Motion reduced':!available?'Static flow':paused?'Resume flow':'Pause flow'}
  </button>
  <span className="gateway-caption">MANY CONTRIBUTIONS. ONE CURRENT.</span>
 </div>;
}
