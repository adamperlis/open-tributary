/** Tributary material on the registered Gateway cubic, rotated onto a vertical axis.
 * The three canonical source files are retained byte-for-byte separately. */
import { fieldCamera } from './field-camera';
import { fieldParticles } from './field-particles';
import { FLOW_INK, FLOW_PAPER_INK } from './flow-palette';
import { fieldResolution } from './field-resolution';
import { ambientCompositions, ambientFrame, ambientPositionShader, type AmbientComposition } from './ambient-shapes';
const shaderColor = (ink: readonly number[]) => ink.map(channel => channel.toFixed(4)).join(',');
const vertex = `
precision highp float;
attribute vec4 a_seed;
attribute float a_kind;
uniform float u_time, u_story, u_follow, u_pixel, u_junction, u_stretch;
uniform vec2 u_size, u_rotation, u_focus;
uniform float u_composition, u_light;
uniform vec4 u_compositionFrame;
varying mediump vec4 v_ink;
varying mediump float v_kind;
vec2 cubic(vec2 a, vec2 b, vec2 c, vec2 d, float t){
 float q=1.0-t;return q*q*q*a+3.0*q*q*t*b+3.0*q*t*t*c+t*t*t*d;
}
${ambientPositionShader}
void main(){
 float kind=a_kind;v_kind=kind;
 float lane=a_seed.x, seed=a_seed.w;
 float t=a_seed.z;
 if(kind>.5)t=-3.0+4.0*fract(t+u_time*(.045+seed*.035)/4.0);
 float m=u_story;
 float junction=u_junction;
 float sign=a_seed.y<.5?-1.0:1.0;
 // Exact Gateway control points after a clockwise quarter turn.
 // The junction moves with the same camera as the native project label.
 vec2 p=cubic(vec2(lane,junction+sign*.5),vec2(lane,junction+sign*.25),
  vec2(.5,junction+sign*.10),vec2(.5,junction),max(0.0,t));
 // Continue beyond the existing trajectory on its authored entry tangent.
 // This extension is always present in world space, initially outside the camera.
 if(t<0.0)p=vec2(lane,junction+sign*.5)+vec2(0.0,-sign*.75)*t;
 // Taller opening silhouette reaches behind the hero headline.
 p.y=junction+(p.y-junction)*u_stretch;
 // The same pixel-space camera; uniform-only math is prepared once on CPU.
 vec2 delta=(p-vec2(.5,junction))*u_size;
 p=u_focus+vec2(u_rotation.x*delta.x-u_rotation.y*delta.y,
               u_rotation.y*delta.x+u_rotation.x*delta.y)/u_size;
 if(u_composition>.5){
  t=kind>.5?fract(a_seed.z+u_time*(.04+seed*.032)):a_seed.z;
  p=ambientPosition(u_composition,lane,a_seed.y,t)*u_compositionFrame.xy+u_compositionFrame.zw;
 }
 // Subpixel weave gives the lines a material quality without changing the silhouette.
 float envelope=sin(clamp(t,0.0,1.0)*3.14159265);
 p.x+=envelope*sin(u_time*.14+t*8.0+seed*9.0)*.55/u_size.x;
 if(kind>.5){
  float dust=kind>1.5?3.0:.65;
  p+=vec2(sin(seed*93.1+t*9.0),cos(seed*71.7+t*7.0))*dust/u_size;
 }
 float fade=smoothstep(-.10,-.01,p.y)*(1.0-smoothstep(.98,1.10,p.y));
 // Leave a quiet zone behind the headline; expose the field in the diagram.
 float diagramFade=mix(.22,1.0,smoothstep(.18,.32,p.y));
 float readingFade=mix(mix(.80,1.0,smoothstep(0.0,.36,p.y)),diagramFade,m);
 fade*=mix(readingFade,smoothstep(u_size.x<769.0?.58:.38,u_size.x<769.0?.69:.52,p.y),u_follow);
 if(u_composition>.5)fade=smoothstep(-.10,0.0,p.y)*(1.0-smoothstep(1.0,1.10,p.y));
 // Avoid a hot knot underneath the project wordmark.
 if(u_composition<.5)fade*=mix(.35,1.0,smoothstep(.005,.10,abs(1.0-t)));
 // Only line vertices need travelling dashes; only points need glints.
 vec3 dim=mix(vec3(${shaderColor(FLOW_INK.filament)}),vec3(${shaderColor(FLOW_PAPER_INK.filament)}),u_light);
 vec3 silver=mix(vec3(${shaderColor(FLOW_INK.highlight)}),vec3(${shaderColor(FLOW_PAPER_INK.highlight)}),u_light);
 float outer=1.0-smoothstep(.08,.75,t),alpha,highlight=0.0;
 if(kind>.5){
  float glint=pow(max(0.0,sin(seed*173.0+u_time*.18)),28.0);
  highlight=max(glint,step(.82,seed));
  alpha=(kind>1.5?.13:.72)*fade*mix(1.0,1.20,outer);
  dim=mix(mix(vec3(${shaderColor(FLOW_INK.particle)}),vec3(${shaderColor(FLOW_PAPER_INK.particle)}),u_light),silver,highlight);
 }else{
  float broken=.28+.72*smoothstep(-.5,.35,sin(t*151.0+seed*83.0-u_time*9.0));
  alpha=(.16+seed*.14)*broken*fade*mix(1.0,1.45,outer);
 }
 v_ink=vec4(dim,alpha*mix(1.0,1.25,u_light));
 gl_Position=vec4(p.x*2.0-1.0,1.0-p.y*2.0,0.0,1.0);
 gl_PointSize=(kind>1.5?1.0:1.3+highlight*.65)*u_pixel;
}`;
const fragment = `
precision mediump float;
varying mediump float v_kind;
varying mediump vec4 v_ink;
void main(){
 float alpha=v_ink.a;
 if(v_kind>.5){float r=length(gl_PointCoord-vec2(.5));alpha*=1.0-smoothstep(.18,.5,r);}
 gl_FragColor=vec4(v_ink.rgb,alpha);
}`;

export interface TributaryField {
 setRunning(running: boolean): void;
 setStory(progress: number): void;
 setDirection(outward: boolean): void;
 setFrameObserver(observer:((phase:number)=>void)|null):void;
 getPhase():number;
 dispose(): void;
}

export function mountTributaryField(canvas: HTMLCanvasElement, host: HTMLElement, options: { orientation?: 'horizontal' | 'vertical'; surface?:'dark'|'light'; composition?:AmbientComposition; phase?:number; releaseContextOnDispose?:boolean } = {}): TributaryField | null {
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,stencil:false,powerPreference:'low-power',preserveDrawingBuffer:false});
 if(!gl){host.dataset.fieldError='WebGL context unavailable';return null;}
 const shaders: WebGLShader[]=[];
 const buffers: WebGLBuffer[]=[];
 const vertexArrays: WebGLVertexArrayObjectOES[]=[];
 const arrays=gl.getExtension('OES_vertex_array_object');
 let program: WebGLProgram | null=null;
 const cleanup=()=>{vertexArrays.forEach(v=>arrays?.deleteVertexArrayOES(v));buffers.forEach(b=>gl.deleteBuffer(b));shaders.forEach(s=>gl.deleteShader(s));if(program)gl.deleteProgram(program);};
 try {
  const compile=(type:number,source:string)=>{const shader=gl.createShader(type);if(!shader)throw Error('Shader unavailable');shaders.push(shader);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader)||'Shader compilation failed');return shader;};
  program=gl.createProgram();if(!program)throw Error('Program unavailable');
  gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program)||'Program linking failed');
  gl.useProgram(program);
  const compositionIndex=Math.max(0,ambientCompositions.indexOf(options.composition??'gateway'));
  const attribute=gl.getAttribLocation(program,'a_seed'),kindAttribute=gl.getAttribLocation(program,'a_kind');
  const uniform=(name:string)=>gl.getUniformLocation(program!,name);
  const time=uniform('u_time'),story=uniform('u_story'),follow=uniform('u_follow'),pixel=uniform('u_pixel'),size=uniform('u_size'),rotation=uniform('u_rotation'),focus=uniform('u_focus'),junction=uniform('u_junction'),stretch=uniform('u_stretch');
  gl.uniform1f(uniform('u_composition'),compositionIndex);
  gl.uniform1f(uniform('u_light'),options.surface==='light'?1:0);
  const compositionFrame=uniform('u_compositionFrame');
  let randomState=731;
  const random=()=>{randomState=(Math.imul(randomState,1664525)+1013904223)>>>0;return randomState/4294967296;};
  const mobile=matchMedia('(max-width:768px)').matches;
  const viewportLimits=gl.getParameter(gl.MAX_VIEWPORT_DIMS) as Int32Array;
  const lanes=mobile?96:160,steps=240,streamCount=mobile?3500:6500,dustCount=mobile?6500:14000;
  const curves=new Float32Array(lanes*steps*2*4);
  let offset=0;
  for(let l=0;l<lanes;l++){
   const y=1-(l/lanes*1.4-.2),side=l%2,seed=random();
   for(let s=0;s<steps;s++)for(let end=0;end<2;end++){
    // Spend most samples on the curved canonical portion; the extension is straight.
    const sample=s+end,parameter=compositionIndex?sample/steps:sample<=80?-3+sample*3/80:(sample-80)/160;
    curves[offset++]=y;curves[offset++]=side;curves[offset++]=parameter;curves[offset++]=seed;
   }
  }
  const upload=(data:Float32Array,points:boolean)=>{
   const buffer=gl.createBuffer();if(!buffer)throw Error('Buffer unavailable');
   buffers.push(buffer);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
   return {buffer,points,count:data.length/(points?5:4),vao:null as WebGLVertexArrayObjectOES|null};
  };
  const batches=[upload(curves,false),upload(fieldParticles(streamCount,dustCount,random),true)];
  const configureInput=(batch:typeof batches[number])=>{
   gl.bindBuffer(gl.ARRAY_BUFFER,batch.buffer);gl.enableVertexAttribArray(attribute);
   gl.vertexAttribPointer(attribute,4,gl.FLOAT,false,batch.points?20:16,0);
   if(batch.points){gl.enableVertexAttribArray(kindAttribute);gl.vertexAttribPointer(kindAttribute,1,gl.FLOAT,false,20,16);}
   else{gl.disableVertexAttribArray(kindAttribute);gl.vertexAttrib1f(kindAttribute,0);}
  };
  batches.forEach(batch=>{
   if(arrays){batch.vao=arrays.createVertexArrayOES();if(batch.vao)vertexArrays.push(batch.vao);arrays.bindVertexArrayOES(batch.vao);}
   configureInput(batch);
  });
  arrays?.bindVertexArrayOES(null);
  gl.enable(gl.BLEND);
  // White stages need normal transparency: additive light vanishes against white.
  if(options.surface==='light')gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
  else gl.blendFunc(gl.SRC_ALPHA,gl.ONE);gl.disable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  let disposed=false,running=false,raf=0,last=0,elapsed=options.phase??0,progress=0,outward=false,velocity=1,contextLost=false,frames=0,frameTotal=0;
  let frameObserver:((phase:number)=>void)|null=null;
  let cameraDirty=true,viewportWidth=1,viewportHeight=1,nextDiagnostics=0,submitTotal=0,submissions=0;
  const resize=()=>{
   const w=Math.max(1,canvas.clientWidth),h=Math.max(1,canvas.clientHeight);
   // Keep native display resolution and the full authored particle count.
   const {width,height,scale}=fieldResolution(w,h,devicePixelRatio,viewportLimits);
   if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
   gl.viewport(0,0,width,height);gl.uniform1f(pixel,scale);gl.uniform2f(size,w,h);
   viewportWidth=w;viewportHeight=h;cameraDirty=true;
   const crop=ambientFrame(w,h);gl.uniform4f(compositionFrame,...crop);
  };
  const render=()=>{
   const started=performance.now();
   gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(time,elapsed);
   if(cameraDirty){
    const camera=fieldCamera(progress,viewportWidth,viewportHeight);
    // Rotate in native render space so the footer remains crisp at every aspect ratio.
    if(options.orientation==='horizontal'){
     camera.rotationX=0;camera.rotationY=-1;
     camera.stretch=1.65*viewportWidth/viewportHeight;
     camera.focusX=.55;camera.focusY=.54;
    }
    gl.uniform1f(story,camera.morph);gl.uniform1f(follow,camera.follow);
    gl.uniform1f(junction,camera.junction);gl.uniform1f(stretch,camera.stretch);
    gl.uniform2f(rotation,camera.rotationX,camera.rotationY);gl.uniform2f(focus,camera.focusX,camera.focusY);
    cameraDirty=false;
   }
   for(const batch of batches){
    if(batch.vao)arrays!.bindVertexArrayOES(batch.vao);else{arrays?.bindVertexArrayOES(null);configureInput(batch);}
    gl.drawArrays(batch.points?gl.POINTS:gl.LINES,0,batch.count);
   }
   submitTotal+=performance.now()-started;
   if(++submissions===120){host.dataset.submitCpuMs=(submitTotal/submissions).toFixed(3);submitTotal=0;submissions=0;}
  };
  const tick=(now:number)=>{
   if(!running||disposed||contextLost)return;
   const dt=last?now-last:16.67;last=now;
   velocity+=((outward?-1:1)-velocity)*(1-Math.exp(-Math.min(dt,50)/45));
   elapsed+=Math.min(dt,50)/1000*velocity;
   frames++;frameTotal+=dt;
   if(frames===120){host.dataset.frameMs=(frameTotal/frames).toFixed(1);frames=0;frameTotal=0;}
   if(now>=nextDiagnostics){host.dataset.flowPhase=elapsed.toFixed(4);host.dataset.flowVelocity=velocity.toFixed(3);nextDiagnostics=now+250;}
   render();frameObserver?.(elapsed);raf=requestAnimationFrame(tick);
  };
  const loseContext=(event:Event)=>{event.preventDefault();contextLost=true;running=false;cancelAnimationFrame(raf);host.dataset.available='false';host.dataset.fieldRunning='false';host.dataset.fieldError='WebGL context lost';};
  canvas.addEventListener('webglcontextlost',loseContext);
  const observer=new ResizeObserver(()=>{if(!disposed&&!contextLost){resize();if(!running)render();}});observer.observe(canvas);
  resize();render();host.dataset.renderer='webgl';host.dataset.particleCount=String(streamCount+dustCount);host.dataset.fieldQuality='full';host.dataset.drawCalls='2';host.dataset.vertexInputs=vertexArrays.length===batches.length?'cached':'fallback';
  return {
   setRunning(value){if(disposed||contextLost||running===value)return;running=value;host.dataset.fieldRunning=String(value);if(value){last=0;raf=requestAnimationFrame(tick);}else{cancelAnimationFrame(raf);last=0;}},
   setStory(value){if(progress===value)return;progress=value;cameraDirty=true;},
   setDirection(value){outward=value;host.dataset.flowDirection=value?'outward':'return';},
   setFrameObserver(value){frameObserver=value;},
   getPhase(){return elapsed;},
   dispose(){frameObserver=null;disposed=true;running=false;cancelAnimationFrame(raf);observer.disconnect();canvas.removeEventListener('webglcontextlost',loseContext);cleanup();if(options.releaseContextOnDispose)gl.getExtension('WEBGL_lose_context')?.loseContext();},
  };
 }catch(error){host.dataset.fieldError=error instanceof Error?error.message:'Renderer unavailable';cleanup();return null;}
}
