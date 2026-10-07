/** Supporting scenes share a current material, with their own trajectories. */
export const ambientCompositions = ['gateway','confluence','meander','fan','orbit','cascade','ripple'] as const;
export type AmbientComposition = typeof ambientCompositions[number];
const cubic=(a:number,b:number,c:number,d:number,t:number)=>{const q=1-t;return q*q*q*a+3*q*q*t*b+3*q*t*t*c+t*t*t*d;};
export function ambientPoint(shape:AmbientComposition,lane:number,side:number,t:number){
 const q=(lane+.2)/1.4;
 if(shape==='orbit'||shape==='ripple'){
  const angle=(t===1?0:t)*Math.PI*2,co=Math.cos(angle),si=Math.sin(angle),power=shape==='orbit'?.58:1;
  return {x:(shape==='orbit'?.72:.64)+Math.sign(co)*Math.abs(co)**power*(.10+q*.26),y:.52+Math.sign(si)*Math.abs(si)**power*(.20+q*.52)};
 }
 let x:number[],y:number[];
 if(shape==='confluence'){
  x=[side,side===0?.32:.68,side===0?.12:.88,side===0?.46:.54];
  y=[q,q,q<.5?.43:.65,q<.5?.43:.65];
 }else if(shape==='meander'){
  x=[-.12,.18,.76,1.12];y=[.12+q*.35,1.02+q*.08,-.22+q*.65,.50+q*.40];
 }else if(shape==='fan'){
  x=[.40,.70,.86,1.12];y=[.82,.82,.18+q*.90,-.18+q*1.35];
 }else if(shape==='cascade'){
  x=[.24+q*.65,.10+q*.62,.75,.75];y=[-.18,.18,.60,1.18];
 }else{
  x=[side,side===0?.25:.75,side===0?.40:.60,.5];y=[lane,lane,.5,.5];
 }
 return {x:cubic(x[0],x[1],x[2],x[3],t),y:cubic(y[0],y[1],y[2],y[3],t)};
}
/** The same positions in the existing two-pass field shader. */
export const ambientPositionShader=`
vec2 ambientPosition(float shape,float lane,float side,float t){
 float q=(lane+.2)/1.4;
 if(shape>3.5&&shape<4.5||shape>5.5){
  float angle=fract(t)*6.28318530718,power=shape<4.5?.58:1.0;
  vec2 arc=vec2(cos(angle),sin(angle));
  return vec2(shape<4.5?.72:.64,.52)+sign(arc)*pow(abs(arc),vec2(power))*vec2(.10+q*.26,.20+q*.52);
 }
 if(shape<1.5){
  float endY=q<.5?.43:.65;
  return cubic(vec2(side,q),vec2(mix(.32,.68,side),q),vec2(mix(.12,.88,side),endY),vec2(mix(.46,.54,side),endY),t);
 }
 if(shape<2.5)return cubic(vec2(-.12,.12+q*.35),vec2(.18,1.02+q*.08),vec2(.76,-.22+q*.65),vec2(1.12,.50+q*.40),t);
 if(shape<3.5)return cubic(vec2(.40,.82),vec2(.70,.82),vec2(.86,.18+q*.90),vec2(1.12,-.18+q*1.35),t);
 return cubic(vec2(.24+q*.65,-.18),vec2(.10+q*.62,.18),vec2(.75,.60),vec2(.75,1.18),t);
}`;
/** Match the existing SVG xMidYMid slice crop without scaling a canvas bitmap. */
export function ambientFrame(width:number,height:number){
 const scale=Math.max(width/1440,height/640);
 const x=1440*scale/width,y=640*scale/height;
 return [x,y,(1-x)/2,(1-y)/2] as const;
}
