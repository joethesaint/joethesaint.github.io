import * as T from 'three';
export function frameOrthographic(camera,bounds,width,height,{top=20,bottom=36,padding=1.04}={}){
 if(width<=0||height<=0||bounds.isEmpty())return;
 camera.updateMatrixWorld(true);
 let halfX=0,halfY=0;
 for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
  const point=new T.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse);
  halfX=Math.max(halfX,Math.abs(point.x));halfY=Math.max(halfY,Math.abs(point.y));
 }
 const aspect=width/height,usableHeight=Math.max(height*.45,height-top-bottom),usableWidth=Math.max(width*.7,width-40);
 const half=Math.max(halfY*height/usableHeight,halfX/aspect*width/usableWidth,.4)*padding;
 const shift=half*(top-bottom)/height;
 camera.left=-half*aspect;camera.right=half*aspect;camera.top=half+shift;camera.bottom=-half+shift;camera.updateProjectionMatrix();
}
