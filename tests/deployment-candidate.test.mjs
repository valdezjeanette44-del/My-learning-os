import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
import {mkdtemp, mkdir, writeFile, readFile, rm, symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {verifyIdentity, verifyOutput, verifyCandidate, historicalSnapshot, publicPolicy,
  gitBytes, HISTORICAL_RELEASE, POLICY_FILES, verifyPolicyEvidence, verifyExecutionIdentity} from '../scripts/verify-candidate.mjs';
import {buildPublic} from '../scripts/build-public.mjs';

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'learning-verification-'));
  t.after(async () => {
    assert.equal(path.dirname(root), path.resolve(tmpdir()));
    assert.ok(path.basename(root).startsWith('learning-verification-'));
    await rm(root, {recursive: true, force: true});
  });
  return root;
}
test('candidate identity requires an exact externally supplied full SHA', () => {
  const sha = '1'.repeat(40);
  verifyIdentity(sha, sha);
  assert.throws(() => verifyIdentity('2'.repeat(40), sha), /Candidate identity differs/);
  for (const invalid of [undefined, 'HEAD', '554e7d3', '--help']) assert.throws(() => verifyIdentity(invalid, sha));
});
test('historical snapshot remains pinned and public policy is exactly 62 files / 15 HTML entries', async () => {
  const baseline = await historicalSnapshot(process.cwd());
  const files = publicPolicy(baseline);
  assert.equal(files.length, 62);
  assert.equal(files.filter(file => file.endsWith('.html')).length, 15);
  for (const file of ['AGENTS.md', 'CHANGELOG.md', 'docs/founder-private.md', 'api/tutor.js', 'assets/biology/animal-cell.webp'])
    assert.ok(!files.includes(file), file);
  assert.throws(() => gitBytes(process.cwd(), '0'.repeat(40), 'learning.js'));
});
test('output verification accepts exact bytes and emits independently reproducible digests', async t => {
  const output = await fixture(t), bytes = Buffer.from('approved');
  await writeFile(path.join(output, 'index.html'), bytes);
  const report = await verifyOutput(output, new Map([['index.html', bytes]]));
  assert.equal(report[0].size, 8);
  assert.match(report[0].sha256, /^[0-9a-f]{64}$/);
});
test('output verification rejects missing, extra and changed output rather than accepting new hashes', async t => {
  const output = await fixture(t), expected = new Map([['index.html', Buffer.from('approved')]]);
  await assert.rejects(verifyOutput(output, expected), /Packaged inventory differs/);
  await writeFile(path.join(output, 'index.html'), 'approved');
  await writeFile(path.join(output, 'private.md'), 'internal');
  await assert.rejects(verifyOutput(output, expected), /Packaged inventory differs/);
  await rm(path.join(output, 'private.md'));
  await writeFile(path.join(output, 'index.html'), 'tampered');
  await assert.rejects(verifyOutput(output, expected), /Packaged bytes differ/);
});
test('candidate SHA mismatch and missing trusted policy fail before packaging', async () => {
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: '0'.repeat(40), trustedPolicySha: HISTORICAL_RELEASE, environment: {}}), /Candidate identity differs/);
  const head = execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: head, environment: {}}), /externally supplied SHA/);
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: head, trustedPolicySha: '0'.repeat(40), environment: {}}));
});
test('historical assertion checks every PR #47 release blob against unchanged baseline expectations', async () => {
  const baseline = await historicalSnapshot(process.cwd()), expected = publicPolicy(baseline);
  const source = await readFile('tests/deployment-output.test.mjs', 'utf8');
  const start = source.indexOf("test('PR #47 historical application");
  const end = source.indexOf("\ntest('Tutor preserves", start);
  assert.ok(start >= 0 && end > start, 'Locate the actual production historical assertion');
  const block = source.slice(start, end);
  const files = [...expected, 'api/tutor.js', '.github/workflows/static-integrity.yml'];
  const blobs = new Map(files.map(file => [file, gitBytes(process.cwd(), HISTORICAL_RELEASE, file)]));
  function run(readBlob) {
    vm.runInNewContext(block, {test: (_name, body) => body(), assert, expected, baseline, createHash,
      Buffer, process, HISTORICAL_RELEASE, gitBytes: readBlob});
  }
  const visited = [];
  run((_root, revision, file) => {
    assert.equal(revision, HISTORICAL_RELEASE, 'Must verify audited release, not original snapshot source');
    visited.push(file); return blobs.get(file);
  });
  assert.deepEqual(visited, files);
  assert.throws(() => run((_root, _revision, file) =>
    file === files[0] ? Buffer.concat([blobs.get(file), Buffer.from('tampered')]) : blobs.get(file)), /changed from production/);
  assert.throws(() => run(() => { throw new Error('Missing historical release blob'); }), /Missing historical release blob/);
});
test('CI identity requires approved SHA, checkout HEAD and event SHA to agree', () => {
  const approved = '1'.repeat(40), other = '2'.repeat(40);
  const environment = {GITHUB_ACTIONS: 'true', GITHUB_EVENT_NAME: 'workflow_dispatch', GITHUB_SHA: approved};
  const input = {mode: 'candidate-ci', expectedSha: approved, head: approved, environment};
  assert.equal(verifyExecutionIdentity(input), 'exact-candidate-ci');
  assert.throws(() => verifyExecutionIdentity({...input, head: other}), /Candidate identity differs/);
  assert.throws(() => verifyExecutionIdentity({...input, environment: {...environment, GITHUB_SHA: other}}), /event SHA differs/);
});
test('CI identity fails closed on absent, malformed and wrong-event context', () => {
  const approved = '1'.repeat(40);
  const valid = {GITHUB_ACTIONS: 'true', GITHUB_EVENT_NAME: 'workflow_dispatch', GITHUB_SHA: approved};
  const input = {mode: 'candidate-ci', expectedSha: approved, head: approved};
  for (const environment of [{}, {CI: 'true'}, {...valid, GITHUB_ACTIONS: ''},
    {...valid, GITHUB_EVENT_NAME: undefined}, {...valid, GITHUB_EVENT_NAME: 'pull_request'},
    {...valid, GITHUB_EVENT_NAME: 'push'}, {...valid, GITHUB_SHA: undefined},
    {...valid, GITHUB_SHA: ''}, {...valid, GITHUB_SHA: 'HEAD'}, {...valid, GITHUB_SHA: '554e7d3'}]) {
    assert.throws(() => verifyExecutionIdentity({...input, environment}));
  }
});
test('local candidate and provisional PR evidence cannot silently become exact-candidate CI', () => {
  const approved = '1'.repeat(40);
  const input = {mode: 'candidate', expectedSha: approved, head: approved};
  assert.equal(verifyExecutionIdentity({...input, environment: {}}), 'local-candidate');
  for (const environment of [{CI: 'true'}, {CI: ''}, {GITHUB_ACTIONS: 'true'},
    {GITHUB_EVENT_NAME: 'workflow_dispatch'}, {GITHUB_SHA: approved}, {GITHUB_EVENT_PATH: ''}]) {
    assert.throws(() => verifyExecutionIdentity({...input, environment}), /Local candidate mode cannot/);
  }
  assert.equal(verifyExecutionIdentity({mode: 'provisional', environment: {GITHUB_EVENT_NAME: 'pull_request'}}), 'provisional/integration');
});
test('workflow and real CLI select fail-closed candidate-ci mode before packaging', async () => {
  const workflow = await readFile('.github/workflows/static-integrity.yml', 'utf8');
  assert.match(workflow, /--mode candidate-ci --expected-sha/);
  assert.doesNotMatch(workflow, /--mode candidate --expected-sha/);
  const head = execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  // These actual entry-point calls must fail before creating any build fixture.
  for (const eventSha of ['', '2'.repeat(40)]) {
    let error;
    try {
      execFileSync(process.execPath, ['scripts/verify-candidate.mjs', '--mode', 'candidate-ci',
        '--expected-sha', head, '--trusted-policy-sha', head], {
        env: {...process.env, GITHUB_ACTIONS: 'true', GITHUB_EVENT_NAME: 'workflow_dispatch',
          GITHUB_SHA: eventSha, GITHUB_EVENT_PATH: ''}, stdio: 'pipe'});
    } catch (failure) { error = failure; }
    assert.ok(error, 'CLI must reject missing/mismatched event SHA');
    assert.match(error.stderr.toString(), eventSha ? /event SHA differs/ : /externally supplied SHA/);
  }
});
test('policy evidence rejects candidate changes, dirty working policy and missing inputs', () => {
  const original = new Map(POLICY_FILES.map(file => [file, Buffer.from('approved\n')]));
  const working = new Map(original), candidate = new Map(original);
  verifyPolicyEvidence(candidate, original, working);
  working.set(POLICY_FILES[0], Buffer.from('approved\r\n'));
  verifyPolicyEvidence(candidate, original, working);
  candidate.set(POLICY_FILES[0], Buffer.from('self-approved replacement'));
  assert.throws(() => verifyPolicyEvidence(candidate, original, working), /Policy differs/);
  candidate.set(POLICY_FILES[0], original.get(POLICY_FILES[0]));
  working.set(POLICY_FILES[0], Buffer.from('dirty'));
  assert.throws(() => verifyPolicyEvidence(candidate, original, working), /Dirty policy/);
  working.delete(POLICY_FILES[0]);
  assert.throws(() => verifyPolicyEvidence(candidate, original, working), /Missing policy/);
});
test('source file symlinks fail without deleting existing output or touching external targets', async t => {
  const root = await fixture(t), baseline = await historicalSnapshot(process.cwd());
  for (const file of publicPolicy(baseline)) {
    await mkdir(path.dirname(path.join(root, file)), {recursive: true});
    await writeFile(path.join(root, file), await readFile(file));
  }
  await mkdir(path.join(root, 'dist-public'));
  await writeFile(path.join(root, 'dist-public', 'sentinel'), 'retain output');
  await writeFile(path.join(root, 'outside'), 'retain external');
  await rm(path.join(root, 'index.html'));
  // EPERM is a failed test. No skip, catch-and-pass or weakened fallback.
  await symlink(path.join(root, 'outside'), path.join(root, 'index.html'), 'file');
  await assert.rejects(buildPublic(root), /no symlink ancestors/);
  assert.equal(await readFile(path.join(root, 'outside'), 'utf8'), 'retain external');
  assert.equal(await readFile(path.join(root, 'dist-public', 'sentinel'), 'utf8'), 'retain output');
});
