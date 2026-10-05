import React,{useEffect,useLayoutEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {animate,motion,useMotionValue,useTransform,useReducedMotion} from 'motion/react';
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const STEP=52;
function Option({option,index,position,selected,onSelect,direction}){
 const transform=useTransform(position,at=>{const angle=clamp((index-at)*STEP/250,-1.3,1.3);return `translate3d(${direction*250*(1-Math.cos(angle))}px,${250*Math.sin(angle)}px,0) translateY(-50%) rotate(${-direction*angle*180/Math.PI}deg)`});
 const opacity=useTransform(position,at=>clamp(1-Math.abs(index-at)*.22,.12,1));
 return <motion.button type="button" role="radio" aria-checked={selected} tabIndex={selected?0:-1} data-value={option.value} data-selected={selected} style={{transform,opacity}} onClick={onSelect}>{option.label}</motion.button>;
}
function Picker({options,onChange,controller}){
 const position=useMotionValue(0),reduced=useReducedMotion();
 const [direction,setDirection]=useState(document.querySelector('.stage').dataset.dockSide==='left'?1:-1);
 useEffect(()=>{const update=e=>setDirection(e.detail.left?1:-1);document.addEventListener('dock-position',update);return()=>document.removeEventListener('dock-position',update);},[]);
 const [selected,setSelected]=useState(0);const selectedRef=useRef(0),animation=useRef(null),drag=useRef(null),root=useRef(null),suppress=useRef(0),wheelTimer=useRef(null),wheelTarget=useRef(null);
 const change=useRef(onChange);change.current=onChange;
 const stop=()=>{animation.current?.stop();animation.current=null;clearTimeout(wheelTimer.current);wheelTarget.current=null;};
 const settle=(index,notify=true)=>{stop();index=clamp(index,0,options.length-1);const previous=selectedRef.current;selectedRef.current=index;setSelected(index);if(reduced)position.jump(index);else animation.current=animate(position,index,{type:'spring',stiffness:290,damping:32,mass:.85});if(notify&&previous!==index)change.current(options[index].value);};
 const release=()=>{const d=drag.current;drag.current=null;if(d&&root.current.hasPointerCapture(d.id))root.current.releasePointerCapture(d.id);return d;};
 const cancel=()=>{const d=release();if(d?.moved)suppress.current=performance.now()+450;settle(selectedRef.current,false);};
 useLayoutEffect(()=>{controller.current={set(value){const i=options.findIndex(o=>o.value===value);if(i>=0&&i!==selectedRef.current){release();settle(i,false);}},cancel};});
 useEffect(()=>()=>{stop();controller.current=null;},[]);
 useEffect(()=>{const el=root.current;const wheel=e=>{if(e.ctrlKey||drag.current||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?el.clientHeight:1);const from=wheelTarget.current??position.get();if(!delta||(from<=0&&delta<0)||(from>=options.length-1&&delta>0))return;e.preventDefault();animation.current?.stop();const at=clamp(from+clamp(delta/STEP,-.7,.7),0,options.length-1);wheelTarget.current=at;position.set(at);clearTimeout(wheelTimer.current);wheelTimer.current=setTimeout(()=>settle(Math.round(at)),120);};el.addEventListener('wheel',wheel,{passive:false});return()=>el.removeEventListener('wheel',wheel);},[reduced]);
 return <div ref={root} className="vertical-arc" data-side={direction===1?'left':'right'} role="radiogroup" aria-label="Model display style" aria-orientation="vertical"
 onPointerDown={e=>{if(drag.current){if(e.pointerId!==drag.current.id)cancel();return;}if(!e.isPrimary||e.button!==0)return;stop();suppress.current=0;drag.current={id:e.pointerId,y:e.clientY,start:position.get(),lastY:e.clientY,time:performance.now(),v:0,moved:false};}}
 onPointerMove={e=>{const d=drag.current;if(!d||d.id!==e.pointerId)return;const dy=e.clientY-d.y;if(!d.moved&&Math.abs(dy)<6)return;if(!d.moved)e.currentTarget.setPointerCapture(e.pointerId);d.moved=true;const now=performance.now(),dt=Math.max(.008,(now-d.time)/1000);const v=clamp(-(e.clientY-d.lastY)/STEP/dt,-8,8);d.v=now-d.time>100?v:d.v*.6+v*.4;d.lastY=e.clientY;d.time=now;position.set(clamp(d.start-dy/STEP,0,options.length-1));}}
 onPointerUp={e=>{if(drag.current?.id!==e.pointerId)return;const d=release();if(!d.moved)return;suppress.current=performance.now()+450;const coast=performance.now()-d.time<90?clamp(d.v*.14,-1,1):0;settle(Math.round(position.get()+coast));}}
 onPointerCancel={e=>{if(drag.current?.id===e.pointerId)cancel();}}
 onLostPointerCapture={e=>{if(e.target===e.currentTarget&&drag.current?.id===e.pointerId)cancel();}}
 onKeyDown={e=>{let i=selectedRef.current;if(e.key==='ArrowDown')i++;else if(e.key==='ArrowUp')i--;else if(e.key==='Home')i=0;else if(e.key==='End')i=options.length-1;else return;e.preventDefault();release();settle(i);root.current.querySelectorAll('button')[selectedRef.current]?.focus({preventScroll:true});}}>
 <span className="vertical-arc-frame" aria-hidden="true">[<span>]</span></span>
 {options.map((option,index)=><Option key={option.value} {...{option,index,position,direction}} selected={selected===index} onSelect={e=>{if(e.detail!==0&&performance.now()<suppress.current)return;settle(index);}}/>)}
 </div>;
}
export function createArcPicker(element,options,onChange){const controller={current:null};const reactRoot=createRoot(element);flushSync(()=>reactRoot.render(<Picker {...{options,onChange,controller}}/>));return{set:value=>controller.current?.set(value),cancel:()=>controller.current?.cancel(),destroy:()=>reactRoot.unmount()};}
