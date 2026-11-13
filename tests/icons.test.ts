import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { ICON_PATHS } from '../src/components/shared/icons-data';

function walk(dir: string): string[] {
  let files: string[] = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (
      (full.endsWith('.ts') || full.endsWith('.tsx')) &&
      !full.endsWith('icons-data.ts') &&
      !full.endsWith('.test.ts') &&
      !full.endsWith('.test.tsx')
    ) {
      files.push(full);
    }
  }
  return files;
}

describe('Icon availability and integrity', () => {
  it('has valid SVG path strings for every registered icon', () => {
    const keys = Object.keys(ICON_PATHS);
    expect(keys.length).toBeGreaterThan(50);
    for (const key of keys) {
      expect(typeof ICON_PATHS[key]).toBe('string');
      expect(ICON_PATHS[key].length).toBeGreaterThan(10);
    }
  });

  it('fails if src/ uses an icon name that is not available in ICON_PATHS', () => {
    const srcFiles = walk('src');
    const missingIcons: { file: string; icon: string }[] = [];

    for (const file of srcFiles) {
      const content = fs.readFileSync(file, 'utf8');

      // 1. Match <Icon name="xyz"
      const compRegex = /<Icon[^>]*\sname=["']([a-zA-Z0-9_]+)["']/g;
      let match: RegExpExecArray | null;
      while ((match = compRegex.exec(content)) !== null) {
        const iconName = match[1];
        if (!ICON_PATHS[iconName]) {
          missingIcons.push({ file, icon: iconName });
        }
      }

      // 2. Match icon: 'xyz'
      const propRegex = /icon:\s*["']([a-zA-Z0-9_]+)["']/g;
      while ((match = propRegex.exec(content)) !== null) {
        const iconName = match[1];
        if (!ICON_PATHS[iconName]) {
          missingIcons.push({ file, icon: iconName });
        }
      }
    }

    if (missingIcons.length > 0) {
      const details = missingIcons
        .map((m) => `${m.icon} (in ${path.relative(process.cwd(), m.file)})`)
        .join(', ');
      expect.fail(`The following icons are used in src/ but missing from ICON_PATHS: ${details}`);
    }

    expect(missingIcons).toHaveLength(0);
  });
});
