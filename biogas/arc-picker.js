// Arc interaction inspired by the supplied beui.dev reference; framework-free implementation.
export function createArcPicker(root, options, onChange){
 const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let wheelTotal=0,wheelTime=0;
 let at=0,target=0,velocity=0,raf=0,drag=null,last=0,selected=0,suppress=false;
 root.setAttribute('role','radiogroup');root.setAttribute('aria-label','Model display style');
 const buttons=options.map((o,i)=>{const b=document.createElement('button');b.type='button';b.textContent=o.label;b.setAttribute('role','radio');b.addEventListener('click',()=>{if(suppress)return;choose(i,true);});root.append(b);return b;});
 const frame=document.createElement('span');frame.className='arc-frame';frame.setAttribute('aria-hidden','true');root.append(frame);
 function publish(i){if(i===selected)return;selected=i;onChange(options[i].value);}
 function draw(){const spacing=Math.min(132,Math.max(100,root.clientWidth/3)),radius=440;buttons.forEach((b,i)=>{const d=i-at,angle=clamp(d*spacing/radius,-1.4,1.4);b.style.transform=`translate(-50%,-50%) translate(${radius*Math.sin(angle)}px,${radius*(1-Math.cos(angle))}px) rotate(${angle*180/Math.PI}deg)`;b.style.opacity=String(clamp(1-Math.abs(d)*.34,0,1));b.style.pointerEvents=Math.abs(d)<2.4?'auto':'none';b.tabIndex=i===selected?0:-1;b.setAttribute('aria-checked',String(i===selected));});frame.style.width=(buttons[selected].offsetWidth+18)+'px';}
 function tick(time){const dt=Math.min(.032,(time-last)/1000||.016);last=time;if(!drag){velocity+=(target-at)*170*dt;velocity*=Math.exp(-24*dt);at+=velocity*dt;if(Math.abs(target-at)<.002&&Math.abs(velocity)<.01){at=target;velocity=0;draw();raf=0;return;}}draw();raf=requestAnimationFrame(tick);}
 function start(){if(!raf){last=performance.now();raf=requestAnimationFrame(tick);}}
 function choose(i,notify=true,instant=false){target=clamp(i,0,options.length-1);if(notify)publish(target);else selected=target;if(reduced||instant){at=target;velocity=0;draw();}else start();}
 root.addEventListener('keydown',e=>{let next=selected;if(e.key==='ArrowRight'||e.key==='ArrowDown')next++;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next--;else if(e.key==='Home')next=0;else if(e.key==='End')next=options.length-1;else return;e.preventDefault();choose(next,true,true);buttons[selected].focus({preventScroll:true});});
 root.addEventListener('pointerdown',e=>{if(e.button!==0||drag)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,at,time:performance.now(),lastX:e.clientX,moved:false,v:0};velocity=0;});
 root.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.moved){if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){drag=null;return;}if(Math.abs(dx)<8)return;drag.moved=true;root.setPointerCapture(e.pointerId);}const now=performance.now(),spacing=Math.min(132,Math.max(100,root.clientWidth/3));drag.v=-(e.clientX-drag.lastX)/spacing/Math.max(.008,(now-drag.time)/1000);drag.lastX=e.clientX;drag.time=now;at=clamp(drag.at-dx/spacing,0,options.length-1);publish(Math.round(at));draw();});
 function end(e,cancel=false){if(!drag||drag.id!==e.pointerId)return;const d=drag;drag=null;suppress=d.moved;if(root.hasPointerCapture(e.pointerId))root.releasePointerCapture(e.pointerId);choose(Math.round(at+(cancel||performance.now()-d.time>100?0:clamp(d.v,-8,8)*.18)));setTimeout(()=>suppress=false,0);}
 root.addEventListener('pointerup',e=>end(e));root.addEventListener('pointercancel',e=>end(e,true));root.addEventListener('lostpointercapture',e=>end(e,true));
 root.addEventListener('wheel',e=>{if(e.ctrlKey||Math.abs(e.deltaY)>Math.abs(e.deltaX))return;const direction=Math.sign(e.deltaX);if(!direction||(target===0&&direction<0)||(target===options.length-1&&direction>0))return;e.preventDefault();const now=performance.now();if(now-wheelTime>180)wheelTotal=0;wheelTime=now;wheelTotal+=e.deltaX*(e.deltaMode===1?16:e.deltaMode===2?root.clientWidth:1);if(Math.abs(wheelTotal)>=60){choose(target+Math.sign(wheelTotal));wheelTotal=0;}},{passive:false});
 new ResizeObserver(draw).observe(root);draw();return {set(value){const i=options.findIndex(o=>o.value===value);if(i>=0&&i!==selected){drag=null;choose(i,false);}}};
}
