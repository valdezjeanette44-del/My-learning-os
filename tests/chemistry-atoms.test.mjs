import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(n){const a=source.indexOf('function '+n+'(');assert.ok(a>=0);return source.slice(a,source.indexOf('\nfunction ',a+10));}
function render(name='Chemistry',i=1){const c=vm.createContext({});vm.runInContext(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY=')),c);const data={answers:{Chemistry:{1:'historical answer'}},review:{},future:{keep:true}};c.state=()=>data;c.esc=String;c.teacherContent=()=>({simple:'original',example:'original'});c.whyItWorks=()=>'';c.lessonQuizHTML=(n,i)=>'<section id="mcq-'+i+'">Historical quiz</section>';for(const n of ['chemistryReactionsIntroduction','chemistryReactionsSummary','chemistryBondsIntroduction','chemistryBondsSummary','chemistryAtomsIntroduction','chemistryAtomsSummary','chemistryMatterIntroduction','chemistryMatterSummary','cellsLessonIntroduction','cellsLessonSummary','dnaLessonIntroduction','dnaLessonSummary','selectionLessonIntroduction','selectionLessonSummary','lifeLessonIntroduction','lifeLessonSummary','lessonHTML'])vm.runInContext(fn(n),c);c.name=name;c.i=i;const before=JSON.stringify(data),html=vm.runInContext('lessonHTML(name,SUBJECTS[name].lessons[i],i,false)',c);assert.equal(JSON.stringify(data),before);return html;}
test('Atoms enhancement retains original identity, written assessment and controls without writes',()=>{
 const html=render();for(const value of ['id="lesson-1"','id="answer-1"','historical answer','What makes carbon different from oxygen?',"checkAnswer('Chemistry',1)","completeLesson('Chemistry',1)",'id="mcq-1"','aria-labelledby="atoms-question"','role="status"','#lesson-2'])assert.ok(html.includes(value),value);assert.equal((html.match(/id="answer-1"/g)||[]).length,1);assert.match(source,/chemistry-atoms-elements/);
});
test('Atoms teaching is absent from all other lesson presentations',()=>{
 for(const [name,i]of [['Chemistry',0],['Chemistry',2],['Chemistry',3],['Biology',0],['Biology',1],['Biology',2],['Biology',3],['Physics',1]])assert.doesNotMatch(render(name,i),/atoms-opening|atom-structure.svg|atoms-comparison/);
});
test('Atoms core teaches every historical prerequisite and qualified ions before assessments',()=>{
 const core=render().replace(/<details[\s\S]*?<\/details>/g,'');for(const value of ['six protons','eight','atomic number','periodic table','8 protons and 8 neutrons','8 protons and 10 neutrons','Mass number','11 protons and 10 electrons','no neutron','not on fixed planetary tracks','not to scale'])assert.ok(core.includes(value),value);
 const html=render(),details=[...html.matchAll(/<details([^>]*)>([\s\S]*?)<\/details>/g)];assert.equal(details.filter(d=>d[2].includes('Explore deeper:')).length,2);for(const d of details)assert.doesNotMatch(d[1],/open|on\w+=/);assert.ok(html.indexOf('Predict before exploring')<html.indexOf('Inside an atom'));
});
test('bounded comparison handles all cases and stale feedback without saving',()=>{
 let example='element',value=null;const feedback={textContent:'old'},c=vm.createContext({document:{getElementById:id=>id==='atoms-case'?{value:example}:feedback,querySelector:()=>value?{value}:null},saveState:()=>assert.fail('No practice saves')});for(const n of ['clearAtomsFeedback','checkAtomsComparison'])vm.runInContext(fn(n),c);
 for(example of ['element','isotope','ion'])for(value of [null,'element','isotope','ion']){vm.runInContext("clearAtomsFeedback('comparison')",c);assert.equal(feedback.textContent,'');vm.runInContext('checkAtomsComparison()',c);assert.ok(feedback.textContent);if(value)assert.equal(feedback.textContent.startsWith('That fits.'),value===example);}
 const html=render();assert.match(html,/onchange="clearAtomsFeedback\('comparison'\)"/);assert.match(fn('renderSubject'),/#atoms-prediction, #atoms-comparison/);
});
test('Atoms section and revisit focus respects both motion preferences without writes or hash changes',()=>{
 for(const reduced of [true,false]){let id,calls=[];const c=vm.createContext({document:{getElementById:x=>{id=x;return {focus:o=>calls.push(o.preventScroll),scrollIntoView:o=>calls.push(o.behavior)};}},window:{matchMedia:()=>({matches:reduced})},saveState:()=>assert.fail(),location:{hash:'#lesson-1'}});vm.runInContext(fn('scrollAtomsSection'),c);for(const [section,target]of [['prediction','atoms-prediction-choice'],['apply','atoms-apply'],['explain','atoms-explain']]){vm.runInContext('scrollAtomsSection("'+section+'")',c);assert.equal(id,target);assert.deepEqual(calls.splice(0),[true,reduced?'auto':'smooth']);}vm.runInContext('scrollAtomsSection("unknown")',c);assert.equal(calls.length,0);assert.equal(c.location.hash,'#lesson-1');}
});
test('Atoms scientific assets have accessible descriptions and readable HTML equivalents',async()=>{
 for(const file of ['atom-structure','element-isotope-ion']){const svg=await readFile('assets/chemistry/'+file+'.svg','utf8');assert.match(svg,/<title id="title">/);assert.match(svg,/<desc id="desc">/);assert.match(svg,/aria-labelledby="title desc"/);assert.match(svg,/font-size="24"/);}const html=render();for(const value of ['Proton: positive','Neutron: neutral','Electron: negative','Oxygen-18','charged particle','not a solid shell'])assert.ok(html.includes(value));
});

test('comparison illustration preserves exact particle counts and identifies the changed quantity',async()=>{
 const svg=await readFile('assets/chemistry/element-isotope-ion.svg','utf8');assert.deepEqual([...svg.matchAll(/<text x="39">× (\d+)<\/text>/g)].map(m=>Number(m[1])),[6,8,8,8,8,10,11,11,11,10]);for(const label of ['Different element','Different isotope','Different charge','Carbon','Oxygen','Oxygen-16','Oxygen-18','Na⁺'])assert.ok(svg.includes('>'+label+'<'),label);assert.match(svg,/count key, not an individual atom picture/);assert.match(render(),/p⁺ = proton, n⁰ = neutron, e⁻ = electron/);assert.match(render(),/count comparisons, not reactions/);
});
