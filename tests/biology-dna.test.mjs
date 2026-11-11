import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+10);assert.ok(start>=0);return source.slice(start,end);}
function render(name='Biology',index=2){
 const data={answers:{Biology:{2:'Historical DNA answer',1:'Original Cells answer'}},quizResults:{'Biology-2':{correct:2,best:3,attempts:4,lastAnswers:[3,1,0]}},completed:{Biology:[1,2,99]},unknown:{retain:true}};
 const before=JSON.stringify(data),ids=['biology-life','biology-cells','biology-dna-heredity','biology-natural-selection'];
 const context=vm.createContext({state:()=>data,esc:String,teacherContent:()=>({simple:'Legacy explanation',example:'Legacy example'}),whyItWorks:()=> 'Legacy reasoning',lessonQuizHTML:(n,i)=>'<section id="mcq-'+i+'">Unchanged quiz</section>',resolveSubjectLesson:(n,i)=>{const legacyIndex=typeof i==='string'?ids.indexOf(i):i;return {id:n==='Biology'?ids[legacyIndex]:'other',legacyIndex,href:'/subjects/biology/#lesson-'+legacyIndex};}});
 vm.runInContext(['chemistryReactionsIntroduction','chemistryReactionsSummary','chemistryBondsIntroduction','chemistryBondsSummary','cellsLessonIntroduction','cellsLessonSummary','dnaLessonIntroduction','dnaLessonSummary','selectionLessonIntroduction','selectionLessonSummary','lifeLessonIntroduction','lifeLessonSummary','lessonHTML'].map(fn).join('\n'),context);
 context.name=name;context.index=index;
 const html=vm.runInContext("lessonHTML(name,['DNA and heredity','Legacy fact','Legacy example','How can DNA influence a trait?','Original hint'],index,false)",context);
 assert.equal(JSON.stringify(data),before);return html;
}
test('DNA enhancement preserves legacy answer, assessment and completion identities without data writes',()=>{
 const html=render();assert.equal((html.match(/id="answer-2"/g)||[]).length,1);assert.match(html,/Historical DNA answer/);assert.match(html,/Original hint/);assert.match(html,/checkAnswer\('Biology',2\)/);assert.match(html,/showModelAnswer\('Biology',2\)/);assert.match(html,/completeLesson\('Biology',2\)/);assert.match(html,/id="mcq-2"/);assert.match(html,/#lesson-3/);assert.match(html,/explicitly saves/);
});
test('DNA teaching and class opt-in do not affect Cells, other Biology lessons or other subjects',()=>{
 for(const [n,i] of [['Biology',0],['Biology',1],['Biology',3],['Chemistry',2]])assert.doesNotMatch(render(n,i),/dna-enhanced|dna-opening|gene-to-trait/);
 assert.match(render('Biology',1),/cells-opening/);assert.match(render(),/dna-enhanced/);
});
test('DNA core is self-contained and qualifies the pathway before optional depth',()=>{
 const html=render(),core=html.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g,'');
 for(const text of ['How can inherited DNA influence a trait?','functional RNA','protein-coding','pigment','Coat colour can involve several genes','development and environment','DNA does not turn into a trait','Heredity'])assert.ok(core.includes(text),text);
 const details=[...html.matchAll(/<details class="cells-deeper"([^>]*)>([\s\S]*?)<\/details>/g)];assert.equal(details.length,2);
 assert.match(details[0][2],/Genes and their products/);assert.match(details[1][2],/Why relatives can differ/);
 for(const d of details){assert.doesNotMatch(d[1],/\bopen\b|on\w+=/);assert.doesNotMatch(d[2],/onclick|ontoggle|<textarea|saveState/);}
});
test('DNA section controls focus existing targets with reduced motion and no storage or hash changes',()=>{
 const calls=[],target={setAttribute:(...a)=>calls.push(a),focus:o=>calls.push(o.preventScroll),scrollIntoView:o=>calls.push(o.behavior)};
 const context=vm.createContext({document:{getElementById:id=>{assert.equal(id,'mcq-2');return target;}},window:{matchMedia:()=>({matches:true})},location:{hash:'#lesson-2'},saveState:()=>assert.fail('No save')});
 vm.runInContext(fn('scrollDnaSection'),context);vm.runInContext("scrollDnaSection('practice')",context);assert.deepEqual(calls,[['tabindex','-1'],true,'auto']);assert.equal(context.location.hash,'#lesson-2');calls.length=0;vm.runInContext("scrollDnaSection('unknown')",context);assert.deepEqual(calls,[]);
});
test('original DNA diagram provides readable labels and accessible scientific alternatives',async()=>{
 const svg=await readFile('assets/biology/gene-to-trait.svg','utf8');assert.match(svg,/viewBox="0 0 360 540"/);assert.match(svg,/font-size="24"/);assert.match(svg,/<title id="title">/);assert.match(svg,/<desc id="desc">/);assert.match(svg,/does not describe all genes/);
 assert.match(render(),/aria-describedby="dna-pathway-description"/);assert.match(render(),/Simplified example, not a rule for every gene or trait/);
});
