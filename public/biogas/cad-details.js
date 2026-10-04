import * as T from 'three';
const shared=m=>(m.userData.shared=true,m);
const STEEL=shared(new T.MeshStandardMaterial({color:'#adb9c0',metalness:.78,roughness:.28})),GASKET=shared(new T.MeshStandardMaterial({color:'#293b40',roughness:.83})),WELD=shared(new T.MeshStandardMaterial({color:'#8e9b9d',metalness:.4,roughness:.6}));
const steel=()=>STEEL,gasket=()=>GASKET;
const yAxis=new T.Vector3(0,1,0),p=a=>new T.Vector3(...a);
function put(g,geometry,material,position){const o=new T.Mesh(geometry,material);o.position.copy(p(position));o.castShadow=true;o.receiveShadow=true;o.userData.cadDetail=true;g.add(o);return o;}
function ring(g,position,radius,tube=.012,material=steel(),axis=[0,1,0]){const geo=new T.TorusGeometry(radius,tube,8,48);geo.rotateX(Math.PI/2);const o=put(g,geo,material,position);o.quaternion.setFromUnitVectors(yAxis,p(axis).normalize());return o;}
function hex(g,position,radius,length,axis=[0,1,0]){const o=put(g,new T.CylinderGeometry(radius,radius,length,6),steel(),position);o.quaternion.setFromUnitVectors(yAxis,p(axis).normalize());return o;}
export function fastenerRing(g,center,radius,count=8,scale=1,axis=[0,1,0]){
 const orientation=new T.Quaternion().setFromUnitVectors(yAxis,p(axis).normalize());
 const positions=Array.from({length:count},(_,i)=>new T.Vector3(Math.cos(i*Math.PI*2/count)*radius,0,Math.sin(i*Math.PI*2/count)*radius).applyQuaternion(orientation).add(p(center)));
 const nutShape=new T.Shape();for(let i=0;i<6;i++){const a=i*Math.PI/3,x=Math.cos(a)*.029*scale,z=Math.sin(a)*.029*scale;i?nutShape.lineTo(x,z):nutShape.moveTo(x,z);}nutShape.closePath();const hole=new T.Path();hole.absarc(0,0,.014*scale,0,Math.PI*2,true);nutShape.holes.push(hole);const nutGeometry=new T.ExtrudeGeometry(nutShape,{depth:.025*scale,bevelEnabled:false,curveSegments:8}).rotateX(Math.PI/2).translate(0,.0125*scale,0);
 const specs=[{geo:new T.CylinderGeometry(.033*scale,.033*scale,.035*scale,6),dy:.026*scale},{geo:new T.CylinderGeometry(.013*scale,.013*scale,.14*scale,10),dy:-.044*scale},{geo:new T.TorusGeometry(.024*scale,.006*scale,6,12).rotateX(Math.PI/2),dy:.004*scale},{geo:nutGeometry,dy:-.105*scale}];
 for(const spec of specs){const batch=new T.InstancedMesh(spec.geo,steel(),count);batch.userData.hardware=true;batch.castShadow=true;batch.receiveShadow=true;const matrix=new T.Matrix4(),shift=yAxis.clone().applyQuaternion(orientation).multiplyScalar(spec.dy);positions.forEach((v,i)=>{matrix.compose(v.clone().add(shift),orientation,new T.Vector3(1,1,1));batch.setMatrixAt(i,matrix);});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere();g.add(batch);}
 const ridges=5,threads=new T.InstancedMesh(new T.TorusGeometry(.014*scale,.0025*scale,4,10).rotateX(Math.PI/2),steel(),count*ridges),matrix=new T.Matrix4();threads.userData.hardware=true;positions.forEach((v,i)=>{for(let j=0;j<ridges;j++){const shift=yAxis.clone().applyQuaternion(orientation).multiplyScalar((-.027-j*.012)*scale);matrix.compose(v.clone().add(shift),orientation,new T.Vector3(1,1,1));threads.setMatrixAt(i*ridges+j,matrix);}});threads.instanceMatrix.needsUpdate=true;threads.computeBoundingSphere();g.add(threads);
}
function union(g,position,axis=[1,0,0],r=.078){const q=new T.Quaternion().setFromUnitVectors(yAxis,p(axis).normalize());const coupling=put(g,new T.CylinderGeometry(r,r,.14,12),steel(),position);coupling.quaternion.copy(q);for(const delta of [-.048,.048]){const at=p(position).add(p(axis).normalize().multiplyScalar(delta));hex(g,at.toArray(),r*1.13,.036,axis);ring(g,at.toArray(),r*.92,.008,gasket(),axis);}}
function clamps(g,position,radius,axis=[1,0,0]){ring(g,position,radius,.015,steel(),axis);const v=p(position).add(new T.Vector3(0,radius,0));hex(g,v.toArray(),.043,.075,[0,0,1]);}
function weld(g,position,radius,axis=[0,1,0]){ring(g,position,radius,.008,WELD,axis);}
export function decoratePart(name,g){
 if(name==='Cover'){ring(g,[0,-.072,0],.66,.022,gasket());ring(g,[0,.055,0],.72,.013);}
 if(name==='Slurry inlet'){union(g,[0,.04,0],[0,1,0],.10);clamps(g,[0,.18,0],.085,[0,1,0]);ring(g,[0,.665,0],.225,.008);}
 if(name==='Slurry outlet'){union(g,[0,0,.13],[0,0,1]);union(g,[.19,0,.5],[1,0,0]);}
 if(/^Pipe \d+$/.test(name)){const source=g.children.find(o=>o.isMesh&&o.geometry.parameters.path);if(source){const curve=source.geometry.parameters.path;for(const t of [0,1]){const v=curve.getPoint(t),axis=curve.getTangent(t);union(g,v.toArray(),axis.toArray());}}}
 if(name==='Gas takeoff'){union(g,[0,.10,0],[0,1,0]);union(g,[.47,.64,0],[1,0,0]);}
 if(/^Filter cap/.test(name)){ring(g,[0,-.06,0],.24,.012,gasket());for(let i=0;i<12;i++){const a=i*Math.PI/6;const rib=put(g,new T.BoxGeometry(.025,.12,.06),new T.MeshStandardMaterial({color:'#2b7043',roughness:.55}),[Math.cos(a)*.276,0,Math.sin(a)*.276]);rib.rotation.y=-a;}union(g,[-.26,0,0]);union(g,[.26,0,0]);}
 if(/^Filter \d+$/.test(name)){ring(g,[0,-.44,0],.22,.012);ring(g,[0,.28,0],.228,.011,gasket());}
 if(name==='Storage connection'){union(g,[0,0,0]);union(g,[.4,-.25,0]);}
 if(name==='Support frame'){for(const x of [-2.5,2.7])for(const z of [-.8,.8]){put(g,new T.BoxGeometry(.32,.025,.32),steel(),[x,-.34,z]);fastenerRing(g,[x,-.32,z],.11,4,.85);}for(const x of [-1.05,1.07]){put(g,new T.BoxGeometry(.22,.12,.03),steel(),[x,2.67,-.48]);fastenerRing(g,[x,2.67,-.5],.063,4,.6,[0,0,1]);}}
 if(name==='Wooden base'){for(const x of [-2.5,2.7])for(const z of [-.8,.8])fastenerRing(g,[x,.10,z],.09,4,.75);}
 if(name==='Tyre-tube store'){union(g,[-1.01,0,.01],[1,0,0],.09);clamps(g,[-.95,0,.01],.074,[1,0,0]);}
 if(/^Concept store/.test(name)){for(const x of [-.42,.42])ring(g,[x,0,0],.354,.013,steel(),[1,0,0]);}
 if(name==='Pressure point'){ring(g,[0,0,.048],.135,.012,steel(),[0,0,1]);const tickPositions=[];for(let i=0;i<11;i++){const a=-Math.PI*.2+i*Math.PI*1.4/10;tickPositions.push(Math.cos(a)*.10,Math.sin(a)*.10,.052,Math.cos(a)*.084,Math.sin(a)*.084,.052);}g.add(new T.LineSegments(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(tickPositions,3)),new T.LineBasicMaterial({color:'#3d5667'})));}
 if(name==='Temperature point'||name==='Gas meter point')fastenerRing(g,[0,0,.11],.065,4,.6,[0,0,1]);
 if(name==='Floating gas drum'){for(const y of [.06,1.05])weld(g,[0,y,0],1.12);fastenerRing(g,[0,1.2,0],1.0,16,.8);}
 if(name==='Guide frame'){for(const x of [-1.5,1.5]){put(g,new T.BoxGeometry(.34,.05,.4),steel(),[x,.02,0]);fastenerRing(g,[x,.055,0],.12,4,1);}for(const x of [-1.5,1.5])fastenerRing(g,[x,3.05,.08],.06,4,.7,[0,0,1]);}
 if(name==='Flexible digester bag'){for(const x of [-2.17,2.17]){clamps(g,[x,0,0],.59);clamps(g,[x+.07,0,0],.57);}}
 if(name==='Fixed gas dome'){for(const y of [.18,.40,.63,.84])ring(g,[0,y,0],Math.sqrt(1.35**2-y*y),.006,new T.MeshStandardMaterial({color:'#9c8872',roughness:.9}));}
 if(name==='Digestion chamber'){for(const y of [.23,.49,.76,1.02])ring(g,[0,y,0],1.353,.007,new T.MeshStandardMaterial({color:'#8f7d69',roughness:.9}));}
 if(name==='Gas outlet'){union(g,[0,.08,0],[0,1,0]);}
 if(['Inlet pipe','Outlet pipe'].includes(name)){clamps(g,[0,0,0],.13);union(g,[0,0,0],[1,0,0],.16);}
}
export function detailedValve(g,at){const v=p(at),body=new T.Group();body.position.copy(v);g.add(body);const bronze=new T.MeshStandardMaterial({color:'#b99a58',metalness:.65,roughness:.32});const shell=put(body,new T.CylinderGeometry(.078,.078,.20,16),bronze,[0,0,0]);shell.rotation.z=Math.PI/2;union(body,[-.12,0,0]);union(body,[.12,0,0]);put(body,new T.CylinderGeometry(.026,.026,.14,12),steel(),[0,.10,0]);put(body,new T.BoxGeometry(.32,.03,.075),new T.MeshStandardMaterial({color:'#c9473e',roughness:.46}),[.10,.19,0]);hex(body,[0,.21,0],.033,.025);ring(body,[0,.16,0],.035,.007);}
