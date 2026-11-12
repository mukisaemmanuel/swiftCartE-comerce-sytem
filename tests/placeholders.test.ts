import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Quality Gate: Placeholder Assets Check', () => {
  it('ensures every /placeholders/... path referenced in src/ exists in public/placeholders/', () => {
    const srcDir = path.resolve('src');
    const publicDir = path.resolve('public');

    const referencedPlaceholders = new Set<string>();

    function scanDir(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (/\.(tsx?|jsx?|css|html)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const matches = content.match(/\/placeholders\/[a-zA-Z0-9_\-\.]+\.svg/g);
          if (matches) {
            matches.forEach((m) => referencedPlaceholders.add(m));
          }
        }
      }
    }

    scanDir(srcDir);

    expect(referencedPlaceholders.size).toBeGreaterThan(0);

    const missingFiles: string[] = [];
    for (const relPath of referencedPlaceholders) {
      // e.g. /placeholders/phones.svg -> public/placeholders/phones.svg
      const diskPath = path.join(publicDir, relPath.replace(/^\//, ''));
      if (!fs.existsSync(diskPath)) {
        missingFiles.push(`${relPath} (expected at ${diskPath})`);
      }
    }

    expect(missingFiles).toEqual([]);
  });
});

