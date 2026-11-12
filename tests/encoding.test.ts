import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Quality Gate: UTF-8 Text Encoding & Mojibake Check', () => {
  it('ensures no files in src/ contain mojibake sequences like "â€" or "Ã"', () => {
    const srcDir = path.resolve('src');
    const violations: { file: string; line: number; snippet: string }[] = [];

    function scan(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scan(fullPath);
        } else if (/\.(tsx?|jsx?|css|html|json)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const lines = content.split('\n');
          lines.forEach((lineText, idx) => {
            if (/â€|Ã/.test(lineText)) {
              violations.push({
                file: path.relative(process.cwd(), fullPath),
                line: idx + 1,
                snippet: lineText.trim(),
              });
            }
          });
        }
      }
    }

    scan(srcDir);

    expect(
      violations,
      `Found mojibake in src/ files:\n${violations
        .map((v) => `${v.file}:${v.line} -> ${v.snippet}`)
        .join('\n')}`
    ).toEqual([]);
  });
});

