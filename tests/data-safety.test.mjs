import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = (await readFile(new URL('../learning.js', import.meta.url), 'utf8')).replace(/\r\n/g, '\n');
const helpers = source.slice(source.indexOf('const STORAGE_RECOVERY_KEY='), source.indexOf('function esc('));
function fn(name) {
  const start = source.indexOf('function ' + name + '(');
  assert.ok(start >= 0, name);
  const ends = ['\nfunction ', '\nconst ', '\nlet ', '\nboot();'].map(marker => source.indexOf(marker, start + 10)).filter(i => i >= 0);
  return source.slice(start, Math.min(...ends, source.length));
}
const key = 'myLearningOS.v2';
const recoveryKey = key + '.beforeRestore';
const original = () => ({completed:{Biology:[0]},notes:{home:'Keep my note'},scores:{},review:{'Biology-0':{subject:'Biology',index:0,nextReview:'2026-11-06T10:00:00Z'}},projects:{'plant-evolution':{completed:[1],notes:'My discovery'}},activity:{'2026-11-05':true},noteLibrary:[{id:'n1',title:'Keep',category:'Biology',content:'Original'}],futureFeature:{preserve:true}});
const backup = data => ({app:'My Learning OS',version:2,data});
function harness(data = original(), options = {}) {
  const storage = new Map();
  if (data !== undefined && data !== null) storage.set(key, typeof data === 'string' ? data : JSON.stringify(data));
  const writes = [], warnings = [], downloads = [];
  const status = {textContent:''}, fields = {};
  let reloads = 0, confirmations = 0, renders = 0;
  let payload;
  class Reader {
    readAsText() { this.result = typeof payload === 'string' ? payload : JSON.stringify(payload); this.onload(); }
  }
  class BlobMock { constructor(parts) { downloads.push(parts.join('')); } }
  const context = vm.createContext({
    KEY:key, Date, Math, JSON, Set, Map, Blob:BlobMock, URL:{createObjectURL:()=> 'blob:test',revokeObjectURL(){}}, setTimeout(){},
    localStorage:{
      getItem(k) { if (options.readFailure) throw new Error('SecurityError'); return storage.get(k) ?? null; },
      setItem(k,v) { if (options.failKey === k) throw new Error('QuotaExceededError'); writes.push(k); storage.set(k,v); }
    },
    document:{getElementById:id=>id==='backupStatus'?status:fields[id]||null,createElement:()=>({click(){},remove(){}}),body:{appendChild(){}}},
    FileReader:Reader, confirm(){ confirmations++; options.onConfirm?.(storage); return options.approved !== false; },
    location:{reload(){reloads++;}},renderNotes(){renders++;},alert(){}
  });
  vm.runInContext(helpers, context);
  context.showLearningDataWarning = message => warnings.push(message);
  const run = code => vm.runInContext(code, context, {timeout:1000});
  return {storage,writes,warnings,downloads,status,fields,context,run,
    get reloads(){return reloads;},get confirmations(){return confirmations;},get renders(){return renders;},
    restore(value){payload=value;context.input={files:[{}],value:'selected'};run(fn('importLearningBackup')+'\nimportLearningBackup(input)');}
  };
}

test('missing fields receive read-only defaults while unknown data and original bytes remain intact', () => {
  const raw = '{ "notes": {"home":"Original"}, "futureFeature":{"keep":true} }';
  const h = harness(raw);
  const value = JSON.parse(h.run('JSON.stringify(state())'));
  assert.deepEqual(value.completed, {});
  assert.deepEqual(value.scores, {});
  assert.deepEqual(value.futureFeature, {keep:true});
  assert.equal(h.storage.get(key), raw);
  assert.equal(h.writes.length, 0);
});

test('malformed and unsupported saved records are never replaced by ordinary saves', () => {
  for (const raw of ['{broken','null','[]','0','{"notes":[]}','{"completed":{"Biology":"wrong"}}','{"notes":{"home":123}}','{"noteLibrary":[null]}']) {
    const h = harness(raw);
    h.run('state()');
    assert.throws(()=>h.run('saveState({completed:{},notes:{home:"New"},scores:{}})'));
    assert.equal(h.storage.get(key), raw);
    assert.equal(h.writes.length, 0);
    assert.ok(h.warnings.length > 0);
  }
});

test('unavailable storage blocks writes and gives actionable feedback', () => {
  const h = harness(original(), {readFailure:true});
  h.run('state()');
  assert.throws(()=>h.run('saveState({completed:{},notes:{},scores:{}})'), /SecurityError/);
  assert.equal(h.writes.length, 0);
  assert.match(h.warnings.at(-1), /not saved/);
});

test('a new browser can save without changing the established storage key', () => {
  const h = harness(null);
  h.run('const next=state();next.notes.home="First note";saveState(next);');
  assert.equal(JSON.parse(h.storage.get(key)).notes.home, 'First note');
  assert.deepEqual(h.writes, [key]);
});

test('ordinary saves preserve unrelated future fields and do not write recovery records', () => {
  const h = harness();
  h.run('saveState({notes:{home:"Edited"}})');
  const saved = JSON.parse(h.storage.get(key));
  assert.deepEqual(saved.futureFeature, original().futureFeature);
  assert.deepEqual(saved.projects, original().projects);
  assert.deepEqual(h.writes, [key]);
});

test('failed note saves preserve editor text, draft state and existing stored data', () => {
  const h = harness(original(), {failKey:key});
  Object.assign(h.fields, {noteTitle:{value:'Draft title'},noteCategory:{value:'Biology'},noteDescription:{value:'Draft description'},noteContent:{value:'Unsaved text'}});
  const before = h.storage.get(key);
  h.run('let noteEditorDraft={title:"Draft title",content:"Unsaved text"};'+fn('createNoteId')+'\n'+fn('saveNoteEditor'));
  assert.throws(()=>h.run('saveNoteEditor()'), /QuotaExceededError/);
  assert.equal(h.fields.noteContent.value, 'Unsaved text');
  assert.equal(h.run('noteEditorDraft !== null'), true);
  assert.equal(h.renders, 0);
  assert.equal(h.storage.get(key), before);
  assert.match(h.warnings.at(-1), /Keep this page open/);
});

test('older partial v2 backups keep omitted projects, reviews and future fields', () => {
  const h = harness();
  const before = h.storage.get(key);
  h.restore(backup({completed:{Biology:[1]},notes:{home:'Restored'},scores:{},noteLibrary:[]}));
  const saved = JSON.parse(h.storage.get(key));
  assert.deepEqual(saved.projects, original().projects);
  assert.deepEqual(saved.review, original().review);
  assert.deepEqual(saved.futureFeature, original().futureFeature);
  assert.deepEqual(saved.completed, {Biology:[1]});
  assert.deepEqual(saved.noteLibrary, []); // Explicit empty fields still replace matching fields.
  assert.equal(JSON.parse(h.storage.get(recoveryKey)).raw, before);
  assert.equal(h.reloads, 1);
});

test('v1 restores preserve the current structured library and omitted fields', () => {
  const h = harness();
  h.restore({app:'My Learning OS',version:1,data:{completed:{},notes:{home:'Old backup'},scores:{}}});
  const saved = JSON.parse(h.storage.get(key));
  assert.deepEqual(saved.noteLibrary, original().noteLibrary);
  assert.deepEqual(saved.projects, original().projects);
});

test('new backup manifests reject removed or unexpected fields before confirmation', () => {
  for (const dataFields of [['completed','notes','scores','noteLibrary','projects'],['completed','notes','scores','scores'],['completed','notes','scores']]) {
    const h = harness(), before = h.storage.get(key);
    h.restore({...backup({completed:{},notes:{},scores:{},noteLibrary:[]}),dataFields});
    assert.equal(h.storage.get(key), before);
    assert.equal(h.confirmations, 0);
    assert.equal(h.writes.length, 0);
    assert.match(h.status.textContent, /incomplete/);
  }
});

test('canceling and rejecting malformed backups do not change current or previous recovery records', () => {
  for (const [value,options] of [[backup(original()),{approved:false}],['{broken',{}],[backup({completed:{},notes:{},scores:{}}),{}]]) {
    const h = harness(original(),options), before = h.storage.get(key);
    h.storage.set(recoveryKey, 'Previous recovery');
    h.restore(value);
    assert.equal(h.storage.get(key), before);
    assert.equal(h.storage.get(recoveryKey), 'Previous recovery');
    assert.equal(h.writes.length, 0);
    assert.equal(h.reloads, 0);
  }
});

test('restore stops if another tab changes the record during confirmation', () => {
  const changed = JSON.stringify({...original(),notes:{home:'Changed elsewhere'}});
  const h = harness(original(), {onConfirm:storage=>storage.set(key,changed)});
  h.restore(backup(original()));
  assert.equal(h.storage.get(key), changed);
  assert.equal(h.writes.length, 0);
  assert.match(h.status.textContent, /changed while restore/);
});

test('restore is blocked when a pre-restore copy cannot be saved', () => {
  const h = harness(original(), {failKey:recoveryKey}), before = h.storage.get(key);
  h.restore(backup({completed:{},notes:{},scores:{},noteLibrary:[]}));
  assert.equal(h.storage.get(key), before);
  assert.equal(h.reloads, 0);
  assert.match(h.status.textContent, /QuotaExceededError/);
});

test('failed primary restore retains both the original record and its recovery copy', () => {
  const h = harness(original(), {failKey:key}), before = h.storage.get(key);
  h.restore(backup({completed:{},notes:{},scores:{},noteLibrary:[]}));
  assert.equal(h.storage.get(key), before);
  assert.equal(JSON.parse(h.storage.get(recoveryKey)).raw, before);
  assert.equal(h.reloads, 0);
});

test('a valid restore can recover a damaged primary record without losing its original bytes', () => {
  const h = harness('{broken');
  h.restore(backup({completed:{},notes:{home:'Recovered'},scores:{},noteLibrary:[]}));
  assert.equal(JSON.parse(h.storage.get(key)).notes.home, 'Recovered');
  assert.equal(JSON.parse(h.storage.get(recoveryKey)).raw, '{broken');
  assert.equal(h.reloads, 1);
});

test('exported backup round-trips all fields, and the pre-restore copy is itself importable', () => {
  const h = harness(), before = JSON.parse(h.storage.get(key));
  h.run(fn('exportLearningBackup')+'\nexportLearningBackup()');
  const exported = JSON.parse(h.downloads[0]);
  assert.deepEqual(exported.data, before);
  assert.deepEqual(exported.dataFields.sort(), Object.keys(before).sort());
  h.restore(exported);
  assert.deepEqual(JSON.parse(h.storage.get(key)), before);
  h.run('downloadPreRestoreData()');
  const recovery = JSON.parse(h.downloads[1]);
  assert.deepEqual(recovery.data, before);
  h.restore(recovery);
  assert.equal(h.reloads, 2);
});

test('damaged storage cannot be exported as an apparently empty normal backup', () => {
  const h = harness('{broken');
  assert.throws(()=>h.run(fn('exportLearningBackup')+'\nexportLearningBackup()'));
  assert.equal(h.downloads.length, 0);
  h.run('downloadOriginalLearningData()');
  assert.equal(h.downloads[0], '{broken');
  assert.equal(h.storage.get(key), '{broken');
});
