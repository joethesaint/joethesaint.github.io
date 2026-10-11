import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createBiogasModel,disposeModel} from '../public/biogas/model-builder.js';
import {applyModelStyle} from '../public/biogas/model-style.js';
import {processPaths} from '../public/biogas/process-data.js';
import {cycleFrame} from '../public/biogas/flow-effects.js';
import {calculateBudget,budgetItems} from '../public/biogas/compression-budget.js';
test('all configurations build independently with finite routes',()=>{for(const design of 'ABCDEFG'){const model=createBiogasModel(design);assert.ok(model.parts.length>3,design);assert.ok(model.flowPath.length>1);for(const p of model.flowPath)assert.ok(p.toArray().every(Number.isFinite));disposeModel(model.root);}});
test('compression concept replaces the tyre tube with distinct equipment',()=>{const model=createBiogasModel('B',{compression:true}),names=model.parts.map(p=>p.name);for(const name of ['Gas dryer','Membrane upgrader','Gas analyser','Compressor skid','Certified cylinder rack'])assert.ok(names.includes(name));assert.ok(!names.includes('Tyre-tube store'));disposeModel(model.root);});
test('styling a preview cannot mutate another model hardware',()=>{const a=createBiogasModel('B'),b=createBiogasModel('B');const find=m=>{let mesh;m.root.traverse(o=>{if(!mesh&&o.isInstancedMesh)mesh=o;});return mesh;};const before=find(b).material.color.getHex();a.parts.forEach(p=>p.g.traverse(o=>{if(o.isMesh)o.userData.originalOpacity=o.material.opacity;}));applyModelStyle(a.parts,'hairline');assert.equal(find(b).material.color.getHex(),before);assert.notEqual(find(a).material,find(b).material);disposeModel(a.root);disposeModel(b.root);});
test('cycle opens smoothly then closes and remains closed after completion',()=>{assert.equal(cycleFrame(0).valve,0);assert.ok(cycleFrame(.5).valve>0);assert.equal(cycleFrame(2).valve,1);assert.ok(cycleFrame(5.5).valve<1);assert.equal(cycleFrame(6).valve,0);assert.equal(cycleFrame(9).complete,true);assert.equal(cycleFrame(30).valve,0);});
test('budget never treats missing quotes as a complete estimate',()=>{assert.equal(calculateBudget({},20).missing,budgetItems.length);const values=Object.fromEntries(budgetItems.map(([id])=>[id,'1000']));assert.equal(calculateBudget(values,20).total,10800);values.dry='';assert.equal(calculateBudget(values,20).missing,1);values.dry='-1';assert.equal(calculateBudget(values,20).missing,1);});

test('each compression stage maps to an existing component',()=>{const model=createBiogasModel('B',{compression:true}),names=new Set(model.parts.map(p=>p.name));for(const stage of processPaths.cylinder)assert.ok(names.has(stage.part),stage.title);disposeModel(model.root);});
