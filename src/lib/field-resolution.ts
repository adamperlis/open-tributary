/** Native display pixels up to 2×, constrained only by the GPU viewport limit. */
export function fieldResolution(width:number,height:number,dpr:number,limits:ArrayLike<number>) {
 const w=Math.max(1,width),h=Math.max(1,height);
 const scale=Math.min(Math.max(1,Math.min(dpr||1,2)),limits[0]/w,limits[1]/h);
 return {width:Math.max(1,Math.round(w*scale)),height:Math.max(1,Math.round(h*scale)),scale};
}
