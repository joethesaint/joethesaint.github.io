import React, {useLayoutEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {ThinkingOrb} from 'thinking-orbs';
import {Liquid} from 'liquid-gooey';
import {FloatingControls} from './floating-controls.jsx';

const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const plainControls=reducedMotion||matchMedia('(forced-colors: active)').matches;
const loadingElement=document.getElementById('loading');
const loadingRoot=createRoot(loadingElement);
function Activity({state,label,error}){
 if(error)return <p role="alert">{error}</p>;
 return <div className={state==='connecting'?'orb-initial':'orb-inline'} role="status" aria-live="polite">
  <ThinkingOrb state={state} size={state==='connecting'?64:20} dark paused={reducedMotion} />
  <span>{label}</span>
 </div>;
}
export function setActivity(state,label=''){
 loadingElement.hidden=!state;
 loadingElement.classList.toggle('initial-loading',state==='connecting');
 loadingElement.classList.toggle('inline-loading',!!state&&state!=='connecting');
 flushSync(()=>loadingRoot.render(state?<Activity state={state} label={label}/>:null));
}
export function showLoadingError(message){
 loadingElement.hidden=false;loadingElement.className='loading-error';
 flushSync(()=>loadingRoot.render(<Activity error={message}/>));
}
function Dock(){return <><div className="statebar glass" role="group" aria-label="Assembly state"><button data-state="assembled" className="active" aria-pressed="true">Assembled</button><button data-state="exploded" aria-pressed="false">Exploded</button></div><FloatingControls plain={plainControls}/></>;}
flushSync(()=>createRoot(document.getElementById('dockEffects')).render(<Dock/>));
setActivity('connecting','Preparing the model');

export {createArcPicker} from './arc-picker.jsx';

export {enhanceControls} from './gooey-controls.jsx';
