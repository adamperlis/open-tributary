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
