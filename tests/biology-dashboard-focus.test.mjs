import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const css=(await readFile('styles.css','utf8')).replace(/\r\n/g,'\n');

test('Biology card keyboard focus is drawn inside its clipping container without changing layout or other focus styles',()=>{
 const selector='.biology-dashboard .biology-lesson-card>a:focus-visible';
 const start=css.indexOf(selector+'{');assert.ok(start>=0);
 const block=css.slice(start+selector.length+1,css.indexOf('}',start));
 const rules=Object.fromEntries(block.split(';').filter(Boolean).map(item=>item.split(':')));
 assert.deepEqual(Object.keys(rules).sort(),['border-radius','outline','outline-offset']);
 assert.equal(rules.outline,'3px solid #634783');
 const width=parseFloat(rules.outline),offset=parseFloat(rules['outline-offset']);
 assert.ok(width>=3,'Keyboard focus must remain substantial');
 assert.ok(offset+width<=0,'The whole outline must be inset so overflow:hidden cannot cut it off');
 assert.equal(rules['border-radius'],'12px');
 assert.match(css,/\.biology-lesson-card\{[^}]*overflow:hidden/,'Retain the approved image/card clipping');
 assert.match(css,/\.biology-dashboard :is\(a,summary\):focus-visible/,'Other dashboard controls keep their existing focus rule');
 assert.match(css,/\.mcq-question:is\(\.chemistry-matter-enhanced/,'Chemistry focus refinement remains present');
});

test('Biology card focus clearance is mobile-only, safe-area aware and does not alter dimensions, navigation or motion',()=>{
 const rule='@media(max-width:650px){.biology-dashboard .biology-lesson-card>a{scroll-margin-block-start:16px;scroll-margin-block-end:calc(100px + env(safe-area-inset-bottom))}}';
 assert.ok(css.includes(rule),'Reserve enough scrolling space above the fixed mobile navigation');
 assert.equal(css.split(rule).length-1,1,'One scoped rule, not duplicated per lesson');
 const [start,end]=rule.match(/scroll-margin-block-start:([^;]+);scroll-margin-block-end:([^}]+)/).slice(1);
 assert.ok(parseFloat(start)>=0);assert.ok(parseFloat(end.replace('calc(',''))>=90,'Bottom clearance must cover navigation plus its inset');
 assert.doesNotMatch(rule.slice(rule.indexOf('scroll-margin-block-start')),/\.mobile-nav|\.chemistry|height:|width:|padding:|scroll-behavior|transition|animation/,'Do not resize cards, change shared navigation or add animated scrolling');
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)\{\.biology-dashboard \*\{scroll-behavior:auto!important/);
});
