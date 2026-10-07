import { riverFrame } from './river-shape';
import { riverStoryState } from './river-story-state';

/** Camera-only work runs when scroll/size changes, rather than for every vertex. */
export function fieldCamera(progress:number,width:number,height:number) {
 const state=riverStoryState(progress);
 const junction=.79+(riverFrame(width,height).junction-.79)*state.morph;
 const angle=-state.turn*Math.PI/2,zoom=1+.16*state.follow;
 return {
  morph:state.morph,follow:state.follow,junction,stretch:1.65,
  rotationX:Math.cos(angle)*zoom,rotationY:Math.sin(angle)*zoom,
  focusX:.5+.38*state.follow,
  focusY:junction+((width<769?.78:.70)-junction)*state.turn,
 };
}
