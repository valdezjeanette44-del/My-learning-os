import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function render(data,name='Chemistry'){const before=JSON.stringify(data),c=vm.createContext({data,esc:String,saveState:()=>assert.fail('Overview cannot save')});vm.runInContext(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY=')),c);vm.runInContext(source.slice(source.indexOf('function subjectJourneyHTML('),source.indexOf('function lessonHelp('))+source.slice(source.indexOf('function localReviewDayKey('),source.indexOf('function getQuizReviewItems(')),c);c.name=name;const html=vm.runInContext('subjectJourneyHTML(name,data)',c);assert.equal(JSON.stringify(data),before);return html;}
test('Chemistry overview handles empty, partial, complete and unexpected progress honestly',()=>{
 for(const [records,count,next]of [[[],0,0],[[0,2],2,1],[[0,1,2,3],4,null],[[0,0,2,99,-1,null,'1'],2,1]]){const html=render({completed:{Chemistry:records},future:{keep:true}});assert.match(html,new RegExp(count+' of 4 core lessons completed'));assert.match(html,/not a mastery score/);if(next===null){assert.match(html,/Core lessons completed/);assert.doesNotMatch(html,/lesson-4/);}else assert.ok(html.includes('onclick="openChemistryJourneyLesson('+next+')"'));for(let i=0;i<4;i++)assert.ok(html.includes('href="#lesson-'+i+'"'));}
});
test('Chemistry connections use existing routes and retain original note access without invented projects',()=>{
 const html=render({completed:{},notes:{Chemistry:'Keep'},noteLibrary:[{category:'Chemistry'},{category:'Subject · Chemistry'},{category:'Biology'},{category:'Chemistry',archivedAt:'old'}]});for(const t of ['/review.html','/tutor.html','Select Chemistry in the Tutor.','/knowledge.html','/notes.html','href="#note"','2 Chemistry notes','Explore chemical reactions'])assert.ok(html.includes(t),t);assert.doesNotMatch(html,/project=|Plant Evolution|Your Biology/);
});
test('Biology museum dashboard retains project and notes routes while removing only its Tutor promotion',()=>{
 const html=render({completed:{},noteLibrary:[]},'Biology');for(const t of ['Discover how life begins, functions, changes and evolves.','project=plant-evolution','My Notes','/knowledge.html','href="#note"'])assert.ok(html.includes(t),t);assert.doesNotMatch(html,/Explore chemical reactions|\/tutor.html/);
 const nav=source.slice(source.indexOf('function nav('),source.indexOf('function renderSubject('));assert.match(nav,/href="\/tutor.html"/,'Shared Tutor navigation remains intact');
});
test('Chemistry opt-in leaves legacy subject overview and assessment presentation paths available',()=>{
 assert.match(source,/if\(name==='Biology'\|\|name==='Chemistry'\)\{/);assert.match(source,/if\(name==='Chemistry'\)document.querySelector\('\.course-count'\)/);assert.match(source,/if\(name==='Biology'\)\{\n  const quizHeading/);
});

test('Chemistry overview action moves keyboard focus to the existing lesson without saves',()=>{
 const calls=[],c=vm.createContext({requestAnimationFrame:f=>f(),resolveSubjectLesson:(n,i)=>i===0?{legacyIndex:0}:null,openLesson:i=>calls.push(i),document:{getElementById:id=>({querySelector:()=>({focus:o=>calls.push(o.preventScroll)})})},saveState:()=>assert.fail()});const a=source.indexOf('function openChemistryJourneyLesson('),b=source.indexOf('\nfunction ',a+10);vm.runInContext(source.slice(a,b),c);vm.runInContext('openChemistryJourneyLesson(0);openChemistryJourneyLesson(99)',c);assert.deepEqual(calls,[0,true]);
});
