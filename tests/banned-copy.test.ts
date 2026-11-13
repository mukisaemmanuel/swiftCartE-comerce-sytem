import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

// Banned phrases per docs/BUILD-RULES.md
const BANNED_PATTERNS: { phrase: string; regex: RegExp }[] = [
  { phrase: 'Bank of Uganda', regex: /\bBank\s+of\s+Uganda\b/i },
  { phrase: 'BoU', regex: /\bBoU\b/ },
  { phrase: 'NPS', regex: /\bNPS\b/ },
  { phrase: 'Stanbic', regex: /\bStanbic\b/i },
  { phrase: 'regulated', regex: /\bregulated\b/i },
  { phrase: 'statutory', regex: /\bstatutory\b/i },
  { phrase: 'HSM', regex: /\bHSM\b/ },
  { phrase: 'enclave', regex: /\benclave\b/i },
  { phrase: 'hardware token', regex: /\bhardware\s+token\b/i },
  { phrase: 'FIDO2', regex: /\bFIDO2\b/i },
  { phrase: 'dual-key', regex: /\bdual-?key\b/i },
  { phrase: 'kill switch', regex: /\bkill\s+switch\b/i },
  { phrase: 'root key', regex: /\broot\s+key\b/i },
  { phrase: 'key rotation', regex: /\bkey\s+rotation\b/i },
  { phrase: 'attestation', regex: /\battestation\b/i },
  { phrase: 'cryptographic', regex: /\bcryptographic\b/i },
  { phrase: 'ledger hash', regex: /\bledger\s+hash\b/i },
  { phrase: 'Patricia Namubiru', regex: /\bPatricia\s+Namubiru\b/i },
  { phrase: 'Arbitration Desk', regex: /\bArbitration\s+Desk\b/i },
  { phrase: 'Chief Compliance Officer', regex: /\bChief\s+Compliance\s+Officer\b/i },
  { phrase: 'board resolution', regex: /\bboard\s+resolution\b/i },
  { phrase: 'affidavit', regex: /\baffidavit\b/i },
  { phrase: 'VAT', regex: /\bVAT\b/ },
  { phrase: 'URA', regex: /\bURA\b/ },
  { phrase: 'EFRIS', regex: /\bEFRIS\b/i },
  { phrase: 'SwiftCoins', regex: /\bSwiftCoins\b/i },
  { phrase: 'Afterpay', regex: /\bAfterpay\b/i },
  { phrase: 'Google Pay', regex: /\bGoogle\s+Pay\b/i },
  { phrase: 'instalments', regex: /\binstalments?\b/i },
  { phrase: 'tamper seal', regex: /\btamper\s+seal\b/i },
  { phrase: 'tamper bag', regex: /\btamper\s+bag\b/i },
];

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      // Check code files in src/
      if (/\.(ts|tsx|js|jsx|css|html|json)$/.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

describe('Quality Gate: Banned Copy Scan', () => {
  it('should scan for banned phrases in src/ directory and record them to docs/COPY-TO-CLEAN.md', () => {
    const srcDir = path.resolve(__dirname, '../src');
    const files = getAllFiles(srcDir);
    const violations: { file: string; line: number; phrase: string; content: string }[] = [];

    files.forEach((filePath) => {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        BANNED_PATTERNS.forEach(({ phrase, regex }) => {
          if (regex.test(line)) {
            violations.push({
              file: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
              line: index + 1,
              phrase,
              content: line.trim(),
            });
          }
        });
      });
    });

    const cleanListPath = path.resolve(__dirname, '../docs/COPY-TO-CLEAN.md');
    let mdContent = '# Copy to Clean (To-Do List for Polishing Phase)\n\n';
    mdContent += 'This file lists banned phrases found in `src/`. The app must not be deployed publicly until this list is cleared.\n\n';
    mdContent += `Total occurrences found: ${violations.length}\n\n`;
    mdContent += '| File | Line | Phrase | Sample Content |\n';
    mdContent += '| --- | --- | --- | --- |\n';

    violations.forEach((v) => {
      const escapedContent = v.content.replace(/\|/g, '\\|');
      mdContent += `| \`${v.file}\` | ${v.line} | **${v.phrase}** | \`${escapedContent}\` |\n`;
    });

    fs.writeFileSync(cleanListPath, mdContent, 'utf-8');

    // Does not fail the build per STAGE M instructions
    expect(fs.existsSync(cleanListPath)).toBe(true);
  });
});

