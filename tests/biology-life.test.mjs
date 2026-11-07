import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+10);assert.ok(start>=0);return source.slice(start,end);}
function render(name='Biology',index=0){
 const data={answers:{Biology:{0:'Historical life answer',1:'Historical Cells answer'}},quizResults:{'Biology-0':{correct:2,total:3,best:3,attempts:8,lastAnswers:[2,0,1]}},completed:{Biology:[1,2,3,99]},selfChecks:{Biology:{0:false}},review:{'Biology-0':{nextReview:'2099-01-01'}},unknown:{retain:true}};
 const before=JSON.stringify(data),ids=['biology-life','biology-cells','biology-dna-heredity','biology-natural-selection'];
 const context=vm.createContext({state:()=>data,esc:String,formatDate:String,teacherContent:()=>({simple:'Legacy explanation',example:'Legacy example'}),whyItWorks:()=> 'Legacy reasoning',lessonQuizHTML:(n,i)=>'<section id="mcq-'+i+'">Unchanged quiz</section>',resolveSubjectLesson:(n,i)=>{const legacyIndex=typeof i==='string'?ids.indexOf(i):i;return {id:n==='Biology'?ids[legacyIndex]:'other',legacyIndex,href:'/subjects/biology/#lesson-'+legacyIndex};},saveState:()=>assert.fail('Rendering must not save')});
 vm.runInContext(['cellsLessonIntroduction','cellsLessonSummary','dnaLessonIntroduction','dnaLessonSummary','selectionLessonIntroduction','selectionLessonSummary','lifeLessonIntroduction','lifeLessonSummary','lessonHTML'].map(fn).join('\n'),context);
 context.name=name;context.index=index;
 const html=vm.runInContext("lessonHTML(name,['What is life?','Biology is the scientific study of living things and their interactions.','Original fact','What makes a plant a living thing?','Think about how it uses energy, grows, and responds to sunlight and water.'],index,false)",context);
 assert.equal(JSON.stringify(data),before);return html;
}
test('life enhancement keeps original prompt, hint, answer, quiz, reflection, review and completion slots without saving',()=>{
 const html=render();assert.equal((html.match(/id="answer-0"/g)||[]).length,1);
 for(const t of ['Historical life answer','What makes a plant a living thing?','Think about how it uses energy, grows, and responds to sunlight and water.',"checkAnswer('Biology',0)","showModelAnswer('Biology',0)","setSelfCheck('Biology',0,true)","completeLesson('Biology',0)",'id="mcq-0"','id="review-status-0"','aria-labelledby="life-question"','/notes.html','/review.html'])assert.ok(html.includes(t),t);
});
test('life presentation is isolated and preserves accepted lesson opt-ins',()=>{
 for(const [n,i] of [['Biology',1],['Biology',2],['Biology',3],['Chemistry',0]])assert.doesNotMatch(render(n,i),/life-enhanced|life-opening|life-and-seed.svg/);
 assert.match(render('Biology',1),/cells-opening/);assert.match(render('Biology',2),/dna-opening/);assert.match(render('Biology',3),/selection-opening/);
});
test('life core teaches assessed concepts and dormancy qualifications without optional content',()=>{
 const core=render().replace(/<details\b[^>]*>[\s\S]*?<\/details>/g,'');
 for(const t of ['How can a seed be alive when it looks as still as a pebble?','study of living things and their interactions','one cell','energy','toward light','stored reserves','Not every seed is viable','Failure to germinate immediately does not establish death','not a guarantee','Nor must an individual visibly grow, reproduce','populations across generations'])assert.ok(core.includes(t),t);
 assert.match(core,/#lesson-1/);assert.match(core,/Next: Cells: the basic unit/);
});
test('two optional native life disclosures start closed without save or rendering callbacks',()=>{
 const html=render(),sections=[...html.matchAll(/<details class="cells-deeper"([^>]*)>([\s\S]*?)<\/details>/g)];assert.equal(sections.length,2);assert.match(sections[0][2],/Life can be quiet/);assert.match(sections[1][2],/Where definitions become difficult/);assert.match(sections[1][2],/classification is not universally settled/);
 for(const d of sections){assert.doesNotMatch(d[1],/\bopen\b|on\w+=/);assert.doesNotMatch(d[2],/ontoggle|onclick|<textarea|saveState/);}
});
test('life section navigation preserves hash/storage and honors reduced motion',()=>{
 const calls=[],target={setAttribute:(...a)=>calls.push(a),focus:o=>calls.push(o.preventScroll),scrollIntoView:o=>calls.push(o.behavior)};
 const context=vm.createContext({document:{getElementById:id=>{assert.equal(id,'mcq-0');return target;}},window:{matchMedia:()=>({matches:true})},location:{hash:'#lesson-0'},saveState:()=>assert.fail('Must not save')});vm.runInContext(fn('scrollLifeSection'),context);vm.runInContext("scrollLifeSection('practice')",context);assert.deepEqual(calls,[['tabindex','-1'],true,'auto']);assert.equal(context.location.hash,'#lesson-0');calls.length=0;vm.runInContext("scrollLifeSection('unknown')",context);assert.deepEqual(calls,[]);
});
test('original seed diagram includes accessible labels, stored reserves and a magnified cell rather than another life stage',async()=>{
 const svg=await readFile('assets/biology/life-and-seed.svg','utf8');for(const t of ['<title id="title">','<desc id="desc">','viewBox="0 0 360 640"','font-size="24"','Early growth uses reserves','Green tissues use light','Enlarged cell inset','Simplified, not to scale','not a later life stage'])assert.ok(svg.includes(t),t);assert.match(render(),/aria-describedby="life-diagram-description"/);
});
