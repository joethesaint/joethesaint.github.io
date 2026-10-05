import * as T from 'three';
// Screen-space hull gives curved surfaces a silhouette without triangulation lines.
export function addOutlines(group){
 const sources=[];group.traverse(o=>{if(o.isMesh&&!o.userData.outline)sources.push(o)});
 for(const source of sources){
  const material=new T.ShaderMaterial({side:T.BackSide,depthWrite:false,uniforms:{viewport:{value:new T.Vector2(1000,700)},stroke:{value:0.7},ink:{value:new T.Color('#b8d0d7')}},vertexShader:`
   uniform vec2 viewport;uniform float stroke;
   void main(){vec4 p=vec4(position,1.);vec3 n=normal;
   #ifdef USE_INSTANCING
    p=instanceMatrix*p;n=mat3(instanceMatrix)*n;
   #endif
   vec4 view=modelViewMatrix*p;vec4 clip=projectionMatrix*view;
   vec3 vn=normalize(normalMatrix*n);vec2 dir=(projectionMatrix*vec4(vn,0.)).xy;
   float len=length(dir);if(len>0.00001)clip.xy+=dir/len*stroke*2./viewport*clip.w;
   gl_Position=clip;}`,fragmentShader:'uniform vec3 ink;void main(){gl_FragColor=vec4(ink,1.);}' });
  let hull;
  if(source.isInstancedMesh){hull=new T.InstancedMesh(source.geometry,material,source.count);hull.instanceMatrix=source.instanceMatrix;}else hull=new T.Mesh(source.geometry,material);
  hull.userData.outline=true;hull.userData.isHull=true;hull.visible=false;hull.raycast=()=>{};source.add(hull);
  // Crisp feature edges, including the same transformed geometry for every fastener.
  const edge=new T.EdgesGeometry(source.geometry,24);let geometry=edge;
  if(source.isInstancedMesh){const input=edge.attributes.position;const out=new Float32Array(input.count*3*source.count),matrix=new T.Matrix4(),point=new T.Vector3();let at=0;for(let i=0;i<source.count;i++){source.getMatrixAt(i,matrix);for(let j=0;j<input.count;j++){point.fromBufferAttribute(input,j).applyMatrix4(matrix);out[at++]=point.x;out[at++]=point.y;out[at++]=point.z;}}geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(out,3));edge.dispose();}
  const lines=new T.LineSegments(geometry,new T.LineBasicMaterial({color:'#b8d0d7',transparent:true,opacity:.75,depthWrite:false}));lines.userData.outline=true;lines.userData.isEdge=true;lines.visible=false;lines.raycast=()=>{};source.add(lines);
 }
}
export function sizeOutlines(root,width,height){root?.traverse(o=>{if(o.userData.isHull)o.material.uniforms.viewport.value.set(width,height)});}
export function addAssemblyGuides(root,parts){const positions=new Float32Array(parts.length*6),geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));const lines=new T.LineSegments(geometry,new T.LineDashedMaterial({color:'#8fa9b4',dashSize:.07,gapSize:.05,transparent:true,opacity:.6,depthWrite:false}));lines.userData.guide=true;lines.visible=false;root.add(lines);return ()=>{parts.forEach((p,i)=>{p.base.toArray(positions,i*6);p.g.position.toArray(positions,i*6+3)});geometry.attributes.position.needsUpdate=true;lines.computeLineDistances();};}
