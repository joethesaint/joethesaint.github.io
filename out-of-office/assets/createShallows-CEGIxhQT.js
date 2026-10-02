import{A as e,B as t,C as n,D as r,E as i,F as a,I as o,L as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,V as h,_ as g,a as _,b as v,c as y,d as b,f as ee,g as te,h as ne,i as x,j as S,k as re,l as C,m as w,n as ie,o as ae,p as oe,r as se,s as ce,t as le,u as ue,v as de,w as fe,x as pe,y as me,z as T}from"./three-vendor-BA3HJQ7M.js";var he=12597547,ge=11105866,_e=15988214;function E(e,t,n,r){e.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2])}function D(e){let t=new _;return t.setAttribute(`position`,new w(e,3)),t}function O(e,t,n,r,i){let a=n[0]-t[0],o=n[1]-t[1],s=n[2]-t[2],c=r[0]-t[0],l=r[1]-t[1],u=r[2]-t[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=(t[0]+n[0]+r[0])/3-i[0],h=(t[1]+n[1]+r[1])/3-i[1],g=(t[2]+n[2]+r[2])/3-i[2];d*m+f*h+p*g<0?E(e,t,r,n):E(e,t,n,r)}function ve(e,t,n,r,i,a){O(e,t,n,r,a),O(e,t,r,i,a)}function k(e,t,n,r){E(e,t,n,r),E(e,t,r,n)}function A(e,t,n,r,i){k(e,t,n,r),k(e,t,r,i)}function j(e,t,r,i){let a=new T(t[0]-e[0],t[1]-e[1],t[2]-e[2]),o=new C(r,r,a.length(),i,1,!0),s=new S().setFromUnitVectors(new T(0,1,0),a.clone().normalize()),c=new n().compose(new T((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2),s,new T(1,1,1));return o.applyMatrix4(c)}function ye(e,t,n,r){let i=new ce(n,r),a=new S().setFromUnitVectors(new T(0,0,1),new T(t[0],t[1],t[2]).normalize());return i.applyQuaternion(a),i.translate(e[0],e[1],e[2]),i}function be(e,t){e=e.toNonIndexed(),e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let n=new y(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new x(i,3)),e}function xe(){let e=[],t=(t,n)=>e.push({g:t,c:n}),n=[-.0993,-.062,-.02,.022,.062,.096],r=[.038,.0445,.0457,.0445,.038,.024],a=[.0465,.043,.0417,.0417,.0435,.0465],o=[.03,.036,.037,.036,.03,.016],s=[.024,.019,.0175,.0175,.02,.026],c=[.014,.008,.006,.006,.009,.018],l=[.1242,.052,0],u=[.108,.03,0],d=n.length,f=[],p=[],m=[],h=[],g=[];for(let e=0;e<d;e++)f.push([n[e],a[e],r[e]]),p.push([n[e],s[e],o[e]]),m.push([n[e],c[e],0]),h.push([n[e],s[e],-o[e]]),g.push([n[e],a[e],-r[e]]);let _=[0,0,0],v=0;for(let e=0;e<d;e++)for(let t of[f[e],p[e],m[e],h[e],g[e]])_[0]+=t[0],_[1]+=t[1],_[2]+=t[2],v++;_[0]+=l[0],_[1]+=l[1],_[2]+=l[2],v++,_[0]+=u[0],_[1]+=u[1],_[2]+=u[2],v++,_[0]/=v,_[1]/=v,_[2]/=v;let y=[],b=(e,t,n)=>O(y,e,t,n,_),ee=(e,t,n,r)=>ve(y,e,t,n,r,_);for(let e=0;e<d-1;e++)ee(f[e],f[e+1],g[e+1],g[e]),ee(f[e],f[e+1],p[e+1],p[e]),ee(p[e],p[e+1],m[e+1],m[e]),ee(g[e],g[e+1],h[e+1],h[e]),ee(h[e],h[e+1],m[e+1],m[e]);b(f[d-1],l,g[d-1]),b(f[d-1],l,p[d-1]),b(p[d-1],l,u),b(p[d-1],u,m[d-1]),b(g[d-1],l,h[d-1]),b(h[d-1],l,u),b(h[d-1],u,m[d-1]),b(m[0],p[0],f[0]),b(m[0],f[0],g[0]),b(m[0],g[0],h[0]),t(D(y),he);let ne=[];A(ne,[-.02,.011,0],[.048,.012,0],[.035,0,0],[-.005,0,0]),t(D(ne),he);let x=[];k(x,[-.097,.03,0],[-.097,.012,0],[-.113,.004,0]),t(D(x),he);let S=.0338;t(j([S,.03,0],[S,.3,0],.0045,6),ge),t(ye([S,.3,0],[0,1,0],.0045,6),ge);let re=[.0358,.058,0],C=[-.0715,.076,0];t(j(re,C,.0032,6),ge),t(ye(C,[C[0]-re[0],C[1]-re[1],0],.0032,6),ge);let w=[S,.294,0],ie=[S,.0616,0],ae=[S,.22,0],oe=[S,.14,0],se=e=>[w[0]+(C[0]-w[0])*e,w[1]+(C[1]-w[1])*e,0],ce=se(.318),ue=se(.662),de=[(ae[0]+ce[0])/2,(ae[1]+ce[1])/2,.018],pe=[(oe[0]+ue[0])/2,(oe[1]+ue[1])/2,.022],me=[(ie[0]+C[0])/2,(ie[1]+C[1])/2,.012],T=[];k(T,w,ae,de),k(T,w,de,ce),A(T,ae,oe,pe,de),A(T,de,pe,ue,ce),A(T,oe,ie,me,pe),A(T,pe,me,C,ue),t(D(T),_e);let E=le(e.map(e=>be(e.g,e.c)));E.computeBoundingBox();let xe=E.boundingBox;E.translate(-(xe.min.x+xe.max.x)/2,-xe.min.y,-(xe.min.z+xe.max.z)/2),E.computeVertexNormals();let M=new fe(E,new i({vertexColors:!0,flatShading:!0,roughness:.85,metalness:0,side:2})),N=new te;return N.add(M),N}function M(te,{sound:S=!0,initialMode:C=`preview`,initialQuality:ce=`auto`,onStatus:le=()=>{},onInteract:he=()=>{},onBoatEgg:ge=()=>{}}={}){let _e=()=>Math.max(1,te.clientWidth),E=()=>Math.max(1,te.clientHeight),D={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},O=C===`explore`?`explore`:`preview`,ve=D.quality.auto,k=matchMedia(`(prefers-reduced-motion: reduce)`),A=k.matches,j=!1,ye=!0,be=!1,M;try{M=new se({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),le({kind:`failed`,message:`This browser could not start the water scene.`}),e}M.toneMapping=4,M.toneMappingExposure=1.08,M.setPixelRatio(Math.min(window.devicePixelRatio,ve.dpr)),M.setSize(_e(),E()),M.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),M.domElement.setAttribute(`role`,`img`),M.domElement.tabIndex=0,M.domElement.className=`shallows-canvas`,te.appendChild(M.domElement);let N=new d,P=new y(.68,.82,.86);M.setClearColor(P,1),N.background=P,N.fog=new ne(P,30,85);let F=new u(52,_e()/E(),.1,300);F.position.set(3.2,9.8,12);let I=new ie(F,M.domElement);I.target.set(0,.4,0),I.enableDamping=!0,I.dampingFactor=.08,I.enablePan=!1,I.enableZoom=!1,I.maxPolarAngle=p.degToRad(72),I.minPolarAngle=p.degToRad(8),I.minDistance=2.5,I.maxDistance=20,M.domElement.style.touchAction=`pan-y`,typeof I._onMouseWheel==`function`&&M.domElement.removeEventListener(`wheel`,I._onMouseWheel);let Se=new T(.5,.8,.3).normalize(),Ce=new ee(16772563,2.3);Ce.position.copy(Se).multiplyScalar(20),N.add(Ce);let we=new g(12573183,7036751,1.15);N.add(we);let L={value:0},Te={value:0},Ee={value:0},De={value:D.waterLevel},Oe={value:D.waveStrength},ke={value:0},Ae={value:new f},je={value:D.surf.height},Me={value:new f(...D.surf.direction).normalize()},Ne={chop:1,swell:1};function Pe(){let{interval:e,separation:t,speed:n}=D.surf,r=L.value+5,i=t=>(t%e+e)%e*n-e*n*.5;Ae.value.set(i(r),i(r-t))}function Fe(e){let t=D.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function Ie(){let e=Fe(L.value);ke.value=e,Ne.chop=.42+1.73*e,Ne.swell=.75+.6*e}let Le=new a({side:1,depthWrite:!1,uniforms:{uSunDir:{value:Se},uHorizonColor:{value:P},uNight:Te},vertexShader:`
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
  `}),Re=new fe(new o(180,32,16),Le);Re.renderOrder=-1,Re.layers.enable(1),N.add(Re);let R=null,ze=!!S,Be=0,Ve=0,He=-1/0;function Ue(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=D.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=p.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+D.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let m=t.createGain();m.gain.value=0;let h=t.createDynamicsCompressor();return h.threshold.value=-12,h.knee.value=20,h.ratio.value=8,a.connect(o).connect(s).connect(c).connect(m),a.connect(l).connect(u).connect(d).connect(f).connect(m),m.connect(h).connect(t.destination),a.playbackRate.value=D.speed,a.start(0,L.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:m,limiter:h}}catch(e){try{t.close()}catch{}throw e}}function We(){return ze&&Mn&&!j}function Ge(){if(!j&&(ze=!1,le({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),R)){R.master.gain.setValueAtTime(0,R.context.currentTime);try{R.context.suspend()}catch{}}}function Ke(e=!1){if(!R||!We()||R.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=R,c=t.currentTime;if(!e&&c-He<.05)return;He=c;let[l,u]=D.surf.direction,d=Math.hypot(l,u),f=(F.position.x*l+F.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=ke.value,h=p(Ae.value.x-f)+.78*p(Ae.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function qe(){if(!R||R.context.state===`closed`)return;let e=++Be;clearTimeout(Ve);let{context:t,master:n}=R;We()?t.resume().then(()=>{e!==Be||!We()||(Ke(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(O===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===Be&&Ge()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Ve=setTimeout(()=>{if(e===Be&&!We()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function Je(){if(++Be,clearTimeout(Ve),!R)return;let{context:e,source:t}=R;try{t.stop()}catch{}for(let e of Object.values(R))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}R=null}function Ye(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Xe(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new y(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new x(i,3))}return n}function Ze(e,t=16777215){let n=e.map(e=>Xe(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new _;return c.setAttribute(`position`,new x(i,3)),c.setAttribute(`normal`,new x(a,3)),c.setAttribute(`color`,new x(o,3)),c}function z(e,t){let n=new _;return n.setAttribute(`position`,new w(e.flat(),3)),n.computeVertexNormals(),Xe(n,t)}function Qe(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let $e=document.createElement(`canvas`);$e.width=$e.height=1024;let et=$e.getContext(`2d`);et.fillStyle=`#fff`,et.fillRect(0,0,1024,1024);let tt=new ae($e);tt.flipY=!1;function nt(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function n(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=(t*128+r)*4;e[i]=Math.round(n(r,t,16)*255),e[i+1]=Math.round(n(r,t,64)*255),e[i+2]=Math.round(n(r,t,32)*255),e[i+3]=255}let r=new ue(e,128,128);return r.wrapS=r.wrapT=l,r.magFilter=v,r.minFilter=pe,r.generateMipmaps=!0,r.needsUpdate=!0,r}let rt=nt();function it(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=L,e.uniforms.uWaterLevel=De,t&&(e.uniforms.tBedShade={value:tt}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      }`)),e.fragmentShader=n}}let at=new e(40,40,96,96);at.rotateX(-Math.PI/2),Ye(at);{let e=at.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,Qe(e.getX(t),e.getZ(t)));at.computeVertexNormals()}let ot=new i({color:15917244,roughness:.94});ot.toneMapped=!1,it(ot,!0),N.add(new fe(at,ot));function st(e){let t=new o(e,32,20),n=t.attributes.position,r=new T;for(let e=0;e<n.count;e++){r.fromBufferAttribute(n,e);let t=.87+.1*Math.sin(r.x*3.1)*Math.sin(r.z*4.2+r.y*2.7)+.045*Math.cos(r.x*7.2+r.z*5.3)*Math.sin(r.y*6.8);r.multiplyScalar(t),n.setXYZ(e,r.x,r.y*.7,r.z)}return t.computeVertexNormals(),t}let ct=[11576468,11050380,12562844,9804434,13088928],lt=D.seed;function B(){return lt=Math.imul(lt,1664525)+1013904223>>>0,lt/4294967296}let ut=new i({roughness:.78,flatShading:!1});ut.toneMapped=!1,it(ut);let V=new me(st(1),ut,D.rocks+3);V.name=`Stones`;let dt=new r,ft=new y,pt=0,mt=[];function ht(e,t,n){let r=n*1.2+.22;mt.push({x:e,z:t,radius:r,radius2:r*r}),dt.position.set(e,Qe(e,t)+n*.28,t),dt.rotation.set(B()*.6,B()*Math.PI*2,B()*.5),dt.scale.set(n*(.85+B()*.3),n,n*(.8+B()*.4)),dt.updateMatrix(),V.setMatrixAt(pt,dt.matrix),V.setColorAt(pt++,ft.setHex(ct[Math.floor(B()*ct.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=et.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),et.fillStyle=s,et.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<D.rocks;e++){let e=B()*Math.PI*2,t=4.6+B()*7;ht(Math.cos(e)*t,Math.sin(e)*t,.1+B()**2*.75)}ht(-4.8,.4,1.55),ht(4.6,-2.8,1.6),ht(-1.8,-5,1.45),V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,V.computeBoundingSphere(),N.add(V),tt.needsUpdate=!0;let gt=[];{let e=new o(1,20,14);e.scale(.31,.1,.085);let t=e.attributes.position,n=[];for(let e=0;e<t.count;e++){let r=p.smoothstep(t.getY(e),-.06,.07),i=new y(15660252).lerp(new y(6990767),r),a=Math.exp(-((t.getY(e)/.02)**2));i.lerp(new y(15782036),a*.55),n.push(i.r,i.g,i.b)}e.setAttribute(`color`,new w(n,3)),gt.push(e)}gt.push(z([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),gt.push(z([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){gt.push(z([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let t=new o(.023,10,8);t.translate(.223,.033,e*.064),gt.push(Xe(t,925474));let n=new o(.009,8,6);n.translate(.229,.04,e*.08),gt.push(Xe(n,16773320))}let _t=Ze(gt),vt=new Float32Array(30);for(let e=0;e<30;e++)vt[e]=B()*Math.PI*2;_t.setAttribute(`aPhase`,new de(vt,1));let yt=new i({vertexColors:!0,roughness:.42,metalness:.05,side:2});yt.toneMapped=!1,yt.onBeforeCompile=e=>{e.uniforms.uFishTime=L,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},yt.customProgramCacheKey=()=>`cove-fish-dimensional`;let H=new me(_t,yt,30);H.name=`Three schools of reef fish`,H.frustumCulled=!1,H.instanceMatrix.setUsage(oe),N.add(H);let bt=document.createElement(`canvas`);bt.width=bt.height=64;let xt=bt.getContext(`2d`),St=xt.createRadialGradient(32,32,3,32,32,32);St.addColorStop(0,`rgba(11,36,30,.38)`),St.addColorStop(.45,`rgba(11,36,30,.20)`),St.addColorStop(1,`rgba(11,36,30,0)`),xt.fillStyle=St,xt.fillRect(0,0,64,64);let Ct=new ae(bt),wt=new m({map:Ct,transparent:!0,opacity:.34,depthWrite:!1});wt.toneMapped=!1;let Tt=new e(1.15,.42);Tt.rotateX(-Math.PI/2);let Et=new me(Tt,wt,30);Et.frustumCulled=!1,N.add(Et);let Dt=[],U=new r;for(let e=0;e<30;e++){let t=Math.floor(e/3);Dt.push({school:e%3,phase:B()*.035,trail:Math.floor(t/3)*.72,spread:(t%3-1)*.48+(B()-.5)*.1,scale:.85+B()*.35,boid:B()<.72,anchor:new T,position:new T,velocity:new T,force:new T,initialized:!1}),H.setColorAt(e,new y(e%9==0?16045466:16777215))}H.instanceColor.needsUpdate=!0;let W={value:new t(0,0,-100,0)},Ot={value:new t(0,0,1,0)},kt=new T,At=new T,jt=new T,Mt=new T,Nt=new T,Pt=new T,Ft=-1;function It(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-W.value.z,o=n.x-W.value.x,s=n.z-W.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<mt.length;e++){let t=mt[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=ke.value;return n.y=Qe(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function Lt(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-W.value.z;if(o>=0&&o<4){let e=kt,t=e.x-W.value.x,r=e.z-W.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function Rt(){let e=Ft<0?.016:p.clamp(L.value-Ft,.008,.04);Ft=L.value;for(let e=0;e<30;e++){let t=Dt[e];It(t,L.value,t.anchor),t.initialized||=(t.position.copy(t.anchor),t.velocity.set(.08,0,.02),!0)}for(let t=0;t<30;t++){let n=Dt[t];if(kt.copy(n.anchor),n.boid){let r=1.05,i=2.1,a=0;Mt.set(0,0,0),Nt.set(0,0,0),Pt.set(0,0,0),n.force.subVectors(n.anchor,n.position).multiplyScalar(1.65);for(let e=0;e<30;e++){if(t===e||Dt[e].school!==n.school)continue;let o=Dt[e];jt.subVectors(n.position,o.position);let s=jt.lengthSq();s<1e-4||s>i*i||(a++,Mt.add(o.position),Nt.add(o.velocity),s<r*r&&Pt.addScaledVector(jt,1/s))}a>0&&(Mt.multiplyScalar(1/a).sub(n.position).multiplyScalar(.18),Nt.multiplyScalar(1/a).sub(n.velocity).multiplyScalar(.12),n.force.add(Mt).add(Nt).addScaledVector(Pt,.08)),jt.set(Math.sin(L.value*1.7+n.phase*31),Math.sin(L.value*2.3+n.phase*17)*.35,Math.cos(L.value*1.9+n.phase*23)).multiplyScalar(.045),n.force.add(jt),n.velocity.addScaledVector(n.force,e).multiplyScalar(.992).clampLength(.055,.52),n.position.addScaledVector(n.velocity,e),kt.copy(n.position)}else n.position.copy(n.anchor);Lt(n,L.value,At),At.x+=n.boid?n.velocity.x*.4:0,At.z+=n.boid?n.velocity.z*.4:0,U.position.copy(kt),U.rotation.set(0,-Math.atan2(At.z,At.x),0),U.scale.setScalar(n.scale),U.updateMatrix(),H.setMatrixAt(t,U.matrix),U.position.x-=.13,U.position.z-=.08,U.position.y-=.5,U.rotation.set(0,0,0),U.updateMatrix(),Et.setMatrixAt(t,U.matrix)}H.instanceMatrix.needsUpdate=!0,Et.instanceMatrix.needsUpdate=!0}let G=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];G.push(z([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),G.push(z([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),G.push(z([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),G.push(z([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),G.push(z([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),G.push(z([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),G.push(z([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let zt=Ze(G),Bt=new i({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});Bt.toneMapped=!1;let Vt=new fe(zt,Bt);Vt.name=`Pink folded paper boat`,N.add(Vt);let Ht=new e(1.5,2.6);Ht.rotateX(-Math.PI/2);let Ut=new fe(Ht,wt);N.add(Ut);let Wt=xe();Wt.name=`Polyfork low-poly sailboat`,Wt.scale.setScalar(4.6),Wt.traverse(e=>{e.isMesh&&(e.castShadow=!1,e.receiveShadow=!1,e.frustumCulled=!1)}),N.add(Wt);function Gt(){let e=[],t=[],n=new y;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new _;return a.setAttribute(`position`,new w(e,3)),a.setAttribute(`color`,new w(t,3)),a.computeVertexNormals(),a}let Kt=new i({vertexColors:!0,roughness:.72,side:2});Kt.toneMapped=!1;let qt=new me(Gt(),Kt,24);qt.name=`Ribbed scallop shells`;let K=new r;for(let e=0;e<24;e++){let t=B()*6.283,n=4+B()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;K.position.set(r,Qe(r,i)+.025,i),K.rotation.set(0,B()*6.283,0),K.scale.setScalar(.55+B()*.6),K.updateMatrix(),qt.setMatrixAt(e,K.matrix)}N.add(qt);let Jt=[],Yt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=Yt(t,e/6),r=Yt(t,(e+1)/6),i=Yt(t+1,(e+1)/6),a=Yt(t+1,e/6);Jt.push(...n,...i,...r,...n,...a,...i)}let Xt=new _;Xt.setAttribute(`position`,new w(Jt,3)),Xt.computeVertexNormals();let Zt=new i({color:14711368,roughness:.94,side:2});Zt.toneMapped=!1;let Qt=new me(Xt,Zt,6);Qt.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{K.position.set(e,Qe(e,t)+.04,t),K.rotation.set(0,n*1.7,0),K.scale.setScalar(.8+B()*.5),K.updateMatrix(),Qt.setMatrixAt(n,K.matrix)}),N.add(Qt);let $t=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),en=[1,.78],tn=new T,q=new T,nn=new T,rn=new n;function an(){let e=L.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=Me.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=Ne.chop;for(let r=0;r<4;r++){let i=$t[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=Oe.value;c*=f,l*=f,u*=f;let p=Ne.swell,m=t*i+n*a,h=t*o+n*s,g=.32*Math.sin(h*.48),_=Ae.value.x,v=Ae.value.y,y=D.surf.width*D.surf.width,b=i+o*.1536*Math.cos(h*.48),ee=a+s*.1536*Math.cos(h*.48),te=je.value*p;for(let e=0;e<2;e++){let t=e===0?_:v,n=en[e],r=m+g-t,i=r+2,a=Math.exp(-r*r/y),o=Math.exp(-i*i/(3*y));c+=n*(a-.24*o)*te;let s=n*(-2*r/y*a+.16*i/y*o)*te;l+=s*b,u+=s*ee}tn.set(-l,1,-u).normalize(),q.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),Ot.value.set(t,n,q.x,q.z),q.addScaledVector(tn,-q.dot(tn)).normalize(),Vt.position.set(t,De.value+c+.11,n),nn.crossVectors(tn,q),rn.makeBasis(nn,tn,q),Vt.quaternion.setFromRotationMatrix(rn),Ut.position.set(t-.5,Qe(t-.5,n-.3)+.028,n-.3),Ut.rotation.y=Math.atan2(q.x,q.z);let ne=-2.6+Math.sin(e*.045+1.8)*1.05,x=-1.85+Math.cos(e*.045+1.8)*.82,S=.16*Math.sin(e*.82+ne*.8)+.08*Math.sin(e*1.35+x*.65);Wt.position.set(ne,De.value+S+.12,x),Wt.rotation.set(.025*Math.sin(e*.62),Math.atan2(Math.cos(e*.045+1.8),-Math.sin(e*.045+1.8))+.32,.035*Math.cos(e*.54+.7))}let on=`
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
`,sn=`
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
`,J=new h(1,1);J.depthTexture=new b(1,1),J.texture.generateMipmaps=!1,M.capabilities.isWebGL2;let cn=new a({uniforms:{uTime:L,uTouch:W,uWake:Ot,uWaveStrength:Oe,uWaveEnvelope:ke,uLowQuality:Ee,uSurfFront:Ae,uSurfDirection:Me,uSurfHeight:je,uSurfWidth:{value:D.surf.width},tRefraction:{value:J.texture},tDepth:{value:J.depthTexture},tFoam:{value:rt},uNear:{value:F.near},uFar:{value:F.far},uSunDir:{value:Se},uAbsorption:{value:new T(...D.absorption)},uDeepColor:{value:new y(...D.deepColor)},uSssColor:{value:new y(...D.sssColor)},uHorizonColor:{value:P},uNight:Te,uTexel:{value:new f(1,1)}},vertexShader:on,fragmentShader:sn});function ln(t){let n=new e(40,40,t,t);return n.rotateX(-Math.PI/2),Ye(n),n}let un=new fe(ln(ve.segments),cn);un.position.y=De.value,un.layers.set(1),N.add(un);let dn=new a({uniforms:cn.uniforms,vertexShader:on,fragmentShader:sn,side:2}),fn=new fe(ln(28),dn);fn.name=`Low-poly water surface`,fn.position.y=De.value,fn.layers.set(1),fn.visible=!1,N.add(fn);function pn(){let e=Number(navigator.deviceMemory||0),t=Number(navigator.hardwareConcurrency||0);return M.capabilities.maxTextureSize<4096||e>0&&e<=2||t>0&&t<=2}let Y=ce===`low`||ce===`auto`&&pn()?`low`:`rich`;function mn(e=Y){Y=e===`low`?`low`:`rich`,Ee.value=+(Y===`low`),un.visible=Y===`rich`,fn.visible=Y===`low`,le({kind:`quality`,quality:Y}),En(),Q()}let hn=new y(.68,.82,.86),gn=new y(.035,.075,.12),_n=new y(...D.deepColor),vn=new y(.025,.13,.18),yn=new y(...D.sssColor),bn=new y(.1,.23,.27);function xn(){let e=document.documentElement.dataset.theme===`dark`;Te.value=+!!e,P.copy(e?gn:hn),N.background=P,N.fog.color.copy(P),cn.uniforms.uDeepColor.value.copy(e?vn:_n),cn.uniforms.uSssColor.value.copy(e?bn:yn),Ce.color.set(e?9349584:16772563),Ce.intensity=e?.62:2.3,we.color.set(e?2308962:12573183),we.groundColor.set(e?1120804:7036751),we.intensity=e?.72:1.15}let Sn=new MutationObserver(xn);Sn.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),xn();let Cn=new f,X=1,Z=[],wn=0;function Tn(){return O===`explore`?ve.refraction:.65}function En(){if(j||be)return;F.aspect=_e()/E(),F.updateProjectionMatrix();let e=O!==`explore`,t=e?1.25:ve.dpr,n=ve.pixels*(e?.8:1);M.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(_e()*E())))),M.setSize(_e(),E()),M.getDrawingBufferSize(Cn);let r=Tn()*X;M.capabilities.isWebGL2,J.samples!==0&&(J.dispose(),J.samples=0),J.setSize(Math.max(1,Math.floor(Cn.x*r)),Math.max(1,Math.floor(Cn.y*r))),cn.uniforms.uTexel.value.set(1/J.width,1/J.height),Q()}function Dn(e){let t=D.dynamicScale;if(!t.enabled||e<=0||e>80||(Z.push(e),Z.length>t.sampleCount&&Z.shift(),Z.length<t.sampleCount))return;let n=performance.now();if(n-wn<t.cooldownMs)return;let r=0;for(let e=0;e<Z.length;e++)r+=Z[e];let i=r/Z.length,a=X;i>t.targetMs*1.35&&X>t.min?a=Math.max(t.min,X-.1):i<t.targetMs*.85&&X<t.max&&(a=Math.min(t.max,X+.05)),a===X?wn=n:(X=a,En(),Z.length=0,wn=n)}function On(){let e=I.enableDamping;I.enableDamping=!1,I.update(),I.target.set(0,.4,0),F.position.set(...O===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),I.update(),I.enableDamping=e,Q()}function kn(e=O){O=e===`explore`?`explore`:`preview`,I.enabled=O===`explore`,M.domElement.tabIndex=O===`explore`?0:-1,M.domElement.setAttribute(`aria-hidden`,String(O!==`explore`)),M.domElement.style.touchAction=O===`explore`?`pan-y`:`auto`,Oe.value=D.waveStrength*(O===`explore`?1:.55),je.value=D.surf.height*(O===`explore`?1:.75),On(),En(),Ln()}let An=0,jn=0,Mn=!1,Nn=!1;function Pn(){Nn||(Nn=!0,he())}function Fn(){j||be||(I.enabled&&I.update(),Pe(),Ie(),an(),Rt(),Ke(),F.layers.set(0),M.setRenderTarget(J),M.render(N,F),F.layers.set(1),M.setRenderTarget(null),M.render(N,F),F.layers.set(0))}function In(e){let t=An?Math.min((e-An)/1e3,.1):0;An=e,L.value+=t*D.speed,Dn(t*1e3),Fn()}function Q(){j||be||Mn||jn||document.hidden||!ye||(jn=requestAnimationFrame(()=>{jn=0,!document.hidden&&ye&&Fn()}))}function Ln(){j||(Mn=!A&&!document.hidden&&ye&&!be,I.enableDamping=!A,An=0,M.setAnimationLoop(Mn?In:null),Mn&&jn&&(cancelAnimationFrame(jn),jn=0),qe(),Q())}let Rn=new AbortController,zn=new c,Bn=new re(new T(0,1,0),-D.waterLevel),Vn=new T,Hn=null,Un=0,Wn=0;M.domElement.addEventListener(`pointerdown`,e=>{Pn(),Hn={x:e.clientX,y:e.clientY}},{signal:Rn.signal}),M.domElement.addEventListener(`pointerup`,e=>{if(O!==`explore`||!Hn||Math.hypot(e.clientX-Hn.x,e.clientY-Hn.y)>7){Hn=null;return}let t=M.domElement.getBoundingClientRect();if(zn.setFromCamera(new f((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),F),zn.intersectObject(Vt,!1).length){let e=performance.now();Un=e-Wn>3e3?1:Un+1,Wn=e,Un>=10&&(Un=0,ge())}zn.ray.intersectPlane(Bn,Vn)&&(W.value.set(Vn.x,Vn.z,L.value,1),Q()),Hn=null},{signal:Rn.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:Rn.signal})}let Gn=new ResizeObserver(()=>En());Gn.observe(te),$(document,`visibilitychange`,Ln),$(k,`change`,()=>{A=k.matches,Ln()}),I.addEventListener(`change`,Q),$(M.domElement,`keydown`,e=>{if(O!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),Pn();let t=F.position.clone().sub(I.target),n=new s().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=p.clamp(n.phi,I.minPolarAngle,I.maxPolarAngle),F.position.copy(I.target).add(t.setFromSpherical(n)),I.update(),Q()});let Kn=new IntersectionObserver(e=>{ye=e[0].isIntersecting,Ln()});Kn.observe(M.domElement),$(M.domElement,`webglcontextlost`,e=>{e.preventDefault(),be=!0,Ln(),le({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(M.domElement,`webglcontextrestored`,()=>{be=!1,le({kind:`ready`}),En(),Ln()});function qn(){if(!j){j=!0,Je(),M.setAnimationLoop(null),cancelAnimationFrame(jn),Kn.disconnect(),Gn.disconnect(),Sn.disconnect(),Rn.abort(),I.removeEventListener(`change`,Q),I.dispose(),N.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{V.dispose()}catch{}try{H.dispose()}catch{}try{Et.dispose()}catch{}try{qt.dispose()}catch{}try{Qt.dispose()}catch{}try{Ct.dispose()}catch{}try{tt.dispose()}catch{}try{rt.dispose()}catch{}try{J.dispose()}catch{}try{M.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(M.setAnimationLoop(null),Mn=!1,qe()):qn()}),$(window,`pageshow`,e=>{e.persisted&&Ln()}),mn(Y),kn(),Fn(),le({kind:`ready`});function Jn(){if(!(!ze||j))try{R||=Ue(),qe()}catch{Ge()}}return $(window,`pointerdown`,Jn),$(window,`keydown`,Jn),navigator.userActivation?.hasBeenActive&&Jn(),{setMode:kn,setQuality:mn,getQuality:()=>Y,resetView:On,setSound(e){ze=!!e,ze?Jn():qe()},dispose:qn}}export{M as createShallows};