import * as T from 'three';
export function createGasMaterial(){return new T.ShaderMaterial({transparent:true,depthTest:false,depthWrite:false,blending:T.AdditiveBlending,uniforms:{uTime:{value:0},uFade:{value:0},uValve:{value:0}},vertexShader:`varying vec3 vNormalView; varying vec3 vPositionView; void main(){vec3 transformed=position;vec3 objectNormal=normal;
#ifdef USE_INSTANCING
vec4 instancePosition=instanceMatrix*vec4(transformed,1.0);transformed=instancePosition.xyz;objectNormal=mat3(instanceMatrix)*objectNormal;
#endif
vec4 mvPosition=modelViewMatrix*vec4(transformed,1.0);vNormalView=normalize(normalMatrix*objectNormal);vPositionView=mvPosition.xyz;gl_Position=projectionMatrix*mvPosition;}`,fragmentShader:`uniform float uTime; uniform float uFade; uniform float uValve; varying vec3 vNormalView; varying vec3 vPositionView; void main(){vec3 n=normalize(vNormalView);vec3 viewDir=normalize(-vPositionView);float rim=pow(1.0-max(dot(n,viewDir),0.0),2.2);float pulse=.78+.22*sin(uTime*3.2+vPositionView.y*8.0);float valve=smoothstep(0.0,1.0,uValve);vec3 gas=mix(vec3(.04,.60,.48),vec3(.47,1.0,.78),rim);float alpha=(.45+.48*rim)*pulse*uFade*valve;gl_FragColor=vec4(gas*pulse*uFade*valve,alpha);\n#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});}

export function cycleFrame(seconds){const phase=Math.max(0,Math.min(9,seconds)),smooth=x=>x*x*(3-2*x);return {valve:phase<1?smooth(phase):phase<5?1:phase<6?1-smooth(phase-5):0,routeTime:Math.max(0,Math.min(4,phase-1))*2.4,status:phase<1?'Valve opening':phase<5?'Gas flowing':phase<6?'Valve closing':phase<9?'Valve closed · resting':'Cycle complete · valve closed',complete:phase>=9};}
