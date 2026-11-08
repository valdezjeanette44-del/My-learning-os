import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const start=source.indexOf('function '+name+'(');assert.ok(start>=0);const ends=['\nfunction ','\nconst ','\nlet ','\nboot();'].map(m=>source.indexOf(m,start+10)).filter(i=>i>=0);return source.slice(start,Math.min(...ends,source.length));}
const fixture=()=>({completed:{Biology:[]},notes:{Biology:'Saved note'},scores:{},answers:{Biology:{0:'Saved answer'}},quizResults:{'Biology-0':{correct:2,total:3,best:3,attempts:8}},review:{'Biology-0':{subject:'old',index:99,learnedAt:'old',nextReview:'old',interval:30,stage:4,extra:{keep:true}},'Biology-2':{extra:'other'}},future:{keep:true},noteLibrary:[]});
function setup(data=fixture()){
 const storage=new Map([['myLearningOS.v2',JSON.stringify(data)]]),writes=[],downloads=[];
 let payload;class Reader{readAsText(){this.result=JSON.stringify(payload);this.onload();}}
 const c=vm.createContext({Date,Math,console,URLSearchParams,setTimeout(){},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>{writes.push(k);storage.set(k,v);}},document:{getElementById:()=>null,createElement:()=>({click(){},remove(){}}),body:{appendChild(){}}},Blob:class{constructor(parts){downloads.push(parts.join(''));}},URL:{createObjectURL:()=>'',revokeObjectURL(){}},FileReader:Reader,confirm:()=>true,location:{reload(){}},renderSubject(){},openLesson(){}});
 const run=s=>vm.runInContext(s,c);run(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('function esc(')));
 for(const name of ['addDays','dateKey','localReviewDayKey','completeLesson','recordReview','finishReview','exportLearningBackup','importLearningBackup'])run(fn(name));
 return {c,run,storage,writes,downloads,saved:()=>JSON.parse(storage.get('myLearningOS.v2')),restore:backup=>{payload=backup;c.input={files:[{}],value:''};run('importLearningBackup(input)');}};
}
test('completion preserves Review extensions while replacing all recognized scheduling fields',()=>{
 const h=setup(),before=fixture(),start=Date.now();h.run("completeLesson('Biology',0)");const s=h.saved(),r=s.review['Biology-0'];
 assert.deepEqual(r.extra,{keep:true});assert.equal(r.subject,'Biology');assert.equal(r.index,0);assert.equal(r.interval,1);assert.equal(r.stage,0);assert.ok(Date.parse(r.learnedAt)>=start);
 const next=new Date(r.learnedAt);next.setDate(next.getDate()+1);assert.equal(r.nextReview,next.toISOString());
 assert.deepEqual(s.review['Biology-2'],before.review['Biology-2']);assert.deepEqual(s.future,before.future);assert.deepEqual(s.quizResults,before.quizResults);assert.deepEqual(s.answers,before.answers);assert.deepEqual(s.notes,before.notes);assert.equal(h.writes.length,1);
});
test('absent and malformed target Review entries are safely replaced without spreading invalid metadata',()=>{
 for(const value of [undefined,null,[],['wrong'],'wrong',42]){const data=fixture();data.review['Biology-0']=value;const h=setup(data);h.run("completeLesson('Biology',0)");assert.deepEqual(Object.keys(h.saved().review['Biology-0']).sort(),['subject','index','learnedAt','nextReview','interval','stage'].sort());}
});
test('ordinary Review preserves extensions and its existing interval progression',()=>{
 const data=fixture();data.review['Biology-0'].stage=1;const h=setup(data);h.run("recordReview('Biology',0,true)");assert.equal(h.saved().review['Biology-0'].interval,7);assert.equal(h.saved().review['Biology-0'].stage,2);assert.deepEqual(h.saved().review['Biology-0'].extra,{keep:true});h.run("recordReview('Biology',0,false)");assert.equal(h.saved().review['Biology-0'].interval,1);assert.equal(h.saved().review['Biology-0'].stage,0);
});
test('Review extensions survive export, restore and subsequent completion',()=>{
 const h=setup();h.run('exportLearningBackup()');assert.equal(h.writes.length,0);const backup=JSON.parse(h.downloads[0]),r=setup();r.restore(backup);r.run("completeLesson('Biology',0)");assert.deepEqual(r.saved().review['Biology-0'].extra,{keep:true});assert.deepEqual(r.saved().future,fixture().future);assert.equal(r.saved().review['Biology-0'].stage,0);
});

function draftDOM(h){
 const controls=[{id:'answer-0',tagName:'TEXTAREA',value:'UNSAVED answer',selectionStart:3,selectionEnd:8,selectionDirection:'forward',scrollTop:12},{id:'note',tagName:'TEXTAREA',value:'UNSAVED note',selectionStart:2,selectionEnd:2,selectionDirection:'none',scrollTop:9},{id:'mcq-0',tagName:'SECTION',choice:2,feedback:'Previous feedback',variant:1},{id:'quiz',tagName:'DIV',value:'UNSAVED reflection'},{id:'hint-0',tagName:'P',hidden:false},{id:'feedback-0',tagName:'DIV',textContent:'Example answer'}];
 controls.push({id:'bonds-prediction',tagName:'SECTION',choice:'intact'},{id:'bonds-interpretation',tagName:'SECTION',choice:'sharing',feedback:'bond feedback'});
 controls.push({id:'atoms-prediction',tagName:'SECTION',choice:'no'},{id:'atoms-comparison',tagName:'SECTION',choice:'ion',feedback:'comparison feedback'});
 controls.push({id:'puddle-practice',tagName:'SECTION',choice:'air',feedback:'prediction feedback'});
 for(const e of controls){e.connected=true;e.setSelectionRange=(a,b,d)=>{e.selectionStart=a;e.selectionEnd=b;e.selectionDirection=d;};e.focus=()=>{doc.activeElement=e;};e.closest=()=>null;e.getAttribute=()=>null;}
 const disclosure={open:true};let map=new Map(controls.map(e=>[e.id,e]));const node={textContent:'',remove(){},previousElementSibling:{previousElementSibling:{textContent:''}}};
 const app={set innerHTML(value){for(const e of controls)e.connected=false;map=new Map(controls.map(e=>[e.id,{replaceWith(old){map.set(old.id,old);old.connected=true;}}]));disclosure.open=false;},get innerHTML(){return '';}};
 const doc={title:'',activeElement:controls[0],contains:e=>!!e?.connected,getElementById:id=>id==='app'?app:map.get(id)||node,querySelector:()=>node,querySelectorAll:q=>q==='details'?[disclosure]:controls};
 Object.assign(h.c,{document:doc,ensureQuizStyles(){},nav:()=>'',newQuestion(){},renderQuiz(){},getNextLesson:()=>null,lessonHTML:()=>''});
 for(const n of ['esc','subjectProgress','subjectJourneyHTML','renderSubject'])h.run(fn(n));return {controls,disclosure,doc};
}
test('completion and Review rebuilds retain input DOM, quiz variant, feedback, focus and caret without saving drafts',()=>{
 for(const action of ["completeLesson('Biology',0)","finishReview('Biology',0,true)","completeLesson('Chemistry',0)","completeLesson('Chemistry',1)","completeLesson('Chemistry',2)"]){const h=setup(),dom=draftDOM(h);h.run(action);for(const el of dom.controls)assert.equal(dom.doc.getElementById(el.id),el);assert.equal(dom.controls[0].value,'UNSAVED answer');assert.equal(dom.controls[1].value,'UNSAVED note');assert.equal(dom.controls[2].choice,2);assert.equal(dom.controls[2].variant,1);assert.equal(dom.disclosure.open,true);assert.equal(dom.doc.activeElement,dom.controls[0]);assert.equal(dom.controls[0].selectionStart,3);assert.equal(dom.controls[0].selectionEnd,8);assert.deepEqual(h.saved().answers,fixture().answers);assert.deepEqual(h.saved().notes,fixture().notes);assert.deepEqual(h.saved().quizResults,fixture().quizResults);assert.equal(h.writes.length,1);}
});
test('failed completion save leaves draft DOM and stored learning records untouched',()=>{
 const h=setup(),dom=draftDOM(h),before=h.storage.get('myLearningOS.v2');h.c.localStorage.setItem=()=>{throw Error('QuotaExceededError');};h.c.showLearningDataWarning=()=>{};assert.throws(()=>h.run("completeLesson('Biology',0)"),/Quota/);assert.equal(dom.controls[0].connected,true);assert.equal(dom.controls[0].value,'UNSAVED answer');assert.equal(h.storage.get('myLearningOS.v2'),before);
});
test('a Review action removed by rescheduling returns keyboard focus to the lesson summary',()=>{
 const h=setup(),dom=draftDOM(h),summary={focus(){dom.doc.activeElement=this;}},lesson={querySelectorAll:()=>[],querySelector:()=>summary};
 dom.doc.activeElement={id:'',connected:false,closest:()=>({id:'lesson-0'}),getAttribute:()=>"finishReview('Biology',0,true)"};
 const get=dom.doc.getElementById;dom.doc.getElementById=id=>id==='lesson-0'?lesson:get(id);
 h.run("finishReview('Biology',0,true)");assert.equal(dom.doc.activeElement,summary);
});
test('Biology score badges meet normal-text contrast without changing shared subject badge styling',async()=>{
 const css=await readFile('styles.css','utf8');assert.match(css,/\.cells-enhanced \.mcq-score\{color:#563976;background:#f5e8da\}/);
 const luminance=hex=>{const a=hex.match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return a[0]*.2126+a[1]*.7152+a[2]*.0722;};const ratio=(luminance('f5e8da')+.05)/(luminance('563976')+.05);assert.ok(ratio>=4.5,ratio.toString());
});
test('Biology editable-area boundaries contrast with interior and surrounding surfaces without changing sizing',async()=>{
 const css=await readFile('styles.css','utf8');
 assert.match(css,/body\[data-subject="Biology"\] #lessons textarea\.answer,body\[data-subject="Biology"\] #note\{border-color:#77608e\}/);
 const L=h=>{const v=h.match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2];};
 for(const adjacent of ['ffffff','f5f3ff','fffdf9'])assert.ok((L(adjacent)+.05)/(L('77608e')+.05)>=3,adjacent);
});
test('Biology retry respects both motion preferences with target focus and without writes or historical result changes',()=>{
 for(const [name,reduced,expected] of [['Biology',true,'auto'],['Biology',false,'smooth'],['Physics',true,'smooth']]){
  const data={quizResults:{[name+'-1']:{missed:[1],attempts:8,best:3,extra:'keep'}}},before=JSON.stringify(data),scroll=[],fields={};
  for(let q=0;q<3;q++)fields['mcq-question-1-'+q]={innerHTML:'Original '+q,setAttribute(){},focus(){document.activeElement=this;},scrollIntoView:options=>scroll.push(options)};
  const active={id:'retry-button'},document={activeElement:active,getElementById:id=>fields[id]||null};
  const context=vm.createContext({state:()=>data,window:{matchMedia:()=>({matches:reduced})},document,esc:String,lessonQuizQuestions:()=>[0,1,2].map(q=>({q:'Alternate '+q,options:[{text:'Choice',correct:true}]})),saveState:()=>assert.fail('Retry must not save'),resetLessonQuiz:()=>assert.fail('Missed question exists')});
  vm.runInContext(fn('scrollBiologyQuizQuestion')+fn('retryMissedLessonQuiz'),context);context.name=name;vm.runInContext('retryMissedLessonQuiz(name,1)',context);
  assert.equal(scroll.length,1);assert.equal(scroll[0].behavior,expected);assert.equal(scroll[0].block,name==='Biology'?'start':'center');assert.equal(document.activeElement,name==='Biology'?fields['mcq-question-1-1']:active);assert.equal(JSON.stringify(data),before);assert.equal(fields['mcq-question-1-0'].innerHTML,'Original 0');assert.equal(fields['mcq-question-1-2'].innerHTML,'Original 2');assert.match(fields['mcq-question-1-1'].innerHTML,/Alternate 1/);assert.equal(context.window.quizRetryVariant[name+'-1'],1);
 }
});
