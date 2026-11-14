import {copyFile, lstat, mkdir, realpath, rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {PUBLIC_FILES} from './public-files.mjs';

export const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url));

// No globbing, bundling, rewriting, or server-source copying.
export async function buildPublic(sourceRoot = PROJECT_ROOT) {
  const root = await realpath(sourceRoot);
  const output = path.join(root, 'dist-public');
  const unique = new Set();
  for (const entry of PUBLIC_FILES) {
    if (!entry || entry.includes('\\') || path.posix.isAbsolute(entry) ||
        entry.split('/').some(part => !part || part === '.' || part === '..') || unique.has(entry)) {
      throw new Error(`Invalid or duplicate public path: ${entry}`);
    }
    unique.add(entry);
    const parts = entry.split('/');
    for (let i = 1; i <= parts.length; i++) {
      const stat = await lstat(path.join(root, ...parts.slice(0, i)));
      if (stat.isSymbolicLink() || (i === parts.length ? !stat.isFile() : !stat.isDirectory())) {
        throw new Error(`Public source must be a regular file with no symlink ancestors: ${entry}`);
      }
    }
  }
  // Validate every input before replacing output. Never follow an output symlink.
  let outputStat;
  try { outputStat = await lstat(output); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (outputStat && (outputStat.isSymbolicLink() || !outputStat.isDirectory())) {
    throw new Error('dist-public must be a real directory');
  }
  // Absolute target is fixed beneath the resolved project root, never caller-selected.
  if (path.dirname(output) !== root || path.basename(output) !== 'dist-public') throw new Error('Unsafe output path');
  await rm(output, {recursive: true, force: true});
  await mkdir(output);
  for (const entry of PUBLIC_FILES) {
    const destination = path.join(output, ...entry.split('/'));
    await mkdir(path.dirname(destination), {recursive: true});
    await copyFile(path.join(root, ...entry.split('/')), destination);
  }
  return output;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildPublic();
  console.log(`Packaged ${PUBLIC_FILES.length} public files into dist-public/`);
}
