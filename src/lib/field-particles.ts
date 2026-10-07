/** One point batch retains both authored materials and every original seed. */
export function fieldParticles(streamCount:number,dustCount:number,random:()=>number) {
 const data=new Float32Array((streamCount+dustCount)*5);
 let offset=0;
 for(const [count,kind] of [[streamCount,1],[dustCount,2]])for(let i=0;i<count;i++){
  data[offset++]=1-(random()*1.4-.2);
  data[offset++]=i%2;
  data[offset++]=random();
  data[offset++]=random();
  data[offset++]=kind;
 }
 return data;
}
