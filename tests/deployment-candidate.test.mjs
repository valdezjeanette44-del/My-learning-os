import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtemp, mkdir, writeFile, readFile, rm, symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {verifyIdentity, verifyOutput, verifyCandidate, historicalSnapshot, publicPolicy,
  gitBytes, HISTORICAL_RELEASE, POLICY_FILES, verifyPolicyEvidence} from '../scripts/verify-candidate.mjs';
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
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: '0'.repeat(40), trustedPolicySha: HISTORICAL_RELEASE}), /Candidate identity differs/);
  const head = execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: head}), /externally supplied SHA/);
  await assert.rejects(verifyCandidate({root: process.cwd(), mode: 'candidate', expectedSha: head, trustedPolicySha: '0'.repeat(40)}));
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
