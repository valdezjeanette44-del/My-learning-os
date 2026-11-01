import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../learning.js', import.meta.url), 'utf8');
const questionEnd = source.lastIndexOf(';', source.indexOf('const SUBJECTS='));
const questions = source.slice(0, questionEnd + 1);
function fn(name) {
  const start = source.indexOf('function ' + name + '(');
  assert.ok(start >= 0, `${name} exists`);
  const ends = ['\nfunction ','\nconst ','\nlet ','\nvar '].map(marker=>source.indexOf(marker,start+10)).filter(index=>index>=0);
  let end=ends.length?Math.min(...ends):source.length;
  const boot=source.indexOf('\nboot();',start);if(boot>=0&&boot<end)end=boot;
  return source.slice(start,end);
}
function run(code, context = {}) { return vm.runInNewContext(code, context, { timeout: 1000 }); }

test('daily curiosity question is stable through the local date and changes at the next local date', () => {
  const result = run(questions + '\n' + fn('localDayKey') + '\n' + fn('dailyQuestionForDate') + '\nJSON.stringify([dailyQuestionForDate(new Date(2026,10,1)).q,dailyQuestionForDate(new Date(2026,10,1,23,59)).q,dailyQuestionForDate(new Date(2026,10,2)).q])', { Date, Math });
  const [first, refreshed, next] = JSON.parse(result);
  assert.equal(first, refreshed);
  assert.notEqual(first, next);
});

test('date rollover preserves an unsaved reflection in a draft linked to the previous daily question', () => {
  const reflection={value:'I want to revisit this tomorrow.'},previous={q:'Yesterday question'},next={q:'Today question'};let timer;
  const context={Date,document:{getElementById:id=>id==='dailyReflection'?reflection:null},window:{setTimeout:fn=>{timer=fn}},captured:null};
  run('let dailyQuestionItem='+JSON.stringify(previous)+';function renderDailyQuestion(){dailyQuestionItem='+JSON.stringify(next)+';}function openCuriosityNoteDraftFor(item,text){captured={item,text};}'+fn('scheduleDailyQuestionRefresh')+'\nscheduleDailyQuestionRefresh()',context);
  timer();const captured=vm.runInContext('captured',context);assert.equal(captured.item.q,previous.q);assert.equal(captured.text,'I want to revisit this tomorrow.');assert.equal(reflection.value,'');
});

test('exploration question is independent from the daily question and includes beyond-curriculum topics', () => {
  const elements = Object.fromEntries(['dailyQuestionMeta','dailyQuestionBox','dailyQuestionClue','dailyQuestionLesson','curiosityMeta','questionBox','curiosityClue','curiosityLesson'].map(id => [id, { textContent:'', href:'', hidden:false, classList:{remove(){},add(){}} }]));
  let randomIndex=13;const observed={};const context = { Math:{floor:Math.floor,random:()=> (randomIndex+.01)/14}, elements, observed, document:{getElementById:id=>elements[id]}, SUBJECTS:{} };
  const daily = questions + '\n' + fn('setQuestionView') + '\n' + fn('dailyQuestionForDate') + '\n' + fn('localDayKey') + '\n' + fn('questionCategory') + '\n' + fn('questionTopic') + '\n' + fn('newQuestion');
  run(daily + '\nsetQuestionView(dailyQuestionForDate(new Date(2026,10,1)),{meta:"dailyQuestionMeta",question:"dailyQuestionBox",clue:"dailyQuestionClue",link:"dailyQuestionLesson"});observed.before=elements.dailyQuestionBox.textContent;newQuestion();observed.after=elements.dailyQuestionBox.textContent;observed.explore=elements.questionBox.textContent;observed.external=qs.some(q=>q.category==="Beyond the curriculum")', context);
  assert.equal(observed.before, observed.after);
  assert.notEqual(observed.before, observed.explore);
  assert.equal(observed.external,true);
  randomIndex=vm.runInContext('qs.findIndex(q=>q.q===elements.dailyQuestionBox.textContent)',context);run('newQuestion()',context);assert.notEqual(elements.questionBox.textContent,elements.dailyQuestionBox.textContent);
  const firstExplore=elements.questionBox.textContent;run('newQuestion()',context);assert.notEqual(elements.questionBox.textContent,firstExplore);
  assert.equal(run(questions+'\nqs.some(q=>q.category==="Beyond the curriculum")'), true);
});

test('reflection forms an unsaved draft and explicit Save preserves legacy notes and learning data', () => {
  const initial={completed:{Biology:[0]},notes:{home:'Original home',Physics:'Original subject'},scores:{Biology:{score:80}},review:{one:{nextReview:'2026-11-02'}}}; let persisted;
  const el={dailyReflection:{value:'I want to test this.'},curiosityNoteDraft:{hidden:true,innerHTML:'',scrollIntoView(){}},curiosityDraftTitle:{value:'A question'},curiosityDraftCategory:{value:'Astronomy'},curiosityDraftDescription:{value:'My reflection'},curiosityDraftContent:{value:'Question and reflection'}};
  const context={Date,Math,qs:run(questions+'\nqs'),document:{getElementById:id=>el[id]||null},state:()=>JSON.parse(JSON.stringify(initial)),saveState:s=>persisted=JSON.parse(JSON.stringify(s))};
  run(questions+'\n'+fn('esc')+'\n'+fn('dailyQuestionForDate')+'\n'+fn('questionCategory')+'\n'+fn('questionTopic')+'\nlet curiosityNoteDraft=null;'+fn('createNoteId')+'\n'+fn('openCuriosityNoteDraftFor')+'\n'+fn('openCuriosityNoteDraft')+'\n'+fn('saveCuriosityNoteDraft')+'\nopenCuriosityNoteDraft("daily")',context);
  assert.equal(persisted,undefined);
  const draft=vm.runInContext('curiosityNoteDraft',context); assert.ok(draft.question);assert.ok(draft.topic);assert.ok(draft.category);assert.match(draft.content,/I want to test this/);
  el.curiosityDraftTitle.value=draft.title;el.curiosityDraftCategory.value=draft.category;el.curiosityDraftDescription.value=draft.description;el.curiosityDraftContent.value=draft.content;
  run('saveCuriosityNoteDraft()',context);
  assert.equal(persisted.noteLibrary.length,1);assert.equal(persisted.noteLibrary[0].question,draft.question);assert.equal(persisted.noteLibrary[0].topic,draft.topic);assert.equal(persisted.noteLibrary[0].category,draft.category);
  assert.deepEqual(persisted.notes,initial.notes);assert.deepEqual(persisted.completed,initial.completed);assert.deepEqual(persisted.scores,initial.scores);assert.deepEqual(persisted.review,initial.review);
});

test('structured notes support creation, editing, archiving, restoration, search and category filtering', () => {
  let saved={notes:{home:'Keep me'},completed:{Physics:[0]},scores:{Physics:{score:90}},noteLibrary:[]};
  const fields={noteTitle:{value:'Gravity'},noteCategory:{value:'Physics'},noteDescription:{value:'Falling'},noteContent:{value:'Gravity changes motion.'},showArchivedNotes:{checked:false}};
  const cards=[{dataset:{category:'Physics',search:'gravity motion'},hidden:false,classList:{contains:()=>false},querySelector:()=>null},{dataset:{category:'History',search:'gravity past'},hidden:false,classList:{contains:()=>false},querySelector:()=>null}];
  const context={Date,Math,state:()=>saved,saveState:s=>saved=s,document:{getElementById:id=>fields[id]||null,querySelectorAll:()=>cards},alert(){},renderNotes(){}};
  fields.noteTitle.focus=()=>{};
  run('let noteEditorDraft={};'+fn('createNoteId')+'\n'+fn('saveNoteEditor')+'\n'+fn('editLibraryNote')+'\n'+fn('archiveLibraryNote')+'\n'+fn('restoreLibraryNote')+'\n'+fn('filterNotes'),context);
  run('saveNoteEditor()',context); assert.equal(saved.noteLibrary.length,1);const created=saved.noteLibrary[0].createdAt;
  fields.noteTitle.value='Gravity and motion';fields.noteDescription.value='Updated preview';fields.noteContent.value='Gravity pulls objects toward Earth.';run(`editLibraryNote("${saved.noteLibrary[0].id}")`,context);run('saveNoteEditor()',context);assert.equal(saved.noteLibrary[0].title,'Gravity and motion');assert.equal(saved.noteLibrary[0].description,'Updated preview');assert.equal(saved.noteLibrary[0].content,'Gravity pulls objects toward Earth.');assert.equal(saved.noteLibrary[0].createdAt,created);
  run(`archiveLibraryNote("${saved.noteLibrary[0].id}")`,context);assert.ok(saved.noteLibrary[0].archivedAt);run(`restoreLibraryNote("${saved.noteLibrary[0].id}")`,context);assert.equal(saved.noteLibrary[0].archivedAt,null);
  fields.noteSearch={value:'motion'};fields.noteCategoryFilter={value:'Physics'};run('filterNotes()',context);assert.equal(cards[0].hidden,false);assert.equal(cards[1].hidden,true);
  assert.deepEqual(saved.notes,{home:'Keep me'});assert.deepEqual(saved.completed,{Physics:[0]});assert.deepEqual(saved.scores,{Physics:{score:90}});
});

test('legacy notes are virtual read-only entries and copying leaves original storage untouched', () => {
  const saved={notes:{home:'Home original',Physics:'Subject original',Biology:'  '},noteLibrary:[]};let writes=0;
  const context={Date,Math,state:()=>saved,saveState(){writes++},renderNotes(){}};
  const code=fn('legacyNoteEntries')+'\n'+fn('createNoteId')+'\n'+fn('copyLegacyNote');
  assert.equal(run(code+'\nlegacyNoteEntries().length',context),2);assert.match(source,/Existing note · read only/);assert.match(source,/Copy into library/);run(code+'\ncopyLegacyNote("home")',context);
  assert.equal(saved.notes.home,'Home original');assert.equal(saved.notes.Physics,'Subject original');assert.equal(saved.noteLibrary.length,1);assert.equal(writes,1);
});

function importBackup(version,data,approved=true,rawResult=null) {
  let stored={completed:{Biology:[0]},notes:{home:'Safe'},scores:{Biology:{score:100}},review:{saved:true},projects:{p:true},activity:{today:1},noteLibrary:[{id:'safe',title:'Safe note',category:'General',content:'Safe content'}]};
  const status={textContent:''},location={count:0,reload(){this.count++}};
  class Reader { readAsText(){this.result=rawResult??JSON.stringify({app:'My Learning OS',version,data});this.onload();} }
  const context={Date,KEY:'myLearningOS.v2',FileReader:Reader,confirm:()=>approved,location,document:{getElementById:id=>id==='backupStatus'?status:null},state:()=>stored,localStorage:{setItem(k,v){stored=JSON.parse(v);}}};
  context.input={files:[{}],value:'selected'};run(fn('importLearningBackup')+'\nimportLearningBackup(input)',context);
  return {get stored(){return stored;},status,location};
}

test('v1 import preserves the current structured library; v2 preserves every exported data field', () => {
  const v1data={completed:{Physics:[2]},notes:{home:'Backup',Physics:'A subject note'},scores:{Physics:{score:95}},quizAnswers:{Physics:'because'},quizResults:{Physics:{score:75}},review:{due:'yes'},reviewCompletions:{one:true},learningLog:[{id:'Physics-2'}],projects:{x:true},activity:{y:2},tutorChats:{Physics:[{role:'user',content:'Hello'}]},selfChecks:{Physics:{0:true}}};
  const v1=importBackup(1,v1data);assert.deepEqual(v1.stored.noteLibrary,[{id:'safe',title:'Safe note',category:'General',content:'Safe content'}]);for(const key of Object.keys(v1data))assert.deepEqual(v1.stored[key],v1data[key],`${key} should survive v1 restore`);
  const v2data={completed:{Technology:[1]},notes:{home:'V2'},scores:{Technology:{score:88}},quizAnswers:{Technology:'answer'},quizResults:{Technology:{score:88}},review:{r:1},reviewCompletions:{r:true},learningLog:[{id:'Technology-1'}],projects:{v2:1},activity:{v2:2},tutorChats:{Technology:[]},selfChecks:{Technology:{}},noteLibrary:[{id:'backup',title:'Backup note',category:'Technology',content:'Saved content'}]};
  const v2=importBackup(2,v2data);assert.deepEqual(v2.stored,v2data);assert.equal(v2.location.count,1);
});

test('canceled, malformed, and incomplete v2 imports cannot modify saved data', () => {
  const current={completed:{Biology:[0]},notes:{home:'Safe'},scores:{Biology:{score:100}},review:{saved:true},projects:{p:true},activity:{today:1},noteLibrary:[{id:'safe',title:'Safe note',category:'General',content:'Safe content'}]};
  const canceled=importBackup(2,{...current,noteLibrary:[{id:'replacement',title:'Replacement',category:'General',content:'No change'}]},false);assert.deepEqual(canceled.stored,current);assert.equal(canceled.location.count,0);assert.match(canceled.status.textContent,/cancelled/i);
  const malformed=importBackup(2,current,true,'{');assert.deepEqual(malformed.stored,current);assert.match(malformed.status.textContent,/JSON|Unexpected/i);
  const invalid=importBackup(2,{completed:{Physics:[1]},notes:{},scores:{}});assert.deepEqual(invalid.stored,current);assert.match(invalid.status.textContent,/invalid structured/i);
  const empty=importBackup(1,{});assert.deepEqual(empty.stored,current);assert.match(empty.status.textContent,/required learning data/i);
  const unsupported=importBackup(3,current);assert.deepEqual(unsupported.stored,current);
});

test('backup export is version 2 and contains the complete learning state plus structured notes', () => {
  const data={completed:{History:[0]},notes:{home:'Original'},scores:{History:{score:90}},review:{a:1},projects:{p:2},activity:{today:3},noteLibrary:[{id:'note'}]};let serialized='';
  class BlobMock{constructor(parts){serialized=parts[0]}}
  const context={Date,Blob:BlobMock,URL:{createObjectURL:()=>'',revokeObjectURL(){}},state:()=>data,document:{getElementById:()=>null,createElement:()=>({click(){},remove(){}}),body:{appendChild(){}}},setTimeout(){}};
  run(fn('exportLearningBackup')+'\nexportLearningBackup()',context);const backup=JSON.parse(serialized);assert.equal(backup.version,2);assert.deepEqual(backup.data,data);
  const legacyState={completed:{},notes:{},scores:{}};context.state=()=>legacyState;run(fn('exportLearningBackup')+'\nexportLearningBackup()',context);assert.deepEqual(JSON.parse(serialized).data.noteLibrary,[]);
});

test('Notes has responsive desktop and mobile layouts and navigation entry points', async () => {
  assert.match(source,/href="\/notes\.html"/);assert.match(source,/aria-label="My Notes"/);
  assert.doesNotMatch(source,/function deleteLibraryNote\(/);
  const css=await readFile(new URL('../styles.css',import.meta.url),'utf8');assert.match(css,/\.notes-library-grid\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);assert.match(css,/@media\(max-width:600px\)\{\.notes-library-grid\{grid-template-columns:1fr\}/);
});
