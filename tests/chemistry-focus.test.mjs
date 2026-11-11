import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('original Chemistry note has a scoped 3:1 boundary without changing focus or layout',async()=>{
 const css=await readFile('styles.css','utf8');
 const selector='body[data-subject="Chemistry"] #note';
 const rules=[...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(m=>m[1].trim()===selector);
 assert.equal(rules.length,1);
 assert.equal(rules[0][2],'border-color:#77608e');
 const luminance=rgb=>rgb.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
 const border=luminance([119,96,142]);
 for(const surface of [[255,255,255],[255,253,249]])assert.ok((luminance(surface)+.05)/(border+.05)>=3);
 // Source guard is complemented by rendered default/focus/error checks in a browser.
 assert.ok(css.includes('body[data-subject="Biology"] #lessons textarea.answer,body[data-subject="Biology"] #note{border-color:#77608e}'));
});

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
