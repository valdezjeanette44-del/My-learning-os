import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const css=await readFile('styles.css','utf8');
const section=css.slice(css.indexOf('/* Biology desktop prose measure;'),css.indexOf('body[data-subject="Biology"] #lessons textarea.answer'));

test('Biology reading measure is desktop-only and limited to enhanced teaching and summary text',()=>{
 assert.match(section,/@media\(min-width:851px\)/);
 assert.match(section,/body\[data-subject="Biology"\] #lessons \.cells-enhanced :is\(\.cells-learning,\.cells-summary\) :is\(p,ul,ol\)/);
 assert.doesNotMatch(section,/(?:^|[ ,])figure[,{]|\.cells-pair|\.mcq|\.question|textarea|Chemistry/);
});

test('reading comfort changes only maximum prose width, preserving typography and layout properties',()=>{
 const declarations=[...section.matchAll(/\{([^{}]*)\}/g)].map(match=>match[1].trim()).filter(Boolean);
 assert.deepEqual(declarations,['max-inline-size:62ch']);
 assert.doesNotMatch(section,/!important|font-size:|line-height:|padding:|margin:|overflow:|display:/);
});
