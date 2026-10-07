import { useEffect, useRef, useState } from 'react';
import { Scene } from './RegisteredGatewayScene';
import { mountRiverStory } from '../lib/river-story';
import { ease } from '../lib/river-shape';

/** Static companion derived from the registered Gateway Flow control points. */
function StillField() {
 return <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
  <g fill="none" stroke="white" strokeWidth="1.2" strokeDasharray="1 4" opacity=".35">
   {Array.from({length:80},(_,i)=>{const y=i/80*1400-200,left=i%2===0;return <path key={i} d={`M${left?0:1000} ${y}C${left?250:750} ${y} ${left?400:600} 500 500 500`} vectorEffect="non-scaling-stroke"/>;})}
  </g>
 </svg>;
}
export default function GatewayScene(){
 const host=useRef<HTMLDivElement>(null);
 const [ready,setReady]=useState(false),[reduced,setReduced]=useState(false),[paused,setPaused]=useState(false),[inView,setInView]=useState(true),[visible,setVisible]=useState(true);
 useEffect(()=>{
  const node=host.current;if(!node)return;
  const story=node.closest<HTMLElement>('.river-story'),chrome=document.querySelector('.site-chrome');
  const preference=matchMedia('(prefers-reduced-motion:reduce)');
  const choreography=mountRiverStory(node,()=>({setStory(progress:number){
   const morph=ease(.16,.64,progress);
   const junction=.79+((node.clientHeight<650?.60:.62)-.79)*morph;
   node.style.setProperty('--gateway-fade-start',`${34-10*morph}%`);
   node.style.setProperty('--gateway-fade-end',`${52-14*morph}%`);
   node.style.setProperty('--gateway-junction',`${junction*100}%`);
   node.dataset.gatewayJunction=junction.toFixed(4);
  }}));
  const updatePreference=()=>{setReduced(preference.matches);choreography?.setEnabled(!preference.matches);};
  const resize=()=>{
   const height=`${chrome?.getBoundingClientRect().height??120}px`;
   story?.style.setProperty('--chrome-height',height);document.documentElement.style.setProperty('--chrome-height',height);
   node.style.setProperty('--gateway-breadth',`${node.clientWidth}px`);
  };
  const sizing=new ResizeObserver(resize);sizing.observe(node);if(chrome)sizing.observe(chrome);
  const visibility=new IntersectionObserver(([entry])=>setInView(entry.isIntersecting));if(story)visibility.observe(story);
  const documentVisibility=()=>setVisible(!document.hidden);
  document.addEventListener('visibilitychange',documentVisibility);preference.addEventListener('change',updatePreference);
  resize();updatePreference();documentVisibility();setReady(true);
  return()=>{choreography?.dispose();sizing.disconnect();visibility.disconnect();document.removeEventListener('visibilitychange',documentVisibility);preference.removeEventListener('change',updatePreference);};
 },[]);
 const running=ready&&!reduced&&!paused&&inView&&visible;
 const label=reduced?'Motion reduced':paused?'Resume flow':'Pause flow';
 return <div ref={host} className="gateway-host" data-renderer="registered-threeui" data-reduced={reduced} data-available={running} data-field-running={running}>
  <div className="registered-artwork"><div className="gateway-current registered-current">
   <div className="gateway-still"><StillField/></div>
   {running&&<Scene/>}
  </div></div>
  <button className="motion-toggle" type="button" aria-label={label} title={label} disabled={!ready||reduced} aria-pressed={paused||reduced} onClick={()=>setPaused(v=>!v)}>
   <span aria-hidden="true">{paused||reduced?'▷':'Ⅱ'}</span><span className="motion-label">{label}</span>
  </button>
  <span className="gateway-caption">MANY CONTRIBUTIONS. ONE CURRENT.</span>
 </div>;
}
