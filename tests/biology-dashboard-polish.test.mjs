import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const css=await readFile('styles.css','utf8');
const source=await readFile('learning.js','utf8');

test('Biology heading distinguishes touch focus from visible keyboard focus without changing restoration',()=>{
 assert.ok(css.includes('.biology-dashboard #biology-dashboard-title:focus:not(:focus-visible){outline:none}'));
 assert.ok(css.includes('.biology-dashboard #biology-dashboard-title:focus-visible{outline:3px solid #fff;outline-offset:4px}'));
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
