import * as T from 'three';
import {createBiogasModel,disposeModel} from './model-builder.js';
import {applyModelStyle} from './model-style.js';
import {addOutlines,sizeOutlines} from './cad-outlines.js';
import {frameOrthographic} from './camera-fit.js';
export function renderModelThumbnail(renderer,environment,design,style){
 const width=324,height=195,preview=new T.Scene();preview.background=new T.Color('#171b1f');preview.environment=environment;
 preview.add(new T.HemisphereLight('#ffffff','#9aaec0',1.1));const light=new T.DirectionalLight('#fff4e4',2.4);light.position.set(-2,10,3);preview.add(light);
 const model=createBiogasModel(design);preview.add(model.root);model.parts.forEach(p=>{p.g.traverse(o=>{if(o.isMesh)o.userData.originalOpacity=o.material.opacity;});addOutlines(p.g);});applyModelStyle(model.parts,style);sizeOutlines(model.root,width,height);
 const camera=new T.OrthographicCamera(-5,5,3,-3,.1,100),bounds=new T.Box3().setFromObject(model.root),center=bounds.getCenter(new T.Vector3());camera.position.copy(center).add(new T.Vector3(9,9,9));camera.lookAt(center);frameOrthographic(camera,bounds,width,height,{top:0,bottom:0,padding:1.1});
 const target=new T.WebGLRenderTarget(width,height),previous=renderer.getRenderTarget();target.texture.colorSpace=T.SRGBColorSpace;
 try{renderer.setRenderTarget(target);renderer.render(preview,camera);const pixels=new Uint8Array(width*height*4);renderer.readRenderTargetPixels(target,0,0,width,height,pixels);const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d'),data=ctx.createImageData(width,height);for(let y=0;y<height;y++)data.data.set(pixels.subarray((height-y-1)*width*4,(height-y)*width*4),y*width*4);ctx.putImageData(data,0,0);return canvas.toDataURL('image/webp',.8);}finally{renderer.setRenderTarget(previous);target.dispose();disposeModel(model.root);}
}
