import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import vm from 'node:vm';

const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
// Pin the same reviewed source regions without requiring history in CI's shallow checkout.
const baseline=JSON.parse(await readFile('tests/fixtures/biology-museum-baseline.json','utf8'));
assert.equal(baseline.baselineCommit,'05673d3765d9330a25139ddc15b05bd6e41c9baf');
function assertBaseline(key,text){assert.equal(createHash('sha256').update(text).digest('hex'),baseline.sha256[key],key);}
const css=(await readFile('styles.css','utf8')).replace(/\r\n/g,'\n');
function fn(s,name){const a=s.indexOf('function '+name+'(');assert.ok(a>=0,name);const ends=['\nfunction ','\nconst ','\nlet ','\nboot();'].map(m=>s.indexOf(m,a+10)).filter(i=>i>=0);return s.slice(a,Math.min(...ends,s.length));}
function overview(data){const raw=JSON.stringify(data),c=vm.createContext({data,esc:String,saveState:()=>assert.fail('Dashboard cannot save')});vm.runInContext(source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY='))+fn(source,'subjectJourneyHTML')+fn(source,'localReviewDayKey'),c);const html=vm.runInContext("subjectJourneyHTML('Biology',data)",c);assert.equal(JSON.stringify(data),raw);return html;}

test('museum dashboard uses actual legacy progress for empty, partial, complete and unexpected records',()=>{
 for(const [progress,count,next] of [[[],0,0],[[0,2],2,1],[[0,1,2,3],4,null],[[0,0,2,99,-1,'1',null],2,1]]){
  const html=overview({completed:{Biology:progress},notes:{Biology:'Original'},future:{keep:true}});
  assert.match(html,new RegExp(count+' of 4 core lessons completed'));
  for(let i=0;i<4;i++)assert.match(html,new RegExp(`href="#lesson-${i}" onclick="openLesson\\(${i}\\)"`));
  if(next===null){assert.match(html,/Core lessons completed/);assert.doesNotMatch(html,/lesson-4/);}else assert.match(html,new RegExp(`biology-next[\\s\\S]*href="#lesson-${next}"`));
  assert.match(html,/not proven mastery/);
 }
});

test('museum hierarchy removes dashboard-only quizzes and Tutor while retaining all lesson assessment rendering',()=>{
 const html=overview({completed:{}});
 const titles=['Biology</h1>','Continue learning and review','Your learning journey','Explore further'];
 for(let i=1;i<titles.length;i++)assert.ok(html.indexOf(titles[i])>html.indexOf(titles[i-1]));
 assert.equal((html.match(/class="biology-lesson-card/g)||[]).length,4);
 assert.equal((html.match(/class="biology-support-card/g)||[]).length,3);
 assert.doesNotMatch(html,/biology-assessment|tutor.html|journey-eyebrow|dashboard-.*\.svg/);
 for(const route of ['/review.html','/projects.html?project=plant-evolution','/notes.html','/knowledge.html','#note','#subject-reflection-title','#biology-backup-controls','#biology-image-credits'])assert.ok(html.includes(route),route);
 assertBaseline('function:lessonHTML',fn(source,'lessonHTML'));
 assertBaseline('function:lessonQuizHTML',fn(source,'lessonQuizHTML'));
});

test('historical content, identities, shared navigation and all persistence/grading paths remain exact baseline source',()=>{
 assertBaseline('historicalContent',source.slice(source.indexOf('const SUBJECTS='),source.indexOf('const STORAGE_RECOVERY_KEY=')));
 for(const name of ['nav','openLesson','syncChemistryLessonHash','saveAnswer','saveNote','completeLesson','recordReview','finishReview','newQuestion','renderQuiz','exportLearningBackup','importLearningBackup','resetLessonQuiz','retryMissedLessonQuiz','submitLessonQuiz'])assertBaseline('function:'+name,fn(source,name));
 const chemistry=s=>fn(s,'subjectJourneyHTML').slice(fn(s,'subjectJourneyHTML').indexOf(' return `<main class="hero subject-journey"'));
 assertBaseline('chemistryOverview',chemistry(source));
 assertBaseline('sharedStylesBefore',css.slice(0,css.indexOf('.biology-dashboard{')));
 assertBaseline('sharedStylesAfter',css.slice(css.indexOf('/* Biology dashboard cards navigate')));
});

// Model real node movement rather than merely checking that helper names exist.
function toolsDOM(){
 class Node{
  constructor(tag,id=''){this.tagName=tag.toUpperCase();this.id=id;this.children=[];this.attrs={};this.className='';this.classList={add:v=>{this.className+=' '+v;}};this.open=false;}
  appendChild(n){if(n.parent)n.parent.children.splice(n.parent.children.indexOf(n),1);this.children.push(n);n.parent=this;return n;}
  before(n){const p=this.parent,i=p.children.indexOf(this);p.children.splice(i,0,n);n.parent=p;}
  closest(selector){for(let n=this;n;n=n.parent){if(selector==='section.panel'&&n.tagName==='SECTION'&&n.className==='panel')return n;if(selector==='details'&&n.tagName==='DETAILS')return n;if(selector==='details.biology-tools-disclosure'&&n.tagName==='DETAILS'&&n.className.includes('biology-tools-disclosure'))return n;}return null;}
  querySelector(selector){return this.children.flatMap(n=>[n,...n.all()]).find(n=>n.tagName===selector.toUpperCase())||null;}
  all(){return this.children.flatMap(n=>[n,...n.all()]);}
  setAttribute(k,v){this.attrs[k]=v;}
  focus(){doc.activeElement=this;}
  scrollIntoView(){this.scrolled=true;}
 }
 const root=new Node('div'),notePanel=new Node('section'),reflectionPanel=new Node('section'),backup=new Node('details');notePanel.className=reflectionPanel.className='panel';
 const note=new Node('textarea','note'),heading=new Node('h2'),save=new Node('button'),quiz=new Node('div','quiz'),reflectionTitle=new Node('h2','subject-reflection-title'),file=new Node('input','learningBackupFile'),summary=new Node('summary');
 note.value='UNSAVED note';note.selectionStart=3;note.selectionEnd=7;save.onclick='saveNote()';quiz.answer='UNSAVED reflection';quiz.selection=2;
 notePanel.appendChild(heading);notePanel.appendChild(note);notePanel.appendChild(save);reflectionPanel.appendChild(reflectionTitle);reflectionPanel.appendChild(quiz);backup.appendChild(summary);backup.appendChild(file);for(const n of [notePanel,reflectionPanel,backup])root.appendChild(n);
 const doc={activeElement:note,createElement:tag=>new Node(tag),getElementById:id=>root.all().find(n=>n.id===id)||null};
 const c=vm.createContext({document:doc,saveState:()=>assert.fail('Disclosure must not save'),location:{pathname:'/subjects/biology/',hash:'#note',search:''}});
 vm.runInContext(fn(source,'prepareBiologyDashboardTools')+fn(source,'revealBiologyDashboardTool')+fn(source,'syncBiologyLessonHash'),c);
 return {root,note,notePanel,reflectionPanel,backup,quiz,file,save,doc,c};
}

test('quiet disclosures move original editor, reflection, backup and Save nodes without mutating unsaved input',()=>{
 const h=toolsDOM(),original=[h.note,h.quiz,h.file,h.save];
 vm.runInContext('prepareBiologyDashboardTools()',h.c);
 assert.equal(h.notePanel.parent.id,'biology-original-note');assert.equal(h.reflectionPanel.parent.id,'biology-reflection');assert.equal(h.backup.id,'biology-backup-controls');
 for(const n of original)assert.ok(h.root.all().includes(n));
 assert.equal(h.note.value,'UNSAVED note');assert.equal(h.note.selectionStart,3);assert.equal(h.note.selectionEnd,7);assert.equal(h.quiz.answer,'UNSAVED reflection');assert.equal(h.quiz.selection,2);assert.equal(h.save.onclick,'saveNote()');assert.equal(h.note.attrs['aria-labelledby'],'biology-original-note-title');
 for(const d of h.root.all().filter(n=>n.tagName==='DETAILS'))assert.equal(d.open,false);
 assert.match(h.doc.getElementById('biology-image-credits').innerHTML,/CC BY-SA 3.0[\s\S]*CC BY-SA 4.0/);
 const originalTree=h.root.all();vm.runInContext('prepareBiologyDashboardTools()',h.c);assert.deepEqual(h.root.all(),originalTree,'Repeated preparation must not nest or duplicate disclosures');
});

test('legacy/direct note, reflection, backup and credit anchors reveal their own disclosure without rebuilding or saving',()=>{
 const h=toolsDOM();vm.runInContext('prepareBiologyDashboardTools()',h.c);h.c.document.querySelectorAll=()=>assert.fail('Tool anchors cannot rebuild or hide lessons');
 // Credit summary is created by innerHTML in a real browser; exercise the other actual node paths here.
 for(const [hash,id] of [['#note','biology-original-note'],['#quiz','biology-reflection'],['#subject-reflection-title','biology-reflection'],['#biology-backup-controls','biology-backup-controls']]){
  h.c.location.hash=hash;vm.runInContext('syncBiologyLessonHash()',h.c);assert.equal(h.doc.getElementById(id).open,true);assert.ok(h.doc.activeElement);assert.equal(h.note.value,'UNSAVED note');assert.equal(h.quiz.answer,'UNSAVED reflection');
 }
 assert.equal(h.doc.activeElement,h.backup.querySelector('summary'));assert.equal(h.note.attrs.tabindex,'0');
 h.notePanel.parent.open=false;vm.runInContext("revealBiologyDashboardTool('note')",h.c);assert.equal(h.notePanel.parent.open,true,'A repeated click must reopen even when the URL hash is unchanged');assert.equal(h.doc.activeElement,h.note);
});

function jpegSize(bytes){let p=2;while(p<bytes.length){if(bytes[p++]!==255)continue;const type=bytes[p++];if(type===216||type===217)continue;const length=bytes.readUInt16BE(p);if([192,193,194].includes(type))return {height:bytes.readUInt16BE(p+3),width:bytes.readUInt16BE(p+5)};p+=length;}throw Error('No JPEG dimensions');}
test('responsive photographs are local optimized exact-source derivatives with explicit licence/provenance',async()=>{
 const root='assets/biology/photography/',manifest=JSON.parse(await readFile(root+'manifest.json','utf8'));
 assert.deepEqual(manifest.sources.map(x=>x.key),['hero','seedling','cells','dna','finch']);
 assert.match(manifest.sources.find(x=>x.key==='cells').url,/Plagiomnium_affine_laminazellen/);assert.equal(manifest.sources.find(x=>x.key==='cells').license,'CC BY-SA 3.0');assert.equal(manifest.sources.find(x=>x.key==='finch').license,'CC BY-SA 4.0');
 assert.equal(manifest.files.length,12);let total=0;
 for(const file of manifest.files){const bytes=await readFile(root+file.file);total+=bytes.length;assert.equal(bytes.length,file.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256);const size=jpegSize(bytes);assert.ok([320,480,600,640,800,1200].includes(size.width),file.file);assert.ok(bytes.length<160000,file.file);if(file.file.startsWith('cells'))assert.ok(size.width<=800);}
 assert.ok(total<800000,total.toString());assert.equal((await readdir(root)).filter(x=>x.endsWith('.jpg')).length,12);
 const html=overview({completed:{}});assert.match(html,/<source media="\(max-width:650px\)"[^>]*hero-mobile/);assert.match(html,/srcset=/);assert.match(html,/width="640" height="480" loading="lazy"/);assert.match(html,/not microscope photography/);
 const credit=await readFile(root+'CREDITS.md','utf8');for(const token of ['Todd Trapani','taehyeon kim','Kristian Peters','René Esposito','Sangharsh Lohakare','Victor Gleim','CC BY-SA 3.0','CC BY-SA 4.0','colours unchanged'])assert.ok(credit.includes(token));
});

test('museum controls retain focus, motion, readable mobile statuses and undistorted hero framing',()=>{
 assert.match(css,/\.biology-hero img\{[^}]*object-fit:contain/);
 assert.match(css,/\.biology-lesson-status\{font-size:\.875rem/);
 assert.match(css,/\.biology-tools-disclosure>summary\{[^}]*min-height:48px/);
 assert.match(css,/\.biology-dashboard-tools[^\n]*:focus-visible\{outline:3px solid #634783/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)\{\.biology-dashboard/);
 assert.doesNotMatch(css.slice(css.indexOf('.biology-dashboard{'),css.indexOf('/* Biology dashboard cards navigate')),/terracotta|#a65335|#b86443|#803f2b/);
});

test('declared dashboard text and action colours meet normal text contrast, without asserting rendered/device acceptance',()=>{
 const L=h=>{const v=h.match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2];};
 for(const [fg,bg] of [['ffffff','203a29'],['ffffff','634783'],['634783','fffdf8'],['56604f','f8f5ed'],['435d2e','fffdf8'],['26382c','fffdf8']]){const a=L(fg),b=L(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);assert.ok(ratio>=4.5,`${fg}/${bg}: ${ratio}`);}
});
