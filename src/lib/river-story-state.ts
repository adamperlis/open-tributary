import { ease } from './river-shape';

/** Three chapters share a camera and particle phase. Opening timing stays intact. */
export function riverStoryState(progress: number) {
 const p=Math.max(0,Math.min(1,progress)),opening=Math.min(1,p*2);
 return {
  opening,
  morph:ease(.16,.64,opening),
  departure:ease(.53,.63,p),
  turn:ease(.54,.80,p),
  follow:ease(.62,.90,p),
  thesis:ease(.69,.83,p),
 };
}
