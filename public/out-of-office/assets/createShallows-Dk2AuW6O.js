import{A as e,B as t,C as n,D as r,E as i,F as a,H as o,I as s,L as c,M as l,N as u,O as d,P as f,R as p,S as m,T as h,V as g,_,a as v,b as ee,c as y,d as b,f as te,g as x,h as ne,i as S,j as re,k as C,l as w,m as T,n as ie,o as ae,p as oe,r as se,s as ce,t as le,u as ue,v as de,w as fe,x as pe,y as E,z as D}from"./three-vendor-DpEbL_rG.js";var me=12597547,he=11105866,ge=15988214;function O(e,t,n,r){e.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2])}function k(e){let t=new v;return t.setAttribute(`position`,new T(e,3)),t}function A(e,t,n,r,i){let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=r[0]-t[0],l=r[1]-t[1],u=r[2]-t[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=(t[0]+n[0]+r[0])/3-i[0],h=(t[1]+n[1]+r[1])/3-i[1],g=(t[2]+n[2]+r[2])/3-i[2];d*m+f*h+p*g<0?O(e,t,r,n):O(e,t,n,r)}function j(e,t,n,r,i,a){A(e,t,n,r,a),A(e,t,r,i,a)}function M(e,t,n,r){O(e,t,n,r),O(e,t,r,n)}function N(e,t,n,r,i){M(e,t,n,r),M(e,t,r,i)}function _e(e,r,i,a){let o=new t(r[0]-e[0],r[1]-e[1],r[2]-e[2]),s=new w(i,i,o.length(),a,1,!0),c=new re().setFromUnitVectors(new t(0,1,0),o.clone().normalize()),l=new n().compose(new t((e[0]+r[0])/2,(e[1]+r[1])/2,(e[2]+r[2])/2),c,new t(1,1,1));return s.applyMatrix4(l)}function P(e,n,r,i){let a=new ce(r,i),o=new re().setFromUnitVectors(new t(0,0,1),new t(n[0],n[1],n[2]).normalize());return a.applyQuaternion(o),a.translate(e[0],e[1],e[2]),a}function ve(e,t){e=e.toNonIndexed(),e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let n=new y(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new S(i,3)),e}function ye(){let e=[],t=(t,n)=>e.push({g:t,c:n}),n=[-.0993,-.062,-.02,.022,.062,.096],r=[.038,.0445,.0457,.0445,.038,.024],a=[.0465,.043,.0417,.0417,.0435,.0465],o=[.03,.036,.037,.036,.03,.016],s=[.024,.019,.0175,.0175,.02,.026],c=[.014,.008,.006,.006,.009,.018],l=[.1242,.052,0],u=[.108,.03,0],d=n.length,f=[],p=[],m=[],h=[],g=[];for(let e=0;e<d;e++)f.push([n[e],a[e],r[e]]),p.push([n[e],s[e],o[e]]),m.push([n[e],c[e],0]),h.push([n[e],s[e],-o[e]]),g.push([n[e],a[e],-r[e]]);let _=[0,0,0],v=0;for(let e=0;e<d;e++)for(let t of[f[e],p[e],m[e],h[e],g[e]])_[0]+=t[0],_[1]+=t[1],_[2]+=t[2],v++;_[0]+=l[0],_[1]+=l[1],_[2]+=l[2],v++,_[0]+=u[0],_[1]+=u[1],_[2]+=u[2],v++,_[0]/=v,_[1]/=v,_[2]/=v;let ee=[],y=(e,t,n)=>A(ee,e,t,n,_),b=(e,t,n,r)=>j(ee,e,t,n,r,_);for(let e=0;e<d-1;e++)b(f[e],f[e+1],g[e+1],g[e]),b(f[e],f[e+1],p[e+1],p[e]),b(p[e],p[e+1],m[e+1],m[e]),b(g[e],g[e+1],h[e+1],h[e]),b(h[e],h[e+1],m[e+1],m[e]);y(f[d-1],l,g[d-1]),y(f[d-1],l,p[d-1]),y(p[d-1],l,u),y(p[d-1],u,m[d-1]),y(g[d-1],l,h[d-1]),y(h[d-1],l,u),y(h[d-1],u,m[d-1]),y(m[0],p[0],f[0]),y(m[0],f[0],g[0]),y(m[0],g[0],h[0]),t(k(ee),me);let te=[];N(te,[-.02,.011,0],[.048,.012,0],[.035,0,0],[-.005,0,0]),t(k(te),me);let ne=[];M(ne,[-.097,.03,0],[-.097,.012,0],[-.113,.004,0]),t(k(ne),me);let S=.0338;t(_e([S,.03,0],[S,.3,0],.0045,6),he),t(P([S,.3,0],[0,1,0],.0045,6),he);let re=[.0358,.058,0],C=[-.0715,.076,0];t(_e(re,C,.0032,6),he),t(P(C,[C[0]-re[0],C[1]-re[1],0],.0032,6),he);let w=[S,.294,0],T=[S,.0616,0],ie=[S,.22,0],ae=[S,.14,0],oe=e=>[w[0]+(C[0]-w[0])*e,w[1]+(C[1]-w[1])*e,0],se=oe(.318),ce=oe(.662),ue=[(ie[0]+se[0])/2,(ie[1]+se[1])/2,.018],de=[(ae[0]+ce[0])/2,(ae[1]+ce[1])/2,.022],pe=[(T[0]+C[0])/2,(T[1]+C[1])/2,.012],E=[];M(E,w,ie,ue),M(E,w,ue,se),N(E,ie,ae,de,ue),N(E,ue,de,ce,se),N(E,ae,T,pe,de),N(E,de,pe,C,ce),t(k(E),ge);let D=le(e.map(e=>ve(e.g,e.c)));D.computeBoundingBox();let O=D.boundingBox;D.translate(-(O.min.x+O.max.x)/2,-O.min.y,-(O.min.z+O.max.z)/2),D.computeVertexNormals();let ye=new fe(D,new i({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0,side:2})),F=new x;return F.add(ye),F}function F(x,{sound:re=!0,initialMode:w=`preview`,initialQuality:ce=`auto`,onStatus:le=()=>{},onInteract:me=()=>{},onBoatEgg:he=()=>{}}={}){var ge;let O=()=>Math.max(1,x.clientWidth),k=()=>Math.max(1,x.clientHeight),A={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},j=w===`explore`?`explore`:`preview`,M=A.quality.auto,N=matchMedia(`(prefers-reduced-motion: reduce)`),_e=N.matches,P=!1,ve=!0,F=!1,I;try{I=new se({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),le({kind:`failed`,message:`This browser could not start the water scene.`}),e}I.toneMapping=4,I.toneMappingExposure=1.08,I.outputColorSpace=f,I.setPixelRatio(Math.min(window.devicePixelRatio,M.dpr)),I.setSize(O(),k()),I.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),I.domElement.setAttribute(`role`,`img`),I.domElement.tabIndex=0,I.domElement.className=`shallows-canvas`,x.appendChild(I.domElement);let L=new a,be=new y(.68,.82,.86);I.setClearColor(be,1),L.background=be,L.fog=new ne(be,30,85);let R=new d(52,O()/k(),.1,300);R.position.set(3.2,9.8,12);let z=new ie(R,I.domElement);z.target.set(0,.4,0),z.enableDamping=!0,z.dampingFactor=.08,z.enablePan=!1,z.enableZoom=!1,z.maxPolarAngle=m.degToRad(72),z.minPolarAngle=m.degToRad(8),z.minDistance=2.5,z.maxDistance=20,I.domElement.style.touchAction=`pan-y`,typeof z._onMouseWheel==`function`&&I.domElement.removeEventListener(`wheel`,z._onMouseWheel);let xe=new t(.5,.8,.3).normalize(),Se=new te(16772563,2.3);Se.position.copy(xe).multiplyScalar(20),L.add(Se);let Ce=new _(12573183,7036751,1.15);L.add(Ce);let B={value:0},we={value:0},Te={value:0},Ee={value:A.waterLevel},De={value:A.waveStrength},Oe={value:0},ke={value:new D},Ae={value:A.surf.height},je={value:new D(...A.surf.direction).normalize()},Me={chop:1,swell:1};function Ne(){let{interval:e,separation:t,speed:n}=A.surf,r=B.value+5,i=t=>(t%e+e)%e*n-e*n*.5;ke.value.set(i(r),i(r-t))}function Pe(e){let t=A.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function Fe(){let e=Pe(B.value);Oe.value=e,Me.chop=.42+1.73*e,Me.swell=.75+.6*e}let Ie=new s({side:1,depthWrite:!1,uniforms:{uSunDir:{value:xe},uHorizonColor:{value:be},uNight:we},vertexShader:`
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
  `}),Le=new fe(new c(180,32,16),Ie);Le.renderOrder=-1,Le.layers.enable(1),L.add(Le);let V=null,Re=!!re,ze=0,Be=0,Ve=-1/0;function He(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=A.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=m.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+A.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let p=t.createGain();p.gain.value=0;let h=t.createDynamicsCompressor();return h.threshold.value=-12,h.knee.value=20,h.ratio.value=8,a.connect(o).connect(s).connect(c).connect(p),a.connect(l).connect(u).connect(d).connect(f).connect(p),p.connect(h).connect(t.destination),a.playbackRate.value=A.speed,a.start(0,B.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:p,limiter:h}}catch(e){try{t.close()}catch{}throw e}}function Ue(){return Re&&Pn&&!P}function We(){if(!P&&(Re=!1,le({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),V)){V.master.gain.setValueAtTime(0,V.context.currentTime);try{V.context.suspend()}catch{}}}function Ge(e=!1){if(!V||!Ue()||V.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=V,c=t.currentTime;if(!e&&c-Ve<.05)return;Ve=c;let[l,u]=A.surf.direction,d=Math.hypot(l,u),f=(R.position.x*l+R.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=Oe.value,h=p(ke.value.x-f)+.78*p(ke.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function Ke(){if(!V||V.context.state===`closed`)return;let e=++ze;clearTimeout(Be);let{context:t,master:n}=V;Ue()?t.resume().then(()=>{e!==ze||!Ue()||(Ge(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(j===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===ze&&We()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Be=setTimeout(()=>{if(e===ze&&!Ue()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function qe(){if(++ze,clearTimeout(Be),!V)return;let{context:e,source:t}=V;try{t.stop()}catch{}for(let e of Object.values(V))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}V=null}function Je(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Ye(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new y(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new S(i,3))}return n}function Xe(e,t=16777215){let n=e.map(e=>Ye(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new v;return c.setAttribute(`position`,new S(i,3)),c.setAttribute(`normal`,new S(a,3)),c.setAttribute(`color`,new S(o,3)),c}function H(e,t){let n=new v;return n.setAttribute(`position`,new T(e.flat(),3)),n.computeVertexNormals(),Ye(n,t)}function Ze(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let Qe=document.createElement(`canvas`);Qe.width=Qe.height=1024;let $e=Qe.getContext(`2d`);$e.fillStyle=`#fff`,$e.fillRect(0,0,1024,1024);let et=new ae(Qe);et.flipY=!1;function tt(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function n(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=(t*128+r)*4;e[i]=Math.round(n(r,t,16)*255),e[i+1]=Math.round(n(r,t,64)*255),e[i+2]=Math.round(n(r,t,32)*255),e[i+3]=255}let r=new ue(e,128,128);return r.wrapS=r.wrapT=u,r.magFilter=ee,r.minFilter=pe,r.generateMipmaps=!0,r.needsUpdate=!0,r}let nt=tt();function rt(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=B,e.uniforms.uWaterLevel=Ee,t&&(e.uniforms.tBedShade={value:et}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      }`)),e.fragmentShader=n}}let it=new e(40,40,96,96);it.rotateX(-Math.PI/2),Je(it);{let e=it.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,Ze(e.getX(t),e.getZ(t)));it.computeVertexNormals()}let at=new i({color:15917244,roughness:.94});at.toneMapped=!1,rt(at,!0),L.add(new fe(it,at));function ot(e){let n=new c(e,32,20),r=n.attributes.position,i=new t;for(let e=0;e<r.count;e++){i.fromBufferAttribute(r,e);let t=.87+.1*Math.sin(i.x*3.1)*Math.sin(i.z*4.2+i.y*2.7)+.045*Math.cos(i.x*7.2+i.z*5.3)*Math.sin(i.y*6.8);i.multiplyScalar(t),r.setXYZ(e,i.x,i.y*.7,i.z)}return n.computeVertexNormals(),n}let st=[11576468,11050380,12562844,9804434,13088928],ct=A.seed;function U(){return ct=Math.imul(ct,1664525)+1013904223>>>0,ct/4294967296}let lt=new i({roughness:.78,flatShading:!1});lt.toneMapped=!1,rt(lt);let W=new E(ot(1),lt,A.rocks+3);W.name=`Stones`;let ut=new r,dt=new y,ft=0,pt=[];function mt(e,t,n){let r=n*1.2+.22;pt.push({x:e,z:t,radius:r,radius2:r*r}),ut.position.set(e,Ze(e,t)+n*.28,t),ut.rotation.set(U()*.6,U()*Math.PI*2,U()*.5),ut.scale.set(n*(.85+U()*.3),n,n*(.8+U()*.4)),ut.updateMatrix(),W.setMatrixAt(ft,ut.matrix),W.setColorAt(ft++,dt.setHex(st[Math.floor(U()*st.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=$e.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),$e.fillStyle=s,$e.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<A.rocks;e++){let e=U()*Math.PI*2,t=4.6+U()*7;mt(Math.cos(e)*t,Math.sin(e)*t,.1+U()**2*.75)}mt(-4.8,.4,1.55),mt(4.6,-2.8,1.6),mt(-1.8,-5,1.45),W.instanceMatrix.needsUpdate=!0,W.instanceColor.needsUpdate=!0,W.computeBoundingSphere(),L.add(W),et.needsUpdate=!0;let ht=[];{let e=new c(1,20,14);e.scale(.31,.1,.085);let t=e.attributes.position,n=[];for(let e=0;e<t.count;e++){let r=m.smoothstep(t.getY(e),-.06,.07),i=new y(15660252).lerp(new y(6990767),r),a=Math.exp(-((t.getY(e)/.02)**2));i.lerp(new y(15782036),a*.55),n.push(i.r,i.g,i.b)}e.setAttribute(`color`,new T(n,3)),ht.push(e)}ht.push(H([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),ht.push(H([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){ht.push(H([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let t=new c(.023,10,8);t.translate(.223,.033,e*.064),ht.push(Ye(t,925474));let n=new c(.009,8,6);n.translate(.229,.04,e*.08),ht.push(Ye(n,16773320))}let gt=Xe(ht),_t=new Float32Array(30);for(let e=0;e<30;e++)_t[e]=U()*Math.PI*2;gt.setAttribute(`aPhase`,new de(_t,1));let vt=new i({vertexColors:!0,roughness:.42,metalness:.05,side:2});vt.toneMapped=!1,vt.onBeforeCompile=e=>{e.uniforms.uFishTime=B,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},vt.customProgramCacheKey=()=>`cove-fish-dimensional`;let G=new E(gt,vt,30);G.name=`Three schools of reef fish`,G.frustumCulled=!1,G.instanceMatrix.setUsage(oe),L.add(G);let yt=document.createElement(`canvas`);yt.width=yt.height=64;let bt=yt.getContext(`2d`),xt=bt.createRadialGradient(32,32,3,32,32,32);xt.addColorStop(0,`rgba(11,36,30,.38)`),xt.addColorStop(.45,`rgba(11,36,30,.20)`),xt.addColorStop(1,`rgba(11,36,30,0)`),bt.fillStyle=xt,bt.fillRect(0,0,64,64);let St=new ae(yt),Ct=new h({map:St,transparent:!0,opacity:.34,depthWrite:!1});Ct.toneMapped=!1;let wt=new e(1.15,.42);wt.rotateX(-Math.PI/2);let Tt=new E(wt,Ct,30);Tt.frustumCulled=!1,L.add(Tt);let Et=[],K=new r;for(let e=0;e<30;e++){let n=Math.floor(e/3);Et.push({school:e%3,phase:U()*.035,trail:Math.floor(n/3)*.72,spread:(n%3-1)*.48+(U()-.5)*.1,scale:.85+U()*.35,boid:U()<.72,anchor:new t,position:new t,velocity:new t,force:new t,initialized:!1}),G.setColorAt(e,new y(e%9==0?16045466:16777215))}G.instanceColor.needsUpdate=!0;let q={value:new g(0,0,-100,0)},Dt={value:new g(0,0,1,0)},Ot=new t,kt=new t,At=new t,jt=new t,Mt=new t,Nt=new t,Pt=-1;function Ft(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-q.value.z,o=n.x-q.value.x,s=n.z-q.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<pt.length;e++){let t=pt[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=Oe.value;return n.y=Ze(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function It(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-q.value.z;if(o>=0&&o<4){let e=Ot,t=e.x-q.value.x,r=e.z-q.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function Lt(){let e=Pt<0?.016:m.clamp(B.value-Pt,.008,.04);Pt=B.value;for(let e=0;e<30;e++){let t=Et[e];Ft(t,B.value,t.anchor),t.initialized||(t.position.copy(t.anchor),t.velocity.set(.08,0,.02),t.initialized=!0)}for(let t=0;t<30;t++){let n=Et[t];if(Ot.copy(n.anchor),n.boid){let r=1.05,i=2.1,a=0;jt.set(0,0,0),Mt.set(0,0,0),Nt.set(0,0,0),n.force.subVectors(n.anchor,n.position).multiplyScalar(1.65);for(let e=0;e<30;e++){if(t===e||Et[e].school!==n.school)continue;let o=Et[e];At.subVectors(n.position,o.position);let s=At.lengthSq();s<1e-4||s>i*i||(a++,jt.add(o.position),Mt.add(o.velocity),s<r*r&&Nt.addScaledVector(At,1/s))}a>0&&(jt.multiplyScalar(1/a).sub(n.position).multiplyScalar(.18),Mt.multiplyScalar(1/a).sub(n.velocity).multiplyScalar(.12),n.force.add(jt).add(Mt).addScaledVector(Nt,.08)),At.set(Math.sin(B.value*1.7+n.phase*31),Math.sin(B.value*2.3+n.phase*17)*.35,Math.cos(B.value*1.9+n.phase*23)).multiplyScalar(.045),n.force.add(At),n.velocity.addScaledVector(n.force,e).multiplyScalar(.992).clampLength(.055,.52),n.position.addScaledVector(n.velocity,e),Ot.copy(n.position)}else n.position.copy(n.anchor);It(n,B.value,kt),kt.x+=n.boid?n.velocity.x*.4:0,kt.z+=n.boid?n.velocity.z*.4:0,K.position.copy(Ot),K.rotation.set(0,-Math.atan2(kt.z,kt.x),0),K.scale.setScalar(n.scale),K.updateMatrix(),G.setMatrixAt(t,K.matrix),K.position.x-=.13,K.position.z-=.08,K.position.y-=.5,K.rotation.set(0,0,0),K.updateMatrix(),Tt.setMatrixAt(t,K.matrix)}G.instanceMatrix.needsUpdate=!0,Tt.instanceMatrix.needsUpdate=!0}let J=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];J.push(H([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),J.push(H([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),J.push(H([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),J.push(H([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),J.push(H([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),J.push(H([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),J.push(H([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let Rt=Xe(J),zt=new i({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});zt.toneMapped=!1;let Bt=new fe(Rt,zt);Bt.name=`Pink folded paper boat`,L.add(Bt);let Vt=new e(1.5,2.6);Vt.rotateX(-Math.PI/2);let Ht=new fe(Vt,Ct);L.add(Ht);let Ut=ye();Ut.name=`Polyfork low-poly sailboat`,Ut.scale.setScalar(4.6),Ut.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)}),L.add(Ut);function Wt(){let e=[],t=[],n=new y;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new v;return a.setAttribute(`position`,new T(e,3)),a.setAttribute(`color`,new T(t,3)),a.computeVertexNormals(),a}let Gt=new i({vertexColors:!0,roughness:.72,side:2});Gt.toneMapped=!1;let Kt=new E(Wt(),Gt,24);Kt.name=`Ribbed scallop shells`;let Y=new r;for(let e=0;e<24;e++){let t=U()*6.283,n=4+U()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;Y.position.set(r,Ze(r,i)+.025,i),Y.rotation.set(0,U()*6.283,0),Y.scale.setScalar(.55+U()*.6),Y.updateMatrix(),Kt.setMatrixAt(e,Y.matrix)}L.add(Kt);let qt=[],Jt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=Jt(t,e/6),r=Jt(t,(e+1)/6),i=Jt(t+1,(e+1)/6),a=Jt(t+1,e/6);qt.push(...n,...i,...r,...n,...a,...i)}let Yt=new v;Yt.setAttribute(`position`,new T(qt,3)),Yt.computeVertexNormals();let Xt=new i({color:14711368,roughness:.94,side:2});Xt.toneMapped=!1;let Zt=new E(Yt,Xt,6);Zt.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{Y.position.set(e,Ze(e,t)+.04,t),Y.rotation.set(0,n*1.7,0),Y.scale.setScalar(.8+U()*.5),Y.updateMatrix(),Zt.setMatrixAt(n,Y.matrix)}),L.add(Zt);let Qt=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),$t=[1,.78],en=new t,X=new t,tn=new t,nn=new n;function rn(){let e=B.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=je.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=Me.chop;for(let r=0;r<4;r++){let i=Qt[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=De.value;c*=f,l*=f,u*=f;let p=Me.swell,h=t*i+n*a,g=t*o+n*s,_=.32*Math.sin(g*.48),v=ke.value.x,ee=ke.value.y,y=A.surf.width*A.surf.width,b=i+o*.1536*Math.cos(g*.48),te=a+s*.1536*Math.cos(g*.48),x=Ae.value*p;for(let e=0;e<2;e++){let t=e===0?v:ee,n=$t[e],r=h+_-t,i=r+2,a=Math.exp(-r*r/y),o=Math.exp(-i*i/(3*y));c+=n*(a-.24*o)*x;let s=n*(-2*r/y*a+.16*i/y*o)*x;l+=s*b,u+=s*te}en.set(-l,1,-u).normalize(),X.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),Dt.value.set(t,n,X.x,X.z),X.addScaledVector(en,-X.dot(en)).normalize(),Bt.position.set(t,Ee.value+c+.11,n),tn.crossVectors(en,X),nn.makeBasis(tn,en,X),Bt.quaternion.setFromRotationMatrix(nn),Ht.position.set(t-.5,Ze(t-.5,n-.3)+.028,n-.3),Ht.rotation.y=Math.atan2(X.x,X.z);{let t=e*.065+1.8,n=-2.6+i*Math.sin(t)*1.05+o*Math.cos(t)*.28,r=-1.85+a*Math.sin(t)*1.05+s*Math.cos(t)*.28,c=0,l=0,u=0;for(let t of Qt){let i=(n*t.nx+r*t.nz)*t.f+e*t.speed,a=Math.sin(i),o=Math.cos(i);c+=t.amp*Me.chop*a,l+=t.nx*t.f*t.amp*Me.chop*o,u+=t.nz*t.f*t.amp*Me.chop*o}let d=De.value*(1-m.smoothstep(Math.hypot(n,r),18,65));c*=d,l*=d,u*=d;let f=1-m.smoothstep(Math.hypot(n,r),3,12),p=.6+1.2*Oe.value;for(let[t,i,a,o,s]of[[.9,.7,11,.003,5.4],[-.6,.9,16,.002,6.8],[.3,-.95,23,.0012,8.6]]){let d=Math.hypot(t,i),m=t/d,h=i/d,g=(n*m+r*h)*a+e*s;c+=o*p*Math.sin(g)*f;let _=o*p*a*Math.cos(g)*f;l+=m*_,u+=h*_}let h=n*i+r*a,g=n*o+r*s,_=.32*Math.sin(g*.48),v=i+o*.1536*Math.cos(g*.48),ee=a+s*.1536*Math.cos(g*.48),y=Me.swell,b=A.surf.width**2,te=1-m.smoothstep(Math.abs(h),13,23),x=Ae.value*y*te;for(let e=0;e<2;e++){let t=$t[e],n=h+_-(e?ke.value.y:ke.value.x),r=n+2,i=Math.exp(-n*n/b),a=Math.exp(-r*r/(3*b));c+=t*(i-.24*a)*x;let o=t*(-2*n/b*i+.16*r/b*a)*x;l+=o*v,u+=o*ee}let ne=en.set(-l,1,-u).normalize();X.set(i,0,a).addScaledVector(ne,-X.dot(ne)).normalize(),Ut.position.set(n,Ee.value+c+.12,r),tn.crossVectors(ne,X),nn.makeBasis(tn,ne,X),Ut.quaternion.setFromRotationMatrix(nn)}}let an=`
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
`,on=`
  uniform vec4 uTouch;
  uniform vec4 uWake;
  uniform float uTime;
  uniform float uWaveStrength;
  uniform float uWaveEnvelope;
  uniform float uLowQuality;
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

    // Low mode keeps the same scene composition and boats, but avoids the
    // expensive refraction, foam, and reflection sampling on weak GPUs.
    if (uLowQuality > 0.5) {
      float light = 0.55 + 0.45 * max(dot(normalize(vNormalW), normalize(uSunDir)), 0.0);
      vec3 lowWater = mix(vec3(0.10, 0.34, 0.38), vec3(0.34, 0.62, 0.60), light);
      lowWater = mix(lowWater, vec3(0.025, 0.13, 0.18), uNight * 0.55);
      float glint = pow(max(dot(normalize(vNormalW), normalize(uSunDir)), 0.0), 18.0);
      // Keep the low-cost surface, but retain the scene underneath it so the
      // paper boat, Polyfork boat, fish, rocks, and seabed do not disappear.
      vec2 lowUv = clamp(vClipPos.xy / vClipPos.w * 0.5 + 0.5, uTexel, 1.0 - uTexel);
      vec3 sceneUnder = texture2D(tRefraction, lowUv).rgb;
      vec3 lowCol = mix(sceneUnder, lowWater, 0.42) + vec3(0.72, 0.86, 0.78) * glint * 0.12;
      gl_FragColor = vec4(lowCol, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      return;
    }

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
`,Z=new o(1,1);Z.depthTexture=new b(1,1),Z.texture.generateMipmaps=!1,I.capabilities.isWebGL2;let sn=new s({uniforms:{uTime:B,uTouch:q,uWake:Dt,uWaveStrength:De,uWaveEnvelope:Oe,uLowQuality:Te,uSurfFront:ke,uSurfDirection:je,uSurfHeight:Ae,uSurfWidth:{value:A.surf.width},tRefraction:{value:Z.texture},tDepth:{value:Z.depthTexture},tFoam:{value:nt},uNear:{value:R.near},uFar:{value:R.far},uSunDir:{value:xe},uAbsorption:{value:new t(...A.absorption)},uDeepColor:{value:new y(...A.deepColor)},uSssColor:{value:new y(...A.sssColor)},uHorizonColor:{value:be},uNight:we,uTexel:{value:new D(1,1)}},vertexShader:an,fragmentShader:on});function cn(t){let n=new e(40,40,t,t);return n.rotateX(-Math.PI/2),Je(n),n}let ln=new fe(new e(1200,1200),new h({color:new y(.12,.29,.32),toneMapped:!1}));ln.name=`Ocean edge fill`,ln.rotation.x=-Math.PI/2,ln.position.y=Ee.value-1.2,ln.layers.set(1),L.add(ln);let un=new fe(cn(M.segments),sn);un.position.y=Ee.value,un.layers.set(1),L.add(un);let dn=new s({uniforms:sn.uniforms,vertexShader:an,fragmentShader:on,side:2}),fn=new fe(cn(28),dn);fn.name=`Low-poly water surface`,fn.position.y=Ee.value,fn.layers.set(1),fn.visible=!1,L.add(fn);function pn(){let e=Number(navigator.deviceMemory||0),t=Number(navigator.hardwareConcurrency||0);return I.capabilities.maxTextureSize<4096||e>0&&e<=2||t>0&&t<=2}let Q=ce===`low`||ce===`auto`&&pn()?`low`:`rich`;function mn(e=Q){Q=e===`low`?`low`:`rich`,Te.value=+(Q===`low`),un.visible=Q===`rich`,fn.visible=Q===`low`,le({kind:`quality`,quality:Q}),On(),zn()}let hn=new y(.68,.82,.86),gn=new y(.035,.075,.12),_n=new y(...A.deepColor),vn=new y(.025,.13,.18),yn=new y(...A.sssColor),bn=new y(.1,.23,.27);function xn(){let e=document.documentElement.dataset.theme===`dark`;we.value=+!!e,be.copy(e?gn:hn),L.background=be,L.fog.color.copy(be),sn.uniforms.uDeepColor.value.copy(e?vn:_n),sn.uniforms.uSssColor.value.copy(e?bn:yn),Se.color.set(e?9349584:16772563),Se.intensity=e?.62:2.3,Ce.color.set(e?2308962:12573183),Ce.groundColor.set(e?1120804:7036751),Ce.intensity=e?.72:1.15}let Sn=new MutationObserver(xn);Sn.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),xn();let Cn=new D,wn=1,Tn=[],En=0;function Dn(){return j===`explore`?M.refraction:.65}function On(){if(P||F)return;R.aspect=O()/k(),R.updateProjectionMatrix();let e=j!==`explore`,t=e?1.25:M.dpr,n=M.pixels*(e?.8:1);I.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(O()*k())))),I.setSize(O(),k()),I.getDrawingBufferSize(Cn);let r=Dn()*wn;I.capabilities.isWebGL2,Z.samples!==0&&(Z.dispose(),Z.samples=0),Z.setSize(Math.max(1,Math.floor(Cn.x*r)),Math.max(1,Math.floor(Cn.y*r))),sn.uniforms.uTexel.value.set(1/Z.width,1/Z.height),zn()}function kn(e){let t=A.dynamicScale;if(!t.enabled||e<=0||e>80||(Tn.push(e),Tn.length>t.sampleCount&&Tn.shift(),Tn.length<t.sampleCount))return;let n=performance.now();if(n-En<t.cooldownMs)return;let r=0;for(let e=0;e<Tn.length;e++)r+=Tn[e];let i=r/Tn.length,a=wn;i>t.targetMs*1.35&&wn>t.min?a=Math.max(t.min,wn-.1):i<t.targetMs*.85&&wn<t.max&&(a=Math.min(t.max,wn+.05)),a===wn?En=n:(wn=a,On(),Tn.length=0,En=n)}function An(){let e=z.enableDamping;z.enableDamping=!1,z.update(),z.target.set(0,.4,0),R.position.set(...j===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),z.update(),z.enableDamping=e,zn()}function jn(e=j){j=e===`explore`?`explore`:`preview`,z.enabled=j===`explore`,I.domElement.tabIndex=j===`explore`?0:-1,I.domElement.setAttribute(`aria-hidden`,String(j!==`explore`)),I.domElement.style.touchAction=j===`explore`?`pan-y`:`auto`,De.value=A.waveStrength*(j===`explore`?1:.55),Ae.value=A.surf.height*(j===`explore`?1:.75),An(),On(),Bn()}let Mn=0,Nn=0,Pn=!1,Fn=!1;function In(){Fn||(Fn=!0,me())}function Ln(){P||F||(z.enabled&&z.update(),Ne(),Fe(),rn(),Lt(),Ge(),R.layers.set(0),I.setRenderTarget(Z),I.render(L,R),R.layers.set(1),I.setRenderTarget(null),I.render(L,R),R.layers.set(0))}function Rn(e){let t=Mn?Math.min((e-Mn)/1e3,.1):0;Mn=e,B.value+=t*A.speed,kn(t*1e3),Ln()}function zn(){P||F||Pn||Nn||document.hidden||!ve||(Nn=requestAnimationFrame(()=>{Nn=0,!document.hidden&&ve&&Ln()}))}function Bn(){P||(Pn=!_e&&!document.hidden&&ve&&!F,z.enableDamping=!_e,Mn=0,I.setAnimationLoop(Pn?Rn:null),Pn&&Nn&&(cancelAnimationFrame(Nn),Nn=0),Ke(),zn())}let Vn=new AbortController,Hn=new l,Un=new C(new t(0,1,0),-A.waterLevel),Wn=new t,Gn=null,Kn=0,qn=0;I.domElement.addEventListener(`pointerdown`,e=>{In(),Gn={x:e.clientX,y:e.clientY}},{signal:Vn.signal}),I.domElement.addEventListener(`pointerup`,e=>{if(j!==`explore`||!Gn||Math.hypot(e.clientX-Gn.x,e.clientY-Gn.y)>7){Gn=null;return}let t=I.domElement.getBoundingClientRect();if(Hn.setFromCamera(new D((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),R),Hn.intersectObject(Bt,!1).length){let e=performance.now();Kn=e-qn>3e3?1:Kn+1,qn=e,Kn>=10&&(Kn=0,he())}Hn.ray.intersectPlane(Un,Wn)&&(q.value.set(Wn.x,Wn.z,B.value,1),zn()),Gn=null},{signal:Vn.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:Vn.signal})}let Jn=new ResizeObserver(()=>On());Jn.observe(x),$(document,`visibilitychange`,Bn),$(N,`change`,()=>{_e=N.matches,Bn()}),z.addEventListener(`change`,zn),$(I.domElement,`keydown`,e=>{if(j!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),In();let t=R.position.clone().sub(z.target),n=new p().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=m.clamp(n.phi,z.minPolarAngle,z.maxPolarAngle),R.position.copy(z.target).add(t.setFromSpherical(n)),z.update(),zn()});let Yn=new IntersectionObserver(e=>{ve=e[0].isIntersecting,Bn()});Yn.observe(I.domElement),$(I.domElement,`webglcontextlost`,e=>{e.preventDefault(),F=!0,Bn(),le({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(I.domElement,`webglcontextrestored`,()=>{F=!1,le({kind:`ready`}),On(),Bn()});function Xn(){if(!P){P=!0,qe(),I.setAnimationLoop(null),cancelAnimationFrame(Nn),Yn.disconnect(),Jn.disconnect(),Sn.disconnect(),Vn.abort(),z.removeEventListener(`change`,zn),z.dispose(),L.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{W.dispose()}catch{}try{G.dispose()}catch{}try{Tt.dispose()}catch{}try{Kt.dispose()}catch{}try{Zt.dispose()}catch{}try{St.dispose()}catch{}try{et.dispose()}catch{}try{nt.dispose()}catch{}try{Z.dispose()}catch{}try{I.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(I.setAnimationLoop(null),Pn=!1,Ke()):Xn()}),$(window,`pageshow`,e=>{e.persisted&&Bn()}),mn(Q),jn(),Ln(),le({kind:`ready`});function Zn(){if(!(!Re||P))try{V||(V=He()),Ke()}catch{We()}}return $(window,`pointerdown`,Zn),$(window,`keydown`,Zn),(ge=navigator.userActivation)!=null&&ge.hasBeenActive&&Zn(),{setMode:jn,setQuality:mn,getQuality:()=>Q,resetView:An,setSound(e){Re=!!e,Re?Zn():Ke()},dispose:Xn}}export{F as createShallows};