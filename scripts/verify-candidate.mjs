// No dependencies or network access. Builds only in a disposable OS-temp fixture.
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readFile, readdir, lstat, mkdtemp, mkdir, writeFile, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

export const HISTORICAL_RELEASE = '554e7d3016c4c9e34003dfd7c4fa656475464aaa';
export const HISTORICAL_SOURCE = '7b998c5b1ba63f566c8d793aa85c004aaec06f16';
const SNAPSHOT = 'tests/fixtures/deployment-baseline.json';
export const POLICY_FILES = Object.freeze([
  SNAPSHOT, 'scripts/public-files.mjs', 'scripts/build-public.mjs',
  'scripts/verify-candidate.mjs', 'tests/deployment-output.test.mjs',
  'tests/deployment-candidate.test.mjs', '.github/workflows/static-integrity.yml', 'vercel.json'
]);
const sha = value => assert.match(value || '', /^[0-9a-f]{40}$/, 'A full externally supplied SHA is required');
export function gitBytes(root, revision, file) {
  sha(revision);
  return execFileSync('git', ['-C', root, 'cat-file', 'blob', `${revision}:${file}`], {maxBuffer: 16 * 1024 * 1024});
}
function commitExists(root, revision) {
  sha(revision);
  execFileSync('git', ['-C', root, 'cat-file', '-e', `${revision}^{commit}`]);
}
export function verifyIdentity(expectedSha, actualSha) {
  sha(expectedSha); sha(actualSha);
  assert.equal(actualSha, expectedSha, 'Candidate identity differs from independently approved SHA');
}
export function verifyExecutionIdentity({mode, expectedSha, head, environment = process.env}) {
  if (mode === 'provisional') return 'provisional/integration';
  assert.ok(['candidate', 'candidate-ci'].includes(mode), 'Unknown verification mode');
  verifyIdentity(expectedSha, head);
  if (mode === 'candidate-ci') {
    assert.equal(environment.GITHUB_ACTIONS, 'true', 'Exact-candidate CI requires GitHub Actions context');
    assert.equal(environment.GITHUB_EVENT_NAME, 'workflow_dispatch', 'Exact-candidate CI requires workflow_dispatch');
    sha(environment.GITHUB_SHA);
    assert.equal(environment.GITHUB_SHA, expectedSha, 'GitHub Actions event SHA differs from approved candidate');
    return 'exact-candidate-ci';
  }
  // Local mode must never substitute for missing/malformed CI metadata.
  assert.ok(!['CI', 'GITHUB_ACTIONS', 'GITHUB_SHA', 'GITHUB_EVENT_NAME', 'GITHUB_EVENT_PATH']
    .some(key => Object.hasOwn(environment, key)), 'Local candidate mode cannot run with CI context; use candidate-ci');
  return 'local-candidate';
}
const normalized = bytes => Buffer.from(bytes.toString('utf8').replace(/\r\n/g, '\n'));
function sourceMatches(actual, wanted, file) {
  // Checkout CRLF is allowed for textual source only; output always uses raw Git bytes.
  return actual.equals(wanted) || (/\.(?:mjs|js|css|json|md|yml|html|svg|webmanifest)$/.test(file) && normalized(actual).equals(normalized(wanted)));
}
export function verifyPolicyEvidence(candidateFiles, trustedFiles, workingFiles) {
  for (const file of POLICY_FILES) {
    assert.ok(candidateFiles.has(file) && trustedFiles.has(file) && workingFiles.has(file), `Missing policy input: ${file}`);
    assert.deepEqual(candidateFiles.get(file), trustedFiles.get(file), `Policy differs from independently approved revision: ${file}`);
    assert.ok(sourceMatches(workingFiles.get(file), candidateFiles.get(file), file), `Dirty policy file: ${file}`);
  }
}
export async function historicalSnapshot(root) {
  commitExists(root, HISTORICAL_RELEASE); commitExists(root, HISTORICAL_SOURCE);
  const pinned = gitBytes(root, HISTORICAL_RELEASE, SNAPSHOT);
  assert.ok(sourceMatches(await readFile(path.join(root, SNAPSHOT)), pinned, SNAPSHOT), 'Historical snapshot changed');
  const snapshot = JSON.parse(pinned);
  assert.equal(snapshot.commit, HISTORICAL_SOURCE);
  return snapshot;
}
export function publicPolicy(snapshot) {
  const internal = Object.keys(snapshot.files).filter(p => p.startsWith('docs/') || p.startsWith('tests/') ||
    p.startsWith('.github/') || (p.endsWith('.md') && p !== 'assets/biology/photography/CREDITS.md'));
  const files = Object.keys(snapshot.files).filter(p => !internal.includes(p) && p !== 'api/tutor.js');
  assert.equal(internal.filter(p => p !== 'README.md').length, 46);
  assert.equal(files.length, 62); assert.equal(files.filter(p => p.endsWith('.html')).length, 15);
  return files.sort();
}
async function walk(root, prefix = '') {
  const found = [];
  for (const entry of await readdir(path.join(root, prefix), {withFileTypes: true})) {
    const file = prefix + entry.name;
    assert.ok(!entry.isSymbolicLink(), `Output symlink: ${file}`);
    if (entry.isDirectory()) found.push(...await walk(root, file + '/'));
    else { assert.ok(entry.isFile(), `Not a regular output file: ${file}`); found.push(file); }
  }
  return found.sort();
}
export async function verifyOutput(output, expectedBytes) {
  assert.ok((await lstat(output)).isDirectory() && !(await lstat(output)).isSymbolicLink(), 'Output must be a real directory');
  const expected = [...expectedBytes.keys()].sort();
  assert.deepEqual(await walk(output), expected, 'Packaged inventory differs: missing or extra file');
  const digests = [];
  for (const file of expected) {
    const actual = await readFile(path.join(output, file));
    assert.ok(actual.equals(expectedBytes.get(file)), `Packaged bytes differ: ${file}`);
    digests.push({file, size: actual.length, sha256: createHash('sha256').update(actual).digest('hex')});
  }
  return digests;
}
export async function verifyCandidate({root, mode, expectedSha, trustedPolicySha, environment = process.env}) {
  assert.ok(['provisional', 'candidate', 'candidate-ci'].includes(mode), 'Use provisional, candidate or candidate-ci mode');
  const head = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
  const evidence = verifyExecutionIdentity({mode, expectedSha, head, environment});
  const exact = mode !== 'provisional';
  if (exact) {
    commitExists(root, trustedPolicySha);
    const candidateFiles = new Map(), trustedFiles = new Map(), workingFiles = new Map();
    for (const file of POLICY_FILES) {
      candidateFiles.set(file, gitBytes(root, head, file));
      trustedFiles.set(file, gitBytes(root, trustedPolicySha, file));
      workingFiles.set(file, await readFile(path.join(root, file)));
    }
    verifyPolicyEvidence(candidateFiles, trustedFiles, workingFiles);
  }
  const snapshot = await historicalSnapshot(root), expected = publicPolicy(snapshot);
  const {PUBLIC_FILES} = await import(pathToFileURL(path.join(root, 'scripts/public-files.mjs')).href);
  assert.equal(new Set(PUBLIC_FILES).size, PUBLIC_FILES.length);
  assert.deepEqual([...PUBLIC_FILES].sort(), expected, 'Public inventory differs from independent historical policy');
  const inputs = new Map();
  for (const file of expected) {
    for (const ancestor of file.split('/').map((_, i, parts) => parts.slice(0, i + 1).join('/'))) {
      const stat = await lstat(path.join(root, ancestor));
      assert.ok(!stat.isSymbolicLink(), `Source symlink: ${ancestor}`);
    }
    const current = await readFile(path.join(root, file));
    if (exact) {
      const committed = gitBytes(root, head, file);
      assert.ok(sourceMatches(current, committed, file), `Dirty candidate source: ${file}`);
      inputs.set(file, committed);
    } else inputs.set(file, current);
  }
  const fixture = await mkdtemp(path.join(tmpdir(), 'learning-candidate-'));
  try {
    for (const [file, bytes] of inputs) {
      await mkdir(path.dirname(path.join(fixture, file)), {recursive: true});
      await writeFile(path.join(fixture, file), bytes);
    }
    const {buildPublic} = await import(pathToFileURL(path.join(root, 'scripts/build-public.mjs')).href);
    const digests = await verifyOutput(await buildPublic(fixture), inputs);
    return {mode, evidence, identityAndPolicyMatched: exact, candidateSha: exact ? head : null,
      eventSha: mode === 'candidate-ci' ? environment.GITHUB_SHA : null,
      baselineHead: head, trustedPolicySha: exact ? trustedPolicySha : null,
      files: digests, warning: mode === 'provisional' ? 'Uncommitted/integration evidence only; not an approved exact-candidate result' :
        'External approval of both supplied SHAs is required; this program cannot authenticate founder approval'};
  } finally {
    assert.equal(path.dirname(fixture), path.resolve(tmpdir()));
    assert.ok(path.basename(fixture).startsWith('learning-candidate-'));
    await rm(fixture, {recursive: true, force: true});
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), options = {};
  assert.equal(args.length % 2, 0, 'Arguments must be flag/value pairs');
  const names = {'--mode': 'mode', '--expected-sha': 'expectedSha', '--trusted-policy-sha': 'trustedPolicySha', '--root': 'root'};
  for (let i = 0; i < args.length; i += 2) {
    const key = names[args[i]];
    assert.ok(key && !Object.hasOwn(options, key), 'Unknown or duplicate argument'); options[key] = args[i + 1];
  }
  const event = process.env.GITHUB_EVENT_PATH ? JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8')) : null;
  console.log(JSON.stringify({event: process.env.GITHUB_EVENT_NAME || 'local', eventSha: process.env.GITHUB_SHA || null,
    featureHead: event?.pull_request?.head?.sha || null, baseSha: event?.pull_request?.base?.sha || null,
    note: event?.pull_request ? 'PR integration checkout; not feature-head approval' : 'Check supplied approval separately'}));
  const root = options.root || fileURLToPath(new URL('../', import.meta.url));
  assert.ok(path.isAbsolute(root), 'Verification root must be absolute');
  console.log(JSON.stringify(await verifyCandidate({...options, root}), null, 2));
}
