import * as T from 'three';
import {decoratePart,fastenerRing,detailedValve} from './cad-details.js?v=hairline-equipment-20261012';
import {buildIndustrial} from './industrial-plant.js';
import {addCompressionConcept} from './compression-model.js';
const vec=a=>new T.Vector3(...a);
export function createBiogasModel(design,{compression=false}={}){
 const root=new T.Group(),parts=[];let flowPath=[];const chosen=design;
function mat(color,metalness=.1,opacity=1){return new T.MeshStandardMaterial({color,metalness,roughness:.43,transparent:opacity<1,opacity,side:T.DoubleSide});}
function mesh(g,m,p,parent){const o=new T.Mesh(g,m);o.position.copy(vec(p));o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function cyl(parent,p,r,h,color,rTop=r){return mesh(new T.CylinderGeometry(rTop,r,h,36),mat(color),p,parent);}
function box(parent,p,size,color){return mesh(new T.BoxGeometry(...size),mat(color),p,parent);}
function tube(parent,points,r=.085,color='#7fc8b8'){const curve=new T.CatmullRomCurve3(points.map(vec),false,'catmullrom',.01);return mesh(new T.TubeGeometry(curve,Math.max(16,points.length*12),r,10,false),mat(color,.55),[0,0,0],parent);}
function part(name,pos,offset,description,build,label=true){if(compression&&chosen==='B'&&['Tyre-tube store','Storage connection'].includes(name))return new T.Group();const g=new T.Group();g.position.copy(vec(pos));root.add(g);build(g);decoratePart(name,g,chosen);g.userData={name,description};parts.push({g,base:vec(pos),offset:vec(offset),name,description,label});return g;}
function valve(g,p=[0,0,0]){detailedValve(g,p);}
function buildReference(d){
 const blue='#2d8578',brick='#ad9378';
 if(d==='D'){
 part('Digestion chamber',[0,0,0],[0,-.55,0],'Fixed chamber, usually constructed underground. This cutaway-style reference is illustrative, not dimensioned.',g=>{cyl(g,[0,.65,0],1.35,1.3,brick);const rim=mesh(new T.TorusGeometry(1.32,.06,12,64),mat('#baa48c'),[0,1.32,0],g);rim.rotation.x=Math.PI/2;});
 part('Fixed gas dome',[0,1.3,0],[0,1.5,0],'A fixed dome contains the gas space. The dome does not rise like a floating drum.',g=>{mesh(new T.SphereGeometry(1.35,48,24,0,Math.PI*2,0,Math.PI/2),mat('#bca78e'),[0,0,0],g);});
 part('Mixing inlet',[-2.4,.5,0],[-.8,.3,0],'Feed enters through an inlet mixing chamber. Levels and hydraulic design are not specified here.',g=>{cyl(g,[0,0,0],.45,.8,brick);tube(g,[[.4,-.15,0],[1.3,-.3,0]],.12,'#a6b8be');});
 part('Displacement chamber',[2.35,.6,0],[.85,.3,0],'Slurry displacement provides an outlet path. Chamber levels and volumes determine real operation.',g=>{box(g,[0,0,0],[.9,1.1,.95],brick);tube(g,[[-.4,-.2,0],[-1.25,-.25,0]],.12,'#a6b8be');});
 part('Gas outlet',[0,2.65,0],[0,.8,.6],'Illustrative takeoff. The dome itself provides the gas space; a separate external gas store is not shown. Gas treatment and safety auxiliaries remain omitted.',g=>{tube(g,[[0,0,0],[0,.3,0],[1.4,.3,0]],.085);valve(g,[.8,.35,0]);});
 part('Slurry',[0,.55,0],[0,.3,.4],'Illustrative liquid volume. Use X-ray to inspect it; fill level is not a design specification.',g=>cyl(g,[0,0,0],1.2,.8,blue),false);
 flowPath=[[0,1.6,0],[0,2.65,0],[0,2.95,0],[1.4,2.95,0]].map(vec);
 }else if(d==='E'){
 part('Digester tank',[0,0,0],[0,-.4,0],'A fixed liquid tank surrounds the gas bell. Tank size and slurry levels are illustrative.',g=>{cyl(g,[0,.7,0],1.35,1.4,'#a7b8b1');const rim=mesh(new T.TorusGeometry(1.31,.045,12,64),mat('#dae2dc'),[0,1.42,0],g);rim.rotation.x=Math.PI/2;});
 part('Floating gas drum',[0,1.15,0],[0,1.3,0],'The integrated gas bell is the buffer; a separate external gas tank is not required in this reference. It rises and falls with stored gas. Its weight and area influence pressure; neither is calculated here.',g=>{cyl(g,[0,.55,0],1.12,1.1,'#338579');mesh(new T.SphereGeometry(1.12,48,20,0,Math.PI*2,0,Math.PI/2),mat('#338579'),[0,1.1,0],g).scale.y=.2;});
 part('Guide frame',[0,0,-.65],[0,.8,-.7],'A guide restrains drum motion. Members, clearances and loads remain unspecified.',g=>{for(const x of [-1.5,1.5])box(g,[x,1.55,0],[.1,3.1,.1],'#5d7d86');box(g,[0,3.12,0],[3.1,.1,.1],'#5d7d86');},false);
 part('Feed inlet',[-2.2,.7,0],[-.7,.4,.3],'Illustrative feed chamber and connection.',g=>{cyl(g,[0,0,0],.35,.55,'#a7b8b1');tube(g,[[.3,-.15,0],[1,-.3,0]],.11);});
 part('Slurry outlet',[1.35,.4,.3],[.85,0,.4],'Illustrative overflow outlet. Real elevations and discharge containment need definition.',g=>tube(g,[[0,0,0],[.8,0,0],[.8,-.2,0]],.11));
 part('Gas outlet',[0,2.5,0],[0,.7,.5],'Gas takeoff from the bell. Full auxiliary systems are not shown.',g=>{tube(g,[[0,0,0],[0,.35,0],[1.8,.35,0]]);valve(g,[1.2,.4,0]);});
 flowPath=[[0,1.7,0],[0,2.5,0],[0,2.85,0],[1.8,2.85,0]].map(vec);
 }else{
 part('Flexible digester bag',[0,.9,0],[0,.9,0],'Flexible tubular digester envelope with an integrated gas space above the slurry. No separate gas holder is shown in this chosen reference; other tubular systems may use one. Material, anchoring, usable volume and operating pressure are unspecified.',g=>{const bag=cyl(g,[0,0,0],.72,4.2,'#7cb799');bag.rotation.z=Math.PI/2;for(const x of [-2.1,2.1]){const end=mesh(new T.SphereGeometry(.72,32,24),mat('#7cb799'),[x,0,0],g);end.scale.x=.4;}for(const x of [-1.4,0,1.4]){const seam=mesh(new T.TorusGeometry(.725,.01,8,48),mat('#4e9a79'),[x,0,0],g);seam.rotation.y=Math.PI/2;}});
 part('Inlet pipe',[-2.3,.85,0],[-.8,.3,0],'Feed inlet for the tubular reference. Connection and feed loading are not specified.',g=>{tube(g,[[0,0,0],[-.55,0,0],[-.55,.6,0]],.12);mesh(new T.CylinderGeometry(.24,.12,.18,32,1,true),mat('#acbebf'),[-.55,.64,0],g);});
 part('Outlet pipe',[2.3,.7,0],[.8,0,.35],'Illustrative digestate outlet. A real design needs controlled levels and collection.',g=>tube(g,[[0,0,0],[.65,0,0],[.65,-.35,0]],.12));
 part('Gas takeoff',[0,1.65,0],[0,.9,.3],'Gas takeoff from the envelope. Auxiliary gas handling and safety systems are omitted.',g=>{tube(g,[[0,0,0],[0,.7,0],[1.2,.7,0]],.085);valve(g,[.65,.76,0]);});
 part('Protective bed',[0,.03,0],[0,-.5,0],'Illustrative protective channel. Ground preparation, drainage and cover need site-specific design.',g=>{box(g,[0,0,0],[5.4,.16,1.8],'#b9b3a2');for(const z of [-.83,.83])box(g,[0,.24,z],[5.4,.5,.16],'#b9b3a2');},false);
 flowPath=[[0,1.25,0],[0,1.65,0],[0,2.35,0],[1.2,2.35,0]].map(vec);
 }

}
if(design==='G')flowPath=buildIndustrial({part,mesh,mat,cyl,box,tube,valve,fastenerRing}).map(vec);
else if(['D','E','F'].includes(design))buildReference(design);
else{
const compact=design!=='B', xTank=compact?-1.8:-3.1, xStore=compact?2.5:3.7,yPipe=2.8;
part('Digester',[xTank,0,0],[-.8,-.3,0],design==='A'?'Illustrative concept tank; this is not the reconstructed school assembly. Capacity and dimensions are unspecified.':'25-litre capacity is stated in the report. Geometry is illustrative; dimensions and working volume need reconciliation.',g=>{const points=[[0,0],[.63,0],[.69,.08],[.7,1],[.65,1.4],[.64,1.9],[.72,2.05]].map(([r,y])=>new T.Vector2(r,y));mesh(new T.LatheGeometry(points,48),mat(design==='A'?'#368f71':'#84939e'),[0,0,0],g);cyl(g,[0,.05,0],.63,.06,'#637c85');for(const y of [.15,1.02,1.88]){const seam=mesh(new T.TorusGeometry(.66,.015,8,48),mat('#617782'),[0,y,0],g);seam.rotation.x=Math.PI/2;}});
part('Cover',[xTank,2.08,0],[0,1.2,0],'Removable cover. Seal, fastening and allowable pressure must be specified.',g=>{cyl(g,[0,0,0],.74,.12,design==='A'?'#243a38':'#bac5cb');cyl(g,[0,.09,0],.61,.08,design==='A'?'#243a38':'#bac5cb');});
part('Cover fasteners',[xTank,2.2,0],[0,1.8,0],'Illustrative hex bolts, washers and nuts. Count, size, grade and torque are not specified in the report.',g=>fastenerRing(g,[0,0,0],.66,8,1));
part('Cover seal',[xTank,2.015,0],[0,.65,.8],'Illustrative gasket. Material and sealing arrangement require verification.',g=>{const o=mesh(new T.TorusGeometry(.66,.025,10,64),mat('#25353b'),[0,0,0],g);o.rotation.x=Math.PI/2;},false);
part('Slurry inlet',[xTank-.48,2.16,0],[ -.6,.8,.4],'Accessible funnel and sealed inlet. Actual feed preparation, pipe diameter and blockage prevention need definition.',g=>{cyl(g,[0,.28,0],.08,.5,'#d9a35a');mesh(new T.CylinderGeometry(.23,.075,.24,32,1,true),mat('#c4873c'),[0,.55,0],g);});
if(design!=='B')part('Slurry outlet',[xTank,.3,.63],[-.2,0,1.0],'Illustrative lower slurry outlet. Collection, cleaning provisions and dimensions remain unspecified.',g=>{tube(g,[[0,0,0],[0,0,.5],[.22,0,.5]]);valve(g,[0,.06,.33]);});
const start=xTank+.32, end=compact?1.5:2.5;
part('Gas takeoff',[start,2.16,0],[0,.8,-.5],'Gas riser and isolation valve. Gas-compatible fittings and leak testing need verification.',g=>{tube(g,[[0,0,0],[0,.64,0],[.5,.64,0]]);valve(g,[.32,.69,0]);});
const n=design==='A'?1:3, first=compact?-.65:-1.4, spacing=compact?.66:.85;
const connectors=[start+.5,...Array.from({length:n},(_,i)=>first+i*spacing),end];
for(let i=0;i<connectors.length-1;i++)part('Pipe '+(i+1),[0,0,0],[0,.35+(i%2)*.15,-.5],'Gas connection segment. Slopes, joints, condensate drainage and pressure loss remain to be designed.',g=>tube(g,[[connectors[i],yPipe,0],[connectors[i+1],yPipe,0]]),false);
for(let i=0;i<n;i++){const x=first+i*spacing;part('Filter '+(i+1),[x,yPipe-.45,0],[0,-.9,.55+i*.18],'Accessible filter housing. Media, contact time, replacement interval and removal efficiency are unspecified.',g=>{cyl(g,[0,-.08,0],.23,.75,'#c8dee4',.23).material=mat('#b9d4de',.03,.38);cyl(g,[0,-.48,0],.23,.07,'#a6bbc3');});part('Filter cap '+(i+1),[x,yPipe,0],[0,.85,.1],'Detachable housing cap. Seals and connections need specification.',g=>cyl(g,[0,0,0],.28,.14,'#34894a'),false);}
if(design!=='A')part('Storage connection',[end,yPipe,0],[.7,.5,-.35],'Connection to gas storage, including isolation. Flexible pipe routing is illustrative.',g=>{tube(g,[[0,0,0],[.25,.12,0],[.4,-.25,0],[xStore-end-.4,-.25,0]]);valve(g,[xStore-end-.55,-.18,0]);});
if(design==='A'){
const manifold=xStore-1.10;
part('Compact gas manifold',[0,0,0],[.4,.4,-.65],'Illustrative distribution pipe connecting the filter line to both concept stores. Gas compatibility and vessel specifications remain undefined.',g=>{tube(g,[[end,yPipe,0],[manifold,yPipe,0],[manifold,1.8,0],[manifold,.6,0]],.055);for(const y of [.6,1.35])tube(g,[[manifold,y,0],[xStore-1,y,0]],.045);const isolation=new T.Group();isolation.position.set(manifold,2.3,0);g.add(isolation);valve(isolation);isolation.rotation.z=Math.PI/2;});
part('Storage rack',[xStore,0,0],[.6,-.4,-.8],'Visual support rack for the two concept capsules. Loads, straps and fabrication details have not been calculated.',g=>{for(const x of [-.45,.45]){box(g,[x,.6,-.30],[.065,1.4,.065],'#617982');box(g,[x,.045,0],[.25,.09,.8],'#617982');for(const y of [.23,.98])box(g,[x,y,0],[.18,.065,.62],'#617982');}for(const y of [.6,1.35]){const strap=mesh(new T.TorusGeometry(.36,.013,8,48),mat('#adb9c0',.7),[0,y,0],g);strap.rotation.y=Math.PI/2;}});
for(let i=0;i<2;i++)part('Concept store '+(i+1),[xStore, .6+i*.75,0],[1+i*.25,.3,0],'Capsule storage from the initial visual concept. This is not the tyre-tube geometry or a specified gas vessel.',g=>{const o=cyl(g,[0,0,0],.35,1.3,'#26303a');o.rotation.z=Math.PI/2;mesh(new T.SphereGeometry(.35,28,20),mat('#26303a'),[-.65,0,0],g);mesh(new T.SphereGeometry(.35,28,20),mat('#26303a'),[.65,0,0],g);});
part('Bottle branch',[0,0,0],[0,.6,.8],'Illustrative branch to the original bottle-shaped concept; no pressure-relief function is established.',g=>tube(g,[[.25,yPipe,0],[.25,yPipe,.65],[.25,2.75,.65]],.035));
part('Bottle concept',[.25,2.45,.65],[0,.8,.7],'Initial bottle-shaped relief concept, not a verified pressure protection device.',g=>{cyl(g,[0,0,0],.12,.5,'#c8e1e8').material=mat('#c8e1e8',.05,.4);cyl(g,[0,.3,0],.07,.09,'#b74742');});
part('Burner hose',[0,0,0],[.6,0,.8],'Illustrative flexible connection from the distribution line to the burner. A suitable regulator and safety arrangement are not specified.',g=>tube(g,[[manifold,.6,0],[manifold,.6,.35],[1.05,.35,.65],[1.05,.15,.65]],.035,'#4f6571'));
part('Burner',[1.4,.15,.65],[.8,0,1],'Illustrative end-use burner. Fuel compatibility and operating pressure are not established.',g=>{box(g,[0,0,0],[.7,.22,.6],'#3d695a');cyl(g,[0,.16,0],.2,.05,'#25333e');});}
else part('Tyre-tube store',[xStore,1.7,0],[1.1,.3,0],'One tyre tube follows the report drawing. The report text describes two. Material compatibility, capacity and pressure limits remain unverified.',g=>mesh(new T.TorusGeometry(.83,.24,18,64),mat('#3e4a56'),[0,0,0],g));
if(compact)part(design==='A'?'Wooden base':'Support frame',[0,design==='A'?-.08:-.17,0],[0,-.7,0],design==='A'?'Compact base from the original concept.':'Proposed frame supports the digester, filter bank and gas storage. Sections, loads, anchoring and joints need calculation.',g=>{if(design==='A')box(g,[.2,0,0],[6.6,.16,2.1],'#a98051');else{for(const z of [-.8,.8])box(g,[.2,0,z],[6.6,.12,.12],'#346778');for(const x of [-2.5,-1.4,.3,2.7])box(g,[x,0,0],[.12,.12,1.7],'#346778');box(g,[xTank,.09,0],[1.6,.05,1.5],'#7c9ca6');}for(const x of [-2.5,2.7])for(const z of [-.8,.8])box(g,[x,-.18,z],[.16,.35,.16],'#2c6376');if(design==='C'){for(const x of [first-.4,first+2*spacing+.4]){box(g,[x,1.45,-.43],[.08,2.9,.08],'#3a7181');}box(g,[first+spacing,2.78,-.43],[2.25,.08,.08],'#3a7181');for(const x of [xStore-.65,xStore+.65])box(g,[x,.65,-.18],[.09,1.3,.12],'#3a7181');}},false);
if(design==='C'){part('Pressure point',[start,2.8,.3],[0,.7,.7],'Proposed pressure indication point. Gauge range and connection are not specified.',g=>{const o=cyl(g,[0,0,0],.14,.08,'#e8eef2');o.rotation.x=Math.PI/2;box(g,[0,.04,.05],[.015,.12,.02],'#182c3d');});part('Relief point',[start+.58,2.97,0],[0,1.1,-.5],'Reserved pressure-relief location only. Device, discharge routing and setpoint require engineering.',g=>{cyl(g,[0,0,0],.065,.32,'#bda268');cyl(g,[0,.2,0],.09,.07,'#d5b65f');});part('Condensate point',[1.15,2.32,.25],[0,-.5,1],'Proposed condensate collection and drainage location. It is not a completed gas-line design.',g=>{cyl(g,[0,0,0],.10,.30,'#a6c9d5');valve(g,[0,-.2,0]);});part('Temperature point',[xTank+.3,1.0,.65],[-.2,.1,1],'Proposed temperature sensor location. Probe depth and monitoring requirements need definition.',g=>box(g,[0,0,0],[.18,.2,.08],'#286a87'));part('Gas meter point',[end-.05,2.8,0],[.2,.8,.4],'Proposed gas-volume measurement location; range, calibration and moisture compatibility remain unspecified.',g=>box(g,[0,0,0],[.28,.25,.2],'#d5a34d'));}
flowPath=design==='A'?[[start,2.2,0],[start,yPipe,0],[end,yPipe,0],[xStore-1.1,yPipe,0],[xStore-1.1,.6,0],[xStore-1.1,.6,.35],[1.05,.35,.65],[1.05,.15,.65]].map(vec):[vec([start,2.2,0]),vec([start,yPipe,0]),vec([end,yPipe,0]),vec([xStore-.4,yPipe-.25,0])];
}
 if(design==='B'&&compression)flowPath=addCompressionConcept({part,mesh,mat,cyl,box,tube,valve,fastenerRing,flowPath});
 // Mutable style settings belong to each model, including hardware materials.
 const copies=new Map();root.traverse(o=>{if(!o.material)return;const copy=m=>{if(!m.userData.shared)return m;if(!copies.has(m)){const c=m.clone();c.userData={...m.userData,shared:false};copies.set(m,c);}return copies.get(m);};o.material=Array.isArray(o.material)?o.material.map(copy):copy(o.material);});
 return {root,parts,flowPath};
}
export function disposeModel(root){if(!root)return;const geometries=new Set(),materials=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{if(!m.userData.shared)materials.add(m);});});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}
