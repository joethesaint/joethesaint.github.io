import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as y,d as b,f as ee,g as te,h as ne,i as x,j as S,k as re,l as C,m as w,n as ie,o as ae,p as oe,r as se,s as T,t as ce,u as le,v as ue,w as de,x as fe,y as pe,z as E}from"./three-vendor-BA3HJQ7M.js";var me=12597547,D=11105866,he=15988214;function O(e,t,n,r){e.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2])}function k(e){let t=new _;return t.setAttribute(`position`,new w(e,3)),t}function A(e,t,n,r,i){let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=r[0]-t[0],l=r[1]-t[1],u=r[2]-t[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=(t[0]+n[0]+r[0])/3-i[0],h=(t[1]+n[1]+r[1])/3-i[1],g=(t[2]+n[2]+r[2])/3-i[2];d*m+f*h+p*g<0?O(e,t,r,n):O(e,t,n,r)}function ge(e,t,n,r,i,a){A(e,t,n,r,a),A(e,t,r,i,a)}function j(e,t,n,r){O(e,t,n,r),O(e,t,r,n)}function M(e,t,n,r,i){j(e,t,n,r),j(e,t,r,i)}function _e(e,t,r,i){let a=new E(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o=new C(r,r,a.length(),i,1,!0),s=new S().setFromUnitVectors(new E(0,1,0),a.clone().normalize()),c=new n().compose(new E((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),s,new E(1,1,1));return o.applyMatrix4(c)}function N(e,t,n,r){let i=new T(n,r),a=new S().setFromUnitVectors(new E(0,0,1),new E(t[0],t[1],t[2]).normalize());return i.applyQuaternion(a),i.translate(e[0],e[1],e[2]),i}function P(e,t){e=e.toNonIndexed(),e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let n=new y(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new x(i,3)),e}function ve(){let e=[],t=(t,n)=>e.push({g:t,c:n}),n=[-.0993,-.062,-.02,.022,.062,.096],r=[.038,.0445,.0457,.0445,.038,.024],a=[.0465,.043,.0417,.0417,.0435,.0465],o=[.03,.036,.037,.036,.03,.016],s=[.024,.019,.0175,.0175,.02,.026],c=[.014,.008,.006,.006,.009,.018],l=[.1242,.052,0],u=[.108,.03,0],d=n.length,f=[],p=[],m=[],h=[],g=[];for(let e=0;e<d;e++)f.push([n[e],a[e],r[e]]),p.push([n[e],s[e],o[e]]),m.push([n[e],c[e],0]),h.push([n[e],s[e],-o[e]]),g.push([n[e],a[e],-r[e]]);let _=[0,0,0],v=0;for(let e=0;e<d;e++)for(let t of[f[e],p[e],m[e],h[e],g[e]])_[0]+=t[0],_[1]+=t[1],_[2]+=t[2],v++;_[0]+=l[0],_[1]+=l[1],_[2]+=l[2],v++,_[0]+=u[0],_[1]+=u[1],_[2]+=u[2],v++,_[0]/=v,_[1]/=v,_[2]/=v;let y=[],b=(e,t,n)=>A(y,e,t,n,_),ee=(e,t,n,r)=>ge(y,e,t,n,r,_);for(let e=0;e<d-1;e++)ee(f[e],f[e+1],g[e+1],g[e]),ee(f[e],f[e+1],p[e+1],p[e]),ee(p[e],p[e+1],m[e+1],m[e]),ee(g[e],g[e+1],h[e+1],h[e]),ee(h[e],h[e+1],m[e+1],m[e]);b(f[d-1],l,g[d-1]),b(f[d-1],l,p[d-1]),b(p[d-1],l,u),b(p[d-1],u,m[d-1]),b(g[d-1],l,h[d-1]),b(h[d-1],l,u),b(h[d-1],u,m[d-1]),b(m[0],p[0],f[0]),b(m[0],f[0],g[0]),b(m[0],g[0],h[0]),t(k(y),me);let ne=[];M(ne,[-.02,.011,0],[.048,.012,0],[.035,0,0],[-.005,0,0]),t(k(ne),me);let x=[];j(x,[-.097,.03,0],[-.097,.012,0],[-.113,.004,0]),t(k(x),me);let S=.0338;t(_e([S,.03,0],[S,.3,0],.0045,6),D),t(N([S,.3,0],[0,1,0],.0045,6),D);let re=[.0358,.058,0],C=[-.0715,.076,0];t(_e(re,C,.0032,6),D),t(N(C,[C[0]-re[0],C[1]-re[1],0],.0032,6),D);let w=[S,.294,0],ie=[S,.0616,0],ae=[S,.22,0],oe=[S,.14,0],se=e=>[w[0]+(C[0]-w[0])*e,w[1]+(C[1]-w[1])*e,0],T=se(.318),le=se(.662),ue=[(ae[0]+T[0])/2,(ae[1]+T[1])/2,.018],fe=[(oe[0]+le[0])/2,(oe[1]+le[1])/2,.022],pe=[(ie[0]+C[0])/2,(ie[1]+C[1])/2,.012],E=[];j(E,w,ae,ue),j(E,w,ue,T),M(E,ae,oe,fe,ue),M(E,ue,fe,le,T),M(E,oe,ie,pe,fe),M(E,fe,pe,C,le),t(k(E),he);let O=ce(e.map(e=>P(e.g,e.c)));O.computeBoundingBox();let ve=O.boundingBox;O.translate(-(ve.min.x+ve.max.x)/2,-ve.min.y,-(ve.min.z+ve.max.z)/2),O.computeVertexNormals();let F=new de(O,new i({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0,side:2})),ye=new te;return ye.add(F),ye}function F(te,{sound:S=!0,initialMode:C=`preview`,onStatus:T=()=>{},onInteract:ce=()=>{},onBoatEgg:me=()=>{}}={}){let D=()=>Math.max(1,te.clientWidth),he=()=>Math.max(1,te.clientHeight),O={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},k=C===`explore`?`explore`:`preview`,A=O.quality.auto,ge=matchMedia(`(prefers-reduced-motion: reduce)`),j=ge.matches,M=!1,_e=!0,N=!1,P;try{P=new se({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),T({kind:`failed`,message:`This browser could not start the water scene.`}),e}P.toneMapping=4,P.toneMappingExposure=1.08,P.setPixelRatio(Math.min(window.devicePixelRatio,A.dpr)),P.setSize(D(),he()),P.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),P.domElement.setAttribute(`role`,`img`),P.domElement.tabIndex=0,P.domElement.className=`shallows-canvas`,te.appendChild(P.domElement);let F=new d,ye=new y(.68,.82,.86);P.setClearColor(ye,1),F.background=ye,F.fog=new ne(ye,30,85);let I=new u(52,D()/he(),.1,300);I.position.set(3.2,9.8,12);let L=new ie(I,P.domElement);L.target.set(0,.4,0),L.enableDamping=!0,L.dampingFactor=.08,L.enablePan=!1,L.enableZoom=!1,L.maxPolarAngle=p.degToRad(72),L.minPolarAngle=p.degToRad(8),L.minDistance=2.5,L.maxDistance=20,P.domElement.style.touchAction=`pan-y`,typeof L._onMouseWheel==`function`&&P.domElement.removeEventListener(`wheel`,L._onMouseWheel);let be=new E(.5,.8,.3).normalize(),xe=new ee(16772563,2.3);xe.position.copy(be).multiplyScalar(20),F.add(xe),F.add(new g(12573183,7036751,1.15));let R={value:0},Se={value:O.waterLevel},Ce={value:O.waveStrength},we={value:0},Te={value:new f},Ee={value:O.surf.height},De={value:new f(...O.surf.direction).normalize()},Oe={chop:1,swell:1};function ke(){let{interval:e,separation:t,speed:n}=O.surf,r=R.value+5,i=t=>(t%e+e)%e*n-e*n*.5;Te.value.set(i(r),i(r-t))}function Ae(e){let t=O.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function je(){let e=Ae(R.value);we.value=e,Oe.chop=.42+1.73*e,Oe.swell=.75+.6*e}let Me=new a({side:1,depthWrite:!1,uniforms:{uSunDir:{value:be},uHorizonColor:{value:ye}},vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 uSunDir;
    uniform vec3 uHorizonColor;
    varying vec3 vDir;
    void main() {
      vec3 d = normalize(vDir);
      float t = clamp(d.y, 0.0, 1.0);
      vec3 col = mix(uHorizonColor, vec3(0.22, 0.52, 0.76), pow(t, 0.7)) * 1.15;
      // A restrained warm band gives the water the late-day atmosphere of the
      // reference scenes without replacing Out of Office's cool palette.
      float horizonGlow = pow(1.0 - t, 7.0) * 0.14;
      col += vec3(1.0, 0.55, 0.30) * horizonGlow;
      col += vec3(1.0, 0.96, 0.88) * pow(max(dot(d, uSunDir), 0.0), 380.0) * 1.2;
      col += vec3(1.0, 0.90, 0.78) * pow(max(dot(d, uSunDir), 0.0), 12.0) * 0.18;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}),Ne=new de(new o(180,32,16),Me);Ne.renderOrder=-1,Ne.layers.enable(1),F.add(Ne);let z=null,Pe=!!S,Fe=0,Ie=0,Le=-1/0;function Re(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=O.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=p.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+O.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let m=t.createGain();m.gain.value=0;let h=t.createDynamicsCompressor();return h.threshold.value=-12,h.knee.value=20,h.ratio.value=8,a.connect(o).connect(s).connect(c).connect(m),a.connect(l).connect(u).connect(d).connect(f).connect(m),m.connect(h).connect(t.destination),a.playbackRate.value=O.speed,a.start(0,R.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:m,limiter:h}}catch(e){try{t.close()}catch{}throw e}}function ze(){return Pe&&sn&&!M}function Be(){if(!M&&(Pe=!1,T({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),z)){z.master.gain.setValueAtTime(0,z.context.currentTime);try{z.context.suspend()}catch{}}}function Ve(e=!1){if(!z||!ze()||z.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=z,c=t.currentTime;if(!e&&c-Le<.05)return;Le=c;let[l,u]=O.surf.direction,d=Math.hypot(l,u),f=(I.position.x*l+I.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=we.value,h=p(Te.value.x-f)+.78*p(Te.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function He(){if(!z||z.context.state===`closed`)return;let e=++Fe;clearTimeout(Ie);let{context:t,master:n}=z;ze()?t.resume().then(()=>{e!==Fe||!ze()||(Ve(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(k===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===Fe&&Be()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Ie=setTimeout(()=>{if(e===Fe&&!ze()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function Ue(){if(++Fe,clearTimeout(Ie),!z)return;let{context:e,source:t}=z;try{t.stop()}catch{}for(let e of Object.values(z))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}z=null}function We(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Ge(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new y(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new x(i,3))}return n}function Ke(e,t=16777215){let n=e.map(e=>Ge(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new _;return c.setAttribute(`position`,new x(i,3)),c.setAttribute(`normal`,new x(a,3)),c.setAttribute(`color`,new x(o,3)),c}function B(e,t){let n=new _;return n.setAttribute(`position`,new w(e.flat(),3)),n.computeVertexNormals(),Ge(n,t)}function qe(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let Je=document.createElement(`canvas`);Je.width=Je.height=1024;let Ye=Je.getContext(`2d`);Ye.fillStyle=`#fff`,Ye.fillRect(0,0,1024,1024);let Xe=new ae(Je);Xe.flipY=!1;function Ze(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function n(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=(t*128+r)*4;e[i]=Math.round(n(r,t,16)*255),e[i+1]=Math.round(n(r,t,64)*255),e[i+2]=Math.round(n(r,t,32)*255),e[i+3]=255}let r=new le(e,128,128);return r.wrapS=r.wrapT=l,r.magFilter=v,r.minFilter=fe,r.generateMipmaps=!0,r.needsUpdate=!0,r}let Qe=Ze();function $e(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=R,e.uniforms.uWaterLevel=Se,t&&(e.uniforms.tBedShade={value:Xe}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vCausticPos;`).replace(`#include <project_vertex>`,`
        vec4 causticPosition = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          causticPosition = instanceMatrix * causticPosition;
        #endif
        vCausticPos = (modelMatrix * causticPosition).xyz;
        #include <project_vertex>`);let n=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform float uWaterLevel;
varying vec3 vCausticPos;
`+(t?`uniform sampler2D tBedShade;
`:``)).replace(`#include <color_fragment>`,`#include <color_fragment>
      {
        float under = 1.0 - smoothstep(uWaterLevel - 0.05, uWaterLevel + 0.05, vCausticPos.y);
        vec2 cp = vCausticPos.xz * 2.0;
        float t = uTime * .65;
        float w1 = sin(cp.x * 1.3 + sin(cp.y * 1.6 + t) + t);
        float w2 = sin(cp.y * 1.5 + sin(cp.x * 1.2 - t * .8) - t);
        float c = pow(1.0 - abs(w1 * w2), 22.0);
        float depthBelow = max(uWaterLevel - vCausticPos.y, 0.0);
        diffuseColor.rgb += c * under * exp(-depthBelow * .18) * vec3(0.34, 0.40, 0.30);
        ${t?`diffuseColor.rgb *= texture2D(tBedShade, vCausticPos.xz / 40.0 + .5).r; float sandWave=sin(vCausticPos.z*17.0+sin(vCausticPos.x*.8)*1.9); float grain=fract(sin(dot(vCausticPos.xz,vec2(127.1,311.7)))*43758.5453); diffuseColor.rgb *= .96+.04*sandWave+.02*grain;`:`
        float wetBand = 1.0 - smoothstep(uWaterLevel + .02, uWaterLevel + .28, vCausticPos.y);
        diffuseColor.rgb *= mix(1.0, .72, wetBand);
        `}
      }`);t||(n=n.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
      {
        float wetBand = 1.0 - smoothstep(uWaterLevel + .02, uWaterLevel + .28, vCausticPos.y);
        roughnessFactor *= mix(1.0, .78, wetBand);
      }`)),e.fragmentShader=n}}let et=new e(40,40,96,96);et.rotateX(-Math.PI/2),We(et);{let e=et.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,qe(e.getX(t),e.getZ(t)));et.computeVertexNormals()}let tt=new i({color:15917244,roughness:.94});tt.toneMapped=!1,$e(tt,!0),F.add(new de(et,tt));function nt(e){let t=new o(e,32,20),n=t.attributes.position,r=new E;for(let e=0;e<n.count;e++){r.fromBufferAttribute(n,e);let t=.87+.1*Math.sin(r.x*3.1)*Math.sin(r.z*4.2+r.y*2.7)+.045*Math.cos(r.x*7.2+r.z*5.3)*Math.sin(r.y*6.8);r.multiplyScalar(t),n.setXYZ(e,r.x,r.y*.7,r.z)}return t.computeVertexNormals(),t}let rt=[11576468,11050380,12562844,9804434,13088928],it=O.seed;function V(){return it=Math.imul(it,1664525)+1013904223>>>0,it/4294967296}let at=new i({roughness:.78,flatShading:!1});at.toneMapped=!1,$e(at);let H=new pe(nt(1),at,O.rocks+3);H.name=`Stones`;let ot=new r,st=new y,ct=0,lt=[];function ut(e,t,n){let r=n*1.2+.22;lt.push({x:e,z:t,radius:r,radius2:r*r}),ot.position.set(e,qe(e,t)+n*.28,t),ot.rotation.set(V()*.6,V()*Math.PI*2,V()*.5),ot.scale.set(n*(.85+V()*.3),n,n*(.8+V()*.4)),ot.updateMatrix(),H.setMatrixAt(ct,ot.matrix),H.setColorAt(ct++,st.setHex(rt[Math.floor(V()*rt.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=Ye.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),Ye.fillStyle=s,Ye.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<O.rocks;e++){let e=V()*Math.PI*2,t=4.6+V()*7;ut(Math.cos(e)*t,Math.sin(e)*t,.1+V()**2*.75)}ut(-4.8,.4,1.55),ut(4.6,-2.8,1.6),ut(-1.8,-5,1.45),H.instanceMatrix.needsUpdate=!0,H.instanceColor.needsUpdate=!0,H.computeBoundingSphere(),F.add(H),Xe.needsUpdate=!0;let dt=[];{let e=new o(1,20,14);e.scale(.31,.1,.085);let t=e.attributes.position,n=[];for(let e=0;e<t.count;e++){let r=p.smoothstep(t.getY(e),-.06,.07),i=new y(15660252).lerp(new y(6990767),r),a=Math.exp(-((t.getY(e)/.02)**2));i.lerp(new y(15782036),a*.55),n.push(i.r,i.g,i.b)}e.setAttribute(`color`,new w(n,3)),dt.push(e)}dt.push(B([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),dt.push(B([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){dt.push(B([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let t=new o(.023,10,8);t.translate(.223,.033,e*.064),dt.push(Ge(t,925474));let n=new o(.009,8,6);n.translate(.229,.04,e*.08),dt.push(Ge(n,16773320))}let ft=Ke(dt),pt=new Float32Array(30);for(let e=0;e<30;e++)pt[e]=V()*Math.PI*2;ft.setAttribute(`aPhase`,new ue(pt,1));let mt=new i({vertexColors:!0,roughness:.42,metalness:.05,side:2});mt.toneMapped=!1,mt.onBeforeCompile=e=>{e.uniforms.uFishTime=R,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},mt.customProgramCacheKey=()=>`cove-fish-dimensional`;let U=new pe(ft,mt,30);U.name=`Three schools of reef fish`,U.frustumCulled=!1,U.instanceMatrix.setUsage(oe),F.add(U);let ht=document.createElement(`canvas`);ht.width=ht.height=64;let gt=ht.getContext(`2d`),_t=gt.createRadialGradient(32,32,3,32,32,32);_t.addColorStop(0,`rgba(11,36,30,.38)`),_t.addColorStop(.45,`rgba(11,36,30,.20)`),_t.addColorStop(1,`rgba(11,36,30,0)`),gt.fillStyle=_t,gt.fillRect(0,0,64,64);let vt=new ae(ht),yt=new m({map:vt,transparent:!0,opacity:.34,depthWrite:!1});yt.toneMapped=!1;let bt=new e(1.15,.42);bt.rotateX(-Math.PI/2);let xt=new pe(bt,yt,30);xt.frustumCulled=!1,F.add(xt);let St=[],W=new r;for(let e=0;e<30;e++){let t=Math.floor(e/3);St.push({school:e%3,phase:V()*.035,trail:Math.floor(t/3)*.72,spread:(t%3-1)*.48+(V()-.5)*.1,scale:.85+V()*.35}),U.setColorAt(e,new y(e%9==0?16045466:16777215))}U.instanceColor.needsUpdate=!0;let G={value:new t(0,0,-100,0)},Ct={value:new t(0,0,1,0)},wt=new E,Tt=new E;function Et(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-G.value.z,o=n.x-G.value.x,s=n.z-G.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<lt.length;e++){let t=lt[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=we.value;return n.y=qe(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function Dt(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-G.value.z;if(o>=0&&o<4){let e=wt,t=e.x-G.value.x,r=e.z-G.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function Ot(){for(let e=0;e<30;e++){let t=St[e];Et(t,R.value,wt),Dt(t,R.value,Tt),W.position.copy(wt),W.rotation.set(0,-Math.atan2(Tt.z,Tt.x),0),W.scale.setScalar(t.scale),W.updateMatrix(),U.setMatrixAt(e,W.matrix),W.position.x-=.13,W.position.z-=.08,W.position.y-=.5,W.rotation.set(0,0,0),W.updateMatrix(),xt.setMatrixAt(e,W.matrix)}U.instanceMatrix.needsUpdate=!0,xt.instanceMatrix.needsUpdate=!0}let K=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];K.push(B([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),K.push(B([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),K.push(B([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),K.push(B([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),K.push(B([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),K.push(B([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),K.push(B([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let kt=Ke(K),At=new i({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});At.toneMapped=!1;let jt=new de(kt,At);jt.name=`Pink folded paper boat`,F.add(jt);let Mt=new e(1.5,2.6);Mt.rotateX(-Math.PI/2);let Nt=new de(Mt,yt);F.add(Nt);let Pt=ve();Pt.name=`Polyfork low-poly sailboat`,Pt.scale.setScalar(4.6),Pt.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)}),F.add(Pt);function Ft(){let e=[],t=[],n=new y;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new _;return a.setAttribute(`position`,new w(e,3)),a.setAttribute(`color`,new w(t,3)),a.computeVertexNormals(),a}let It=new i({vertexColors:!0,roughness:.72,side:2});It.toneMapped=!1;let Lt=new pe(Ft(),It,24);Lt.name=`Ribbed scallop shells`;let q=new r;for(let e=0;e<24;e++){let t=V()*6.283,n=4+V()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;q.position.set(r,qe(r,i)+.025,i),q.rotation.set(0,V()*6.283,0),q.scale.setScalar(.55+V()*.6),q.updateMatrix(),Lt.setMatrixAt(e,q.matrix)}F.add(Lt);let Rt=[],zt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=zt(t,e/6),r=zt(t,(e+1)/6),i=zt(t+1,(e+1)/6),a=zt(t+1,e/6);Rt.push(...n,...i,...r,...n,...a,...i)}let Bt=new _;Bt.setAttribute(`position`,new w(Rt,3)),Bt.computeVertexNormals();let Vt=new i({color:14711368,roughness:.94,side:2});Vt.toneMapped=!1;let Ht=new pe(Bt,Vt,6);Ht.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{q.position.set(e,qe(e,t)+.04,t),q.rotation.set(0,n*1.7,0),q.scale.setScalar(.8+V()*.5),q.updateMatrix(),Ht.setMatrixAt(n,q.matrix)}),F.add(Ht);let Ut=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),Wt=[1,.78],Gt=new E,J=new E,Kt=new E,qt=new n;function Jt(){let e=R.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=De.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=Oe.chop;for(let r=0;r<4;r++){let i=Ut[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=Ce.value;c*=f,l*=f,u*=f;let p=Oe.swell,m=t*i+n*a,h=t*o+n*s,g=.32*Math.sin(h*.48),_=Te.value.x,v=Te.value.y,y=O.surf.width*O.surf.width,b=i+o*.1536*Math.cos(h*.48),ee=a+s*.1536*Math.cos(h*.48),te=Ee.value*p;for(let e=0;e<2;e++){let t=e===0?_:v,n=Wt[e],r=m+g-t,i=r+2,a=Math.exp(-r*r/y),o=Math.exp(-i*i/(3*y));c+=n*(a-.24*o)*te;let s=n*(-2*r/y*a+.16*i/y*o)*te;l+=s*b,u+=s*ee}Gt.set(-l,1,-u).normalize(),J.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),Ct.value.set(t,n,J.x,J.z),J.addScaledVector(Gt,-J.dot(Gt)).normalize(),jt.position.set(t,Se.value+c+.11,n),Kt.crossVectors(Gt,J),qt.makeBasis(Kt,Gt,J),jt.quaternion.setFromRotationMatrix(qt),Nt.position.set(t-.5,qe(t-.5,n-.3)+.028,n-.3),Nt.rotation.y=Math.atan2(J.x,J.z);let ne=-2.6+Math.sin(e*.045+1.8)*1.05,x=-1.85+Math.cos(e*.045+1.8)*.82,S=.16*Math.sin(e*.82+ne*.8)+.08*Math.sin(e*1.35+x*.65);Pt.position.set(ne,Se.value+S+.12,x),Pt.rotation.set(.025*Math.sin(e*.62),Math.atan2(Math.cos(e*.045+1.8),-Math.sin(e*.045+1.8))+.32,.035*Math.cos(e*.54+.7))}let Y=new h(1,1);Y.depthTexture=new b(1,1),Y.texture.generateMipmaps=!1,P.capabilities.isWebGL2;let Yt=new a({uniforms:{uTime:R,uTouch:G,uWake:Ct,uWaveStrength:Ce,uWaveEnvelope:we,uSurfFront:Te,uSurfDirection:De,uSurfHeight:Ee,uSurfWidth:{value:O.surf.width},tRefraction:{value:Y.texture},tDepth:{value:Y.depthTexture},tFoam:{value:Qe},uNear:{value:I.near},uFar:{value:I.far},uSunDir:{value:be},uAbsorption:{value:new E(...O.absorption)},uDeepColor:{value:new y(...O.deepColor)},uSssColor:{value:new y(...O.sssColor)},uHorizonColor:{value:ye},uTexel:{value:new f(1,1)}},vertexShader:`
  uniform float uTime;
  uniform float uWaveStrength;
  uniform float uWaveEnvelope;
  uniform vec2 uSurfFront;
  uniform vec2 uSurfDirection;
  uniform float uSurfHeight;
  uniform float uSurfWidth;
  varying float vCrest;
  varying float vEnvelope;
  varying vec3 vWorldPos;
  varying vec4 vClipPos;
  varying vec3 vNormalW;

  void addWave(vec2 dir, float freq, float amp, float speed, vec2 p, float t,
               inout float h, inout vec2 grad) {
    float phase = dot(p, dir) * freq + t * speed;
    h += amp * sin(phase);
    grad += dir * (freq * amp * cos(phase));
  }

  void addSwell(float distance, float weight, vec2 slopeDirection,
                inout float height, inout vec2 gradient, inout float crest) {
    float width2 = uSurfWidth * uSurfWidth;
    float peak = exp(-distance * distance / width2);
    float tailDistance = distance + 2.0;
    float trough = exp(-tailDistance * tailDistance / (width2 * 3.0));
    height += weight * (peak - .24 * trough);
    float slope = weight * (-2.0 * distance / width2 * peak
                 + .16 * tailDistance / width2 * trough);
    gradient += slopeDirection * slope;
    crest = max(crest, peak * weight);
  }

  void main() {
    vec3 pos = position;
    vec2 p = pos.xz;

    // Two gains derived from the envelope:
    //   chop  — the local wind waves. Range 0.42 to 2.15 across a set cycle,
    //           so lulls are nearly glass and sets are genuinely turbulent.
    //   swell — the incoming surf lines. Range 0.75 to 1.35; more moderate so
    //           the swells stay readable even during lulls.
    float chopGain  = 0.42 + 1.73 * uWaveEnvelope;
    float swellGain = 0.75 + 0.60 * uWaveEnvelope;

    float h = 0.0;
    vec2 grad = vec2(0.0);

    // Chop waves — amplitude scaled by chopGain.
    addWave(normalize(vec2( 1.0,  0.3)), 0.8, 0.085 * chopGain, 1.2, p, uTime, h, grad);
    addWave(normalize(vec2(-0.7,  1.0)), 1.3, 0.065 * chopGain, 1.6, p, uTime, h, grad);
    addWave(normalize(vec2( 0.5, -1.0)), 2.2, 0.042 * chopGain, 2.2, p, uTime, h, grad);
    addWave(normalize(vec2(-1.0, -0.4)), 3.5, 0.022 * chopGain, 2.8, p, uTime, h, grad);
    float amplitude = uWaveStrength * (1.0 - smoothstep(18.0, 65.0, length(p)));
    h *= amplitude;
    grad *= amplitude;

    // Capillary ripples — also boosted during sets, so a turbulent surface
    // really does look agitated. Proximity-faded as before.
    float capNear = 1.0 - smoothstep(3.0, 12.0, length(p));
    float capH = 0.0;
    vec2 capGrad = vec2(0.0);
    float capMul = 0.6 + 1.2 * uWaveEnvelope;
    addWave(normalize(vec2( 0.9,  0.7)), 11.0, 0.0030 * capMul, 5.4, p, uTime, capH, capGrad);
    addWave(normalize(vec2(-0.6,  0.9)), 16.0, 0.0020 * capMul, 6.8, p, uTime, capH, capGrad);
    addWave(normalize(vec2( 0.3, -0.95)), 23.0, 0.0012 * capMul, 8.6, p, uTime, capH, capGrad);
    h += capH * capNear;
    grad += capGrad * capNear;

    // Surf swells — height modulated by swellGain.
    vec2 across = vec2(-uSurfDirection.y, uSurfDirection.x);
    float crossPosition = dot(p, across);
    float along = dot(p, uSurfDirection);
    float bend = .32 * sin(crossPosition * .48);
    vec2 slopeDirection = uSurfDirection + across * (.1536 * cos(crossPosition * .48));
    float swell = 0.0;
    vec2 swellGrad = vec2(0.0);
    float crest = 0.0;
    float shoreFade = 1.0 - smoothstep(13.0, 23.0, abs(along));
    float swellH = uSurfHeight * swellGain;
    addSwell(along + bend - uSurfFront.x, 1.0, slopeDirection, swell, swellGrad, crest);
    addSwell(along + bend - uSurfFront.y, .78, slopeDirection, swell, swellGrad, crest);
    h += swell * swellH * shoreFade;
    grad += swellGrad * swellH * shoreFade;
    vCrest = crest * shoreFade;
    vEnvelope = uWaveEnvelope;
    pos.y += h;
    vNormalW = normalize(vec3(-grad.x, 1.0, -grad.y));
    vec4 wp = modelMatrix * vec4(pos, 1.0);
    vWorldPos = wp.xyz;
    vClipPos = projectionMatrix * viewMatrix * wp;
    gl_Position = vClipPos;
  }
`,fragmentShader:`
  uniform vec4 uTouch;
  uniform vec4 uWake;
  uniform float uTime;
  uniform float uWaveStrength;
  uniform float uWaveEnvelope;
  uniform sampler2D tRefraction;
  uniform sampler2D tDepth;
  uniform sampler2D tFoam;
  uniform float uNear;
  uniform float uFar;
  uniform vec3 uSunDir;
  uniform vec3 uAbsorption;
  uniform vec3 uDeepColor;
  uniform vec3 uSssColor;
  uniform vec3 uHorizonColor;
  uniform vec2 uTexel;
  uniform float uSurfHeight;
  varying float vCrest;
  varying float vEnvelope;
  varying vec3 vWorldPos;
  varying vec4 vClipPos;
  varying vec3 vNormalW;

  float linearizeDepth(float z) {
    return (2.0 * uNear * uFar) / (uFar + uNear - (z * 2.0 - 1.0) * (uFar - uNear));
  }

  vec3 skyColor(vec3 d) {
    float t = clamp(d.y, 0.0, 1.0);
    vec3 col = mix(uHorizonColor, vec3(0.22, 0.52, 0.76), pow(t, 0.7)) * 1.15;
    float horizonGlow = pow(1.0 - t, 7.0) * 0.14;
    col += vec3(1.0, 0.55, 0.30) * horizonGlow;
    col += vec3(1.0, 0.96, 0.88) * pow(max(dot(d, uSunDir), 0.0), 380.0) * 1.2;
    col += vec3(1.0, 0.90, 0.78) * pow(max(dot(d, uSunDir), 0.0), 12.0) * 0.18;
    return col;
  }

  void main() {
    vec2 p = vWorldPos.xz;
    float t = uTime;

    vec3 foamTex = texture2D(tFoam, p * .12 + vec2(t * .009, -t * .013)).rgb;
    vec3 foamFine = texture2D(tFoam, p * .35 + vec2(-t * .015, t * .011)).rgb;
    float detailFade = 1.0 - smoothstep(6.0, 22.0, length(p));

    // Surface perturbation amplified during sets — the water is visibly
    // choppier when the envelope is high, and glassy when it is low.
    float turbMul = 0.5 + 1.5 * vEnvelope;
    vec2 ripple = vec2(
      sin(p.x * 6.0 + t * 2.0) * 0.022 + sin(p.x * 17.0 - t * 3.2) * 0.010,
      sin(p.y * 7.0 - t * 1.7) * 0.022 + sin((p.x + p.y) * 13.0 + t * 2.5) * 0.010
    ) * turbMul;
    float rippleFade = 1.0 - smoothstep(.05, .45, length(fwidth(p)));
    vec3 N = normalize(vNormalW + vec3(ripple.x, 0.0, ripple.y) * uWaveStrength * rippleFade);

    // Micro-normals also scale with turbulence.
    float microMul = 0.5 + 1.3 * vEnvelope;
    vec2 microN = (vec2(foamFine.r, foamFine.g) - 0.5) * 0.05 * detailFade * microMul;
    N = normalize(N + vec3(microN.x, 0.0, microN.y));

    vec2 touchDelta = p - uTouch.xy;
    float touchAge = uTime - uTouch.z, touchDistance = length(touchDelta);
    float ringWindow = exp(-pow((touchDistance - touchAge * 1.65) / .38, 2.0)) * exp(-touchAge * .55) * step(0.0, touchAge);
    N = normalize(N + vec3(touchDelta.x, 0.0, touchDelta.y) / max(.1, touchDistance) * sin(touchDistance * 19.0 - touchAge * 26.0) * ringWindow * .19);

    vec3 V = normalize(cameraPosition - vWorldPos);
    vec2 screenUV = vClipPos.xy / vClipPos.w * 0.5 + 0.5;

    float rawDepth = texture2D(tDepth, screenUV).x;
    float sceneZ = linearizeDepth(rawDepth);
    float waterZ = linearizeDepth(gl_FragCoord.z);
    if (sceneZ <= waterZ) {
      gl_FragColor = vec4(texture2D(tRefraction, screenUV).rgb, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      return;
    }
    float rayScale = length(cameraPosition - vWorldPos) / max(waterZ, .001);
    float waterDepth = rawDepth > .9999 ? 12.0 : clamp((sceneZ - waterZ) * rayScale, 0.0, 12.0);

    vec2 viewNormal = (viewMatrix * vec4(N - vec3(0.0, 1.0, 0.0), 0.0)).xy;
    float vnLen = length(viewNormal);
    vec2 vnDir = viewNormal / max(vnLen, 1e-5);
    float tiltGate = smoothstep(0.0, 0.016, vnLen);

    vec2 edge = min(screenUV, 1.0 - screenUV);
    float edgeFade = smoothstep(0.0, .07, min(edge.x, edge.y));

    float eta = 1.0 / 1.333;
    float refrFactor = 1.0 - eta;
    float offsetMag = min(0.012 + waterDepth * 0.015, 0.045) * refrFactor * edgeFade
                    * smoothstep(0.0, 0.10, waterDepth) * tiltGate;
    vec2 offset = vnDir * offsetMag;

    vec2 refrUV = clamp(screenUV + offset, uTexel, 1.0 - uTexel);
    float sampleDepth = texture2D(tDepth, refrUV).x;
    float sampleZ = linearizeDepth(sampleDepth);
    float continuity = 1.0 - smoothstep(.08, .4, abs(sampleZ - sceneZ));
    refrUV = mix(screenUV, refrUV, continuity);
    if (sampleDepth > .9999 || sampleZ <= waterZ + .03) refrUV = screenUV;

    vec2 ca = (refrUV - screenUV) * 0.05 * continuity * edgeFade * tiltGate;
    vec3 refr = vec3(
      texture2D(tRefraction, clamp(refrUV + ca, uTexel, 1.0 - uTexel)).r,
      texture2D(tRefraction, refrUV).g,
      texture2D(tRefraction, clamp(refrUV - ca, uTexel, 1.0 - uTexel)).b
    );

    vec2 refrEdge = min(refrUV, 1.0 - refrUV);
    float refrEdgeFade = smoothstep(0.0, .05, min(refrEdge.x, refrEdge.y));
    if (refrEdgeFade < 1.0) {
      vec3 raw = texture2D(tRefraction, screenUV).rgb;
      refr = mix(raw, refr, refrEdgeFade);
    }

    vec3 absorb = exp(-uAbsorption * waterDepth);
    vec3 scatterCol = vec3(0.05, 0.32, 0.36);
    float scatter = (1.0 - exp(-waterDepth * 0.35)) * max(dot(uSunDir, vec3(0.0, 1.0, 0.0)), 0.0) * 0.03;
    refr = refr * absorb + uDeepColor * (1.0 - absorb) + scatterCol * scatter;

    float deepT = 1.0 - exp(-waterDepth * 0.28);
    refr = mix(refr, refr * vec3(0.96, 0.99, 1.0), deepT * 0.10);

    // Keep the near shore bright and translucent while allowing the deeper
    // pool to hold onto Out of Office's blue-green depth. This is the visual
    // separation that makes the shore-water reference read immediately.
    float shallowT = 1.0 - smoothstep(0.12, 2.8, waterDepth);
    vec3 shallowLift = refr * vec3(0.88, 1.08, 1.04) + vec3(0.012, 0.035, 0.028);
    refr = mix(refr, shallowLift, shallowT * 0.26);

    float NdotV = max(dot(N, V), 0.0);
    float fres = 0.012 + 0.988 * pow(1.0 - NdotV, 5.0);
    vec3 refl = skyColor(reflect(-V, N));

    vec3 col = mix(refr, refl, fres);

    vec3 H = normalize(uSunDir + V);
    float backScatter = pow(NdotV * 0.5 + 0.5, 4.0);
    float forwardScatter = pow(max(dot(V, -uSunDir), 0.0), 3.5);
    float thinness = smoothstep(0.25, 0.95, vCrest);
    float sss = backScatter * forwardScatter * thinness;
    col += uSssColor * sss * 0.5 * (0.6 + 0.8 * vEnvelope);

    float rimGlow = smoothstep(0.55, 1.0, vCrest) * (1.0 - NdotV) * 0.4;
    col += vec3(0.55, 0.72, 0.65) * rimGlow;

    float broad = pow(max(dot(N, H), 0.0), 40.0) * 0.10;
    float sharp = pow(max(dot(N, H), 0.0), 900.0) * 1.6;
    vec3 microNN = normalize(N + vec3((foamFine.r - 0.5) * 0.6, 0.0, (foamFine.g - 0.5) * 0.6) * detailFade * turbMul);
    float sparkle = pow(max(dot(microNN, H), 0.0), 600.0) * smoothstep(0.55, 0.92, foamFine.b) * 2.5;
    col += vec3(1.0, 0.95, 0.82) * (broad * (fres * 3.0 + 0.05)
                                  + sharp * (fres * 4.5 + 0.05)
                                  + sparkle * (fres * 6.0 + 0.10) * detailFade);

    vec2 wakeDelta = p - uWake.xy;
    float behind = -dot(wakeDelta, uWake.zw);
    float sideways = abs(dot(wakeDelta, vec2(-uWake.w, uWake.z)));
    float wake = exp(-pow((sideways - behind * .31) / .055, 2.0)) * exp(-behind * 1.2) * smoothstep(.1, .5, behind);
    col += vec3(.10, .15, .14) * wake;
    float wakeFoam = exp(-pow((sideways - behind * .31) / .13, 2.0))
                   * exp(-behind * .82) * smoothstep(.04, .34, behind);
    col = mix(col, vec3(.88, .95, .90), wakeFoam * (.10 + .13 * vEnvelope));
    col += vec3(.05, .075, .065) * ringWindow;

    // Crest foam appears earlier during sets (looser threshold as the envelope
    // rises) so whitecaps actually form on the turbulent crests.
    float foamThresh = mix(0.85, 0.62, vEnvelope);
    if (vCrest > foamThresh - 0.20) {
      float crestFoam = smoothstep(foamThresh, foamThresh + 0.24, vCrest + (foamTex.r - .5) * .18 + (foamFine.r - .5) * .10);
      float bubbles = .24 + .76 * smoothstep(.22, .7, foamTex.g);
      float foam = crestFoam * bubbles * smoothstep(0.0, .18, waterDepth);
      // Foam opacity higher during sets.
      col = mix(col, vec3(.94, .98, .93), foam * (0.28 + 0.22 * vEnvelope));
    }

    float rimOuter = 1.0 - smoothstep(0.012, 0.10, waterDepth);
    float rimInner = smoothstep(0.002, 0.018, waterDepth);
    float lap = 0.5 + 0.5 * sin(t * 1.4 + dot(p, vec2(1.7, 1.3)));
    float surge = lap + vCrest * .35;
    float shoreFoam = rimOuter * rimInner * smoothstep(0.38, 0.85, foamFine.g * 0.75 + surge * 0.30);
    col = mix(col, vec3(0.92, 0.96, 0.94), shoreFoam * 0.30);

    float mist = smoothstep(40.0, 95.0, length(vWorldPos - cameraPosition));
    vec3 skyAtHorizon = uHorizonColor * 1.15;
    col = mix(col, skyAtHorizon, mist);

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`});function Xt(t){let n=new e(40,40,t,t);return n.rotateX(-Math.PI/2),We(n),n}let Zt=new de(Xt(A.segments),Yt);Zt.position.y=Se.value,Zt.layers.set(1),F.add(Zt);let Qt=new f,X=1,Z=[],$t=0;function en(){return k===`explore`?A.refraction:.65}function tn(){if(M||N)return;I.aspect=D()/he(),I.updateProjectionMatrix();let e=k!==`explore`,t=e?1.25:A.dpr,n=A.pixels*(e?.8:1);P.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(D()*he())))),P.setSize(D(),he()),P.getDrawingBufferSize(Qt);let r=en()*X;P.capabilities.isWebGL2,Y.samples!==0&&(Y.dispose(),Y.samples=0),Y.setSize(Math.max(1,Math.floor(Qt.x*r)),Math.max(1,Math.floor(Qt.y*r))),Yt.uniforms.uTexel.value.set(1/Y.width,1/Y.height),fn()}function nn(e){let t=O.dynamicScale;if(!t.enabled||e<=0||e>80||(Z.push(e),Z.length>t.sampleCount&&Z.shift(),Z.length<t.sampleCount))return;let n=performance.now();if(n-$t<t.cooldownMs)return;let r=0;for(let e=0;e<Z.length;e++)r+=Z[e];let i=r/Z.length,a=X;i>t.targetMs*1.35&&X>t.min?a=Math.max(t.min,X-.1):i<t.targetMs*.85&&X<t.max&&(a=Math.min(t.max,X+.05)),a===X?$t=n:(X=a,tn(),Z.length=0,$t=n)}function rn(){let e=L.enableDamping;L.enableDamping=!1,L.update(),L.target.set(0,.4,0),I.position.set(...k===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),L.update(),L.enableDamping=e,fn()}function an(e=k){k=e===`explore`?`explore`:`preview`,L.enabled=k===`explore`,P.domElement.tabIndex=k===`explore`?0:-1,P.domElement.setAttribute(`aria-hidden`,String(k!==`explore`)),P.domElement.style.touchAction=k===`explore`?`pan-y`:`auto`,Ce.value=O.waveStrength*(k===`explore`?1:.55),Ee.value=O.surf.height*(k===`explore`?1:.75),rn(),tn(),pn()}let on=0,Q=0,sn=!1,cn=!1;function ln(){cn||(cn=!0,ce())}function un(){M||N||(L.enabled&&L.update(),ke(),je(),Jt(),Ot(),Ve(),I.layers.set(0),P.setRenderTarget(Y),P.render(F,I),I.layers.set(1),P.setRenderTarget(null),P.render(F,I),I.layers.set(0))}function dn(e){let t=on?Math.min((e-on)/1e3,.1):0;on=e,R.value+=t*O.speed,nn(t*1e3),un()}function fn(){M||N||sn||Q||document.hidden||!_e||(Q=requestAnimationFrame(()=>{Q=0,!document.hidden&&_e&&un()}))}function pn(){M||(sn=!j&&!document.hidden&&_e&&!N,L.enableDamping=!j,on=0,P.setAnimationLoop(sn?dn:null),sn&&Q&&(cancelAnimationFrame(Q),Q=0),He(),fn())}let mn=new AbortController,hn=new c,gn=new re(new E(0,1,0),-O.waterLevel),_n=new E,vn=null,yn=0,bn=0;P.domElement.addEventListener(`pointerdown`,e=>{ln(),vn={x:e.clientX,y:e.clientY}},{signal:mn.signal}),P.domElement.addEventListener(`pointerup`,e=>{if(k!==`explore`||!vn||Math.hypot(e.clientX-vn.x,e.clientY-vn.y)>7){vn=null;return}let t=P.domElement.getBoundingClientRect();if(hn.setFromCamera(new f((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),I),hn.intersectObject(jt,!1).length){let e=performance.now();yn=e-bn>3e3?1:yn+1,bn=e,yn>=10&&(yn=0,me())}hn.ray.intersectPlane(gn,_n)&&(G.value.set(_n.x,_n.z,R.value,1),fn()),vn=null},{signal:mn.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:mn.signal})}let xn=new ResizeObserver(()=>tn());xn.observe(te),$(document,`visibilitychange`,pn),$(ge,`change`,()=>{j=ge.matches,pn()}),L.addEventListener(`change`,fn),$(P.domElement,`keydown`,e=>{if(k!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),ln();let t=I.position.clone().sub(L.target),n=new s().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=p.clamp(n.phi,L.minPolarAngle,L.maxPolarAngle),I.position.copy(L.target).add(t.setFromSpherical(n)),L.update(),fn()});let Sn=new IntersectionObserver(e=>{_e=e[0].isIntersecting,pn()});Sn.observe(P.domElement),$(P.domElement,`webglcontextlost`,e=>{e.preventDefault(),N=!0,pn(),T({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(P.domElement,`webglcontextrestored`,()=>{N=!1,T({kind:`ready`}),tn(),pn()});function Cn(){if(!M){M=!0,Ue(),P.setAnimationLoop(null),cancelAnimationFrame(Q),Sn.disconnect(),xn.disconnect(),mn.abort(),L.removeEventListener(`change`,fn),L.dispose(),F.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{H.dispose()}catch{}try{U.dispose()}catch{}try{xt.dispose()}catch{}try{Lt.dispose()}catch{}try{Ht.dispose()}catch{}try{vt.dispose()}catch{}try{Xe.dispose()}catch{}try{Qe.dispose()}catch{}try{Y.dispose()}catch{}try{P.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(P.setAnimationLoop(null),sn=!1,He()):Cn()}),$(window,`pageshow`,e=>{e.persisted&&pn()}),an(),un(),T({kind:`ready`});function wn(){if(!(!Pe||M))try{z||=Re(),He()}catch{Be()}}return $(window,`pointerdown`,wn),$(window,`keydown`,wn),navigator.userActivation?.hasBeenActive&&wn(),{setMode:an,resetView:rn,setSound(e){Pe=!!e,Pe?wn():He()},dispose:Cn}}export{F as createShallows};