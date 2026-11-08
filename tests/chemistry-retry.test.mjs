import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(n){let a=source.indexOf('function '+n+'(');assert.ok(a>=0);let z=['\nfunction ','\nconst ','\nlet ','\nboot();'].map(m=>source.indexOf(m,a+10)).filter(x=>x>=0);return source.slice(a,Math.min(...z,source.length));}
function harness(i,missed,reduced){
 const data={quizResults:{['Chemistry-'+i]:{missed,attempts:8,best:2,extra:'keep'}},future:{keep:true}},before=JSON.stringify(data),scrolls=[],fields={},submit={hidden:true},retry={hidden:false},result={textContent:''};
 const doc={activeElement:null,getElementById:id=>id==='mcq-submit-'+i?submit:id==='mcq-retry-missed-'+i?retry:id==='mcq-result-'+i?result:fields[id]||null,querySelectorAll:q=>q.includes('input')?Object.values(fields).map(f=>f.input):[]};
 for(let q=0;q<3;q++){const f={input:{checked:true},html:'original '+q,setAttribute(k,v){this[k]=v;},focus(o){assert.equal(o.preventScroll,true);doc.activeElement=this;},scrollIntoView:o=>scrolls.push({q,...o})};Object.defineProperty(f,'innerHTML',{get(){return this.html;},set(v){this.html=v;this.input.checked=false;}});fields['mcq-question-'+i+'-'+q]=f;}
 const c=vm.createContext({state:()=>data,esc:String,window:{matchMedia:()=>({matches:reduced})},document:doc,lessonQuizQuestions:()=>[0,1,2].map(q=>({q:'Question '+q,options:[{text:'Right',correct:true},{text:'Wrong',correct:false}]})),saveState:()=>assert.fail('Retry/restart must not write')});
 for(const n of ['lessonQuizHTML','retryMissedLessonQuiz','resetLessonQuiz','scrollBiologyQuizQuestion','restartBiologyQuiz'])vm.runInContext(fn(n),c);
 return {c,data,before,fields,doc,scrolls,submit,retry,result,run:code=>vm.runInContext(code,c)};
}
test('actual Chemistry retry/restart button bindings preserve correct choices and history in every lesson',()=>{
 for(let i=0;i<3;i++)for(const missed of [[0],[1],[2],[0,2]])for(const reduced of [false,true]){
  const h=harness(i,missed,reduced),html=h.run(`lessonQuizHTML('Chemistry',${i})`);
  assert.equal((html.match(/>Restart entire quiz</g)||[]).length,1);assert.doesNotMatch(html,/>Try again</);assert.match(html,/>Retry missed questions</);assert.doesNotMatch(html,/>Retry missed<|>Restart</);assert.match(html,/class="button" type="button" onclick="retryMissedLessonQuiz/);
  const retry=html.match(/onclick="([^"]+)" id="mcq-retry-missed-/)[1];h.run(retry);
  for(let q=0;q<3;q++)assert.equal(h.fields['mcq-question-'+i+'-'+q].input.checked,!missed.includes(q));
  assert.equal(h.doc.activeElement,h.fields['mcq-question-'+i+'-'+missed[0]]);assert.equal(h.scrolls.at(-1).q,missed[0]);assert.equal(h.scrolls.at(-1).behavior,reduced?'auto':'smooth');assert.equal(h.submit.hidden,false);assert.equal(h.retry.hidden,true);
  h.run(retry);assert.equal(JSON.stringify(h.data),h.before);
  const restart=html.match(/onclick="([^"]+)">Restart entire quiz</)[1];h.run(restart);
  assert.ok(Object.values(h.fields).every(f=>!f.input.checked));assert.equal(h.doc.activeElement,h.fields['mcq-question-'+i+'-0']);assert.equal(h.scrolls.at(-1).q,0);assert.equal(JSON.stringify(h.data),h.before);
 }
});
test('Chemistry grading exposes only the appropriate practice actions after incorrect and perfect results',()=>{
 for(const perfect of [false,true])for(let i=0;i<3;i++){
  const h=harness(i,[],false),feedback={hidden:true},choices=[0,1,2].map(q=>({value:'0',dataset:{correct:String(perfect||q!==1),answer:'Choice'}}));
  const originalGet=h.doc.getElementById;h.doc.getElementById=id=>id.startsWith('mcq-feedback-')?feedback:originalGet(id);
  h.doc.querySelector=selector=>selector.includes(':checked')?choices[Number(selector.match(/mcq-\d+-(\d+)/)[1])]:null;
  h.doc.querySelectorAll=selector=>selector.includes('input[name=')?[choices[Number(selector.match(/mcq-\d+-(\d+)/)[1])]]:[];
  h.c.lessonQuizFeedbackText=()=> 'Feedback';h.c.saveState=()=>{};h.run(fn('submitLessonQuiz'));h.run(`submitLessonQuiz({preventDefault(){}},'Chemistry',${i})`);
  assert.equal(h.submit.hidden,true);assert.equal(h.retry.hidden,perfect);assert.equal(h.data.quizResults['Chemistry-'+i].attempts,9);assert.equal(h.data.quizResults['Chemistry-'+i].extra,'keep');
 }
});

test('Chemistry missing answers do not grade, write history or change actions',()=>{
 const h=harness(0,[],false);h.doc.querySelector=()=>null;h.c.saveState=()=>assert.fail('Missing answers cannot save');h.run(fn('submitLessonQuiz'));h.run("submitLessonQuiz({preventDefault(){}},'Chemistry',0)");assert.equal(JSON.stringify(h.data),h.before);assert.match(h.result.textContent,/Please answer questions 1, 2, 3/);
});
test('only enhanced Chemistry slots opt in; remaining subjects retain legacy actions',()=>{
 const h=harness(0,[],false);for(const [name,i]of [['Chemistry',3],['Physics',0]]){const html=h.run('lessonQuizHTML('+JSON.stringify(name)+','+i+')');assert.match(html,/>Try again</);assert.doesNotMatch(html,/mcq-submit-|>Restart</);}
});
