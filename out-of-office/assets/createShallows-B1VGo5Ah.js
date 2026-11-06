import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,I as s,K as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as ee,c as S,d as C,f as te,g as w,h as ne,i as re,j as ie,k as ae,l as oe,m as se,p as ce,s as T,t as le,u as ue,v as de,w as fe,x as E,y as pe,z as D}from"./three-vendor-BhW7WiW_.js";var O=12597547,me=11105866,he=15988214;function k(e,t,n,r){e.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2])}function A(e){let t=new S;return t.setAttribute(`position`,new b(e,3)),t}function ge(e,t,n,r,i){let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=r[0]-t[0],l=r[1]-t[1],u=r[2]-t[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=(t[0]+n[0]+r[0])/3-i[0],h=(t[1]+n[1]+r[1])/3-i[1],g=(t[2]+n[2]+r[2])/3-i[2];d*m+f*h+p*g<0?k(e,t,r,n):k(e,t,n,r)}function j(e,t,n,r,i,a){ge(e,t,n,r,a),ge(e,t,r,i,a)}function M(e,t,n,r){k(e,t,n,r),k(e,t,r,n)}function N(e,t,n,r,i){M(e,t,n,r),M(e,t,r,i)}function _e(e,t,n,r){let a=new y(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o=new te(n,n,a.length(),r,1,!0),s=new p().setFromUnitVectors(new y(0,1,0),a.clone().normalize()),c=new i().compose(new y((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),s,new y(1,1,1));return o.applyMatrix4(c)}function ve(e,t,n,r){let i=new ue(n,r),a=new p().setFromUnitVectors(new y(0,0,1),new y(t[0],t[1],t[2]).normalize());return i.applyQuaternion(a),i.translate(e[0],e[1],e[2]),i}function ye(e,t){e=e.toNonIndexed(),e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let n=new C(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new T(i,3)),e}function be(){let e=[],t=(t,n)=>e.push({g:t,c:n}),n=[-.0993,-.062,-.02,.022,.062,.096],i=[.038,.0445,.0457,.0445,.038,.024],a=[.0465,.043,.0417,.0417,.0435,.0465],o=[.03,.036,.037,.036,.03,.016],s=[.024,.019,.0175,.0175,.02,.026],c=[.014,.008,.006,.006,.009,.018],l=[.1242,.052,0],u=[.108,.03,0],d=n.length,f=[],p=[],m=[],h=[],g=[];for(let e=0;e<d;e++)f.push([n[e],a[e],i[e]]),p.push([n[e],s[e],o[e]]),m.push([n[e],c[e],0]),h.push([n[e],s[e],-o[e]]),g.push([n[e],a[e],-i[e]]);let _=[0,0,0],v=0;for(let e=0;e<d;e++)for(let t of[f[e],p[e],m[e],h[e],g[e]])_[0]+=t[0],_[1]+=t[1],_[2]+=t[2],v++;_[0]+=l[0],_[1]+=l[1],_[2]+=l[2],v++,_[0]+=u[0],_[1]+=u[1],_[2]+=u[2],v++,_[0]/=v,_[1]/=v,_[2]/=v;let y=[],b=(e,t,n)=>ge(y,e,t,n,_),x=(e,t,n,r)=>j(y,e,t,n,r,_);for(let e=0;e<d-1;e++)x(f[e],f[e+1],g[e+1],g[e]),x(f[e],f[e+1],p[e+1],p[e]),x(p[e],p[e+1],m[e+1],m[e]),x(g[e],g[e+1],h[e+1],h[e]),x(h[e],h[e+1],m[e+1],m[e]);b(f[d-1],l,g[d-1]),b(f[d-1],l,p[d-1]),b(p[d-1],l,u),b(p[d-1],u,m[d-1]),b(g[d-1],l,h[d-1]),b(h[d-1],l,u),b(h[d-1],u,m[d-1]),b(m[0],p[0],f[0]),b(m[0],f[0],g[0]),b(m[0],g[0],h[0]),t(A(y),O);let ee=[];N(ee,[-.02,.011,0],[.048,.012,0],[.035,0,0],[-.005,0,0]),t(A(ee),O);let S=[];M(S,[-.097,.03,0],[-.097,.012,0],[-.113,.004,0]),t(A(S),O);let C=.0338;t(_e([C,.03,0],[C,.3,0],.0045,6),me),t(ve([C,.3,0],[0,1,0],.0045,6),me);let te=[.0358,.058,0],w=[-.0715,.076,0];t(_e(te,w,.0032,6),me),t(ve(w,[w[0]-te[0],w[1]-te[1],0],.0032,6),me);let ne=[C,.294,0],ie=[C,.0616,0],oe=[C,.22,0],se=[C,.14,0],ce=e=>[ne[0]+(w[0]-ne[0])*e,ne[1]+(w[1]-ne[1])*e,0],T=ce(.318),le=ce(.662),ue=[(oe[0]+T[0])/2,(oe[1]+T[1])/2,.018],de=[(se[0]+le[0])/2,(se[1]+le[1])/2,.022],fe=[(ie[0]+w[0])/2,(ie[1]+w[1])/2,.012],E=[];M(E,ne,oe,ue),M(E,ne,ue,T),N(E,oe,se,de,ue),N(E,ue,de,le,T),N(E,se,ie,fe,de),N(E,de,fe,w,le),t(A(E),he);let D=re(e.map(e=>ye(e.g,e.c)));D.computeBoundingBox();let k=D.boundingBox;D.translate(-(k.min.x+k.max.x)/2,-k.min.y,-(k.min.z+k.max.z)/2),D.computeVertexNormals();let be=new r(D,new ae({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0,side:2})),P=new pe;return P.add(be),P}function P(p,{sound:te=!0,initialPaused:re=!1,initialMode:ue=`preview`,initialQuality:pe=`auto`,onStatus:O=()=>{},onInteract:me=()=>{},onBoatEgg:he=()=>{}}={}){var k;let A=()=>Math.max(1,p.clientWidth),ge=()=>Math.max(1,p.clientHeight),j={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},M=ue===`explore`?`explore`:`preview`,N=j.quality.auto,_e=matchMedia(`(prefers-reduced-motion: reduce)`),ve=re,ye=_e.matches||ve,P=!1,xe=!0,Se=!1,F;try{F=new x({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),O({kind:`failed`,message:`This browser could not start the water scene.`}),e}F.toneMapping=4,F.toneMappingExposure=1.08,F.outputColorSpace=l,F.setPixelRatio(Math.min(window.devicePixelRatio,N.dpr)),F.setSize(A(),ge()),F.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),F.domElement.setAttribute(`role`,`img`),F.domElement.tabIndex=0,F.domElement.className=`shallows-canvas`,p.appendChild(F.domElement);let I=new m,L=new C(.68,.82,.86);F.setClearColor(L,1),I.background=L,I.fog=new de(L,30,85);let R=new ie(52,A()/ge(),.1,300);R.position.set(3.2,9.8,12);let z=new le(R,F.domElement);z.target.set(0,.4,0),z.enableDamping=!0,z.dampingFactor=.08,z.enablePan=!1,z.enableZoom=!1,z.maxPolarAngle=g.degToRad(72),z.minPolarAngle=g.degToRad(8),z.minDistance=2.5,z.maxDistance=20,F.domElement.style.touchAction=`pan-y`,typeof z._onMouseWheel==`function`&&F.domElement.removeEventListener(`wheel`,z._onMouseWheel);let Ce=new y(.5,.8,.3).normalize(),we=new ne(16772563,2.3);we.position.copy(Ce).multiplyScalar(20),I.add(we);let Te=new ee(12573183,7036751,1.15);I.add(Te);let B={value:0},Ee={value:0},De={value:0},Oe={value:j.waterLevel},ke={value:j.waveStrength},Ae={value:0},V={value:new _},je={value:j.surf.height},Me={value:new _(...j.surf.direction).normalize()},H={chop:1,swell:1};function Ne(){let{interval:e,separation:t,speed:n}=j.surf,r=B.value+5,i=t=>(t%e+e)%e*n-e*n*.5;V.value.set(i(r),i(r-t))}function Pe(e){let t=j.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function Fe(){let e=Pe(B.value);Ae.value=e,H.chop=.42+1.73*e,H.swell=.75+.6*e}let Ie=new D({side:1,depthWrite:!1,uniforms:{uSunDir:{value:Ce},uHorizonColor:{value:L},uNight:Ee},vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 uSunDir;
    uniform vec3 uHorizonColor;
    uniform float uNight;
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
  `}),Le=new r(new t(180,32,16),Ie);Le.renderOrder=-1,Le.layers.enable(1),I.add(Le);let U=null,Re=!!te,ze=0,Be=0,Ve=-1/0;function He(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=j.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=g.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+j.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let p=t.createGain();p.gain.value=0;let m=t.createDynamicsCompressor();return m.threshold.value=-12,m.knee.value=20,m.ratio.value=8,a.connect(o).connect(s).connect(c).connect(p),a.connect(l).connect(u).connect(d).connect(f).connect(p),p.connect(m).connect(t.destination),a.playbackRate.value=j.speed,a.start(0,B.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:p,limiter:m}}catch(e){try{t.close()}catch{}throw e}}function Ue(){return Re&&In&&!P}function We(){if(!P&&(Re=!1,O({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),U)){U.master.gain.setValueAtTime(0,U.context.currentTime);try{U.context.suspend()}catch{}}}function Ge(e=!1){if(!U||!Ue()||U.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=U,c=t.currentTime;if(!e&&c-Ve<.05)return;Ve=c;let[l,u]=j.surf.direction,d=Math.hypot(l,u),f=(R.position.x*l+R.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=Ae.value,h=p(V.value.x-f)+.78*p(V.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function Ke(){if(!U||U.context.state===`closed`)return;let e=++ze;clearTimeout(Be);let{context:t,master:n}=U;Ue()?t.resume().then(()=>{e!==ze||!Ue()||(Ge(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(M===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===ze&&We()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Be=setTimeout(()=>{if(e===ze&&!Ue()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function qe(){if(++ze,clearTimeout(Be),!U)return;let{context:e,source:t}=U;try{t.stop()}catch{}for(let e of Object.values(U))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}U=null}function Je(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Ye(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new C(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new T(i,3))}return n}function Xe(e,t=16777215){let n=e.map(e=>Ye(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new S;return c.setAttribute(`position`,new T(i,3)),c.setAttribute(`normal`,new T(a,3)),c.setAttribute(`color`,new T(o,3)),c}function W(e,t){let n=new S;return n.setAttribute(`position`,new b(e.flat(),3)),n.computeVertexNormals(),Ye(n,t)}function Ze(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let Qe=document.createElement(`canvas`);Qe.width=Qe.height=1024;let $e=Qe.getContext(`2d`);$e.fillStyle=`#fff`,$e.fillRect(0,0,1024,1024);let et=new oe(Qe);et.flipY=!1;function tt(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function r(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let n=0;n<128;n++){let i=(t*128+n)*4;e[i]=Math.round(r(n,t,16)*255),e[i+1]=Math.round(r(n,t,64)*255),e[i+2]=Math.round(r(n,t,32)*255),e[i+3]=255}let i=new ce(e,128,128);return i.wrapS=i.wrapT=s,i.magFilter=n,i.minFilter=fe,i.generateMipmaps=!0,i.needsUpdate=!0,i}let nt=tt();function rt(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=B,e.uniforms.uWaterLevel=Oe,t&&(e.uniforms.tBedShade={value:et}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      }`)),e.fragmentShader=n}}let it=new d(40,40,96,96);it.rotateX(-Math.PI/2),Je(it);{let e=it.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,Ze(e.getX(t),e.getZ(t)));it.computeVertexNormals()}let at=new ae({color:15917244,roughness:.94});at.toneMapped=!1,rt(at,!0),I.add(new r(it,at));function ot(e){let n=new t(e,32,20),r=n.attributes.position,i=new y;for(let e=0;e<r.count;e++){i.fromBufferAttribute(r,e);let t=.87+.1*Math.sin(i.x*3.1)*Math.sin(i.z*4.2+i.y*2.7)+.045*Math.cos(i.x*7.2+i.z*5.3)*Math.sin(i.y*6.8);i.multiplyScalar(t),r.setXYZ(e,i.x,i.y*.7,i.z)}return n.computeVertexNormals(),n}let st=[11576468,11050380,12562844,9804434,13088928],ct=j.seed;function G(){return ct=Math.imul(ct,1664525)+1013904223>>>0,ct/4294967296}let lt=new ae({roughness:.78,flatShading:!1});lt.toneMapped=!1,rt(lt);let K=new h(ot(1),lt,j.rocks+3);K.name=`Stones`;let ut=new e,dt=new C,ft=0,pt=[];function mt(e,t,n){let r=n*1.2+.22;pt.push({x:e,z:t,radius:r,radius2:r*r}),ut.position.set(e,Ze(e,t)+n*.28,t),ut.rotation.set(G()*.6,G()*Math.PI*2,G()*.5),ut.scale.set(n*(.85+G()*.3),n,n*(.8+G()*.4)),ut.updateMatrix(),K.setMatrixAt(ft,ut.matrix),K.setColorAt(ft++,dt.setHex(st[Math.floor(G()*st.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=$e.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),$e.fillStyle=s,$e.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<j.rocks;e++){let e=G()*Math.PI*2,t=4.6+G()*7;mt(Math.cos(e)*t,Math.sin(e)*t,.1+G()**2*.75)}mt(-4.8,.4,1.55),mt(4.6,-2.8,1.6),mt(-1.8,-5,1.45),K.instanceMatrix.needsUpdate=!0,K.instanceColor.needsUpdate=!0,K.computeBoundingSphere(),I.add(K),et.needsUpdate=!0;let ht=[];{let e=new t(1,20,14);e.scale(.31,.1,.085);let n=e.attributes.position,r=[];for(let e=0;e<n.count;e++){let t=g.smoothstep(n.getY(e),-.06,.07),i=new C(15660252).lerp(new C(6990767),t),a=Math.exp(-((n.getY(e)/.02)**2));i.lerp(new C(15782036),a*.55),r.push(i.r,i.g,i.b)}e.setAttribute(`color`,new b(r,3)),ht.push(e)}ht.push(W([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),ht.push(W([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){ht.push(W([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let n=new t(.023,10,8);n.translate(.223,.033,e*.064),ht.push(Ye(n,925474));let r=new t(.009,8,6);r.translate(.229,.04,e*.08),ht.push(Ye(r,16773320))}let gt=Xe(ht),_t=new Float32Array(30);for(let e=0;e<30;e++)_t[e]=G()*Math.PI*2;gt.setAttribute(`aPhase`,new E(_t,1));let vt=new ae({vertexColors:!0,roughness:.42,metalness:.05,side:2});vt.toneMapped=!1,vt.onBeforeCompile=e=>{e.uniforms.uFishTime=B,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},vt.customProgramCacheKey=()=>`cove-fish-dimensional`;let q=new h(gt,vt,30);q.name=`Three schools of reef fish`,q.frustumCulled=!1,q.instanceMatrix.setUsage(w),I.add(q);let yt=document.createElement(`canvas`);yt.width=yt.height=64;let bt=yt.getContext(`2d`),xt=bt.createRadialGradient(32,32,3,32,32,32);xt.addColorStop(0,`rgba(11,36,30,.38)`),xt.addColorStop(.45,`rgba(11,36,30,.20)`),xt.addColorStop(1,`rgba(11,36,30,0)`),bt.fillStyle=xt,bt.fillRect(0,0,64,64);let St=new oe(yt),Ct=new f({map:St,transparent:!0,opacity:.34,depthWrite:!1});Ct.toneMapped=!1;let wt=new d(1.15,.42);wt.rotateX(-Math.PI/2);let Tt=new h(wt,Ct,30);Tt.frustumCulled=!1,I.add(Tt);let Et=[],J=new e;for(let e=0;e<30;e++){let t=Math.floor(e/3);Et.push({school:e%3,phase:G()*.035,trail:Math.floor(t/3)*.72,spread:(t%3-1)*.48+(G()-.5)*.1,scale:.85+G()*.35,boid:G()<.72,anchor:new y,position:new y,velocity:new y,force:new y,initialized:!1}),q.setColorAt(e,new C(e%9==0?16045466:16777215))}q.instanceColor.needsUpdate=!0;let Dt={value:new o(0,0,-100,0)},Ot={value:new o(0,0,1,0)},kt=new y,At=new y,jt=new y,Mt=new y,Nt=new y,Pt=new y,Ft=-1;function It(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-Dt.value.z,o=n.x-Dt.value.x,s=n.z-Dt.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<pt.length;e++){let t=pt[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=Ae.value;return n.y=Ze(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function Lt(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-Dt.value.z;if(o>=0&&o<4){let e=kt,t=e.x-Dt.value.x,r=e.z-Dt.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function Rt(){let e=Ft<0?.016:g.clamp(B.value-Ft,.008,.04);Ft=B.value;for(let e=0;e<30;e++){let t=Et[e];It(t,B.value,t.anchor),t.initialized||(t.position.copy(t.anchor),t.velocity.set(.08,0,.02),t.initialized=!0)}for(let t=0;t<30;t++){let n=Et[t];if(kt.copy(n.anchor),n.boid){let r=1.05,i=2.1,a=0;Mt.set(0,0,0),Nt.set(0,0,0),Pt.set(0,0,0),n.force.subVectors(n.anchor,n.position).multiplyScalar(1.65);for(let e=0;e<30;e++){if(t===e||Et[e].school!==n.school)continue;let o=Et[e];jt.subVectors(n.position,o.position);let s=jt.lengthSq();s<1e-4||s>i*i||(a++,Mt.add(o.position),Nt.add(o.velocity),s<r*r&&Pt.addScaledVector(jt,1/s))}a>0&&(Mt.multiplyScalar(1/a).sub(n.position).multiplyScalar(.18),Nt.multiplyScalar(1/a).sub(n.velocity).multiplyScalar(.12),n.force.add(Mt).add(Nt).addScaledVector(Pt,.08)),jt.set(Math.sin(B.value*1.7+n.phase*31),Math.sin(B.value*2.3+n.phase*17)*.35,Math.cos(B.value*1.9+n.phase*23)).multiplyScalar(.045),n.force.add(jt),n.velocity.addScaledVector(n.force,e).multiplyScalar(.992).clampLength(.055,.52),n.position.addScaledVector(n.velocity,e),kt.copy(n.position)}else n.position.copy(n.anchor);Lt(n,B.value,At),At.x+=n.boid?n.velocity.x*.4:0,At.z+=n.boid?n.velocity.z*.4:0,J.position.copy(kt),J.rotation.set(0,-Math.atan2(At.z,At.x),0),J.scale.setScalar(n.scale),J.updateMatrix(),q.setMatrixAt(t,J.matrix),J.position.x-=.13,J.position.z-=.08,J.position.y-=.5,J.rotation.set(0,0,0),J.updateMatrix(),Tt.setMatrixAt(t,J.matrix)}q.instanceMatrix.needsUpdate=!0,Tt.instanceMatrix.needsUpdate=!0}let zt=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];zt.push(W([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),zt.push(W([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),zt.push(W([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),zt.push(W([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),zt.push(W([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),zt.push(W([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),zt.push(W([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let Bt=Xe(zt),Vt=new ae({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});Vt.toneMapped=!1;let Ht=new r(Bt,Vt);Ht.name=`Pink folded paper boat`,I.add(Ht);let Ut=new d(1.5,2.6);Ut.rotateX(-Math.PI/2);let Wt=new r(Ut,Ct);I.add(Wt);let Gt=be();Gt.name=`Polyfork low-poly sailboat`,Gt.scale.setScalar(4.6),Gt.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)}),I.add(Gt);function Kt(){let e=[],t=[],n=new C;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new S;return a.setAttribute(`position`,new b(e,3)),a.setAttribute(`color`,new b(t,3)),a.computeVertexNormals(),a}let qt=new ae({vertexColors:!0,roughness:.72,side:2});qt.toneMapped=!1;let Jt=new h(Kt(),qt,24);Jt.name=`Ribbed scallop shells`;let Y=new e;for(let e=0;e<24;e++){let t=G()*6.283,n=4+G()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;Y.position.set(r,Ze(r,i)+.025,i),Y.rotation.set(0,G()*6.283,0),Y.scale.setScalar(.55+G()*.6),Y.updateMatrix(),Jt.setMatrixAt(e,Y.matrix)}I.add(Jt);let Yt=[],Xt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=Xt(t,e/6),r=Xt(t,(e+1)/6),i=Xt(t+1,(e+1)/6),a=Xt(t+1,e/6);Yt.push(...n,...i,...r,...n,...a,...i)}let Zt=new S;Zt.setAttribute(`position`,new b(Yt,3)),Zt.computeVertexNormals();let Qt=new ae({color:14711368,roughness:.94,side:2});Qt.toneMapped=!1;let $t=new h(Zt,Qt,6);$t.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{Y.position.set(e,Ze(e,t)+.04,t),Y.rotation.set(0,n*1.7,0),Y.scale.setScalar(.8+G()*.5),Y.updateMatrix(),$t.setMatrixAt(n,Y.matrix)}),I.add($t);let en=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),tn=[1,.78],nn=new y,X=new y,rn=new y,an=new i;function on(){let e=B.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=Me.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=H.chop;for(let r=0;r<4;r++){let i=en[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=ke.value;c*=f,l*=f,u*=f;let p=H.swell,m=t*i+n*a,h=t*o+n*s,_=.32*Math.sin(h*.48),v=V.value.x,y=V.value.y,b=j.surf.width*j.surf.width,x=i+o*.1536*Math.cos(h*.48),ee=a+s*.1536*Math.cos(h*.48),S=je.value*p;for(let e=0;e<2;e++){let t=e===0?v:y,n=tn[e],r=m+_-t,i=r+2,a=Math.exp(-r*r/b),o=Math.exp(-i*i/(3*b));c+=n*(a-.24*o)*S;let s=n*(-2*r/b*a+.16*i/b*o)*S;l+=s*x,u+=s*ee}nn.set(-l,1,-u).normalize(),X.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),Ot.value.set(t,n,X.x,X.z),X.addScaledVector(nn,-X.dot(nn)).normalize(),Ht.position.set(t,Oe.value+c+.11,n),rn.crossVectors(nn,X),an.makeBasis(rn,nn,X),Ht.quaternion.setFromRotationMatrix(an),Wt.position.set(t-.5,Ze(t-.5,n-.3)+.028,n-.3),Wt.rotation.y=Math.atan2(X.x,X.z);{let t=e*.065+1.8,n=-2.6+i*Math.sin(t)*1.05+o*Math.cos(t)*.28,r=-1.85+a*Math.sin(t)*1.05+s*Math.cos(t)*.28,c=0,l=0,u=0;for(let t of en){let i=(n*t.nx+r*t.nz)*t.f+e*t.speed,a=Math.sin(i),o=Math.cos(i);c+=t.amp*H.chop*a,l+=t.nx*t.f*t.amp*H.chop*o,u+=t.nz*t.f*t.amp*H.chop*o}let d=ke.value*(1-g.smoothstep(Math.hypot(n,r),18,65));c*=d,l*=d,u*=d;let f=1-g.smoothstep(Math.hypot(n,r),3,12),p=.6+1.2*Ae.value;for(let[t,i,a,o,s]of[[.9,.7,11,.003,5.4],[-.6,.9,16,.002,6.8],[.3,-.95,23,.0012,8.6]]){let d=Math.hypot(t,i),m=t/d,h=i/d,g=(n*m+r*h)*a+e*s;c+=o*p*Math.sin(g)*f;let _=o*p*a*Math.cos(g)*f;l+=m*_,u+=h*_}let m=n*i+r*a,h=n*o+r*s,_=.32*Math.sin(h*.48),v=i+o*.1536*Math.cos(h*.48),y=a+s*.1536*Math.cos(h*.48),b=H.swell,x=j.surf.width**2,ee=1-g.smoothstep(Math.abs(m),13,23),S=je.value*b*ee;for(let e=0;e<2;e++){let t=tn[e],n=m+_-(e?V.value.y:V.value.x),r=n+2,i=Math.exp(-n*n/x),a=Math.exp(-r*r/(3*x));c+=t*(i-.24*a)*S;let o=t*(-2*n/x*i+.16*r/x*a)*S;l+=o*v,u+=o*y}let C=nn.set(-l,1,-u).normalize();X.set(i,0,a).addScaledVector(C,-X.dot(C)).normalize(),Gt.position.set(n,Oe.value+c+.12,r),rn.crossVectors(C,X),an.makeBasis(rn,C,X),Gt.quaternion.setFromRotationMatrix(an)}}let sn=`
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
`,cn=`
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
`,Z=new c(1,1);Z.depthTexture=new se(1,1),Z.texture.generateMipmaps=!1,F.capabilities.isWebGL2;let ln=new D({uniforms:{uTime:B,uTouch:Dt,uWake:Ot,uWaveStrength:ke,uWaveEnvelope:Ae,uLowQuality:De,uSurfFront:V,uSurfDirection:Me,uSurfHeight:je,uSurfWidth:{value:j.surf.width},tRefraction:{value:Z.texture},tDepth:{value:Z.depthTexture},tFoam:{value:nt},uNear:{value:R.near},uFar:{value:R.far},uSunDir:{value:Ce},uAbsorption:{value:new y(...j.absorption)},uDeepColor:{value:new C(...j.deepColor)},uSssColor:{value:new C(...j.sssColor)},uHorizonColor:{value:L},uNight:Ee,uTexel:{value:new _(1,1)}},vertexShader:sn,fragmentShader:cn});function un(e){let t=new d(40,40,e,e);return t.rotateX(-Math.PI/2),Je(t),t}let dn=new r(new d(1200,1200),new f({color:new C(.12,.29,.32),toneMapped:!1}));dn.name=`Ocean edge fill`,dn.rotation.x=-Math.PI/2,dn.position.y=Oe.value-1.2,dn.layers.set(1),I.add(dn);let fn=new r(un(N.segments),ln);fn.position.y=Oe.value,fn.layers.set(1),I.add(fn);let pn=new D({uniforms:ln.uniforms,vertexShader:sn,fragmentShader:cn,side:2}),mn=new r(un(28),pn);mn.name=`Low-poly water surface`,mn.position.y=Oe.value,mn.layers.set(1),mn.visible=!1,I.add(mn);function hn(){let e=Number(navigator.deviceMemory||0),t=Number(navigator.hardwareConcurrency||0);return F.capabilities.maxTextureSize<4096||e>0&&e<=2||t>0&&t<=2}let gn=pe===`low`||pe===`auto`&&hn()?`low`:`rich`;function _n(e=gn){gn=e===`low`?`low`:`rich`,De.value=+(gn===`low`),fn.visible=gn===`rich`,mn.visible=gn===`low`,O({kind:`quality`,quality:gn}),An(),Vn()}let vn=new C(.68,.82,.86),yn=new C(.035,.075,.12),bn=new C(...j.deepColor),xn=new C(.025,.13,.18),Sn=new C(...j.sssColor),Cn=new C(.1,.23,.27);function wn(){let e=document.documentElement.dataset.theme===`dark`;Ee.value=+!!e,L.copy(e?yn:vn),I.background=L,I.fog.color.copy(L),ln.uniforms.uDeepColor.value.copy(e?xn:bn),ln.uniforms.uSssColor.value.copy(e?Cn:Sn),we.color.set(e?9349584:16772563),we.intensity=e?.62:2.3,Te.color.set(e?2308962:12573183),Te.groundColor.set(e?1120804:7036751),Te.intensity=e?.72:1.15}let Tn=new MutationObserver(wn);Tn.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),wn();let En=new _,Q=1,Dn=[],On=0;function kn(){return M===`explore`?N.refraction:.65}function An(){if(P||Se)return;R.aspect=A()/ge(),R.updateProjectionMatrix();let e=M!==`explore`,t=e?1.25:N.dpr,n=N.pixels*(e?.8:1);F.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(A()*ge())))),F.setSize(A(),ge()),F.getDrawingBufferSize(En);let r=kn()*Q;F.capabilities.isWebGL2,Z.samples!==0&&(Z.dispose(),Z.samples=0),Z.setSize(Math.max(1,Math.floor(En.x*r)),Math.max(1,Math.floor(En.y*r))),ln.uniforms.uTexel.value.set(1/Z.width,1/Z.height),Vn()}function jn(e){let t=j.dynamicScale;if(!t.enabled||e<=0||e>80||(Dn.push(e),Dn.length>t.sampleCount&&Dn.shift(),Dn.length<t.sampleCount))return;let n=performance.now();if(n-On<t.cooldownMs)return;let r=0;for(let e=0;e<Dn.length;e++)r+=Dn[e];let i=r/Dn.length,a=Q;i>t.targetMs*1.35&&Q>t.min?a=Math.max(t.min,Q-.1):i<t.targetMs*.85&&Q<t.max&&(a=Math.min(t.max,Q+.05)),a===Q?On=n:(Q=a,An(),Dn.length=0,On=n)}function Mn(){let e=z.enableDamping;z.enableDamping=!1,z.update(),z.target.set(0,.4,0),R.position.set(...M===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),z.update(),z.enableDamping=e,Vn()}function Nn(e=M){M=e===`explore`?`explore`:`preview`,z.enabled=M===`explore`,F.domElement.tabIndex=M===`explore`?0:-1,F.domElement.setAttribute(`aria-hidden`,String(M!==`explore`)),F.domElement.style.touchAction=M===`explore`?`pan-y`:`auto`,ke.value=j.waveStrength*(M===`explore`?1:.55),je.value=j.surf.height*(M===`explore`?1:.75),Mn(),An(),Hn()}let Pn=0,Fn=0,In=!1,Ln=!1;function Rn(){Ln||(Ln=!0,me())}function zn(){P||Se||(z.enabled&&z.update(),Ne(),Fe(),on(),Rt(),Ge(),R.layers.set(0),F.setRenderTarget(Z),F.render(I,R),R.layers.set(1),F.setRenderTarget(null),F.render(I,R),R.layers.set(0))}function Bn(e){let t=Pn?Math.min((e-Pn)/1e3,.1):0;Pn=e,B.value+=t*j.speed,jn(t*1e3),zn()}function Vn(){P||Se||In||Fn||document.hidden||!xe||(Fn=requestAnimationFrame(()=>{Fn=0,!document.hidden&&xe&&zn()}))}function Hn(){P||(In=!ye&&!document.hidden&&xe&&!Se,z.enableDamping=!ye,Pn=0,F.setAnimationLoop(In?Bn:null),In&&Fn&&(cancelAnimationFrame(Fn),Fn=0),Ke(),Vn())}let Un=new AbortController,Wn=new a,Gn=new u(new y(0,1,0),-j.waterLevel),Kn=new y,qn=null,Jn=0,Yn=0;F.domElement.addEventListener(`pointerdown`,e=>{Rn(),qn={x:e.clientX,y:e.clientY}},{signal:Un.signal}),F.domElement.addEventListener(`pointerup`,e=>{if(M!==`explore`||!qn||Math.hypot(e.clientX-qn.x,e.clientY-qn.y)>7){qn=null;return}let t=F.domElement.getBoundingClientRect();if(Wn.setFromCamera(new _((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),R),Wn.intersectObject(Ht,!1).length){let e=performance.now();Jn=e-Yn>3e3?1:Jn+1,Yn=e,Jn>=10&&(Jn=0,he())}Wn.ray.intersectPlane(Gn,Kn)&&(Dt.value.set(Kn.x,Kn.z,B.value,1),Vn()),qn=null},{signal:Un.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:Un.signal})}let Xn=new ResizeObserver(()=>An());Xn.observe(p),$(document,`visibilitychange`,Hn),$(_e,`change`,()=>{ye=_e.matches||ve,Hn()}),z.addEventListener(`change`,Vn),$(F.domElement,`keydown`,e=>{if(M!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),Rn();let t=R.position.clone().sub(z.target),n=new v().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=g.clamp(n.phi,z.minPolarAngle,z.maxPolarAngle),R.position.copy(z.target).add(t.setFromSpherical(n)),z.update(),Vn()});let Zn=new IntersectionObserver(e=>{xe=e[0].isIntersecting,Hn()});Zn.observe(F.domElement),$(F.domElement,`webglcontextlost`,e=>{e.preventDefault(),Se=!0,Hn(),O({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(F.domElement,`webglcontextrestored`,()=>{Se=!1,O({kind:`ready`}),An(),Hn()});function Qn(){if(!P){P=!0,qe(),F.setAnimationLoop(null),cancelAnimationFrame(Fn),Zn.disconnect(),Xn.disconnect(),Tn.disconnect(),Un.abort(),z.removeEventListener(`change`,Vn),z.dispose(),I.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{K.dispose()}catch{}try{q.dispose()}catch{}try{Tt.dispose()}catch{}try{Jt.dispose()}catch{}try{$t.dispose()}catch{}try{St.dispose()}catch{}try{et.dispose()}catch{}try{nt.dispose()}catch{}try{Z.dispose()}catch{}try{F.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(F.setAnimationLoop(null),In=!1,Ke()):Qn()}),$(window,`pageshow`,e=>{e.persisted&&Hn()}),_n(gn),Nn(),zn(),O({kind:`ready`});function $n(){if(!(!Re||P))try{U||(U=He()),Ke()}catch{We()}}return $(window,`pointerdown`,$n),$(window,`keydown`,$n),(k=navigator.userActivation)!=null&&k.hasBeenActive&&$n(),{setMode:Nn,setQuality:_n,getQuality:()=>gn,resetView:Mn,setPaused(e){ve=!!e,ye=_e.matches||ve,Hn()},setSound(e){Re=!!e,Re?$n():Ke()},dispose:Qn}}export{P as createShallows};