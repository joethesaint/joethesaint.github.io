/** Recognize a primary tap only; movement, cancellation and multitouch invalidate it. */
export function createTapTracker(threshold=8){
 const pointers=new Set();let candidate=null;
 return {
 down(e){pointers.add(e.pointerId);if(pointers.size!==1||e.button!==0){candidate=null;return;}candidate={id:e.pointerId,x:e.clientX,y:e.clientY,time:e.timeStamp};},
 move(e){if(candidate&&candidate.id===e.pointerId&&Math.hypot(e.clientX-candidate.x,e.clientY-candidate.y)>threshold)candidate=null;},
 up(e){const tap=candidate?.id===e.pointerId&&pointers.size===1&&e.timeStamp-candidate.time<500&&Math.hypot(e.clientX-candidate.x,e.clientY-candidate.y)<=threshold;pointers.delete(e.pointerId);candidate=null;return !!tap;},
 cancel(e){pointers.delete(e.pointerId);candidate=null;}
 };
}
