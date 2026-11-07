import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+10);return source.slice(start,end);}
function render(name,index){
 const data={answers:{Biology:{1:'Saved cells answer'}},quizResults:{'Biology-1':{correct:2,total:3,attempts:4}},review:{}};const before=JSON.stringify(data);
 const context=vm.createContext({state:()=>data,esc:String,teacherContent:()=>({simple:'Original',example:'Original example'}),whyItWorks:()=> 'Original reasoning',lessonQuizHTML:()=>'<section id="mcq-1">Original quiz</section>',resolveSubjectLesson:(name,i)=>i==='biology-dna-heredity'?{href:'/subjects/biology/#lesson-2',legacyIndex:2}:{id:name==='Biology'&&i===1?'biology-cells':'other'}});
 vm.runInContext(fn('cellsLessonIntroduction')+fn('cellsLessonSummary')+fn('lessonHTML'),context);context.name=name;context.index=index;
 const html=vm.runInContext("lessonHTML(name,['Cells: the basic unit','Legacy fact','Legacy example','Why do cells need membranes?','Hint'],index,false)",context);
 assert.equal(JSON.stringify(data),before);return html;
}
test('Cells enhancement retains one answer, quiz and completion identity without mutating records',()=>{
 const html=render('Biology',1);assert.match(html,/What you will understand/);assert.match(html,/Saved cells answer/);assert.equal((html.match(/id="answer-1"/g)||[]).length,1);assert.match(html,/completeLesson\('Biology',1\)/);assert.match(html,/Original quiz/);assert.match(html,/keyword/);assert.match(html,/#lesson-2/);assert.match(html,/\/notes.html/);
});
test('other subjects and Biology lessons do not receive Cells teaching additions',()=>{
 for(const [name,index] of [['Chemistry',1],['Biology',0],['Biology',2],['Biology',3]])assert.doesNotMatch(render(name,index),/cells-opening|cells-summary|cell-comparison.svg/);
});
test('historical lesson catalog and quiz banks remain identical to released baseline',()=>{
 // SHA-256 of newline-normalized source regions at released ec8113047ce5dab1eba75d98bd6dbaf894e85031.
 // Fixed expectations work after committing and in CI without Git history.
 const hash=text=>createHash('sha256').update(text).digest('hex');
 assert.equal(hash(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const KEY='))),'8d0e065388121750e9054fc8fb3365e7b6e8a2c82d727dac6aaf6c7cb8008f81');
 // Hash the assessment definitions/generator separately from the approved quiz UI
 // and retry-handler changes. This fixed hash was computed at accepted 14a8436.
 const historicalQuizSource=source.slice(source.indexOf('const QUIZ_MISCONCEPTIONS='),source.indexOf('function lessonQuizHTML(')).trim();
 assert.equal(hash(historicalQuizSource),'94b20756aaac91ff9d3d492c9b9bd1084a6f58de88c27ba76cb59aeae227ab1b');
});
test('both diagrams have accessible descriptions and adjacent text alternatives',async()=>{
 for(const file of ['cell-comparison','membrane-exchange']){const svg=await readFile('assets/biology/'+file+'.svg','utf8');assert.match(svg,/<title id="title">/);assert.match(svg,/<desc id="desc">/);assert.match(svg,/viewBox=/);}
 const html=render('Biology',1);assert.match(html,/id="cells-comparison-description"/);assert.match(html,/id="cells-exchange-description"/);assert.match(html,/not to scale/);
});
test('Cells section controls preserve the legacy hash and focus existing content without writes',()=>{
 const calls=[],target={setAttribute:(...args)=>calls.push(['attribute',...args]),focus:opts=>calls.push(['focus',opts.preventScroll]),scrollIntoView:opts=>calls.push(['scroll',opts.behavior])};
 const context=vm.createContext({location:{hash:'#lesson-1'},window:{matchMedia:()=>({matches:true})},document:{getElementById:()=>target},saveState:()=>assert.fail('Must not save')});
 vm.runInContext(fn('scrollCellsSection'),context);vm.runInContext("scrollCellsSection('practice')",context);
 assert.deepEqual(calls,[['attribute','tabindex','-1'],['focus',true],['scroll','auto']]);assert.equal(context.location.hash,'#lesson-1');
 calls.length=0;vm.runInContext("scrollCellsSection('unknown')",context);assert.deepEqual(calls,[]);
});
test('Biology lesson scrolling respects reduced motion while other subjects retain prior behavior',()=>{
 const scroll=[],element={classList:{add(){}},querySelector:()=>null,scrollIntoView:opts=>scroll.push(opts.behavior)};
 const context=vm.createContext({window:{matchMedia:()=>({matches:true})},document:{body:{dataset:{subject:'Biology'}},querySelectorAll:()=>[],getElementById:()=>element}});
 vm.runInContext(fn('openLesson'),context);vm.runInContext('openLesson(1)',context);context.document.body.dataset.subject='Chemistry';vm.runInContext('openLesson(1)',context);assert.deepEqual(scroll,['auto','smooth']);
});
test('responsive pictures provide mobile labels at readable SVG sizes and scientific assumptions',async()=>{
 for(const file of ['cell-comparison-mobile','membrane-exchange-mobile']){const svg=await readFile('assets/biology/'+file+'.svg','utf8');assert.match(svg,/viewBox="0 0 360 /);assert.match(svg,/font-size="19"/);assert.match(svg,/<desc/);}
 const html=render('Biology',1);assert.match(html,/<picture>/);assert.match(html,/electrical pull/);assert.match(html,/adenosine triphosphate/);assert.match(html,/assumed net inward movement/);assert.match(html,/aria-label="Cells lesson sections"/);
});

test('short Cells core retains prerequisites and diagram descriptions outside optional disclosures',()=>{
 const html=render('Biology',1),core=html.replace(/<details\b[^>]*>[\s\S]*?<\/details>/g,'');
 for(const text of ['selectively permeable','harmful substances','No nucleus does not mean no DNA','ribosomes','cells-exchange-description','cells-comparison-description','assumed net inward movement','not to scale','Original quiz','answer-1','cells-reflect'])assert.ok(core.includes(text),text);
 assert.doesNotMatch(core,/adenosine triphosphate|electrochemical gradient/);
 assert.doesNotMatch(html,/5[–-]7 minutes|reading time/i);
});

test('two deeper sections are native collapsed disclosures without save or rendering handlers',()=>{
 const html=render('Biology',1),sections=[...html.matchAll(/<details class="cells-deeper"([^>]*)>([\s\S]*?)<\/details>/g)];
 assert.equal(sections.length,2);
 assert.match(sections[0][2],/<summary>Explore deeper: How substances cross membranes<\/summary>/);
 assert.match(sections[1][2],/<summary>Explore deeper: How cells can differ<\/summary>/);
 for(const section of sections){assert.doesNotMatch(section[1],/\bopen\b|on\w+=/);assert.doesNotMatch(section[2],/onclick=|ontoggle=|<textarea|<input|saveState|renderSubject/);}
});

test('membrane key keeps scientific qualifications visible as scannable explanations',()=>{
 const core=render('Biology',1).replace(/<details\b[^>]*>[\s\S]*?<\/details>/g,'');
 assert.match(core,/id="cells-exchange-description" class="cells-diagram-key"/);
 for(const text of ['<strong>Oxygen:</strong>','<strong>Charged ion:</strong>','<strong>Arrows:</strong>','concentration and electrical forces','Molecules move both ways','do not show a pump','simplified and not to scale'])assert.ok(core.includes(text),text);
});
