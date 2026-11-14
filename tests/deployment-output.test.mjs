import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, mkdir, readFile, readdir, writeFile, rm, symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
import {PUBLIC_FILES} from '../scripts/public-files.mjs';
import {buildPublic} from '../scripts/build-public.mjs';

const baseline = JSON.parse(await readFile(new URL('./fixtures/deployment-baseline.json',import.meta.url),'utf8'));
const baselinePaths = Object.keys(baseline.files);
// Independent policy applied to the fixed production tree, not the packager's inventory.
const internal = baselinePaths.filter(p => p.startsWith('docs/') || p.startsWith('tests/') ||
  p.startsWith('.github/') || (p.endsWith('.md') && p !== 'assets/biology/photography/CREDITS.md'));
const expected = baselinePaths.filter(p => !internal.includes(p) && p !== 'api/tutor.js');
async function walk(dir, prefix='') {
  const result=[];
  for (const entry of await readdir(dir, {withFileTypes:true})) {
    const relative=prefix+entry.name;
    assert.equal(entry.isSymbolicLink(), false);
    if(entry.isDirectory()) result.push(...await walk(path.join(dir,entry.name),relative+'/'));
    else result.push(relative);
  }
  return result.sort();
}
async function fixture(t) {
  const root=await mkdtemp(path.join(tmpdir(),'learning-public-'));
  t.after(async()=>{
    const resolved=path.resolve(root);
    assert.equal(path.dirname(resolved),path.resolve(tmpdir()));
    assert.ok(path.basename(resolved).startsWith('learning-public-'));
    await rm(resolved,{recursive:true,force:true});
  });
  for(const file of expected) {
    await mkdir(path.dirname(path.join(root,file)),{recursive:true});
    await writeFile(path.join(root,file),await readFile(file));
  }
  return root;
}
test('public inventory matches independently classified production files',()=>{
  assert.equal(internal.filter(p=>p!=='README.md').length,46);
  assert.equal(expected.length,62);
  assert.deepEqual([...PUBLIC_FILES].sort(),[...expected].sort());
  assert.equal(expected.filter(p=>p.endsWith('.html')).length,15);
});
test('packaging copies all approved bytes and excludes new internal files and stale output',async t=>{
  const root=await fixture(t);
  for(const file of [...internal,'docs/future-secret.txt','assets/private-planning.md','new-feature.html','.env','scripts/internal.js']) {
    await mkdir(path.dirname(path.join(root,file)),{recursive:true});
    await writeFile(path.join(root,file),'SYNTHETIC INTERNAL CANARY');
  }
  await mkdir(path.join(root,'dist-public'),{recursive:true});
  await writeFile(path.join(root,'dist-public','stale-secret.txt'),'STALE');
  const output=await buildPublic(root);
  assert.deepEqual(await walk(output),[...expected].sort());
  for(const file of expected) assert.deepEqual(await readFile(path.join(output,file)),await readFile(file),file);
  assert.deepEqual(await readFile(path.join(root,'docs/future-secret.txt')),Buffer.from('SYNTHETIC INTERNAL CANARY'));
  await buildPublic(root);
  assert.deepEqual(await walk(output),[...expected].sort());
});
test('missing approved input fails before replacing prior output',async t=>{
  const root=await fixture(t);
  await mkdir(path.join(root,'dist-public'));
  await writeFile(path.join(root,'dist-public','sentinel'),'old');
  await rm(path.join(root,'index.html'));
  await assert.rejects(buildPublic(root),{code:'ENOENT'});
  assert.equal(await readFile(path.join(root,'dist-public','sentinel'),'utf8'),'old');
});
test('output and source symlinks cannot publish material outside the inventory',async t=>{
  const root=await fixture(t);
  const output=path.join(root,'dist-public');
  // Windows directory junctions require no symbolic-link privilege.
  await mkdir(path.join(root,'outside'));
  await writeFile(path.join(root,'outside','sentinel'),'retain');
  await symlink(path.join(root,'outside'),output,'junction');
  await assert.rejects(buildPublic(root),/real directory/);
  await rm(output);
  await rm(path.join(root,'assets','projects'),{recursive:true});
  await symlink(path.join(root,'outside'),path.join(root,'assets','projects'),'junction');
  await assert.rejects(buildPublic(root),/no symlink ancestors/);
  assert.equal(await readFile(path.join(root,'outside','sentinel'),'utf8'),'retain');
});
test('HTML navigation, manifest, CSS resources and literal JS asset paths exist in public output',async()=>{
  const available=new Set(expected);
  let count=0;
  function check(raw,from) {
    if(!raw || /^(?:https?:|data:|mailto:|#|javascript:)/i.test(raw))return;
    let target=raw.split(/[?#]/)[0];
    if(!target)return;
    target=path.posix.normalize(target.startsWith('/')?target.slice(1):path.posix.join(path.posix.dirname(from),target));
    if(target==='.'||target.endsWith('/'))target=target==='.'?'index.html':target+'index.html';
    if(!available.has(target)&&available.has(target+'/index.html'))target+='/index.html';
    assert.ok(available.has(target),`${from}: ${raw} missing from publication inventory`);count++;
  }
  for(const file of expected.filter(p=>/\.(html|css|js|webmanifest)$/.test(p))) {
    const source=await readFile(file,'utf8');
    if(file.endsWith('.html'))for(const m of source.matchAll(/(?:href|src)=["']([^"']+)["']/g))check(m[1],file);
    if(file.endsWith('.css'))for(const m of source.matchAll(/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g))check(m[1],file);
    if(file.endsWith('.js'))for(const m of source.matchAll(/\/assets\/[A-Za-z0-9_./-]+\.(?:svg|png|jpg|jpeg|webp)/g))check(m[0],file);
  }
  const app=await readFile('learning.js','utf8');
  const start=app.indexOf('function cellsLessonIntroduction('),end=app.indexOf('\nfunction ',start+10);
  assert.ok(start>=0&&end>start);
  const context=vm.createContext({});
  vm.runInContext(app.slice(start,end),context);
  const cells=vm.runInContext('cellsLessonIntroduction()',context);
  assert.match(cells,/Discover — A World Too Small to See/);
  for(const m of cells.matchAll(/(?:href|src)=["']([^"']+)["']/g))check(m[1],'subjects/biology/index.html');
  for(const m of cells.matchAll(/srcset="([^"]+)"/g))for(const candidate of m[1].split(','))check(candidate.trim().split(/\s+/)[0],'subjects/biology/index.html');
  const art=app.slice(app.indexOf('  const art={'),app.indexOf('  const photograph='));
  assert.ok(art.length>0);
  for(const m of art.matchAll(/key:'([^']+)'/g))for(const size of [320,640])check(`/assets/biology/photography/${m[1]}-${size}.jpg`,'learning.js');
  const manifest=JSON.parse(await readFile('manifest.webmanifest','utf8'));
  check(manifest.start_url,'manifest.webmanifest');assert.equal(manifest.scope,'/');
  for(const icon of manifest.icons)check(icon.src,'manifest.webmanifest');
  assert.ok(count>50);
});
test('Vercel serves only dedicated output while native Tutor source and CI remain unchanged',async()=>{
  const config=JSON.parse(await readFile('vercel.json','utf8'));
  assert.equal(config.framework,null);assert.equal(config.outputDirectory,'dist-public');
  assert.equal(config.buildCommand,'node scripts/build-public.mjs');
  // Current official Vercel schema rejects additional properties, including public.
  assert.deepEqual(Object.keys(config).sort(),['$schema','buildCommand','framework','outputDirectory']);
  assert.equal(config.$schema,'https://openapi.vercel.sh/vercel.json');
  assert.equal(config.routes,undefined);assert.equal(config.rewrites,undefined);assert.equal(config.builds,undefined);
  assert.ok(!PUBLIC_FILES.includes('api/tutor.js'));
  for(const file of [...expected,'api/tutor.js','.github/workflows/static-integrity.yml']) {
    const bytes=await readFile(file);
    const blobHash=buffer=>createHash('sha1').update(`blob ${buffer.length}\0`).update(buffer).digest('hex');
    const normalized=Buffer.from(bytes.toString('utf8').replace(/\r\n/g,'\n'));
    assert.ok(blobHash(bytes)===baseline.files[file] ||
      (/\.(html|js|css|json|md|yml|svg|webmanifest)$/.test(file) && blobHash(normalized)===baseline.files[file]),file+' changed from production');
  }
});
test('Tutor preserves method, origin and inactive-key responses without upstream requests',async()=>{
  let upstream=0;
  const context=vm.createContext({module:{exports:{}},process:{env:{}},Map,fetch(){upstream++;throw new Error('No upstream allowed');}});
  vm.runInContext(await readFile('api/tutor.js','utf8'),context);
  for(const [request,status] of [
    [{method:'GET',headers:{}},405],
    [{method:'POST',headers:{origin:'https://unapproved.example'},body:{messages:[]}},403],
    [{method:'POST',headers:{origin:'https://my-learning-os.vercel.app'},body:{messages:[]}},503]
  ]) {
    const response={setHeader(){},status(code){this.code=code;return this;},json(body){this.body=body;return this;}};
    await context.module.exports(request,response);assert.equal(response.code,status);
    if(status===503)assert.match(response.body.message,/not been configured/);
  }
  assert.equal(upstream,0);
});
