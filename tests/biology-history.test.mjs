import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
const code=source.slice(source.indexOf('function syncBiologyLessonHash('),source.indexOf('function showModelAnswer('));
function setup(){
 const listeners=[],opened=[],scrolled=[];let active=0;
 const location={pathname:'/subjects/biology/',search:'',hash:'#lesson-0'};
 const context=vm.createContext({location,URLSearchParams,window:{addEventListener:(name,fn)=>listeners.push({name,fn})},resolveSubjectLesson:(name,i)=>i>=0&&i<4?{legacyIndex:i}:null,document:{getElementById:id=>({classList:{contains:()=>id==='lesson-'+active},scrollIntoView:()=>scrolled.push(id)})},openLesson:i=>{active=i;opened.push(i);},renderSubject:()=>assert.fail('History must not re-render'),saveState:()=>assert.fail('History must not save')});
 vm.runInContext(code+"\nwindow.addEventListener('hashchange',syncBiologyLessonHash);",context);
 return {location,listeners,opened,scrolled,fire(hash){location.hash=hash;listeners[0].fn();},active:()=>active};
}
test('same-page Back/Forward follows legacy identities repeatedly without rendering or writes',()=>{
 const h=setup();for(const i of [1,2,3,2,1,2,3]){h.fire('#lesson-'+i);assert.equal(h.active(),i);}
 assert.equal(h.listeners.length,1);assert.equal(h.listeners[0].name,'hashchange');
 h.fire('#lesson-3');assert.equal(h.opened.length,7,'Repeated current target does not reopen the lesson');
});
test('quiz review hash navigation opens the correct lesson and scrolls its quiz',()=>{
 const h=setup();h.location.search='?review=quiz';h.fire('#lesson-2');assert.deepEqual(h.opened,[2]);assert.deepEqual(h.scrolled,['mcq-2']);
 h.location.search='?review=lesson';h.fire('#lesson-1');assert.deepEqual(h.opened,[2,1]);assert.equal(h.scrolled.length,1);
});
test('other subjects and unknown hashes do not change the visible Biology lesson',()=>{
 const h=setup();for(const hash of ['','#note','#lesson-99','#lesson--1'])h.fire(hash);
 h.location.pathname='/subjects/chemistry/';h.fire('#lesson-2');assert.deepEqual(h.opened,[]);
 h.location.pathname='/subjects/biology/index.html';h.fire('#lesson-2');assert.deepEqual(h.opened,[2]);
});
test('history listener registration is outside rendering; refresh retains the boot deep-link path',()=>{
 assert.equal((source.match(/addEventListener\('hashchange',syncBiologyLessonHash\)/g)||[]).length,1);
 const render=source.slice(source.indexOf('function renderSubject('),source.indexOf('function subjectJourneyHTML('));assert.doesNotMatch(render,/addEventListener/);
 // Executed boot/refresh and legacy quiz URL coverage lives in subject-journey.test.mjs.
 assert.match(source,/\['Biology','Chemistry'\]\.includes\(document\.body\.dataset\.subject\)\|\|\['quiz','lesson'\]/);
});
