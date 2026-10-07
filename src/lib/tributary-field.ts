/** Tributary material on the registered Gateway cubic, rotated onto a vertical axis.
 * The three canonical source files are retained byte-for-byte separately. */
import { ease, riverFrame } from './river-shape';
import { FLOW_INK } from './flow-palette';
const shaderColor = (ink: readonly number[]) => ink.map(channel => channel.toFixed(4)).join(',');
const vertex = `
precision highp float;
attribute vec4 a_seed;
uniform float u_time, u_story, u_pixel;
uniform vec2 u_size;
uniform vec3 u_frame;
uniform mediump float u_kind;
varying mediump vec4 v_ink;
vec2 cubic(vec2 a, vec2 b, vec2 c, vec2 d, float t){
 float q=1.0-t;return q*q*q*a+3.0*q*q*t*b+3.0*q*t*t*c+t*t*t*d;
}
void main(){
 float lane=a_seed.x, seed=a_seed.w;
 float t=a_seed.z;
 if(u_kind>.5)t=fract(t+u_time*(.045+seed*.035));
 float m=u_story;
 float junction=mix(.79,u_frame.z,m);
 float sign=a_seed.y<.5?-1.0:1.0;
 // Exact Gateway control points after a clockwise quarter turn.
 // The junction moves with the same camera as the native project label.
 vec2 p=cubic(vec2(lane,junction+sign*.5),vec2(lane,junction+sign*.25),
  vec2(.5,junction+sign*.10),vec2(.5,junction),t);
 // Subpixel weave gives the lines a material quality without changing the silhouette.
 float envelope=sin(t*3.14159265);
 p.x+=envelope*sin(u_time*.14+t*8.0+seed*9.0)*.55/u_size.x;
 if(u_kind>.5){
  float dust=u_kind>1.5?3.0:.65;
  p+=vec2(sin(seed*93.1+t*9.0),cos(seed*71.7+t*7.0))*dust/u_size;
 }
 float fade=smoothstep(-.05,.05,p.y)*(1.0-smoothstep(.98,1.10,p.y));
 // Leave a quiet zone behind the headline; expose the field in the diagram.
 float diagramFade=smoothstep(.18,.32,p.y);
 fade*=mix(smoothstep(.52,.69,p.y),diagramFade,m);
 // Avoid a hot knot underneath the project wordmark.
 fade*=mix(.35,1.0,smoothstep(.005,.055,abs(p.y-junction)));
 // Travelling dashes move along the strands with the particle current.
 float broken=.28+.72*smoothstep(-.5,.35,sin(t*151.0+seed*83.0-u_time*9.0));
 float glint=pow(max(0.0,sin(seed*173.0+u_time*.18)),28.0);
 float highlight=max(glint,step(.82,seed));
 vec3 dim=vec3(${shaderColor(FLOW_INK.filament)}),silver=vec3(${shaderColor(FLOW_INK.highlight)});
 float alpha=(.16+seed*.14)*broken*fade;
 if(u_kind>.5){alpha=(u_kind>1.5?.13:.72)*fade;dim=mix(vec3(${shaderColor(FLOW_INK.particle)}),silver,highlight);}
 v_ink=vec4(dim,alpha);
 gl_Position=vec4(p.x*2.0-1.0,1.0-p.y*2.0,0.0,1.0);
 gl_PointSize=(u_kind>1.5?1.0:1.3+highlight*.65)*u_pixel;
}`;
const fragment = `
precision mediump float;
uniform mediump float u_kind;
varying mediump vec4 v_ink;
void main(){
 float alpha=v_ink.a;
 if(u_kind>.5){float r=length(gl_PointCoord-vec2(.5));alpha*=1.0-smoothstep(.18,.5,r);}
 gl_FragColor=vec4(v_ink.rgb,alpha);
}`;

export interface TributaryField {
 setRunning(running: boolean): void;
 setStory(progress: number): void;
 setDirection(outward: boolean): void;
 dispose(): void;
}

export function mountTributaryField(canvas: HTMLCanvasElement, host: HTMLElement): TributaryField | null {
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,stencil:false,powerPreference:'low-power',preserveDrawingBuffer:false});
 if(!gl){host.dataset.fieldError='WebGL context unavailable';return null;}
 const shaders: WebGLShader[]=[];
 const buffers: WebGLBuffer[]=[];
 let program: WebGLProgram | null=null;
 const cleanup=()=>{buffers.forEach(b=>gl.deleteBuffer(b));shaders.forEach(s=>gl.deleteShader(s));if(program)gl.deleteProgram(program);};
 try {
  const compile=(type:number,source:string)=>{const shader=gl.createShader(type);if(!shader)throw Error('Shader unavailable');shaders.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader)||'Shader compilation failed');return shader;};
  program=gl.createProgram();if(!program)throw Error('Program unavailable');
  gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program)||'Program linking failed');
  gl.useProgram(program);
  const attribute=gl.getAttribLocation(program,'a_seed');
  const uniform=(name:string)=>gl.getUniformLocation(program!,name);
  const time=uniform('u_time'),story=uniform('u_story'),kind=uniform('u_kind'),pixel=uniform('u_pixel'),size=uniform('u_size'),frame=uniform('u_frame');
  let randomState=731;
  const random=()=>{randomState=(Math.imul(randomState,1664525)+1013904223)>>>0;return randomState/4294967296;};
  const mobile=matchMedia('(max-width:768px)').matches;
  const lanes=mobile?96:160,steps=160,streamCount=mobile?3500:6500,dustCount=mobile?6500:14000;
  const curves=new Float32Array(lanes*steps*2*4);
  let offset=0;
  for(let l=0;l<lanes;l++){
   const y=1-(l/lanes*1.4-.2),side=l%2,seed=random();
   for(let s=0;s<steps;s++)for(let end=0;end<2;end++){
    curves[offset++]=y;curves[offset++]=side;curves[offset++]=(s+end)/steps;curves[offset++]=seed;
   }
  }
  const particles=(count:number)=>{const data=new Float32Array(count*4);for(let i=0;i<count;i++){data[i*4]=1-(random()*1.4-.2);data[i*4+1]=i%2;data[i*4+2]=random();data[i*4+3]=random();}return data;};
  const upload=(data:Float32Array)=>{const buffer=gl.createBuffer();if(!buffer)throw Error('Buffer unavailable');buffers.push(buffer);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);return {buffer,count:data.length/4};};
  const batches=[upload(curves),upload(particles(streamCount)),upload(particles(dustCount))];
  gl.enableVertexAttribArray(attribute);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE);gl.disable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  let disposed=false,running=false,raf=0,last=0,elapsed=0,progress=0,outward=false,velocity=1,contextLost=false,quality=1,slowFrames=0,frames=0,frameTotal=0;
  let dirty=true;
  const resize=()=>{
   const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);
   const ratio=Math.min(devicePixelRatio||1,1.5)*quality;
   const budget=mobile?420000:900000;
   const scale=Math.min(ratio,Math.sqrt(budget/(w*h)));
   const width=Math.round(w*scale),height=Math.round(h*scale);
   if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
   gl.viewport(0,0,width,height);gl.uniform1f(pixel,scale);gl.uniform2f(size,w,h);
   const layout=riverFrame(w,h);gl.uniform3f(frame,layout.spread,layout.source,layout.junction);dirty=true;
   host.dataset.fieldQuality=quality===1?'standard':'economy';
  };
  const render=()=>{
   gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(time,elapsed);gl.uniform1f(story,progress);
   batches.forEach((batch,i)=>{gl.bindBuffer(gl.ARRAY_BUFFER,batch.buffer);gl.vertexAttribPointer(attribute,4,gl.FLOAT,false,0,0);gl.uniform1f(kind,i);gl.drawArrays(i===0?gl.LINES:gl.POINTS,0,Math.floor(batch.count*(i===0?1:quality)));});dirty=false;
  };
  const tick=(now:number)=>{
   if(!running||disposed||contextLost)return;
   const dt=last?now-last:16.67;last=now;
   velocity+=((outward?-1:1)-velocity)*(1-Math.exp(-Math.min(dt,50)/45));
   elapsed+=Math.min(dt,50)/1000*velocity;
   // Adapt once after sustained missed frames; no GPU readback in the loop.
   if(dt>27&&dt<100)slowFrames++;else slowFrames=Math.max(0,slowFrames-1);
   if(slowFrames>80&&quality===1){quality=.65;resize();}
   frames++;frameTotal+=dt;
   if(frames===120){host.dataset.frameMs=(frameTotal/frames).toFixed(1);frames=0;frameTotal=0;}
   host.dataset.flowPhase=elapsed.toFixed(4);host.dataset.flowVelocity=velocity.toFixed(3);
   render();raf=requestAnimationFrame(tick);
  };
  const loseContext=(event:Event)=>{event.preventDefault();contextLost=true;running=false;cancelAnimationFrame(raf);host.dataset.available='false';host.dataset.fieldRunning='false';host.dataset.fieldError='WebGL context lost';};
  canvas.addEventListener('webglcontextlost',loseContext);
  const observer=new ResizeObserver(()=>{resize();if(!running&&!contextLost)render();});observer.observe(canvas);
  resize();render();host.dataset.renderer='webgl';host.dataset.particleCount=String(streamCount+dustCount);
  return {
   setRunning(value){if(disposed||contextLost||running===value)return;running=value;host.dataset.fieldRunning=String(value);if(value){last=0;raf=requestAnimationFrame(tick);}else{cancelAnimationFrame(raf);last=0;}},
   setStory(value){progress=ease(.16,.64,value);dirty=true;if(!running&&dirty&&!disposed&&!contextLost)render();},
   setDirection(value){outward=value;host.dataset.flowDirection=value?'outward':'return';},
   dispose(){disposed=true;running=false;cancelAnimationFrame(raf);observer.disconnect();canvas.removeEventListener('webglcontextlost',loseContext);cleanup();},
  };
 }catch(error){host.dataset.fieldError=error instanceof Error?error.message:'Renderer unavailable';cleanup();return null;}
}
