import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+10);assert.ok(start>=0);return source.slice(start,end);}
function render(name='Biology',index=3){
 const data={answers:{Biology:{1:'Historical Cells',2:'Historical DNA',3:'Historical evolution answer'}},quizResults:{'Biology-3':{correct:2,total:3,best:3,attempts:6,lastAnswers:[2,0,1]}},completed:{Biology:[1,2,3,99]},review:{'Biology-3':{nextReview:'2099-01-01'}},unknown:{retain:true}};
 const before=JSON.stringify(data),ids=['biology-life','biology-cells','biology-dna-heredity','biology-natural-selection'];
 const context=vm.createContext({state:()=>data,esc:String,formatDate:String,teacherContent:()=>({simple:'Legacy explanation',example:'Legacy example'}),whyItWorks:()=> 'Legacy reasoning',lessonQuizHTML:(n,i)=>'<section id="mcq-'+i+'">Unchanged quiz</section>',resolveSubjectLesson:(n,i)=>{const legacyIndex=typeof i==='string'?ids.indexOf(i):i;return {id:n==='Biology'?ids[legacyIndex]:'other',legacyIndex,href:'/subjects/biology/#lesson-'+legacyIndex};}});
 vm.runInContext(['cellsLessonIntroduction','cellsLessonSummary','dnaLessonIntroduction','dnaLessonSummary','selectionLessonIntroduction','selectionLessonSummary','lessonHTML'].map(fn).join('\n'),context);
 context.name=name;context.index=index;
 const html=vm.runInContext("lessonHTML(name,['Evolution by natural selection','Legacy fact','Legacy example','How can evolution create complex adaptations without a plan?','Small inherited differences can be filtered by selection across many generations.'],index,false)",context);
 assert.equal(JSON.stringify(data),before);return html;
}
test('selection enhancement retains legacy written assessment, answer, quiz, review and completion identities without writes',()=>{
 const html=render();assert.equal((html.match(/id="answer-3"/g)||[]).length,1);assert.match(html,/Historical evolution answer/);assert.match(html,/How can evolution create complex adaptations without a plan\?/);assert.match(html,/Small inherited differences can be filtered/);
 for(const text of ["checkAnswer('Biology',3)","showModelAnswer('Biology',3)","completeLesson('Biology',3)",'id="mcq-3"','id="review-status-3"','/review.html','/notes.html','project=plant-evolution'])assert.ok(html.includes(text),text);
 assert.doesNotMatch(html,/#lesson-4/);
});
test('selection teaching is isolated from accepted Cells, DNA, other subjects and lesson one',()=>{
 for(const [n,i] of [['Biology',0],['Biology',1],['Biology',2],['Chemistry',3]])assert.doesNotMatch(render(n,i),/selection-enhanced|selection-opening|natural-selection.svg/);
 assert.match(render('Biology',1),/cells-opening/);assert.match(render('Biology',2),/dna-opening/);
});
test('core selection explanation and visible diagram qualifications remain outside collapsed optional content',()=>{
 const html=render(),core=html.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g,'');
 for(const text of ['How can inherited differences become more common without anyone planning the change?','heritable','selection pressure','Reproductive success','populations evolve across generations','repeatedly','many generations','one mechanism of evolution','new descendants','not the original beetles changing colour','Numbers are illustrative','conditions and chance','not additional biological traits'])assert.ok(core.includes(text),text);
 const details=[...html.matchAll(/<details class="cells-deeper"([^>]*)>([\s\S]*?)<\/details>/g)];assert.equal(details.length,2);assert.match(details[0][2],/Where inherited variation comes from/);assert.match(details[1][2],/Selection has limits/);
 for(const d of details){assert.doesNotMatch(d[1],/\bopen\b|on\w+=/);assert.doesNotMatch(d[2],/ontoggle|onclick|<textarea|saveState/);}
});
test('selection section navigation focuses legacy practice without hash or storage writes and honors reduced motion',()=>{
 const calls=[],target={setAttribute:(...a)=>calls.push(a),focus:o=>calls.push(o.preventScroll),scrollIntoView:o=>calls.push(o.behavior)};
 const context=vm.createContext({document:{getElementById:id=>{assert.equal(id,'mcq-3');return target;}},window:{matchMedia:()=>({matches:true})},location:{hash:'#lesson-3'},saveState:()=>assert.fail('Must not save')});
 vm.runInContext(fn('scrollSelectionSection'),context);vm.runInContext("scrollSelectionSection('practice')",context);assert.deepEqual(calls,[['tabindex','-1'],true,'auto']);assert.equal(context.location.hash,'#lesson-3');calls.length=0;vm.runInContext("scrollSelectionSection('unknown')",context);assert.deepEqual(calls,[]);
});
test('original beetle diagram has accessible text, non-color patterns and consistent illustrative counts',async()=>{
 const svg=await readFile('assets/biology/natural-selection.svg','utf8');assert.match(svg,/<title id="title">/);assert.match(svg,/<desc id="desc">/);assert.match(svg,/viewBox="0 0 360 620"/);assert.match(svg,/font-size="24"/);assert.equal((svg.match(/<use href="#dark"/g)||[]).length,10);assert.equal((svg.match(/<use href="#light"/g)||[]).length,6);assert.match(svg,/Striped: dark · Dotted: light/);assert.match(svg,/not measured data or guaranteed outcomes/);assert.match(render(),/aria-describedby="selection-diagram-description"/);
});
