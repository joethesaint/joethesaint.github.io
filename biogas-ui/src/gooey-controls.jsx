import React,{useLayoutEffect,useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {animate} from 'motion/react';
import {Liquid} from 'liquid-gooey';
function NativeNode({node}){const host=useRef(null);useLayoutEffect(()=>{host.current.append(node);},[node]);return <span ref={host} className="liquid-native" style={{borderRadius:node.dataset.liquidRadius}}/>;}
export function enhanceControls(){
 const plain=matchMedia('(prefers-reduced-motion: reduce), (forced-colors: active)').matches;
 const grouped=new Set();
 const enhance=(container,nodes,grid=false)=>{
  container.classList.add('liquid-enhanced');nodes.forEach(node=>{grouped.add(node);node.dataset.liquidRadius=node.matches('[data-design]')?'16px':'28px';});const children=nodes.map((node,i)=><Liquid.Item key={i} observe><NativeNode node={node}/></Liquid.Item>);
  const root=createRoot(container);flushSync(()=>root.render(<Liquid className={grid?'liquid-surface liquid-grid':'liquid-surface'} blur={6} contrast={18} fill="#30383b" shadow="inset 0 1px 0 rgba(255,255,255,.1)">{children}</Liquid>));
 };
 if(!plain){
  for(const container of document.querySelectorAll('.top-actions,.statebar,.viewbar,.rendercontrols,.designs'))enhance(container,[...container.children],container.classList.contains('designs'));
  for(const button of document.querySelectorAll('button:not([role=radio])')){
   if(grouped.has(button)||button.closest('.floating-gooey,.liquid-surface'))continue;
   const host=document.createElement('span');host.className='single-liquid';button.before(host);enhance(host,[button]);
  }
 }
 const pressed=new Map();const release=event=>{pressed.get(event.pointerId)?.();pressed.delete(event.pointerId);};document.addEventListener('pointerup',release,true);document.addEventListener('pointercancel',release,true);
 for(const button of document.querySelectorAll('button:not([role=radio])')){
  let animation;const target=button.parentElement?.classList.contains('liquid-native')?button.parentElement:button;const spring=scale=>{if(plain)return;animation?.stop();animation=animate(target,{scale},{type:'spring',stiffness:420,damping:24});};
  button.addEventListener('pointerdown',event=>{spring(.94);pressed.set(event.pointerId,()=>spring(1));});for(const event of ['pointerup','pointercancel','lostpointercapture','blur'])button.addEventListener(event,()=>spring(1));
 }
 const panels=[...document.querySelectorAll('.workspace-panel')];
 for(const panel of panels){let animation;new MutationObserver(()=>{animation?.stop();if(!panel.hidden&&!plain)animation=animate(panel,{opacity:[0,1],scale:[.97,1]},{duration:.22,ease:'easeOut'});}).observe(panel,{attributes:true,attributeFilter:['hidden']});}
 document.addEventListener('dock-position',event=>{
  const p=event.detail,panel=document.getElementById('stylesPanel');const width=Math.min(224,p.width-24);const height=Math.min(354,p.height-180);
  panel.style.width=width+'px';panel.style.left=Math.max(12,Math.min(p.left?p.x+72:p.x-width-16,p.width-width-12))+'px';panel.style.right='auto';panel.style.top=Math.max(88,Math.min(p.y-height/2,p.height-height-76))+'px';panel.style.bottom='auto';panel.style.transformOrigin=p.left?'left center':'right center';
 });
}
