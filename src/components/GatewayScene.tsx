import { useEffect, useRef } from 'react';
import { mountRiverStory } from '../lib/river-story';
import { mountTributaryField } from '../lib/tributary-field';
import { gatewayRiverPath } from '../lib/river-shape';

/** Script-free and reduced-motion companion using the same source control points. */
function StillField() {
 return <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
  <g fill="none" stroke="#8ba4d3" strokeWidth=".7" strokeDasharray="1 4" opacity=".25">
   {Array.from({length:80},(_,i)=><path key={i} d={gatewayRiverPath(i,{spread:.26,source:.42,junction:.79})} vectorEffect="non-scaling-stroke"/>)}
  </g>
 </svg>;
}
export default function GatewayScene(){
 const host=useRef<HTMLDivElement>(null),canvas=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const node=host.current,surface=canvas.current;if(!node||!surface)return;
  const story=node.closest<HTMLElement>('.river-story'),figure=story?.querySelector<HTMLElement>('.river-figure'),chrome=document.querySelector('.site-chrome');
  const preference=matchMedia('(prefers-reduced-motion:reduce)');
  const field=mountTributaryField(surface,node);
  const choreography=mountRiverStory(node,()=>field);
  let inView=true;
  const updateRunning=()=>{
   node.dataset.reduced=String(preference.matches);
   node.dataset.available=String(Boolean(field)&&!preference.matches&&!node.dataset.fieldError);
   field?.setRunning(inView&&!document.hidden&&!preference.matches);
  };
  const updatePreference=()=>{choreography?.setEnabled(Boolean(field)&&!preference.matches&&!node.dataset.fieldError);updateRunning();};
  const resize=()=>{
   const height=`${chrome?.getBoundingClientRect().height??120}px`;
   story?.style.setProperty('--chrome-height',height);document.documentElement.style.setProperty('--chrome-height',height);
  };
  const changeDirection=()=>field?.setDirection(figure?.dataset.mode==='code');
  const sizing=new ResizeObserver(resize);if(chrome)sizing.observe(chrome);
  const visibility=new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;updateRunning();});if(story)visibility.observe(story);
  document.addEventListener('visibilitychange',updateRunning);preference.addEventListener('change',updatePreference);
  figure?.addEventListener('tributary:direction',changeDirection);surface.addEventListener('webglcontextlost',updatePreference);
  resize();updatePreference();changeDirection();
  return()=>{choreography?.dispose();field?.dispose();sizing.disconnect();visibility.disconnect();document.removeEventListener('visibilitychange',updateRunning);preference.removeEventListener('change',updatePreference);figure?.removeEventListener('tributary:direction',changeDirection);surface.removeEventListener('webglcontextlost',updatePreference);};
 },[]);
 return <div ref={host} className="gateway-host" data-renderer="webgl" data-available="false" aria-hidden="true">
  <div className="gateway-current"><div className="gateway-still"><StillField/></div><canvas ref={canvas} className="tributary-canvas"/></div>
 </div>;
}
