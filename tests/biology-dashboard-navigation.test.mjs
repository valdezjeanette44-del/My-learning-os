import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'('),end=source.indexOf('\nfunction ',start+10);return source.slice(start,end);}
function setup(){
 const scrolled=[],focused=[],heading={setAttribute(){},focus(){focused.push('overview');}};
 const panels=Array.from({length:4},(_,i)=>{
  const classes=new Set(),button={expanded:'false',setAttribute(k,v){this.expanded=v;},focus(){focused.push('lesson-'+i);}},chevron={textContent:'+'};
  return {id:'lesson-'+i,answer:{value:'unfinished '+i},quiz:{selections:[1,null,2],retry:true,feedback:'Keep feedback'},classList:{add:v=>classes.add(v),remove:v=>classes.delete(v),contains:v=>classes.has(v)},querySelector:s=>s==='.lesson-summary'?button:chevron,scrollIntoView(){scrolled.push(this.id);}};
 });
 const overview={querySelector:()=>heading,scrollIntoView(){scrolled.push('overview');}},location={pathname:'/subjects/biology/',search:'',hash:''};
 const context=vm.createContext({location,URLSearchParams,window:{matchMedia:()=>({matches:true})},document:{body:{dataset:{subject:'Biology'}},querySelectorAll:s=>s==='.lesson'?panels:panels.filter(p=>p.classList.contains('active')),getElementById:id=>id==='subject-overview'?overview:panels.find(p=>p.id===id)||{scrollIntoView(){scrolled.push(id);}}},resolveSubjectLesson:(name,i)=>i>=0&&i<4?{legacyIndex:i}:null,renderSubject(){assert.fail('navigation cannot rebuild panels');},saveState(){assert.fail('navigation cannot save');}});
 vm.runInContext(fn('openLesson')+fn('revealBiologyDashboardTool')+fn('syncBiologyLessonHash'),context);
 return {panels,scrolled,focused,location,focusDashboard(){context.document.activeElement={closest:()=>overview};},open:i=>vm.runInContext('openLesson('+i+')',context),navigate(hash){location.hash=hash;vm.runInContext('syncBiologyLessonHash()',context);}};
}
test('Biology-only presentation keeps lesson DOM and hides duplicate heading and inactive rows',async()=>{
 assert.match(source,/course-panel\$\{name==='Biology'\?' biology-lesson-panels':''\}/);
 const css=await readFile('styles.css','utf8');
 for(const selector of ['body[data-subject="Biology"] .biology-lesson-panels>.course-heading','body[data-subject="Biology"] .biology-lesson-panels #lessons>.lesson:not(.active)','body[data-subject="Biology"] .biology-lesson-panels:not(:has(#lessons>.lesson.active))'])assert.ok(css.includes(selector));
 assert.match(source,/id="lessons">\$\{subjectLessonEntries\(name\)/);
});
test('card opening, overview return and Back/Forward preserve the same panels and drafts',()=>{
 const h=setup(),original=h.panels.slice(),before=JSON.stringify(h.panels.map(p=>[p.answer,p.quiz]));
 h.open(1);assert.equal(h.panels[1].classList.contains('active'),true);
 h.navigate('#subject-overview');assert.ok(h.panels.every(p=>!p.classList.contains('active')));assert.deepEqual(h.focused,['overview']);
 for(const i of [1,2,3,2,1]){h.navigate('#lesson-'+i);assert.equal(h.panels[i].classList.contains('active'),true);assert.equal(h.panels.filter(p=>p.classList.contains('active')).length,1);}
 h.navigate('');assert.ok(h.panels.every(p=>!p.classList.contains('active')));
 h.open(0);h.navigate('#lessons');assert.ok(h.panels.every(p=>!p.classList.contains('active')));
 h.panels.forEach((p,i)=>assert.equal(p,original[i]));assert.equal(JSON.stringify(h.panels.map(p=>[p.answer,p.quiz])),before);
});
test('all four legacy lesson and Review hashes open their original panels without saving',()=>{
 const h=setup();for(const i of [0,1,2,3]){h.location.search='?review=quiz';h.navigate('#lesson-'+i);assert.equal(h.panels[i].classList.contains('active'),true);assert.equal(h.scrolled.at(-1),'mcq-'+i);}
 h.location.search='?review=lesson';h.navigate('#lesson-0');assert.equal(h.panels[0].classList.contains('active'),true);
});
test('unknown and non-Biology navigation cannot hide active panels',()=>{
 const h=setup();h.open(2);for(const hash of ['#note','#lesson-99','#unknown'])h.navigate(hash);assert.equal(h.panels[2].classList.contains('active'),true);
 h.location.pathname='/subjects/chemistry/';h.navigate('#subject-overview');assert.equal(h.panels[2].classList.contains('active'),true);
});
test('keyboard navigation from a dashboard card focuses the opened lesson summary',()=>{
 const h=setup();h.focusDashboard();h.open(1);h.navigate('#lesson-1');assert.deepEqual(h.focused,['lesson-1']);
});
