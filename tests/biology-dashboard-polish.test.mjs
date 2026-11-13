import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const css=await readFile('styles.css','utf8');
const source=await readFile('learning.js','utf8');

test('Biology heading distinguishes touch focus from visible keyboard focus without changing restoration',()=>{
 assert.ok(css.includes('.biology-dashboard #biology-dashboard-title[data-biology-pointer-return]:focus{outline:none}'));
 assert.ok(css.includes('.biology-dashboard #biology-dashboard-title:focus{outline:3px solid #fff;outline-offset:4px}'));
 assert.match(source,/heading\?\.setAttribute\('tabindex','-1'\);heading\?\.focus\(\{preventScroll:true\}\)/);
 assert.ok(css.includes('.biology-dashboard .biology-lesson-card>a:focus-visible{outline:3px solid #634783;outline-offset:-4px'));
});

test('Biology mobile completion note keeps readable size and wording with quieter spacing',()=>{
 assert.ok(css.includes('@media(max-width:650px){.biology-dashboard .biology-saved-note{font-size:.875rem;line-height:1.5;margin:8px 2px 4px}}'));
 assert.match(source,/Completion records learning activity, not proven mastery\. Quizzes stay inside each lesson\./);
 assert.match(css,/\.biology-saved-note\{[^}]*color:#56604f/);
 // White keyboard outline against the forest-green hero has ample contrast.
 const lum=h=>h.match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
 assert.ok((1.05)/(lum('203a29')+.05)>=3);
});


// Exercise the actual event bindings and hash handler, including Safari's visible-focus state.
function focusHarness(path='/subjects/biology/'){
 const listeners={},attrs={},classes=new Set(['active']);let now=100;
 const heading={id:'biology-dashboard-title',matches:()=>true,setAttribute:(k,v)=>attrs[k]=v,removeAttribute:k=>delete attrs[k],toggleAttribute(k,v){if(v)attrs[k]='';else delete attrs[k];},focus(){doc.activeElement=this;}};
 const overview={querySelector:()=>heading,scrollIntoView(){}},panel={classList:{remove:v=>classes.delete(v)},querySelector:()=>({setAttribute(){}})};
 const app={dataset:{},addEventListener:(type,handler)=>{assert.ok(!listeners[type]);listeners[type]=handler;}};
 const doc={getElementById:id=>id==='app'?app:id==='biology-dashboard-title'?heading:overview,querySelectorAll:()=>classes.has('active')?[panel]:[]};
 const link={getAttribute:()=> '#subject-overview',closest(){return this;}};
 const c=vm.createContext({document:doc,location:{pathname:path,hash:'#subject-overview'},Date,saveState(){assert.fail('Focus must not save');}});
 const start=source.indexOf('function prepareBiologyOverviewFocus('),end=source.indexOf('function syncChemistryLessonHash(');
 vm.runInContext(source.slice(start,end),c);vm.runInContext('prepareBiologyOverviewFocus()',c);
 return {listeners,attrs,heading,app,doc,c,link,reset(){classes.add('active');},event(type,extra={}){listeners[type]?.({target:link,isTrusted:true,isPrimary:true,button:0,timeStamp:now++,...extra});},sync(){vm.runInContext('syncBiologyLessonHash()',c);}};
}

test('explicit pointer return suppresses even Safari-visible focus, consumes token and clears on keyboard or blur',()=>{
 const h=focusHarness();h.event('pointerdown');h.event('click');h.sync();
 assert.equal(h.heading.matches(':focus-visible'),true,'Simulate Safari matching visible focus after touch');
 assert.ok('data-biology-pointer-return' in h.attrs);assert.equal(h.doc.activeElement,h.heading);assert.equal(h.attrs.tabindex,'-1');
 assert.equal(vm.runInContext('syncBiologyLessonHash.pointerReturn',h.c),null);
 h.event('keydown');assert.ok(!('data-biology-pointer-return' in h.attrs));
 h.reset();h.sync();assert.ok(!('data-biology-pointer-return' in h.attrs),'History/unknown return must not reuse token');
 h.event('pointerdown');h.event('click');h.reset();h.sync();h.event('focusout',{target:h.heading});assert.ok(!('data-biology-pointer-return' in h.attrs));
});

test('keyboard, synthetic clicks, cancelled gestures and other subjects cannot enable touch suppression',()=>{
 for(const scenario of ['keyboard','synthetic','cancel','expired']){
  const h=focusHarness();h.event('pointerdown');
  if(scenario==='keyboard')h.event('keydown');
  if(scenario==='cancel')h.event('pointercancel');
  h.event('click',scenario==='synthetic'?{isTrusted:false}:scenario==='expired'?{timeStamp:5000}:{});h.sync();
  assert.ok(!('data-biology-pointer-return' in h.attrs),scenario);
 }
 const h=focusHarness('/subjects/chemistry/');assert.deepEqual(Object.keys(h.listeners),[]);
 const b=focusHarness();vm.runInContext('prepareBiologyOverviewFocus()',b.c);assert.equal(Object.keys(b.listeners).length,5,'Listeners install once on Biology app only');
});
