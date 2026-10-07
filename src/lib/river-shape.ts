/** Shared centerlines for the GPU river, static artwork and relationship arrows. */
export type Point = readonly [number, number];
export type Curve = readonly [Point, Point, Point, Point];
export interface RiverFrame { spread: number; source: number; junction: number; }
export const ease = (a: number, b: number, value: number) => {
 const t = Math.max(0, Math.min(1, (value - a) / (b - a)));
 return t * t * (3 - 2 * t);
};
export function riverFrame(width: number, height: number): RiverFrame {
 return { spread: Math.min(width * .26, 260) / width, source: .38, junction: height < 650 ? .60 : .62 };
}
export function riverCurves(branch: number, morph: number, frame: RiverFrame): readonly [Curve, Curve, Curve] {
 const side = branch - 1;
 const mix = (a: number, b: number) => a + (b - a) * morph;
 const startX = mix(.5 + side * .062, .5 + side * frame.spread);
 const source = mix(.28, frame.source), junction = mix(.79, frame.junction);
 const controlX = mix(.36, .5), controlY = mix(.59, junction - .1);
 const ratio = .30 / .35;
 const entryX = mix(startX + .16, startX), entryY = source + .09;
 return [
  [[mix(.5+side*.062,startX),-.22], [mix(.62+side*.062,startX),.05], [2*startX-entryX,2*source-entryY], [startX,source]],
  [[startX, source], [entryX, entryY],
   [controlX, controlY], [.5, junction]],
  [[.5, junction], [.5 + (.5-controlX)*ratio, junction + (junction-controlY)*ratio], [mix(.62, .53), 1.01], [.5, 1.18]]
 ];
}
export function curvePath(curve: Curve, scale = 1000): string {
 const p = curve.map(([x,y]) => `${(x*scale).toFixed(2)} ${(y*scale).toFixed(2)}`);
 return `M${p[0]}C${p[1]} ${p[2]} ${p[3]}`;
}
/** The visual river is one current; relationship branches remain separate annotations. */
export function currentCurves(morph: number, frame: RiverFrame): readonly [Curve, Curve, Curve] {
 return riverCurves(1,morph,frame);
}
export function riverPath(_branch: number, morph: number, frame: RiverFrame, lane = 0): string {
 const curves = currentCurves(morph, frame).map(curve => curve.map(([x,y]) => [x + lane*.032, y] as Point) as unknown as Curve);
 return curves.map((curve,i)=>i ? curvePath(curve).replace(/^M[^C]+/,'') : curvePath(curve)).join('');
}
export function arrowPath(branch: number, frame: RiverFrame): string {
 const curve = riverCurves(branch, 1, frame)[1];
 const point = (t:number):Point => {
  const q=1-t;
  return [q*q*q*curve[0][0]+3*q*q*t*curve[1][0]+3*q*t*t*curve[2][0]+t*t*t*curve[3][0],q*q*q*curve[0][1]+3*q*q*t*curve[1][1]+3*q*t*t*curve[2][1]+t*t*t*curve[3][1]];
 };
 const tangent = (t:number):Point => {
  const q=1-t;
  return [3*(q*q*(curve[1][0]-curve[0][0])+2*q*t*(curve[2][0]-curve[1][0])+t*t*(curve[3][0]-curve[2][0])),3*(q*q*(curve[1][1]-curve[0][1])+2*q*t*(curve[2][1]-curve[1][1])+t*t*(curve[3][1]-curve[2][1]))];
 };
 const a=.16,b=.69,d=(b-a)/3,p=point(a),q=point(b),u=tangent(a),v=tangent(b);
 return curvePath([p,[p[0]+u[0]*d,p[1]+u[1]*d],[q[0]-v[0]*d,q[1]-v[1]*d],q]);
}

/** Exact registered cubic, rotated clockwise onto the page's vertical axis.
 * Labels lie on cropped portions of the authored incoming trajectories. */
export function gatewayArrowPath(branch:number,frame:RiverFrame):string {
 const x=.5+(branch-1)*frame.spread;
 const startY=frame.junction-.5;
 const yAt=(t:number)=>startY+3*(1-t)**2*t*.25+3*(1-t)*t*t*.4+t**3*.5;
 let low=0,high=1;
 for(let i=0;i<40;i++){const t=(low+high)/2;if(yAt(t)<frame.source)low=t;else high=t;}
 const t=(low+high)/2,q=1-t,retained=q*q*q+3*q*q*t;
 const initialX=.5+(x-.5)/retained;
 const curve:Curve=[[initialX,startY],[initialX,startY+.25],[.5,frame.junction-.10],[.5,frame.junction]];
 const point=(u:number):Point=>{const v=1-u;return [v*v*v*curve[0][0]+3*v*v*u*curve[1][0]+3*v*u*u*curve[2][0]+u*u*u*curve[3][0],v*v*v*curve[0][1]+3*v*v*u*curve[1][1]+3*v*u*u*curve[2][1]+u*u*u*curve[3][1]];};
 const tangent=(u:number):Point=>{const v=1-u;return [3*(v*v*(curve[1][0]-curve[0][0])+2*v*u*(curve[2][0]-curve[1][0])+u*u*(curve[3][0]-curve[2][0])),3*(v*v*(curve[1][1]-curve[0][1])+2*v*u*(curve[2][1]-curve[1][1])+u*u*(curve[3][1]-curve[2][1]))];};
 const a=t+.07,b=.86,d=(b-a)/3,p=point(a),end=point(b),u=tangent(a),v=tangent(b);
 return curvePath([p,[p[0]+u[0]*d,p[1]+u[1]*d],[end[0]-v[0]*d,end[1]-v[1]*d],end]);
}

/** Rotated canonical source paths for reduced-motion and script-free scenes. */
export function gatewayRiverPath(index:number,frame:RiverFrame):string {
 const x=1-(index/80*1.4-.2),top=index%2===0,sign=top?-1:1;
 return curvePath([[x,frame.junction+sign*.5],[x,frame.junction+sign*.25],[.5,frame.junction+sign*.1],[.5,frame.junction]]);
}
