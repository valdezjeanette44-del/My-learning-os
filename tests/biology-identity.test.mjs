import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
const ids=['biology-life','biology-cells','biology-dna-heredity','biology-natural-selection'];
const fixture=()=>({completed:{Biology:[0,2,99]},notes:{Biology:'Original'},scores:{Biology:{score:100}},answers:{Biology:{2:'DNA answer',99:'Unknown answer'}},selfChecks:{Biology:{2:true}},quizResults:{'Biology-2':{subject:'Biology',index:2,total:3,correct:1,best:2,attempts:7,lastAnswers:[3,0,1],futureField:'keep'}},review:{'Biology-2':{subject:'Biology',index:2,nextReview:'2026-12-01T00:00:00Z'}},futureFeature:{keep:true},noteLibrary:[]});
function setup(data=fixture()){
 const raw=JSON.stringify(data),storage=new Map([['myLearningOS.v2',raw]]),writes=[],downloads=[];
 const context=vm.createContext({data,console,URLSearchParams,Date,setTimeout(){},localStorage:{getItem:k=>storage.get(k)??null,setItem(k,v){writes.push(k);storage.set(k,v);}},document:{getElementById:()=>null,createElement:()=>({click(){},remove(){}}),body:{appendChild(){}}},Blob:class{constructor(parts){downloads.push(parts.join(''));}},URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}}});
 vm.runInContext(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('function esc(')),context);
 const run=code=>vm.runInContext(code,context),plain=code=>JSON.parse(run('JSON.stringify('+code+')'));
 return {run,plain,context,storage,writes,downloads,raw};
}
function fn(name){const start=source.indexOf('function '+name+'('),ends=['\nfunction ','\nconst ','\nlet ','\nboot();'].map(m=>source.indexOf(m,start+10)).filter(i=>i>=0);return source.slice(start,Math.min(...ends,source.length));}
test('permanent identities resolve both stable IDs and original indices',()=>{
 const h=setup();
 ids.forEach((id,i)=>{assert.equal(h.plain(`resolveSubjectLesson('Biology','${id}')`).legacyIndex,i);assert.equal(h.plain(`resolveSubjectLesson('Biology',${i})`).id,id);});
 assert.equal(h.run("resolveSubjectLesson('Biology','unknown')"),null);
 assert.equal(h.run("resolveSubjectLesson('Biology',99)"),null);
 assert.equal(h.run("Object.isFrozen(SUBJECTS.Biology.lessons)"),true);
});
test('reordered display resolves every saved record to its original content without writes',()=>{
 const h=setup();h.context.order=[...ids].reverse();
 const entries=h.plain("subjectLessonEntries('Biology',order).map(e=>resolveLessonRecords(data,'Biology',e.id))");
 assert.deepEqual(entries.map(e=>e.legacyIndex),[3,2,1,0]);
 const dna=entries[1];assert.equal(dna.lesson[0],'DNA and heredity');assert.equal(dna.completed,true);assert.equal(dna.answer,'DNA answer');assert.equal(dna.selfCheck,true);assert.deepEqual(dna.quiz,fixture().quizResults['Biology-2']);assert.deepEqual(dna.review,fixture().review['Biology-2']);
 assert.equal(h.run('JSON.stringify(data)'),h.raw);assert.deepEqual(h.writes,[]);
});
test('legacy Knowledge Map and review URLs keep their permanent Biology slots',async()=>{
 const h=setup();
 ids.forEach((id,i)=>assert.equal(h.plain(`resolveSubjectLesson('Biology','${id}')`).href,`/subjects/biology/#lesson-${i}`));
 const map=await readFile('knowledge-map.js','utf8');
 assert.match(map,/\["Biology","Chemistry",[^\n]+,1,3\]/);
 assert.match(map,/\["Biology","History",[^\n]+,3,1\]/);
 // Boot behavior for plain and quiz-review URLs is executed in subject-journey.test.mjs.
});
test('resolved writes retain legacy slots and unknown records rather than adding a new schema',()=>{
 const h=setup();h.run(fn('saveAnswer'));
 h.run("const dna=resolveSubjectLesson('Biology','biology-dna-heredity');saveAnswer('Biology',dna.legacyIndex,'Updated');");
 const expected=fixture();expected.answers.Biology[2]='Updated';
 assert.deepEqual(JSON.parse(h.storage.get('myLearningOS.v2')),expected);
 assert.deepEqual(h.writes,['myLearningOS.v2']);
});
test('full subject rendering uses permanent control indices under reversed presentation and writes nothing',()=>{
 const h=setup(),rendered=[],app={innerHTML:''},node={textContent:'',remove(){},previousElementSibling:{previousElementSibling:{textContent:''}}};
 h.context.rendered=rendered;
 h.context.document={title:'',getElementById:id=>id==='app'?app:node,querySelector:()=>node};
 Object.assign(h.context,{nav:()=>'',ensureQuizStyles(){},newQuestion(){},renderQuiz(){},getNextLesson:()=>null,subjectProgress:()=>50,lessonHTML:(name,lesson,index,done)=>{rendered.push({index,title:lesson[0],done});return `<article id="lesson-${index}"></article>`;}});
 h.run(fn('esc')+fn('subjectJourneyHTML')+fn('renderSubject'));
 h.run("const originalEntries=subjectLessonEntries;subjectLessonEntries=(name,order)=>originalEntries(name,order||(name==='Biology'?[...BIOLOGY_DISPLAY_ORDER].reverse():undefined));renderSubject('Biology');");
 assert.deepEqual(rendered.map(e=>e.index),[3,2,1,0]);
 assert.deepEqual(rendered.map(e=>e.done),[false,true,false,true]);
 assert.equal(rendered[1].title,'DNA and heredity');
 assert.equal(h.storage.get('myLearningOS.v2'),h.raw);assert.deepEqual(h.writes,[]);
});
test('completion through a stable identity writes the original index and review key',()=>{
 const h=setup();Object.assign(h.context,{renderSubject(){},openLesson(){}});
 h.run(fn('addDays')+fn('dateKey')+fn('completeLesson'));
 h.run("completeLesson('Biology',resolveSubjectLesson('Biology','biology-cells').legacyIndex);");
 const saved=JSON.parse(h.storage.get('myLearningOS.v2'));
 assert.deepEqual(saved.completed.Biology,[0,2,99,1]);
 assert.equal(saved.review['Biology-1'].index,1);
 assert.deepEqual(saved.quizResults,fixture().quizResults);
 assert.deepEqual(saved.review['Biology-2'],fixture().review['Biology-2']);
 assert.deepEqual(saved.futureFeature,fixture().futureFeature);
});
test('identity resolution and normal export preserve historical scores, option indices and unknown fields',()=>{
 const h=setup();h.run(fn('exportLearningBackup'));
 h.run("resolveLessonRecords(state(),'Biology','biology-dna-heredity');exportLearningBackup();");
 const backup=JSON.parse(h.downloads[0]);assert.equal(backup.version,2);assert.deepEqual(backup.data,fixture());assert.deepEqual(h.writes,[]);assert.equal(h.storage.get('myLearningOS.v2'),h.raw);
 // Alter a question source in memory: resolution must return the saved result, not regrade it.
 h.run("SUBJECTS.Biology.lessons[2][1]='Test-only changed explanation';");
 assert.deepEqual(h.plain("resolveLessonRecords(state(),'Biology','biology-dna-heredity').quiz"),fixture().quizResults['Biology-2']);
});
