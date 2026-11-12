import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
const overview=source.slice(source.indexOf('function subjectJourneyHTML('),source.indexOf('function lessonHelp('));
function render(data){
 const original=JSON.stringify(data);
 const context=vm.createContext({SUBJECTS:{Biology:{icon:'🧬',lessons:['What is life?','Cells: the basic unit','DNA and heredity','Evolution by natural selection'].map(title=>[title])}},esc:value=>String(value).replaceAll('<','&lt;'),data});
 vm.runInContext(source.slice(source.indexOf('const BIOLOGY_LESSON_IDENTITIES='),source.indexOf('const STORAGE_RECOVERY_KEY='))+overview+source.slice(source.indexOf('function localReviewDayKey('),source.indexOf('function getQuizReviewItems(')),context);
 const html=vm.runInContext("subjectJourneyHTML('Biology',data)",context);
 assert.equal(JSON.stringify(data),original,'Rendering must not mutate saved records');
 return html;
}
test('journey starts with the first lesson without creating progress',()=>{
 const html=render({completed:{},notes:{Biology:'Keep me'},future:{keep:true}});
 assert.match(html,/0 of 4 core lessons completed/);
 assert.match(html,/href="#lesson-0"[^>]*>Start lesson 1/);
 for(let i=0;i<4;i++)assert.match(html,new RegExp('href="#lesson-'+i+'"'));
});
test('journey selects first unfinished lesson and ignores duplicate or out-of-range completion indices',()=>{
 const html=render({completed:{Biology:[0,0,2,99]},scores:{Biology:{score:100}}});
 assert.match(html,/2 of 4 core lessons completed/);
 assert.match(html,/href="#lesson-1"[^>]*>Continue lesson/);
 assert.doesNotMatch(html,/100%|mastered/i);
});
test('completed journey offers review without inventing another lesson',()=>{
 const html=render({completed:{Biology:[0,1,2,3]}});
 assert.match(html,/Core lessons completed/);
 assert.doesNotMatch(html,/lesson-4/);
});
test('Biology note count uses explicit categories, excludes archive and preserves original records',()=>{
 const html=render({completed:{},noteLibrary:[{category:'Biology'},{category:'Subject · Biology'},{category:'History',title:'Biology'},{category:'Biology',archivedAt:'2026-11-05'}]});
 assert.match(html,/2 Biology notes/);
 assert.match(html,/projects.html\?project=plant-evolution/);
 assert.match(html,/href="#note"/);
});
test('dashboard keeps four lesson destinations and connections, with quizzes retained inside lessons',async()=>{
 const html=render({completed:{}});
 for(let i=0;i<4;i++){
  assert.match(html,new RegExp(`href="#lesson-${i}"[^>]*onclick="openLesson\\(${i}\\)"`));
 }
 assert.doesNotMatch(html,/biology-assessment-grid|biology-assessment-card|biology-tutor-link/);
 // The real lesson renderer still provides the historical quiz controls for every slot.
 assert.match(source,/lessonQuizHTML\(name,i\)/);
 for(const route of ['/review.html','/projects.html?project=plant-evolution','/notes.html','href="#note"','/knowledge.html'])assert.ok(html.includes(route),route);
 const css=await readFile('styles.css','utf8');assert.match(css,/\.biology-dashboard\s*\{/);assert.match(css,/@media\(max-width:650px\)\{\.biology-dashboard/);assert.match(css,/@media\(max-width:380px\)\{\.biology-dashboard/);
});
test('review count reflects due lesson and quiz reviews and excludes completed-today and future records',()=>{
 const today=new Date(),dayOffset=(days)=>{const d=new Date(today);d.setDate(d.getDate()+days);return d.toISOString();};
 const html=render({review:{'Biology-0':{subject:'Biology',index:0,nextReview:dayOffset(-1)},'Biology-1':{subject:'Biology',index:1,nextReview:dayOffset(0)},'Chemistry-0':{subject:'Chemistry',index:0,nextReview:dayOffset(-2)}},quizResults:{'Biology-2':{subject:'Biology',index:2,nextReviewAt:dayOffset(-1)},'Biology-3':{subject:'Biology',index:3,nextReviewAt:dayOffset(3)}},reviewCompletions:{[new Date().getFullYear()+'-'+String(new Date().getMonth()+1).padStart(2,'0')+'-'+String(new Date().getDate()).padStart(2,'0')]:['lesson:Biology:1']}});
 assert.match(html,/2 items to revisit/);
});
test('Biology deep links open on boot while legacy review links still target quiz practice',()=>{
 const boot=source.slice(source.indexOf('function boot()'),source.indexOf('let tutorRequestPending'));
 function run(search,hash){
  const opened=[],scrolled=[];
  const context=vm.createContext({location:{pathname:'/subjects/biology/',search,hash},URLSearchParams,document:{body:{dataset:{}},getElementById:id=>id==='app'?{}:{scrollIntoView:()=>scrolled.push(id)}},renderSubject:()=>{},openLesson:i=>opened.push(i),requestAnimationFrame:fn=>fn(),console});
  vm.runInContext(boot+';boot();',context);
  return {opened,scrolled};
 }
 assert.deepEqual(run('','#lesson-2').opened,[2]);
 assert.deepEqual(run('?review=quiz','#lesson-1'),{opened:[1],scrolled:['mcq-1']});
 assert.deepEqual(run('','#unknown').opened,[]);
});
