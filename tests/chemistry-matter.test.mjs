import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(n){const a=source.indexOf('function '+n+'(');assert.ok(a>=0);return source.slice(a,source.indexOf('\nfunction ',a+10));}
function context(){const c=vm.createContext({});vm.runInContext(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY=')),c);return c;}
test('Chemistry stable identities and reordered display preserve all original record meanings without mutation',()=>{
 const c=context(),data={completed:{Chemistry:[0,2,99]},answers:{Chemistry:{0:'old',2:'bond'}},selfChecks:{Chemistry:{0:true}},quizResults:{'Chemistry-0':{attempts:8,lastAnswers:[2,1,0],extra:4}},review:{'Chemistry-0':{extra:5}},future:{keep:true}};c.data=data;const before=JSON.stringify(data);
 for(const n of ['chemistry-matter','chemistry-atoms-elements','chemistry-bonds','chemistry-reactions']){c.id=n;const i=vm.runInContext('resolveSubjectLesson("Chemistry",id).legacyIndex',c);assert.equal(vm.runInContext('resolveSubjectLesson("Chemistry",'+i+').id',c),n);}
 vm.runInContext(fn('resolveLessonRecords'),c);const records=vm.runInContext('subjectLessonEntries("Chemistry",["chemistry-reactions","chemistry-bonds","chemistry-atoms-elements","chemistry-matter"]).map(e=>resolveLessonRecords(data,"Chemistry",e.id))',c);assert.deepEqual(Array.from(records,r=>r.legacyIndex),[3,2,1,0]);assert.equal(records[3].answer,'old');assert.equal(records[3].quiz.attempts,8);assert.equal(records[3].review.extra,5);assert.equal(records[3].href,'/subjects/chemistry/#lesson-0');assert.equal(JSON.stringify(data),before);assert.equal(vm.runInContext('resolveSubjectLesson("Chemistry","unknown")',c),null);
});
function render(name='Chemistry',i=0){const c=context(),data={answers:{Chemistry:{0:'saved answer'}},completed:{Chemistry:[99]},selfChecks:{},review:{'Chemistry-0':{nextReview:'2099-01-01'}},future:{keep:true}};c.state=()=>data;c.esc=String;c.formatDate=String;c.teacherContent=()=>({simple:'original',example:'example'});c.whyItWorks=()=>'';c.lessonQuizHTML=(n,i)=>'<section id="mcq-'+i+'">Historical quiz</section>';for(const n of ['chemistryMatterIntroduction','chemistryMatterSummary','cellsLessonIntroduction','cellsLessonSummary','dnaLessonIntroduction','dnaLessonSummary','selectionLessonIntroduction','selectionLessonSummary','lifeLessonIntroduction','lifeLessonSummary','lessonHTML'])vm.runInContext(fn(n),c);c.name=name;c.i=i;const before=JSON.stringify(data),html=vm.runInContext('lessonHTML(name,SUBJECTS[name].lessons[i],i,false)',c);assert.equal(JSON.stringify(data),before);return html;}
test('enhanced Matter preserves original controls and confines new teaching to Chemistry slot zero',()=>{
 const html=render();for(const text of ['id="answer-0"','saved answer','How is melting ice different from burning wood?',"checkAnswer('Chemistry',0)","completeLesson('Chemistry',0)",'id="mcq-0"','id="review-status-0"','aria-labelledby="matter-question"','#lesson-1'])assert.ok(html.includes(text),text);
 assert.equal((html.match(/id="answer-0"/g)||[]).length,1);for(const [n,i]of [['Chemistry',1],['Chemistry',2],['Chemistry',3],['Biology',0],['Physics',0]])assert.ok(!render(n,i).includes('matter-opening'));
});
test('Matter core covers assessment prerequisites; optional disclosures start closed and never save',()=>{
 const html=render();for(const text of ['mass and occupies space','light is not matter','molecules remain water','not destroyed','Burning wood','not all'])assert.ok(html.toLowerCase().includes(text.toLowerCase()),text);
 const details=[...html.matchAll(/<details([^>]*)>([\s\S]*?)<\/details>/g)];assert.equal(details.filter(d=>d[2].includes('Explore deeper:')).length,2);for(const d of details)assert.doesNotMatch(d[1],/open|on\w+=/);
});
test('ungraded classification binding handles every example, missing/wrong answers and never saves',()=>{
 for(const example of ['melting','evaporation','burning'])for(const value of [null,'same','new']){const feedback={},c=vm.createContext({document:{getElementById:id=>id==='matter-case'?{value:example}:feedback,querySelector:()=>value?{value}:null},saveState:()=>assert.fail('No saves')});vm.runInContext(fn('checkMatterPractice'),c);const binding=render().match(/onclick="(checkMatterPractice\(\))"/)[1];vm.runInContext(binding,c);assert.ok(feedback.textContent);if(value)assert.equal(feedback.textContent.startsWith('That fits.'),value===(example==='burning'?'new':'same'));}
});
test('Matter section navigation focuses targets with both motion preferences without changing hashes or saving',()=>{
 for(const reduced of [true,false]){const calls=[],target={setAttribute:(k,v)=>calls.push([k,v]),focus:o=>assert.equal(o.preventScroll,true),scrollIntoView:o=>calls.push(o)},c=vm.createContext({window:{matchMedia:()=>({matches:reduced})},document:{getElementById:id=>{assert.equal(id,'matter-practice');return target;}},location:{hash:'#lesson-0'},saveState:()=>assert.fail()});vm.runInContext(fn('scrollMatterSection'),c);vm.runInContext('scrollMatterSection("practice")',c);assert.equal(calls[1].behavior,reduced?'auto':'smooth');assert.equal(c.location.hash,'#lesson-0');vm.runInContext('scrollMatterSection("unknown")',c);assert.equal(calls.length,2);}
});
test('water diagram has equal molecule counts and accessible, qualified state descriptions',async()=>{
 const svg=await readFile('assets/chemistry/water-states.svg','utf8');assert.equal((svg.match(/>H₂O</g)||[]).length,18);for(const text of ['<title id="title">','<desc id="desc">','not grow','Not to scale','font-size="26"'])assert.ok(svg.includes(text));assert.match(render(),/aria-describedby="matter-diagram-description"/);assert.match(render(),/Ice is less dense/);assert.match(render(),/vapour is invisible/);
});
test('Chemistry hash navigation preserves legacy Review targets without rendering or storage writes',()=>{
 const opened=[],scroll=[],c=context();c.location={pathname:'/subjects/chemistry/',hash:'#lesson-0',search:'?review=quiz'};c.URLSearchParams=URLSearchParams;c.window={matchMedia:()=>({matches:true})};c.openLesson=i=>opened.push(i);c.document={getElementById:id=>({classList:{contains:()=>false},scrollIntoView:o=>scroll.push([id,o.behavior])})};vm.runInContext(fn('syncChemistryLessonHash'),c);vm.runInContext('syncChemistryLessonHash()',c);assert.deepEqual(opened,[0]);assert.deepEqual(scroll,[['mcq-0','auto']]);c.location.pathname='/subjects/physics/';vm.runInContext('syncChemistryLessonHash()',c);assert.equal(opened.length,1);
});
test('temporary practice is retained by existing rebuilds and styling is scoped',async()=>{
 assert.match(fn('renderSubject'),/#matter-practice/);const css=await readFile('styles.css','utf8');const added=css.slice(css.indexOf('/* Chemistry Lesson 1 only. */'));assert.ok(added.includes('.chemistry-matter-enhanced'));assert.ok(added.includes('prefers-reduced-motion:reduce'));assert.ok(added.includes('border-color:#77608e'));
});

test('initial Chemistry quiz Review boot respects motion preferences without rendering writes',()=>{
 for(const reduced of [false,true])for(const [subject,index]of [['Chemistry',0],['Chemistry',1],['Biology',0],['Physics',0]]){
 const calls=[],opened=[],c=vm.createContext({location:{pathname:'/subjects/'+subject.toLowerCase()+'/',search:'?review=quiz',hash:'#lesson-'+index},URLSearchParams,document:{body:{dataset:{}},getElementById:id=>id==='app'?{}:{scrollIntoView:o=>calls.push(o.behavior)}},window:{matchMedia:()=>({matches:reduced})},renderSubject:()=>{},openLesson:i=>opened.push(i),requestAnimationFrame:f=>f(),console,saveState:()=>assert.fail('No writes')});
 const start=source.indexOf('function boot(){'),end=source.indexOf('\nlet tutorFocusIndex',start);vm.runInContext(source.slice(start,end)+';boot();',c);assert.deepEqual(opened,[index]);assert.deepEqual(calls,[reduced&&(subject==='Biology'||subject==='Chemistry'&&index===0)?'auto':'smooth']);
 }
});
test('all practice changes clear stale feedback and repeated checking matches the current response without writes',()=>{
 let example='melting',value='same';const feedback={textContent:''},c=vm.createContext({document:{getElementById:id=>id==='matter-case'?{value:example}:feedback,querySelector:()=>({value})},saveState:()=>assert.fail('No writes')});vm.runInContext(fn('clearMatterPracticeFeedback')+fn('checkMatterPractice'),c);
 const html=render();assert.equal((html.match(/onchange="clearMatterPracticeFeedback\(\)"/g)||[]).length,3);
 for(const [e,v]of [['melting','same'],['burning','same'],['burning','new'],['evaporation','new'],['evaporation','same']]){example=e;value=v;vm.runInContext('clearMatterPracticeFeedback()',c);assert.equal(feedback.textContent,'');vm.runInContext('checkMatterPractice()',c);assert.equal(feedback.textContent.startsWith('That fits.'),v===(e==='burning'?'new':'same'));vm.runInContext('checkMatterPractice()',c);assert.ok(feedback.textContent);}
});
test('diagram qualifies sample selection and keeps small captions in readable HTML',async()=>{
 const svg=await readFile('assets/chemistry/water-states.svg','utf8');assert.match(svg,/not equal-volume samples/);assert.match(render(),/not equal-volume samples/);assert.doesNotMatch(svg,/font-size="(?:19|20|23|24)"/);assert.match(render(),/vibrate around their positions/);assert.match(render(),/move past one another/);assert.match(render(),/not to scale/);
});
