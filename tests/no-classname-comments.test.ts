import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

function findFiles(dir: string, ext: string[]): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(fullPath, ext));
    } else if (ext.some((e) => file.endsWith(e))) {
      results.push(fullPath);
    }
  }
  return results;
}

describe('JSX className Props Hygiene', () => {
  it('contains no comments inside JSX className props', () => {
    const srcFiles = findFiles(path.resolve(__dirname, '../src'), ['.ts', '.tsx']);
    const offendingFiles: { file: string; match: string }[] = [];

    const classNameRegex = /className=\{([^}]+)\}/g;

    for (const file of srcFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      let match: RegExpExecArray | null;
      while ((match = classNameRegex.exec(content)) !== null) {
        const inner = match[1];
        if (inner.includes('/*') || inner.includes('//')) {
          offendingFiles.push({
            file: path.relative(path.resolve(__dirname, '..'), file),
            match: match[0].slice(0, 80),
          });
        }
      }
    }

    expect(offendingFiles).toEqual([]);
  });
});

