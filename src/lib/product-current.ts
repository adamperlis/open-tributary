import { ease } from './river-shape';
import type { fieldCamera } from './field-camera';
type Camera = ReturnType<typeof fieldCamera>;

/** A native annotation on an actual incoming Gateway lane, using the GPU camera. */
export function productPosition(index:number,t:number,camera:Camera,width:number,height:number) {
 const lanes=width<769?96:160,spread=width<769?.60:.66;
 const desired=.5+(index/6*2-1)*spread;
 const lane=1.2-Math.round((1.2-desired)/1.4*lanes/2)*2/lanes*1.4;
 const q=1-t,j=camera.junction;
 const x=q*q*q*lane+3*q*q*t*lane+3*q*t*t*.5+t*t*t*.5;
 const y=q*q*q*(j-.5)+3*q*q*t*(j-.25)+3*q*t*t*(j-.1)+t*t*t*j;
 const dx=(x-.5)*width,dy=(y-j)*camera.stretch*height;
 return {
  x:camera.focusX*width+camera.rotationX*dx-camera.rotationY*dy,
  y:camera.focusY*height+camera.rotationY*dx+camera.rotationX*dy,
 };
}

/** Same integrated, reversible phase as the particles; wrap only while invisible. */
export function productCurrent(index:number,phase:number,camera:Camera,width:number,height:number) {
 const clock=.43+index*.137+phase*(.045+(index+1)/8*.035);
 const t=clock-Math.floor(clock);
 const point=productPosition(index,t,camera,width,height);
 return {...point,t,
  opacity:ease(.27,.34,point.y/height)*(1-ease(.69,.84,t)),
  scale:1-.48*ease(.38,.84,t),
 };
}
