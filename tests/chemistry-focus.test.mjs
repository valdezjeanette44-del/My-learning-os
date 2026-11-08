import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('Chemistry quiz-only touch-focus exception preserves visible keyboard focus and other controls',async()=>{
 const css=await readFile('styles.css','utf8');
 const selector='.mcq-question:is(.chemistry-matter-enhanced *, .chemistry-atoms-enhanced *, .chemistry-bonds-enhanced *, .chemistry-reactions-enhanced *)[tabindex="-1"]:focus:not(:focus-visible)';
 assert.equal(css.split(selector).length-1,1);
 assert.ok(css.includes(selector+'{outline:none}'));
 for(const scope of ['matter','atoms','bonds','reactions']){
  assert.ok(css.includes('.chemistry-'+scope+'-enhanced [tabindex="-1"]:focus{outline:3px solid #49305f}'));
  assert.ok(css.includes('.chemistry-'+scope+'-enhanced :is(button,a,input,select,textarea,summary):focus-visible{outline:3px solid #49305f;outline-offset:4px}'));
 }
 assert.ok(css.includes('.cells-enhanced .lesson-body :is(button,a,input,textarea,summary):focus-visible{outline:3px solid #49305f;outline-offset:4px}'));
});
