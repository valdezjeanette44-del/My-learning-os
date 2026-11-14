// Read-only anonymous HTTP verification. Never POSTs or invokes the paid Tutor API.
import {readFile} from 'node:fs/promises';
import {PUBLIC_FILES} from './public-files.mjs';

const supplied=process.argv[2];
if(!supplied)throw new Error('Usage: node scripts/verify-deployment.mjs https://<approved-project-host>');
const base=new URL(supplied);
const local=['localhost','127.0.0.1','[::1]'].includes(base.hostname);
const project=base.hostname==='my-learning-os.vercel.app' ||
  (/^my-learning-/.test(base.hostname)&&base.hostname.endsWith('-my-learning-os.vercel.app'));
if(base.username||base.password||base.search||base.hash||base.pathname!=='/'||
   (!local&&(!project||base.protocol!=='https:'))||
   (local&&!['http:','https:'].includes(base.protocol)))throw new Error('Use only this project deployment origin, without credentials or query parameters');

const snapshot=JSON.parse(await readFile(new URL('../tests/fixtures/deployment-baseline.json',import.meta.url),'utf8'));
const forbidden=Object.keys(snapshot.files).filter(p=>!PUBLIC_FILES.includes(p)&&p!=='api/tutor.js');
forbidden.push('vercel.json','.gitignore','.env','scripts/build-public.mjs','scripts/public-files.mjs',
  'scripts/verify-deployment.mjs','tests/deployment-output.test.mjs','tests/fixtures/deployment-baseline.json',
  'docs/deployment-security.md','AGENTS.md','architecture.md','CHANGELOG.md','docs/master-roadmap.md','docs/design-concept.md');
let failures=0,blocked=false;
async function check(file,expected) {
  const response=await fetch(new URL('/'+file,base),{method:'GET',redirect:'manual',signal:AbortSignal.timeout(15000)});
  if([301,302,303,307,308,401,403].includes(response.status)) {
    blocked=true;console.log(`UNVERIFIED ${file||'/'}: redirect/access restriction (${response.status})`);
    await response.body?.cancel();return;
  }
  if(response.status!==expected) {failures++;console.log(`FAIL ${file||'/'}: expected ${expected}, got ${response.status}`);}
  else if(expected===200) {
    const actual=Buffer.from(await response.arrayBuffer());
    const wanted=await readFile(new URL('../'+(file||'index.html'),import.meta.url));
    if(!actual.equals(wanted)) {failures++;console.log(`FAIL ${file}: served bytes differ from approved local source`);}
  } else await response.body?.cancel();
}
// Serial requests keep verification traffic modest; no credentials or response bodies are printed.
await check('',200);
for(const file of PUBLIC_FILES)await check(file,200);
for(const file of new Set(forbidden))await check(file,404);
await check('api/tutor',405);
console.log(`${PUBLIC_FILES.length} public paths; ${new Set(forbidden).size} excluded paths; Tutor GET checked. Failures: ${failures}; blocked: ${blocked}`);
if(blocked)console.log('Deployment protection does not prove exclusion. Inspect output through authorized preview access before approval.');
process.exitCode=failures||blocked?1:0;
