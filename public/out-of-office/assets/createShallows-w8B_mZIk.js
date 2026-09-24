import{A as e,C as t,D as n,E as r,F as i,I as a,M as o,N as s,O as c,P as l,S as u,T as d,_ as f,a as p,b as m,c as h,d as g,f as ee,g as te,h as _,i as v,j as y,k as ne,l as re,m as ie,n as ae,o as b,p as oe,r as se,s as ce,t as le,u as ue,v as x,w as de,x as fe,y as pe}from"./three-vendor-Dv1fsCb9.js";function me(me,{sound:he=!0,initialMode:ge=`preview`,onStatus:_e=()=>{},onInteract:ve=()=>{},onBoatEgg:ye=()=>{}}={}){let be=()=>Math.max(1,me.clientWidth),xe=()=>Math.max(1,me.clientHeight),S={waterLevel:1,seed:2718,rocks:72,waveStrength:.65,speed:1,waveSets:{period:27,mainCenter:.3,mainWidth:.16,secondCenter:.68,secondWidth:.12,secondStrength:.65},surf:{interval:14,separation:3.6,speed:3.4,height:.48,width:1.45,direction:[.28,.96]},absorption:[.055,.012,.008],deepColor:[.18,.36,.38],sssColor:[.34,.58,.44],quality:{auto:{dpr:2,pixels:35e5,refraction:.85,segments:128},high:{dpr:2,pixels:7e6,refraction:1,segments:160},low:{dpr:1,pixels:8e5,refraction:.6,segments:64}},dynamicScale:{enabled:!0,min:.5,max:1,targetMs:16.6,sampleCount:45,cooldownMs:1800}},C=ge===`explore`?`explore`:`preview`,w=S.quality.auto,Se=matchMedia(`(prefers-reduced-motion: reduce)`),Ce=Se.matches,T=!1,we=!0,E=!1,D;try{D=new ae({antialias:!0,powerPreference:`high-performance`})}catch(e){throw console.error(`Renderer creation failed`,e),_e({kind:`failed`,message:`This browser could not start the water scene.`}),e}D.toneMapping=4,D.toneMappingExposure=1.08,D.setPixelRatio(Math.min(window.devicePixelRatio,w.dpr)),D.setSize(be(),xe()),D.domElement.setAttribute(`aria-label`,`A sunlit coastal pool with swimming fish, sea stars, shells and a pink paper boat. Tap for ripples, drag sideways to look around, or use the arrow keys.`),D.domElement.setAttribute(`role`,`img`),D.domElement.tabIndex=0,D.domElement.className=`shallows-canvas`,me.appendChild(D.domElement);let O=new ne,Te=new b(.68,.82,.86);D.setClearColor(Te,1),O.background=Te,O.fog=new ee(Te,30,85);let k=new de(52,be()/xe(),.1,300);k.position.set(3.2,9.8,12);let A=new le(k,D.domElement);A.target.set(0,.4,0),A.enableDamping=!0,A.dampingFactor=.08,A.enablePan=!1,A.enableZoom=!1,A.maxPolarAngle=x.degToRad(72),A.minPolarAngle=x.degToRad(8),A.minDistance=2.5,A.maxDistance=20,D.domElement.style.touchAction=`pan-y`,typeof A._onMouseWheel==`function`&&D.domElement.removeEventListener(`wheel`,A._onMouseWheel);let Ee=new l(.5,.8,.3).normalize(),De=new re(16772563,2.3);De.position.copy(Ee).multiplyScalar(20),O.add(De),O.add(new oe(12573183,7036751,1.15));let j={value:0},Oe={value:S.waterLevel},ke={value:S.waveStrength},Ae={value:0},M={value:new s},je={value:S.surf.height},Me={value:new s(...S.surf.direction).normalize()},Ne={chop:1,swell:1};function Pe(){let{interval:e,separation:t,speed:n}=S.surf,r=j.value+5,i=t=>(t%e+e)%e*n-e*n*.5;M.value.set(i(r),i(r-t))}function Fe(e){let t=S.waveSets,n=(e%t.period+t.period)%t.period/t.period,r=Math.exp(-(((n-t.mainCenter)/t.mainWidth)**2)),i=t.secondStrength*Math.exp(-(((n-t.secondCenter)/t.secondWidth)**2));return Math.min(1,Math.max(r,i))}function Ie(){let e=Fe(j.value);Ae.value=e,Ne.chop=.42+1.73*e,Ne.swell=.75+.6*e}let Le=new e({side:1,depthWrite:!1,uniforms:{uSunDir:{value:Ee},uHorizonColor:{value:Te}},vertexShader:`
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
      col += vec3(1.0, 0.96, 0.88) * pow(max(dot(d, uSunDir), 0.0), 380.0) * 1.2;
      col += vec3(1.0, 0.90, 0.78) * pow(max(dot(d, uSunDir), 0.0), 12.0) * 0.18;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `}),Re=new m(new y(180,32,16),Le);Re.renderOrder=-1,Re.layers.enable(1),O.add(Re);let N=null,ze=!!he,Be=0,Ve=0,He=-1/0;function Ue(){let e=window.AudioContext||window.webkitAudioContext;if(!e)throw Error(`Ocean sound is not supported by this browser.`);let t=new e({latencyHint:`playback`});try{let e=22050,n=S.surf.interval,r=Math.round(e*n),i=t.createBuffer(2,r,e);for(let t=0;t<2;t++){let n=i.getChannelData(t),a=1406+t*7919,o=0,s=0,c=(e,t,n)=>{let r=x.clamp((n-e)/(t-e),0,1);return r*r*(3-2*r)},l=(e,t)=>c(t-2.25,t-.05,e)*Math.exp(-Math.max(0,e-t)*.52);for(let r=0;r<n.length;r++){a=Math.imul(a,1664525)+1013904223>>>0;let i=a/2147483648-1,c=r/e;o+=.018*(i-o),s+=.14*(i-s);let u=i-s,d=Math.min(1,l(c,2)+.88*l(c,2+S.surf.separation)),f=.72+.18*Math.sin(c*2.17+t*.7)+.1*Math.sin(c*3.91+t*1.3),p=o*(.12+.28*d),m=(s-o*.22)*(.045+.3*d),h=u*(.012+.19*d)*f,g=p+m+h;n[r]=Math.tanh(g*1.8)/1.8}let u=1985;for(let e=0;e<u;e++){let t=e/u,i=r-u+e;n[i]=n[i]*(1-t)+n[e]*t}}let a=t.createBufferSource();a.buffer=i,a.loop=!0;let o=t.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,o.Q.value=.5;let s=t.createBiquadFilter();s.type=`peaking`,s.frequency.value=175,s.Q.value=.8,s.gain.value=2;let c=t.createGain();c.gain.value=.12;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=280,l.Q.value=.5;let u=t.createBiquadFilter();u.type=`lowpass`,u.frequency.value=1100,u.Q.value=.5;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=1800,d.Q.value=.75,d.gain.value=2;let f=t.createGain();f.gain.value=.025;let p=t.createGain();p.gain.value=0;let m=t.createDynamicsCompressor();return m.threshold.value=-12,m.knee.value=20,m.ratio.value=8,a.connect(o).connect(s).connect(c).connect(p),a.connect(l).connect(u).connect(d).connect(f).connect(p),p.connect(m).connect(t.destination),a.playbackRate.value=S.speed,a.start(0,j.value%n),{context:t,source:a,buffer:i,bodyFilter:o,bodyFormant:s,bodyGain:c,washHighpass:l,washFilter:u,washFormant:d,washGain:f,master:p,limiter:m}}catch(e){try{t.close()}catch{}throw e}}function We(){return ze&&Y&&!T}function Ge(){if(!T&&(ze=!1,_e({kind:`sound-failed`,message:`The ocean sound could not start in this browser.`}),N)){N.master.gain.setValueAtTime(0,N.context.currentTime);try{N.context.suspend()}catch{}}}function Ke(e=!1){if(!N||!We()||N.context.state!==`running`)return;let{context:t,bodyGain:n,bodyFilter:r,bodyFormant:i,washGain:a,washFilter:o,washFormant:s}=N,c=t.currentTime;if(!e&&c-He<.05)return;He=c;let[l,u]=S.surf.direction,d=Math.hypot(l,u),f=(k.position.x*l+k.position.z*u)/d,p=e=>Math.exp(-((e/(e<0?3.8:7.5))**2)),m=Ae.value,h=p(M.value.x-f)+.78*p(M.value.y-f),g=Math.min(1,h*(.55+.7*m)+m*.3);n.gain.setTargetAtTime(.1+g*.2,c,.18),r.frequency.setTargetAtTime(180+g*100,c,.2),i.frequency.setTargetAtTime(135+g*70,c,.2),i.gain.setTargetAtTime(1.5+g*1.5,c,.2),a.gain.setTargetAtTime(.02+g*.42,c,.12),o.frequency.setTargetAtTime(1200+g*2e3,c,.2),s.frequency.setTargetAtTime(1300+g*1300,c,.2),s.gain.setTargetAtTime(1+g*2,c,.18)}function qe(){if(!N||N.context.state===`closed`)return;let e=++Be;clearTimeout(Ve);let{context:t,master:n}=N;We()?t.resume().then(()=>{e!==Be||!We()||(Ke(!0),n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(.4*.7*(C===`explore`?1:.8),t.currentTime,.09))}).catch(()=>{e===Be&&Ge()}):(n.gain.cancelScheduledValues(t.currentTime),n.gain.setTargetAtTime(0,t.currentTime,.04),Ve=setTimeout(()=>{if(e===Be&&!We()&&t.state!==`closed`)try{t.suspend()}catch{}},240))}function Je(){if(++Be,clearTimeout(Ve),!N)return;let{context:e,source:t}=N;try{t.stop()}catch{}for(let e of Object.values(N))if(e&&e.disconnect)try{e.disconnect()}catch{}try{e.close()}catch{}N=null}function Ye(e){let t=e.attributes.position,n=e=>Math.abs(e)<=16?e:Math.sign(e)*(16+((Math.abs(e)-16)/4)**2*130);for(let e=0;e<t.count;e++)t.setX(e,n(t.getX(e))),t.setZ(e,n(t.getZ(e)))}function Xe(e,t=16777215){let n=e.index?e.toNonIndexed():e.clone();n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position.count;if(!n.attributes.color){let e=new b(t),i=new Float32Array(r*3);for(let t=0;t<r;t++)i[t*3]=e.r,i[t*3+1]=e.g,i[t*3+2]=e.b;n.setAttribute(`color`,new se(i,3))}return n}function Ze(e,t=16777215){let n=e.map(e=>Xe(e,t)),r=0;for(let e of n)r+=e.attributes.position.count;let i=new Float32Array(r*3),a=new Float32Array(r*3),o=new Float32Array(r*3),s=0;for(let e of n)i.set(e.attributes.position.array,s*3),a.set(e.attributes.normal.array,s*3),o.set(e.attributes.color.array,s*3),s+=e.attributes.position.count,e.dispose();let c=new v;return c.setAttribute(`position`,new se(i,3)),c.setAttribute(`normal`,new se(a,3)),c.setAttribute(`color`,new se(o,3)),c}function P(e,t){let n=new v;return n.setAttribute(`position`,new g(e.flat(),3)),n.computeVertexNormals(),Xe(n,t)}function F(e,t){return-.18-.42*Math.exp(-(e*e+t*t)/38)+.16*Math.sin(e*.35)*Math.sin(t*.3)+.1*Math.sin(e*1.1+1.7)*Math.sin(t*.9+.6)}let Qe=document.createElement(`canvas`);Qe.width=Qe.height=1024;let $e=Qe.getContext(`2d`);$e.fillStyle=`#fff`,$e.fillRect(0,0,1024,1024);let et=new p(Qe);et.flipY=!1;function tt(){let e=new Uint8Array(16384*4),t=(e,t,n)=>{let r=Math.imul(e%n+37,374761393)^Math.imul(t%n+91,668265263);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};function n(e,n,r){let i=e/128*r,a=n/128*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s;c=c*c*(3-2*c),l=l*l*(3-2*l);let u=t(o,s,r)*(1-c)+t(o+1,s,r)*c,d=t(o,s+1,r)*(1-c)+t(o+1,s+1,r)*c;return u*(1-l)+d*l}for(let t=0;t<128;t++)for(let r=0;r<128;r++){let i=(t*128+r)*4;e[i]=Math.round(n(r,t,16)*255),e[i+1]=Math.round(n(r,t,64)*255),e[i+2]=Math.round(n(r,t,32)*255),e[i+3]=255}let r=new ce(e,128,128);return r.wrapS=r.wrapT=c,r.magFilter=te,r.minFilter=f,r.generateMipmaps=!0,r.needsUpdate=!0,r}let nt=tt();function rt(e,t=!1){e.customProgramCacheKey=()=>t?`bed-caustics-v10`:`rock-caustics-v10`,e.onBeforeCompile=e=>{e.uniforms.uTime=j,e.uniforms.uWaterLevel=Oe,t&&(e.uniforms.tBedShade={value:et}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      }`)),e.fragmentShader=n}}let it=new r(40,40,96,96);it.rotateX(-Math.PI/2),Ye(it);{let e=it.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,F(e.getX(t),e.getZ(t)));it.computeVertexNormals()}let at=new u({color:15917244,roughness:.94});at.toneMapped=!1,rt(at,!0),O.add(new m(it,at));function ot(e){let t=new y(e,32,20),n=t.attributes.position,r=new l;for(let e=0;e<n.count;e++){r.fromBufferAttribute(n,e);let t=.87+.1*Math.sin(r.x*3.1)*Math.sin(r.z*4.2+r.y*2.7)+.045*Math.cos(r.x*7.2+r.z*5.3)*Math.sin(r.y*6.8);r.multiplyScalar(t),n.setXYZ(e,r.x,r.y*.7,r.z)}return t.computeVertexNormals(),t}let st=[11576468,11050380,12562844,9804434,13088928],ct=S.seed;function I(){return ct=Math.imul(ct,1664525)+1013904223>>>0,ct/4294967296}let lt=new u({roughness:.78,flatShading:!1});lt.toneMapped=!1,rt(lt);let L=new _(ot(1),lt,S.rocks+3);L.name=`Stones`;let ut=new t,dt=new b,ft=0,pt=[];function mt(e,t,n){let r=n*1.2+.22;pt.push({x:e,z:t,radius:r,radius2:r*r}),ut.position.set(e,F(e,t)+n*.28,t),ut.rotation.set(I()*.6,I()*Math.PI*2,I()*.5),ut.scale.set(n*(.85+I()*.3),n,n*(.8+I()*.4)),ut.updateMatrix(),L.setMatrixAt(ft,ut.matrix),L.setColorAt(ft++,dt.setHex(st[Math.floor(I()*st.length)]));let i=(e/40+.5)*1024,a=(t/40+.5)*1024,o=n*1.35/40*1024,s=$e.createRadialGradient(i,a,o*.15,i,a,o);s.addColorStop(0,`rgba(0, 0, 0, .24)`),s.addColorStop(.45,`rgba(0, 0, 0, .12)`),s.addColorStop(1,`rgba(0, 0, 0, 0)`),$e.fillStyle=s,$e.fillRect(i-o,a-o,o*2,o*2)}for(let e=0;e<S.rocks;e++){let e=I()*Math.PI*2,t=4.6+I()*7;mt(Math.cos(e)*t,Math.sin(e)*t,.1+I()**2*.75)}mt(-4.8,.4,1.55),mt(4.6,-2.8,1.6),mt(-1.8,-5,1.45),L.instanceMatrix.needsUpdate=!0,L.instanceColor.needsUpdate=!0,L.computeBoundingSphere(),O.add(L),et.needsUpdate=!0;let R=[];{let e=new y(1,20,14);e.scale(.31,.1,.085);let t=e.attributes.position,n=[];for(let e=0;e<t.count;e++){let r=x.smoothstep(t.getY(e),-.06,.07),i=new b(15660252).lerp(new b(6990767),r),a=Math.exp(-((t.getY(e)/.02)**2));i.lerp(new b(15782036),a*.55),n.push(i.r,i.g,i.b)}e.setAttribute(`color`,new g(n,3)),R.push(e)}R.push(P([[-.23,0,0],[-.47,.145,.012],[-.39,0,0],[-.23,0,0],[-.39,0,0],[-.47,-.145,-.012]],10735814)),R.push(P([[.08,.065,0],[-.13,.2,0],[-.23,.055,0]],11589828));for(let e of[-1,1]){R.push(P([[.11,-.02,e*.055],[-.07,-.035,e*.23],[-.12,-.055,e*.05]],14082746));let t=new y(.023,10,8);t.translate(.223,.033,e*.064),R.push(Xe(t,925474));let n=new y(.009,8,6);n.translate(.229,.04,e*.08),R.push(Xe(n,16773320))}let ht=Ze(R),gt=new Float32Array(30);for(let e=0;e<30;e++)gt[e]=I()*Math.PI*2;ht.setAttribute(`aPhase`,new ie(gt,1));let _t=new u({vertexColors:!0,roughness:.42,metalness:.05,side:2});_t.toneMapped=!1,_t.onBeforeCompile=e=>{e.uniforms.uFishTime=j,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uFishTime;
attribute float aPhase;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float tail=1.0-smoothstep(-.46,.1,position.x);
      transformed.z+=sin(uFishTime*7.5+aPhase-position.x*9.0)*.07*tail*tail;`)},_t.customProgramCacheKey=()=>`cove-fish-dimensional`;let z=new _(ht,_t,30);z.name=`Three schools of reef fish`,z.frustumCulled=!1,z.instanceMatrix.setUsage(ue),O.add(z);let vt=document.createElement(`canvas`);vt.width=vt.height=64;let yt=vt.getContext(`2d`),bt=yt.createRadialGradient(32,32,3,32,32,32);bt.addColorStop(0,`rgba(11,36,30,.38)`),bt.addColorStop(.45,`rgba(11,36,30,.20)`),bt.addColorStop(1,`rgba(11,36,30,0)`),yt.fillStyle=bt,yt.fillRect(0,0,64,64);let xt=new p(vt),St=new fe({map:xt,transparent:!0,opacity:.34,depthWrite:!1});St.toneMapped=!1;let Ct=new r(1.15,.42);Ct.rotateX(-Math.PI/2);let wt=new _(Ct,St,30);wt.frustumCulled=!1,O.add(wt);let Tt=[],B=new t;for(let e=0;e<30;e++){let t=Math.floor(e/3);Tt.push({school:e%3,phase:I()*.035,trail:Math.floor(t/3)*.72,spread:(t%3-1)*.48+(I()-.5)*.1,scale:.85+I()*.35}),z.setColorAt(e,new b(e%9==0?16045466:16777215))}z.instanceColor.needsUpdate=!0;let V={value:new i(0,0,-100,0)},Et={value:new i(0,0,1,0)},Dt=new l,Ot=new l;function kt(e,t,n){let r=t*(.1+e.school*.018)+e.school*2.1+e.phase,i=2.1+e.school*.38+e.spread;n.set(Math.cos(r)*i+Math.sin(r)*e.trail+.15*Math.sin(t*.21+e.school),0,Math.sin(r)*i*.72-Math.cos(r)*e.trail*.72+.6);let a=t-V.value.z,o=n.x-V.value.x,s=n.z-V.value.y,c=Math.hypot(o,s);if(a>=0&&a<4&&c<3){let e=(1-Math.exp(-a*4))*Math.exp(-a*.7)*(3-c)*.7;n.x+=o/Math.max(c,.1)*e,n.z+=s/Math.max(c,.1)*e}for(let e=0;e<pt.length;e++){let t=pt[e],r=n.x-t.x,i=n.z-t.z,a=r*r+i*i;if(a<t.radius2){let e=Math.sqrt(a)||.001;n.x=t.x+r/e*t.radius,n.z=t.z+i/e*t.radius}}let l=Ae.value;return n.y=F(n.x,n.z)+.55+.05*Math.sin(r*3+e.phase)+l*.1,n}function At(e,t,n){let r=.1+e.school*.018,i=t*r+e.school*2.1+e.phase,a=2.1+e.school*.38+e.spread;n.set(-Math.sin(i)*r*a+Math.cos(i)*r*e.trail+.0315*Math.cos(t*.21+e.school),0,Math.cos(i)*r*a*.72-Math.sin(i)*r*e.trail*.72);let o=t-V.value.z;if(o>=0&&o<4){let e=Dt,t=e.x-V.value.x,r=e.z-V.value.y,i=Math.hypot(t,r);if(i<3){let e=(1-i/3)*Math.exp(-o*.7)*1.4;n.x+=t/Math.max(i,.1)*e,n.z+=r/Math.max(i,.1)*e}}return n}function jt(){for(let e=0;e<30;e++){let t=Tt[e];kt(t,j.value,Dt),At(t,j.value,Ot),B.position.copy(Dt),B.rotation.set(0,-Math.atan2(Ot.z,Ot.x),0),B.scale.setScalar(t.scale),B.updateMatrix(),z.setMatrixAt(e,B.matrix),B.position.x-=.13,B.position.z-=.08,B.position.y-=.5,B.rotation.set(0,0,0),B.updateMatrix(),wt.setMatrixAt(e,B.matrix)}z.instanceMatrix.needsUpdate=!0,wt.instanceMatrix.needsUpdate=!0}let H=[];{let e=[0,.14,.9],t=[0,.14,-.9],n=[-.43,.21,0],r=[.43,.21,0],i=[0,-.1,0],a=[0,-.035,.63],o=[0,-.035,-.63];H.push(P([e,n,a,n,i,a,n,o,i,n,t,o],15698864)),H.push(P([e,a,r,r,a,i,r,i,o,r,o,t],16366800)),H.push(P([e,[0,.035,0],n,n,[0,.035,0],t,t,[0,.035,0],r,r,[0,.035,0],e],14711712)),H.push(P([[0,.08,.59],[0,.76,-.08],[-.075,.1,-.55]],16769260)),H.push(P([[0,.08,.59],[.045,.09,-.55],[0,.76,-.08]],15771844)),H.push(P([[.008,.64,-.05],[.008,.71,-.071],[.008,.58,.065]],12072030)),H.push(P([[0,.76,-.08],[0,.73,.18],[0,.65,-.06]],13916802))}let Mt=Ze(H),Nt=new u({vertexColors:!0,roughness:.74,side:2,emissive:16369880,emissiveIntensity:.22});Nt.toneMapped=!1;let Pt=new m(Mt,Nt);Pt.name=`Pink folded paper boat`,O.add(Pt);let Ft=new r(1.5,2.6);Ft.rotateX(-Math.PI/2);let It=new m(Ft,St);O.add(It);function Lt(){let e=[],t=[],n=new b;function r(e,t){let n=(t/24-.5)*Math.PI*1.22,r=e/8;return[Math.sin(n)*r*.38,Math.sin(r*Math.PI)*.105+.014*Math.cos(n*22)*r,Math.cos(n)*r*.42]}function i(r,i,a,o){e.push(...r,...i,...a),n.setHex(o);for(let e=0;e<3;e++)t.push(n.r,n.g,n.b)}for(let e=0;e<8;e++)for(let t=0;t<24;t++){let n=r(e,t),a=r(e+1,t),o=r(e+1,t+1),s=r(e,t+1),c=t%4<2?16175276:16772299;i(n,o,a,c),i(n,s,o,c)}let a=new v;return a.setAttribute(`position`,new g(e,3)),a.setAttribute(`color`,new g(t,3)),a.computeVertexNormals(),a}let Rt=new u({vertexColors:!0,roughness:.72,side:2});Rt.toneMapped=!1;let zt=new _(Lt(),Rt,24);zt.name=`Ribbed scallop shells`;let U=new t;for(let e=0;e<24;e++){let t=I()*6.283,n=4+I()*4.5,r=Math.cos(t)*n,i=Math.sin(t)*n;U.position.set(r,F(r,i)+.025,i),U.rotation.set(0,I()*6.283,0),U.scale.setScalar(.55+I()*.6),U.updateMatrix(),zt.setMatrixAt(e,U.matrix)}O.add(zt);let Bt=[],Vt=(e,t)=>{let n=e/48*Math.PI*2,r=(.24+.14*Math.cos(n*5))*t;return[Math.cos(n)*r,.085*(1-t)**.6+.018,Math.sin(n)*r]};for(let e=0;e<6;e++)for(let t=0;t<48;t++){let n=Vt(t,e/6),r=Vt(t,(e+1)/6),i=Vt(t+1,(e+1)/6),a=Vt(t+1,e/6);Bt.push(...n,...i,...r,...n,...a,...i)}let Ht=new v;Ht.setAttribute(`position`,new g(Bt,3)),Ht.computeVertexNormals();let Ut=new u({color:14711368,roughness:.94,side:2});Ut.toneMapped=!1;let Wt=new _(Ht,Ut,6);Wt.name=`Terracotta sea stars`,[[3.5,3.2],[-4.1,2.2],[5,-2],[-2.8,5.6],[1.2,5.1],[-5.5,-3]].forEach(([e,t],n)=>{U.position.set(e,F(e,t)+.04,t),U.rotation.set(0,n*1.7,0),U.scale.setScalar(.8+I()*.5),U.updateMatrix(),Wt.setMatrixAt(n,U.matrix)}),O.add(Wt);let Gt=[[1,.3,.8,.085,1.2],[-.7,1,1.3,.065,1.6],[.5,-1,2.2,.042,2.2],[-1,-.4,3.5,.022,2.8]].map(([e,t,n,r,i])=>{let a=Math.hypot(e,t);return{nx:e/a,nz:t/a,f:n,amp:r,speed:i}}),Kt=[1,.78],qt=new l,W=new l,Jt=new l,Yt=new pe;function Xt(){let e=j.value,t=.9+Math.sin(e*.075)*1.35,n=.35+Math.cos(e*.075)*1.1,r=Me.value,i=r.x,a=r.y,o=-a,s=i,c=0,l=0,u=0,d=Ne.chop;for(let r=0;r<4;r++){let i=Gt[r],a=(t*i.nx+n*i.nz)*i.f+e*i.speed,o=Math.sin(a),s=Math.cos(a);c+=i.amp*d*o,l+=i.nx*i.f*i.amp*d*s,u+=i.nz*i.f*i.amp*d*s}let f=ke.value;c*=f,l*=f,u*=f;let p=Ne.swell,m=t*i+n*a,h=t*o+n*s,g=.32*Math.sin(h*.48),ee=M.value.x,te=M.value.y,_=S.surf.width*S.surf.width,v=i+o*.1536*Math.cos(h*.48),y=a+s*.1536*Math.cos(h*.48),ne=je.value*p;for(let e=0;e<2;e++){let t=e===0?ee:te,n=Kt[e],r=m+g-t,i=r+2,a=Math.exp(-r*r/_),o=Math.exp(-i*i/(3*_));c+=n*(a-.24*o)*ne;let s=n*(-2*r/_*a+.16*i/_*o)*ne;l+=s*v,u+=s*y}qt.set(-l,1,-u).normalize(),W.set(1.35*Math.cos(e*.075),0,-1.1*Math.sin(e*.075)).normalize(),Et.value.set(t,n,W.x,W.z),W.addScaledVector(qt,-W.dot(qt)).normalize(),Pt.position.set(t,Oe.value+c+.11,n),Jt.crossVectors(qt,W),Yt.makeBasis(Jt,qt,W),Pt.quaternion.setFromRotationMatrix(Yt),It.position.set(t-.5,F(t-.5,n-.3)+.028,n-.3),It.rotation.y=Math.atan2(W.x,W.z)}let G=new a(1,1);G.depthTexture=new h(1,1),G.texture.generateMipmaps=!1,D.capabilities.isWebGL2;let Zt=new e({uniforms:{uTime:j,uTouch:V,uWake:Et,uWaveStrength:ke,uWaveEnvelope:Ae,uSurfFront:M,uSurfDirection:Me,uSurfHeight:je,uSurfWidth:{value:S.surf.width},tRefraction:{value:G.texture},tDepth:{value:G.depthTexture},tFoam:{value:nt},uNear:{value:k.near},uFar:{value:k.far},uSunDir:{value:Ee},uAbsorption:{value:new l(...S.absorption)},uDeepColor:{value:new b(...S.deepColor)},uSssColor:{value:new b(...S.sssColor)},uHorizonColor:{value:Te},uTexel:{value:new s(1,1)}},vertexShader:`
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
`});function Qt(e){let t=new r(40,40,e,e);return t.rotateX(-Math.PI/2),Ye(t),t}let $t=new m(Qt(w.segments),Zt);$t.position.y=Oe.value,$t.layers.set(1),O.add($t);let en=new s,K=1,q=[],tn=0;function nn(){return C===`explore`?w.refraction:.65}function rn(){if(T||E)return;k.aspect=be()/xe(),k.updateProjectionMatrix();let e=C!==`explore`,t=e?1.25:w.dpr,n=w.pixels*(e?.8:1);D.setPixelRatio(Math.min(devicePixelRatio,t,Math.sqrt(n/(be()*xe())))),D.setSize(be(),xe()),D.getDrawingBufferSize(en);let r=nn()*K;D.capabilities.isWebGL2,G.samples!==0&&(G.dispose(),G.samples=0),G.setSize(Math.max(1,Math.floor(en.x*r)),Math.max(1,Math.floor(en.y*r))),Zt.uniforms.uTexel.value.set(1/G.width,1/G.height),X()}function an(e){let t=S.dynamicScale;if(!t.enabled||e<=0||e>80||(q.push(e),q.length>t.sampleCount&&q.shift(),q.length<t.sampleCount))return;let n=performance.now();if(n-tn<t.cooldownMs)return;let r=0;for(let e=0;e<q.length;e++)r+=q[e];let i=r/q.length,a=K;i>t.targetMs*1.35&&K>t.min?a=Math.max(t.min,K-.1):i<t.targetMs*.85&&K<t.max&&(a=Math.min(t.max,K+.05)),a===K?tn=n:(K=a,rn(),q.length=0,tn=n)}function on(){let e=A.enableDamping;A.enableDamping=!1,A.update(),A.target.set(0,.4,0),k.position.set(...C===`explore`?[3.2,9.8,12]:[3,12.5,13.5]),A.update(),A.enableDamping=e,X()}function sn(e=C){C=e===`explore`?`explore`:`preview`,A.enabled=C===`explore`,D.domElement.tabIndex=C===`explore`?0:-1,D.domElement.setAttribute(`aria-hidden`,String(C!==`explore`)),D.domElement.style.touchAction=C===`explore`?`pan-y`:`auto`,ke.value=S.waveStrength*(C===`explore`?1:.55),je.value=S.surf.height*(C===`explore`?1:.75),on(),rn(),Z()}let cn=0,J=0,Y=!1,ln=!1;function un(){ln||(ln=!0,ve())}function dn(){T||E||(A.enabled&&A.update(),Pe(),Ie(),Xt(),jt(),Ke(),k.layers.set(0),D.setRenderTarget(G),D.render(O,k),k.layers.set(1),D.setRenderTarget(null),D.render(O,k),k.layers.set(0))}function fn(e){let t=cn?Math.min((e-cn)/1e3,.1):0;cn=e,j.value+=t*S.speed,an(t*1e3),dn()}function X(){T||E||Y||J||document.hidden||!we||(J=requestAnimationFrame(()=>{J=0,!document.hidden&&we&&dn()}))}function Z(){T||(Y=!Ce&&!document.hidden&&we&&!E,A.enableDamping=!Ce,cn=0,D.setAnimationLoop(Y?fn:null),Y&&J&&(cancelAnimationFrame(J),J=0),qe(),X())}let pn=new AbortController,mn=new n,hn=new d(new l(0,1,0),-S.waterLevel),gn=new l,Q=null,_n=0,vn=0;D.domElement.addEventListener(`pointerdown`,e=>{un(),Q={x:e.clientX,y:e.clientY}},{signal:pn.signal}),D.domElement.addEventListener(`pointerup`,e=>{if(C!==`explore`||!Q||Math.hypot(e.clientX-Q.x,e.clientY-Q.y)>7){Q=null;return}let t=D.domElement.getBoundingClientRect();if(mn.setFromCamera(new s((e.clientX-t.left)/t.width*2-1,1-(e.clientY-t.top)/t.height*2),k),mn.intersectObject(Pt,!1).length){let e=performance.now();_n=e-vn>3e3?1:_n+1,vn=e,_n>=10&&(_n=0,ye())}mn.ray.intersectPlane(hn,gn)&&(V.value.set(gn.x,gn.z,j.value,1),X()),Q=null},{signal:pn.signal});function $(e,t,n,r={}){e.addEventListener(t,n,{...r,signal:pn.signal})}let yn=new ResizeObserver(()=>rn());yn.observe(me),$(document,`visibilitychange`,Z),$(Se,`change`,()=>{Ce=Se.matches,Z()}),A.addEventListener(`change`,X),$(D.domElement,`keydown`,e=>{if(C!==`explore`||![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;e.preventDefault(),un();let t=k.position.clone().sub(A.target),n=new o().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.08),e.key===`ArrowRight`&&(n.theta+=.08),e.key===`ArrowUp`&&(n.phi-=.08),e.key===`ArrowDown`&&(n.phi+=.08),n.phi=x.clamp(n.phi,A.minPolarAngle,A.maxPolarAngle),k.position.copy(A.target).add(t.setFromSpherical(n)),A.update(),X()});let bn=new IntersectionObserver(e=>{we=e[0].isIntersecting,Z()});bn.observe(D.domElement),$(D.domElement,`webglcontextlost`,e=>{e.preventDefault(),E=!0,Z(),_e({kind:`context-lost`,message:`The water is taking a moment. It will return when graphics are available.`})}),$(D.domElement,`webglcontextrestored`,()=>{E=!1,_e({kind:`ready`}),rn(),Z()});function xn(){if(!T){T=!0,Je(),D.setAnimationLoop(null),cancelAnimationFrame(J),bn.disconnect(),yn.disconnect(),pn.abort(),A.removeEventListener(`change`,X),A.dispose(),O.traverse(e=>{if(e.isMesh){try{e.geometry.dispose()}catch{}try{e.material&&e.material.dispose()}catch{}}});try{L.dispose()}catch{}try{z.dispose()}catch{}try{wt.dispose()}catch{}try{zt.dispose()}catch{}try{Wt.dispose()}catch{}try{xt.dispose()}catch{}try{et.dispose()}catch{}try{nt.dispose()}catch{}try{G.dispose()}catch{}try{D.dispose()}catch{}}}$(window,`pagehide`,e=>{e.persisted?(D.setAnimationLoop(null),Y=!1,qe()):xn()}),$(window,`pageshow`,e=>{e.persisted&&Z()}),sn(),dn(),_e({kind:`ready`});function Sn(){if(!(!ze||T))try{N||=Ue(),qe()}catch{Ge()}}return $(window,`pointerdown`,Sn),$(window,`keydown`,Sn),navigator.userActivation?.hasBeenActive&&Sn(),{setMode:sn,setSound(e){ze=!!e,ze?Sn():qe()},dispose:xn}}export{me as createShallows};