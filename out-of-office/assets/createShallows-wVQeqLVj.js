import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as y,d as b,f as ee,g as te,h as ne,i as x,j as S,k as re,l as C,m as w,n as ie,o as ae,p as oe,r as se,s as T,t as ce,u as le,v as ue,w as de,x as fe,y as pe,z as E}from"./three-vendor-BA3HJQ7M.js";var me=12597547,D=11105866,he=15988214;function O(e,t,n,r){e.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2])}function k(e){let t=new _;return t.setAttribute(`position`,new w(e,3)),t}function A(e,t,n,r,i){let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=r[0]-t[0],l=r[1]-t[1],u=r[2]-t[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=(t[0]+n[0]+r[0])/3-i[0],h=(t[1]+n[1]+r[1])/3-i[1],g=(t[2]+n[2]+r[2])/3-i[2];d*m+f*h+p*g<0?O(e,t,r,n):O(e,t,n,r)}function ge(e,t,n,r,i,a){A(e,t,n,r,a),A(e,t,r,i,a)}function j(e,t,n,r){O(e,t,n,r),O(e,t,r,n)}function M(e,t,n,r,i){j(e,t,n,r),j(e,t,r,i)}function _e(e,t,r,i){let a=new E(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o=new C(r,r,a.length(),i,1,!0),s=new S().setFromUnitVectors(new E(0,1,0),a.clone().normalize()),c=new n().compose(new E((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),s,new E(1,1,1));return o.applyMatrix4(c)}function N(e,t,n,r){let i=new T(n,r),a=new S().setFromUnitVectors(new E(0,0,1),new E(t[0],t[1],t[2]).normalize());return i.applyQuaternion(a),i.translate(e[0],e[1],e[2]),i}function P(e,t){e=e.toNonIndexed(),e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let n=new y(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new x(i,3)),e}function ve(){let e=[],t=(t,n)=>e.push({g:t,c:n}),n=[-.0993,-.062,-.02,.022,.062,.096],r=[.038,.0445,.0457,.0445,.038,.024],a=[.0465,.043,.0417,.0417,.0435,.0465],o=[.03,.036,.037,.036,.03,.016],s=[.024,.019,.0175,.0175,.02,.026],c=[.014,.008,.006,.006,.009,.018],l=[.1242,.052,0],u=[.108,.03,0],d=n.length,f=[],p=[],m=[],h=[],g=[];for(let e=0;e<d;e++)f.push([n[e],a[e],r[e]]),p.push([n[e],s[e],o[e]]),m.push([n[e],c[e],0]),h.push([n[e],s[e],-o[e]]),g.push([n[e],a[e],-r[e]]);let _=[0,0,0],v=0;for(let e=0;e<d;e++)for(let t of[f[e],p[e],m[e],h[e],g[e]])_[0]+=t[0],_[1]+=t[1],_[2]+=t[2],v++;_[0]+=l[0],_[1]+=l[1],_[2]+=l[2],v++,_[0]+=u[0],_[1]+=u[1],_[2]+=u[2],v++,_[0]/=v,_[1]/=v,_[2]/=v;let y=[],b=(e,t,n)=>A(y,e,t,n,_),ee=(e,t,n,r)=>ge(y,e,t,n,r,_);for(let e=0;e<d-1;e++)ee(f[e],f[e+1],g[e+1],g[e]),ee(f[e],f[e+1],p[e+1],p[e]),ee(p[e],p[e+1],m[e+1],m[e]),ee(g[e],g[e+1],h[e+1],h[e]),ee(h[e],h[e+1],m[e+1],m[e]);b(f[d-1],l,g[d-1]),b(f[d-1],l,p[d-1]),b(p[d-1],l,u),b(p[d-1],u,m[d-1]),b(g[d-1],l,h[d-1]),b(h[d-1],l,u),b(h[d-1],u,m[d-1]),b(m[0],p[0],f[0]),b(m[0],f[0],g[0]),b(m[0],g[0],h[0]),t(k(y),me);let ne=[];M(ne,[-.02,.011,0],[.048,.012,0],[.035,0,0],[-.005,0,0]),t(k(ne),me);let x=[];j(x,[-.097,.03,0],[-.097,.012,0],[-.113,.004,0]),t(k(x),me);let S=.0338;t(_e([S,.03,0],[S,.3,0],.0045,6),D),t(N([S,.3,0],[0,1,0],.0045,6),D);let re=[.0358,.058,0],C=[-.0715,.076,0];t(_e(re,C,.0032,6),D),t(N(C,[C[0]-re[0],C[1]-re[1],0],.0032,6),D);let w=[S,.294,0],ie=[S,.0616,0],ae=[S,.22,0],oe=[S,.14,0],se=e=>[w[0]+(C[0]-w[0])*e,w[1]+(C[1]-w[1])*e,0],T=se(.318),le=se(.662),ue=[(ae[0]+T[0])/2,(ae[1]+T[1])/2,.018],fe=[(oe[0]+le[0])/2,(oe[1]+le[1])/2,.022],pe=[(ie[0]+C[0])/2,(ie[1]+C[1])/2,.012],E=[];j(E,w,ae,ue),j(E,w,ue,T),M(E,ae,oe,fe,ue),M(E,ue,fe,le,T),M(E,oe,ie,pe,fe),M(E,fe,pe,C,le),t(k(E),he);let O=ce(e.map(e=>P(e.g,e.c)));O.computeBoundingBox();let ve=O.boundingBox;O.translate(-(ve.min.x+ve.max.x)/2,-ve.min.y,-(ve.min.z+ve.max.z)/2),O.computeVertexNormals();let F=new de(O,new i({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0,side:2})),I=new te;return I.add(F),I}function F(te,{sound:S=!0,initialMode:C=`preview`,onStatus:T=()=>{},onInteract:ce=()=>{},onBoatEgg:me=()=>{}}={}){let D=()=>Math.max(1,te.clientWidth),he=()=>Math.max(1,te.clientHeight),O={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},k=C===`explore`?`explore`:`preview`,A=O.quality.auto,ge=matchMedia(`(prefers-reduced-motion: reduce)`),j=ge.matches,M=!1,_e=!0,N=!1,P;try{P=new se({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),T({kind:`failed`,message:`This browser could not start the water scene.`}),e}P.toneMapping=4,P.toneMappingExposure=1.08,P.setPixelRatio(Math.min(window.devicePixelRatio,A.dpr)),P.setSize(D(),he()),P.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),P.domElement.setAttribute(`role`,`img`),P.domElement.tabIndex=0,P.domElement.className=`shallows-canvas`,te.appendChild(P.domElement);let F=new d,I=new y(.68,.82,.86);P.setClearColor(I,1),F.background=I,F.fog=new ne(I,30,85);let L=new u(52,D()/he(),.1,300);L.position.set(3.2,9.8,12);let R=new ie(L,P.domElement);R.target.set(0,.4,0),R.enableDamping=!0,R.dampingFactor=.08,R.enablePan=!1,R.enableZoom=!1,R.maxPolarAngle=p.degToRad(72),R.minPolarAngle=p.degToRad(8),R.minDistance=2.5,R.maxDistance=20,P.domElement.style.touchAction=`pan-y`,typeof R._onMouseWheel==`function`&&P.domElement.removeEventListener(`wheel`,R._onMouseWheel);let ye=new E(.5,.8,.3).normalize(),be=new ee(16772563,2.3);be.position.copy(ye).multiplyScalar(20),F.add(be);let xe=new g(12573183,7036751,1.15);F.add(xe);let z={value:0},Se={value:0},Ce={value:O.waterLevel},we={value:O.waveStrength},Te={value:0},Ee={value:new f},De={value:O.surf.height},Oe={value:new f(...O.surf.direction).normalize()},ke={chop:1,swell:1};function Ae(){let{interval:e,separation:t,speed:n}=O.surf,r=z.value+5,i=t=>(t%e+e)%e*n-e*n*.5;Ee.value.set(i(r),i(r-t))}function je(e){let t=O.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function Me(){let e=je(z.value);Te.value=e,ke.chop=.42+1.73*e,ke.swell=.75+.6*e}let Ne=new a({side:1,depthWrite:!1,uniforms:{uSunDir:{value:ye},uHorizonColor:{value:I},uNight:Se},vertexShader:`
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
      vec3 skyTop = mix(vec3(0.22, 0.52, 0.76), vec3(0.025, 0.075, 0.13), uNight);
      vec3 col = mix(uHorizonColor, skyTop, pow(t, 0.7)) * mix(1.15, .88, uNight);
      // A restrained warm band gives the water the late-day atmosphere of the
      // reference scenes without replacing Out of Office's cool palette.
      float horizonGlow = pow(1.0 - t, 7.0) * 0.14;
      col += vec3(1.0, 0.55, 0.30) * horizonGlow * (1.0 - uNight);
      col += vec3(1.0, 0.96, 0.88) * pow(max(dot(d, uSunDir), 0.0), 380.0) * mix(1.2, .12, uNight);
      col += vec3(1.0, 0.90, 0.78) * pow(max(dot(d, uSunDir), 0.0), 12.0) * mix(.18, .03, uNight);
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}),Pe=new de(new o(180,32,16),Ne);Pe.renderOrder=-1,Pe.layers.enable(1),F.add(Pe);let B=null,Fe=!!S,Ie=0,Le=0,Re=-1/0;function ze(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=O.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=p.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+O.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let m=t.createGain();m.gain.value=0;let h=t.createDynamicsCompressor();return h.threshold.value=-12,h.knee.value=20,h.ratio.value=8,a.connect(o).connect(s).connect(c).connect(m),a.connect(l).connect(u).connect(d).connect(f).connect(m),m.connect(h).connect(t.destination),a.playbackRate.value=O.speed,a.start(0,z.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:m,limiter:h}}catch(e){try{t.close()}catch{}throw e}}function Be(){return Fe&&_n&&!M}function Ve(){if(!M&&(Fe=!1,T({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),B)){B.master.gain.setValueAtTime(0,B.context.currentTime);try{B.context.suspend()}catch{}}}function He(e=!1){if(!B||!Be()||B.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=B,c=t.currentTime;if(!e&&c-Re<.05)return;Re=c;let[l,u]=O.surf.direction,d=Math.hypot(l,u),f=(L.position.x*l+L.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=Te.value,h=p(Ee.value.x-f)+.78*p(Ee.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function Ue(){if(!B||B.context.state===`closed`)return;let e=++Ie;clearTimeout(Le);let{context:t,master:n}=B;Be()?t.resume().then(()=>{e!==Ie||!Be()||(He(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(k===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===Ie&&Ve()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Le=setTimeout(()=>{if(e===Ie&&!Be()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function We(){if(++Ie,clearTimeout(Le),!B)return;let{context:e,source:t}=B;try{t.stop()}catch{}for(let e of Object.values(B))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}B=null}function Ge(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Ke(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new y(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new x(i,3))}return n}function qe(e,t=16777215){let n=e.map(e=>Ke(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new _;return c.setAttribute(`position`,new x(i,3)),c.setAttribute(`normal`,new x(a,3)),c.setAttribute(`color`,new x(o,3)),c}function V(e,t){let n=new _;return n.setAttribute(`position`,new w(e.flat(),3)),n.computeVertexNormals(),Ke(n,t)}function Je(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let Ye=document.createElement(`canvas`);Ye.width=Ye.height=1024;let Xe=Ye.getContext(`2d`);Xe.fillStyle=`#fff`,Xe.fillRect(0,0,1024,1024);let Ze=new ae(Ye);Ze.flipY=!1;function Qe(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function n(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=(t*128+r)*4;e[i]=Math.round(n(r,t,16)*255),e[i+1]=Math.round(n(r,t,64)*255),e[i+2]=Math.round(n(r,t,32)*255),e[i+3]=255}let r=new le(e,128,128);return r.wrapS=r.wrapT=l,r.magFilter=v,r.minFilter=fe,r.generateMipmaps=!0,r.needsUpdate=!0,r}let $e=Qe();function et(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=z,e.uniforms.uWaterLevel=Ce,t&&(e.uniforms.tBedShade={value:Ze}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      }`)),e.fragmentShader=n}}let tt=new e(40,40,96,96);tt.rotateX(-Math.PI/2),Ge(tt);{let e=tt.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,Je(e.getX(t),e.getZ(t)));tt.computeVertexNormals()}let nt=new i({color:15917244,roughness:.94});nt.toneMapped=!1,et(nt,!0),F.add(new de(tt,nt));function rt(e){let t=new o(e,32,20),n=t.attributes.position,r=new E;for(let e=0;e<n.count;e++){r.fromBufferAttribute(n,e);let t=.87+.1*Math.sin(r.x*3.1)*Math.sin(r.z*4.2+r.y*2.7)+.045*Math.cos(r.x*7.2+r.z*5.3)*Math.sin(r.y*6.8);r.multiplyScalar(t),n.setXYZ(e,r.x,r.y*.7,r.z)}return t.computeVertexNormals(),t}let it=[11576468,11050380,12562844,9804434,13088928],at=O.seed;function H(){return at=Math.imul(at,1664525)+1013904223>>>0,at/4294967296}let ot=new i({roughness:.78,flatShading:!1});ot.toneMapped=!1,et(ot);let U=new pe(rt(1),ot,O.rocks+3);U.name=`Stones`;let st=new r,ct=new y,lt=0,ut=[];function dt(e,t,n){let r=n*1.2+.22;ut.push({x:e,z:t,radius:r,radius2:r*r}),st.position.set(e,Je(e,t)+n*.28,t),st.rotation.set(H()*.6,H()*Math.PI*2,H()*.5),st.scale.set(n*(.85+H()*.3),n,n*(.8+H()*.4)),st.updateMatrix(),U.setMatrixAt(lt,st.matrix),U.setColorAt(lt++,ct.setHex(it[Math.floor(H()*it.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=Xe.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),Xe.fillStyle=s,Xe.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<O.rocks;e++){let e=H()*Math.PI*2,t=4.6+H()*7;dt(Math.cos(e)*t,Math.sin(e)*t,.1+H()**2*.75)}dt(-4.8,.4,1.55),dt(4.6,-2.8,1.6),dt(-1.8,-5,1.45),U.instanceMatrix.needsUpdate=!0,U.instanceColor.needsUpdate=!0,U.computeBoundingSphere(),F.add(U),Ze.needsUpdate=!0;let ft=[];{let e=new o(1,20,14);e.scale(.31,.1,.085);let t=e.attributes.position,n=[];for(let e=0;e<t.count;e++){let r=p.smoothstep(t.getY(e),-.06,.07),i=new y(15660252).lerp(new y(6990767),r),a=Math.exp(-((t.getY(e)/.02)**2));i.lerp(new y(15782036),a*.55),n.push(i.r,i.g,i.b)}e.setAttribute(`color`,new w(n,3)),ft.push(e)}ft.push(V([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),ft.push(V([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){ft.push(V([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let t=new o(.023,10,8);t.translate(.223,.033,e*.064),ft.push(Ke(t,925474));let n=new o(.009,8,6);n.translate(.229,.04,e*.08),ft.push(Ke(n,16773320))}let pt=qe(ft),mt=new Float32Array(30);for(let e=0;e<30;e++)mt[e]=H()*Math.PI*2;pt.setAttribute(`aPhase`,new ue(mt,1));let ht=new i({vertexColors:!0,roughness:.42,metalness:.05,side:2});ht.toneMapped=!1,ht.onBeforeCompile=e=>{e.uniforms.uFishTime=z,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},ht.customProgramCacheKey=()=>`cove-fish-dimensional`;let W=new pe(pt,ht,30);W.name=`Three schools of reef fish`,W.frustumCulled=!1,W.instanceMatrix.setUsage(oe),F.add(W);let gt=document.createElement(`canvas`);gt.width=gt.height=64;let _t=gt.getContext(`2d`),vt=_t.createRadialGradient(32,32,3,32,32,32);vt.addColorStop(0,`rgba(11,36,30,.38)`),vt.addColorStop(.45,`rgba(11,36,30,.20)`),vt.addColorStop(1,`rgba(11,36,30,0)`),_t.fillStyle=vt,_t.fillRect(0,0,64,64);let yt=new ae(gt),bt=new m({map:yt,transparent:!0,opacity:.34,depthWrite:!1});bt.toneMapped=!1;let xt=new e(1.15,.42);xt.rotateX(-Math.PI/2);let St=new pe(xt,bt,30);St.frustumCulled=!1,F.add(St);let Ct=[],G=new r;for(let e=0;e<30;e++){let t=Math.floor(e/3);Ct.push({school:e%3,phase:H()*.035,trail:Math.floor(t/3)*.72,spread:(t%3-1)*.48+(H()-.5)*.1,scale:.85+H()*.35}),W.setColorAt(e,new y(e%9==0?16045466:16777215))}W.instanceColor.needsUpdate=!0;let K={value:new t(0,0,-100,0)},wt={value:new t(0,0,1,0)},Tt=new E,Et=new E;function Dt(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-K.value.z,o=n.x-K.value.x,s=n.z-K.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<ut.length;e++){let t=ut[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=Te.value;return n.y=Je(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function Ot(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-K.value.z;if(o>=0&&o<4){let e=Tt,t=e.x-K.value.x,r=e.z-K.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function kt(){for(let e=0;e<30;e++){let t=Ct[e];Dt(t,z.value,Tt),Ot(t,z.value,Et),G.position.copy(Tt),G.rotation.set(0,-Math.atan2(Et.z,Et.x),0),G.scale.setScalar(t.scale),G.updateMatrix(),W.setMatrixAt(e,G.matrix),G.position.x-=.13,G.position.z-=.08,G.position.y-=.5,G.rotation.set(0,0,0),G.updateMatrix(),St.setMatrixAt(e,G.matrix)}W.instanceMatrix.needsUpdate=!0,St.instanceMatrix.needsUpdate=!0}let q=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];q.push(V([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),q.push(V([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),q.push(V([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),q.push(V([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),q.push(V([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),q.push(V([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),q.push(V([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let At=qe(q),jt=new i({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});jt.toneMapped=!1;let Mt=new de(At,jt);Mt.name=`Pink folded paper boat`,F.add(Mt);let Nt=new e(1.5,2.6);Nt.rotateX(-Math.PI/2);let Pt=new de(Nt,bt);F.add(Pt);let Ft=ve();Ft.name=`Polyfork low-poly sailboat`,Ft.scale.setScalar(4.6),Ft.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)}),F.add(Ft);function It(){let e=[],t=[],n=new y;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new _;return a.setAttribute(`position`,new w(e,3)),a.setAttribute(`color`,new w(t,3)),a.computeVertexNormals(),a}let Lt=new i({vertexColors:!0,roughness:.72,side:2});Lt.toneMapped=!1;let Rt=new pe(It(),Lt,24);Rt.name=`Ribbed scallop shells`;let J=new r;for(let e=0;e<24;e++){let t=H()*6.283,n=4+H()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;J.position.set(r,Je(r,i)+.025,i),J.rotation.set(0,H()*6.283,0),J.scale.setScalar(.55+H()*.6),J.updateMatrix(),Rt.setMatrixAt(e,J.matrix)}F.add(Rt);let zt=[],Bt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=Bt(t,e/6),r=Bt(t,(e+1)/6),i=Bt(t+1,(e+1)/6),a=Bt(t+1,e/6);zt.push(...n,...i,...r,...n,...a,...i)}let Vt=new _;Vt.setAttribute(`position`,new w(zt,3)),Vt.computeVertexNormals();let Ht=new i({color:14711368,roughness:.94,side:2});Ht.toneMapped=!1;let Ut=new pe(Vt,Ht,6);Ut.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{J.position.set(e,Je(e,t)+.04,t),J.rotation.set(0,n*1.7,0),J.scale.setScalar(.8+H()*.5),J.updateMatrix(),Ut.setMatrixAt(n,J.matrix)}),F.add(Ut);let Wt=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),Gt=[1,.78],Kt=new E,Y=new E,qt=new E,Jt=new n;function Yt(){let e=z.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=Oe.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=ke.chop;for(let r=0;r<4;r++){let i=Wt[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=we.value;c*=f,l*=f,u*=f;let p=ke.swell,m=t*i+n*a,h=t*o+n*s,g=.32*Math.sin(h*.48),_=Ee.value.x,v=Ee.value.y,y=O.surf.width*O.surf.width,b=i+o*.1536*Math.cos(h*.48),ee=a+s*.1536*Math.cos(h*.48),te=De.value*p;for(let e=0;e<2;e++){let t=e===0?_:v,n=Gt[e],r=m+g-t,i=r+2,a=Math.exp(-r*r/y),o=Math.exp(-i*i/(3*y));c+=n*(a-.24*o)*te;let s=n*(-2*r/y*a+.16*i/y*o)*te;l+=s*b,u+=s*ee}Kt.set(-l,1,-u).normalize(),Y.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),wt.value.set(t,n,Y.x,Y.z),Y.addScaledVector(Kt,-Y.dot(Kt)).normalize(),Mt.position.set(t,Ce.value+c+.11,n),qt.crossVectors(Kt,Y),Jt.makeBasis(qt,Kt,Y),Mt.quaternion.setFromRotationMatrix(Jt),Pt.position.set(t-.5,Je(t-.5,n-.3)+.028,n-.3),Pt.rotation.y=Math.atan2(Y.x,Y.z);let ne=-2.6+Math.sin(e*.045+1.8)*1.05,x=-1.85+Math.cos(e*.045+1.8)*.82,S=.16*Math.sin(e*.82+ne*.8)+.08*Math.sin(e*1.35+x*.65);Ft.position.set(ne,Ce.value+S+.12,x),Ft.rotation.set(.025*Math.sin(e*.62),Math.atan2(Math.cos(e*.045+1.8),-Math.sin(e*.045+1.8))+.32,.035*Math.cos(e*.54+.7))}let X=new h(1,1);X.depthTexture=new b(1,1),X.texture.generateMipmaps=!1,P.capabilities.isWebGL2;let Xt=new a({uniforms:{uTime:z,uTouch:K,uWake:wt,uWaveStrength:we,uWaveEnvelope:Te,uSurfFront:Ee,uSurfDirection:Oe,uSurfHeight:De,uSurfWidth:{value:O.surf.width},tRefraction:{value:X.texture},tDepth:{value:X.depthTexture},tFoam:{value:$e},uNear:{value:L.near},uFar:{value:L.far},uSunDir:{value:ye},uAbsorption:{value:new E(...O.absorption)},uDeepColor:{value:new y(...O.deepColor)},uSssColor:{value:new y(...O.sssColor)},uHorizonColor:{value:I},uNight:Se,uTexel:{value:new f(1,1)}},vertexShader:`
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
  uniform float uNight;
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
    vec3 skyTop = mix(vec3(0.22, 0.52, 0.76), vec3(0.025, 0.075, 0.13), uNight);
    vec3 col = mix(uHorizonColor, skyTop, pow(t, 0.7)) * mix(1.15, .88, uNight);
    float horizonGlow = pow(1.0 - t, 7.0) * 0.14;
    col += vec3(1.0, 0.55, 0.30) * horizonGlow * (1.0 - uNight);
    col += vec3(1.0, 0.96, 0.88) * pow(max(dot(d, uSunDir), 0.0), 380.0) * mix(1.2, .12, uNight);
    col += vec3(1.0, 0.90, 0.78) * pow(max(dot(d, uSunDir), 0.0), 12.0) * mix(.18, .03, uNight);
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
`});function Zt(t){let n=new e(40,40,t,t);return n.rotateX(-Math.PI/2),Ge(n),n}let Qt=new de(Zt(A.segments),Xt);Qt.position.y=Ce.value,Qt.layers.set(1),F.add(Qt);let $t=new y(.68,.82,.86),en=new y(.035,.075,.12),tn=new y(...O.deepColor),nn=new y(.025,.13,.18),rn=new y(...O.sssColor),an=new y(.1,.23,.27);function on(){let e=document.documentElement.dataset.theme===`dark`;Se.value=+!!e,I.copy(e?en:$t),F.background=I,F.fog.color.copy(I),Xt.uniforms.uDeepColor.value.copy(e?nn:tn),Xt.uniforms.uSssColor.value.copy(e?an:rn),be.color.set(e?9349584:16772563),be.intensity=e?.62:2.3,xe.color.set(e?2308962:12573183),xe.groundColor.set(e?1120804:7036751),xe.intensity=e?.72:1.15}let sn=new MutationObserver(on);sn.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),on();let cn=new f,Z=1,Q=[],ln=0;function un(){return k===`explore`?A.refraction:.65}function dn(){if(M||N)return;L.aspect=D()/he(),L.updateProjectionMatrix();let e=k!==`explore`,t=e?1.25:A.dpr,n=A.pixels*(e?.8:1);P.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(D()*he())))),P.setSize(D(),he()),P.getDrawingBufferSize(cn);let r=un()*Z;P.capabilities.isWebGL2,X.samples!==0&&(X.dispose(),X.samples=0),X.setSize(Math.max(1,Math.floor(cn.x*r)),Math.max(1,Math.floor(cn.y*r))),Xt.uniforms.uTexel.value.set(1/X.width,1/X.height),Sn()}function fn(e){let t=O.dynamicScale;if(!t.enabled||e<=0||e>80||(Q.push(e),Q.length>t.sampleCount&&Q.shift(),Q.length<t.sampleCount))return;let n=performance.now();if(n-ln<t.cooldownMs)return;let r=0;for(let e=0;e<Q.length;e++)r+=Q[e];let i=r/Q.length,a=Z;i>t.targetMs*1.35&&Z>t.min?a=Math.max(t.min,Z-.1):i<t.targetMs*.85&&Z<t.max&&(a=Math.min(t.max,Z+.05)),a===Z?ln=n:(Z=a,dn(),Q.length=0,ln=n)}function pn(){let e=R.enableDamping;R.enableDamping=!1,R.update(),R.target.set(0,.4,0),L.position.set(...k===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),R.update(),R.enableDamping=e,Sn()}function mn(e=k){k=e===`explore`?`explore`:`preview`,R.enabled=k===`explore`,P.domElement.tabIndex=k===`explore`?0:-1,P.domElement.setAttribute(`aria-hidden`,String(k!==`explore`)),P.domElement.style.touchAction=k===`explore`?`pan-y`:`auto`,we.value=O.waveStrength*(k===`explore`?1:.55),De.value=O.surf.height*(k===`explore`?1:.75),pn(),dn(),Cn()}let hn=0,gn=0,_n=!1,vn=!1;function yn(){vn||(vn=!0,ce())}function bn(){M||N||(R.enabled&&R.update(),Ae(),Me(),Yt(),kt(),He(),L.layers.set(0),P.setRenderTarget(X),P.render(F,L),L.layers.set(1),P.setRenderTarget(null),P.render(F,L),L.layers.set(0))}function xn(e){let t=hn?Math.min((e-hn)/1e3,.1):0;hn=e,z.value+=t*O.speed,fn(t*1e3),bn()}function Sn(){M||N||_n||gn||document.hidden||!_e||(gn=requestAnimationFrame(()=>{gn=0,!document.hidden&&_e&&bn()}))}function Cn(){M||(_n=!j&&!document.hidden&&_e&&!N,R.enableDamping=!j,hn=0,P.setAnimationLoop(_n?xn:null),_n&&gn&&(cancelAnimationFrame(gn),gn=0),Ue(),Sn())}let wn=new AbortController,Tn=new c,En=new re(new E(0,1,0),-O.waterLevel),Dn=new E,On=null,kn=0,An=0;P.domElement.addEventListener(`pointerdown`,e=>{yn(),On={x:e.clientX,y:e.clientY}},{signal:wn.signal}),P.domElement.addEventListener(`pointerup`,e=>{if(k!==`explore`||!On||Math.hypot(e.clientX-On.x,e.clientY-On.y)>7){On=null;return}let t=P.domElement.getBoundingClientRect();if(Tn.setFromCamera(new f((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),L),Tn.intersectObject(Mt,!1).length){let e=performance.now();kn=e-An>3e3?1:kn+1,An=e,kn>=10&&(kn=0,me())}Tn.ray.intersectPlane(En,Dn)&&(K.value.set(Dn.x,Dn.z,z.value,1),Sn()),On=null},{signal:wn.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:wn.signal})}let jn=new ResizeObserver(()=>dn());jn.observe(te),$(document,`visibilitychange`,Cn),$(ge,`change`,()=>{j=ge.matches,Cn()}),R.addEventListener(`change`,Sn),$(P.domElement,`keydown`,e=>{if(k!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),yn();let t=L.position.clone().sub(R.target),n=new s().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=p.clamp(n.phi,R.minPolarAngle,R.maxPolarAngle),L.position.copy(R.target).add(t.setFromSpherical(n)),R.update(),Sn()});let Mn=new IntersectionObserver(e=>{_e=e[0].isIntersecting,Cn()});Mn.observe(P.domElement),$(P.domElement,`webglcontextlost`,e=>{e.preventDefault(),N=!0,Cn(),T({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(P.domElement,`webglcontextrestored`,()=>{N=!1,T({kind:`ready`}),dn(),Cn()});function Nn(){if(!M){M=!0,We(),P.setAnimationLoop(null),cancelAnimationFrame(gn),Mn.disconnect(),jn.disconnect(),sn.disconnect(),wn.abort(),R.removeEventListener(`change`,Sn),R.dispose(),F.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{U.dispose()}catch{}try{W.dispose()}catch{}try{St.dispose()}catch{}try{Rt.dispose()}catch{}try{Ut.dispose()}catch{}try{yt.dispose()}catch{}try{Ze.dispose()}catch{}try{$e.dispose()}catch{}try{X.dispose()}catch{}try{P.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(P.setAnimationLoop(null),_n=!1,Ue()):Nn()}),$(window,`pageshow`,e=>{e.persisted&&Cn()}),mn(),bn(),T({kind:`ready`});function Pn(){if(!(!Fe||M))try{B||=ze(),Ue()}catch{Ve()}}return $(window,`pointerdown`,Pn),$(window,`keydown`,Pn),navigator.userActivation?.hasBeenActive&&Pn(),{setMode:mn,resetView:pn,setSound(e){Fe=!!e,Fe?Pn():Ue()},dispose:Nn}}export{F as createShallows};