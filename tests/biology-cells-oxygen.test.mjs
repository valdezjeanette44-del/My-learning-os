import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=(await readFile('learning.js','utf8')).replace(/\r\n/g,'\n');
function fn(name){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction ',a+10);return source.slice(a,b);}
function setup(){
 const feedback={textContent:''},reconsider={hidden:true},heading={focus(options){this.focused=options.preventScroll;}};
 const context=vm.createContext({document:{querySelector:()=>context.choice,getElementById:id=>({'cells-oxygen-feedback':feedback,'cells-oxygen-reconsider':reconsider,'cells-oxygen-reconsider-title':heading})[id]},saveState(){assert.fail('Practice cannot save');},localStorage:{setItem(){assert.fail('Practice cannot write');}}});
 vm.runInContext(['clearCellsOxygenFeedback','reconsiderCellsOxygen','explainCellsOxygen'].map(fn).join('\n'),context);
 return {context,feedback,reconsider,heading,run:code=>vm.runInContext(code,context)};
}
test('oxygen practice requires a choice and deliberate reconsideration before explanation, without writes',()=>{
 const h=setup();h.run('reconsiderCellsOxygen()');assert.match(h.feedback.textContent,/Choose a prediction/);assert.equal(h.reconsider.hidden,true);
 h.context.choice={value:'inward'};h.run('clearCellsOxygenFeedback()');h.run('explainCellsOxygen()');assert.equal(h.feedback.textContent,'');
 h.run('reconsiderCellsOxygen()');assert.equal(h.reconsider.hidden,false);assert.equal(h.heading.focused,true);assert.equal(h.feedback.textContent,'');
 h.run('explainCellsOxygen()');assert.match(h.feedback.textContent,/Your prediction fits/);assert.match(h.feedback.textContent,/both directions/);assert.match(h.feedback.textContent,/net movement is into the cell/);
});
test('incorrect and changed choices receive respectful current feedback, with repeated checks and no grading',()=>{
 for(const value of ['outward','none','inward']){
  const h=setup();h.context.choice={value};h.run('reconsiderCellsOxygen();explainCellsOxygen()');
  assert.match(h.feedback.textContent,value==='inward'?/Your prediction fits/:/revise your prediction/);
  h.context.choice.value='inward';h.run('clearCellsOxygenFeedback()');assert.equal(h.feedback.textContent,'');
  h.run('explainCellsOxygen();explainCellsOxygen()');assert.match(h.feedback.textContent,/Your prediction fits/);
  h.context.choice=null;h.run('clearCellsOxygenFeedback();explainCellsOxygen()');assert.match(h.feedback.textContent,/Choose a prediction/);
 }
});
test('Cells-only teaching reuses assets and native controls with a retained temporary DOM container',()=>{
 const c=vm.createContext({});vm.runInContext(fn('cellsLessonIntroduction'),c);const html=vm.runInContext('cellsLessonIntroduction()',c);
 assert.equal((html.match(/id="cells-oxygen-practice"/g)||[]).length,1);
 for(const value of ['inward','outward','none'])assert.ok(html.includes('value="'+value+'"'));
 assert.match(html,/<fieldset><legend>Predict:/);assert.equal((html.match(/onchange="clearCellsOxygenFeedback\(\)"/g)||[]).length,3);
 assert.match(html,/id="cells-oxygen-reconsider" hidden/);assert.match(html,/role="status" aria-live="polite"/);
 assert.match(html,/Temporary, ungraded practice/);assert.match(html,/What is life\?/);assert.match(html,/cell contents outside the nucleus/);
 assert.match(html,/DNA and heredity next/);assert.match(html,/membrane-exchange-mobile\.svg/);assert.match(html,/cell-comparison-mobile\.svg/);
 assert.match(fn('renderSubject'),/\.lesson-mcq\[id\], #cells-oxygen-practice/);
 assert.doesNotMatch(['clearCellsOxygenFeedback','reconsiderCellsOxygen','explainCellsOxygen'].map(fn).join(''),/saveState|localStorage|recordReview|renderSubject|innerHTML|scrollIntoView/);
});
