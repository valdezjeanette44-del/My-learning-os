import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const assets=['dashboard-hero.svg','dashboard-life.svg','dashboard-cells.svg','dashboard-dna.svg','dashboard-evolution.svg'];
test('Biology dashboard illustrations are local, optimized SVGs with accessible descriptions',async()=>{
 for(const file of assets){
  const svg=await readFile(`assets/biology/${file}`,'utf8');
  assert.match(svg,/<svg[^>]+viewBox=/,file);
  assert.match(svg,/aria-labelledby="title desc"/,file);
  assert.match(svg,/<title id="title">[^<]+<\/title>/,file);
  assert.match(svg,/<desc id="desc">[^<]+<\/desc>/,file);
 }
});
test('Biology dashboard styles stay scoped and include narrow-screen layouts',async()=>{
 const css=await readFile('styles.css','utf8');
 const section=css.slice(css.indexOf('.biology-dashboard{'),css.indexOf('.cells-enhanced .cells-learning{'));
 assert.ok(section.length>0);
 assert.match(section,/@media\(max-width:900px\)/);
 assert.match(section,/@media\(max-width:650px\)/);
 assert.match(section,/@media\(max-width:380px\)/);
 assert.match(section,/--bio-cream:#fbf8f1/);
 assert.match(section,/--bio-green-dark:#344b26/);
 assert.doesNotMatch(section,/\.chemistry|\.topbar|\.mobile-nav/);
});
