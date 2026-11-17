import * as fs from 'fs';
import * as path from 'path';

// Cleaned copy verification script
// Excludes CSS classes like 'bg-emerald-escrow', '--color-emerald-escrow'
// Excludes route paths '/admin/escrow-disputes-admin' and import statements
// Excludes aliases in shared/statuses.ts (export const ESCROW_STATUS = ...)

const PATTERNS: { name: string; regex: RegExp }[] = [
  { name: 'escrow', regex: /\bescrows?\b/i },
  { name: 'vault (payment)', regex: /\bvaults?\b/i },
  { name: 'custody', regex: /\bcustody\b/i },
  { name: 'locked funds / ringfenced', regex: /\b(locked funds|ringfenced)\b/i },
  { name: 'Bank of Uganda / BoU', regex: /\b(Bank of Uganda|BoU|BOU)\b/i },
  { name: 'NPS Act', regex: /\b(NPS|National Payment Systems?( Act)?)\b/i },
  { name: 'Stanbic', regex: /\bStanbic\b/i },
  { name: 'HSM', regex: /\bHSM(-[A-Z0-9]+)?\b/i },
  { name: 'enclave', regex: /\benclaves?\b/i },
  { name: 'kill switch', regex: /\bkill[- ]switch\b/i },
  { name: 'statutory', regex: /\bstatutory\b/i },
  { name: 'attestation', regex: /\battestation\b/i },
  { name: 'arbitration', regex: /\barbitration\b/i },
  { name: 'SwiftCoins', regex: /\bSwiftCoins?\b/i },
  { name: 'Afterpay', regex: /\bAfterpay\b/i },
  { name: 'Google Pay', regex: /\bGoogle Pay\b/i },
  { name: 'Apple Pay', regex: /\bApple Pay\b/i },
  { name: 'PayPal', regex: /\bPayPal\b/i },
  { name: 'Lagos', regex: /\bLagos\b/i },
  { name: 'NY / New York', regex: /\b(NY|New York)\b/i },
  { name: 'Dollar amounts', regex: /\$\d+(\.\d+)?/ },
  { name: 'tamper seal/bag', regex: /\btamper[- ](seal|bag)s?\b/i },
  { name: '100% guaranteed', regex: /\b100% guaranteed\b/i },
  { name: 'insured', regex: /\b(insured|underwritten 100%)\b/i },
  { name: 'USSD prompt code', regex: /\*(165|185|175)\*?[0-9#]*/ },
  { name: 'regulated', regex: /\bregulated\b/i },
  { name: 'licensed', regex: /\blicensed\b/i },
  { name: 'Data Protection Act', regex: /\bData Protection( and Privacy)? Act\b/i },
  { name: 'VAT / URA / EFRIS', regex: /\b(VAT|URA|EFRIS)\b/ },
  { name: 'Alex (name)', regex: /\bAlex\b/ },
];

const hits: { pattern: string; file: string; line: number; match: string; text: string }[] = [];

function isExcluded(line: string, filePath: string, pattern: string): boolean {
  // Exclude CSS color tokens/classes for emerald-escrow
  if (/emerald-escrow/.test(line)) {
    // Strip emerald-escrow and check if another match still exists
    const stripped = line.replace(/([a-z0-9_-]*)emerald-escrow([a-z0-9_-]*)/g, '');
    const p = PATTERNS.find((x) => x.name === pattern);
    if (p && !p.regex.test(stripped)) return true;
  }
  // Exclude route strings in path props or router checks: '/admin/escrow-disputes-admin'
  if (/['"](?:\/admin)?\/escrow-[^'"]+['"]/.test(line)) {
    const stripped = line.replace(/['"](?:\/admin)?\/escrow-[^'"]+['"]/g, '');
    const p = PATTERNS.find((x) => x.name === pattern);
    if (p && !p.regex.test(stripped)) return true;
  }
  // Exclude import statements referencing escrow mockups/folders
  if (/^\s*(?:import|export)\s+.*from\s+['"].*['"]/.test(line)) {
    return true;
  }
  // Exclude shared/statuses.ts backward-compatibility export
  if (filePath.endsWith('shared/statuses.ts') && /export const ESCROW_STATUS/.test(line)) {
    return true;
  }
  return false;
}

function scan(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'coverage', 'fidelity-reference', 'fidelity-images'].includes(entry.name)) continue;
      scan(full);
    } else if (entry.isFile() && /\.(tsx?|jsx?|html)$/.test(entry.name)) {
      if (full.includes('scripts')) continue;
      const content = fs.readFileSync(full, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((l, idx) => {
        for (const p of PATTERNS) {
          const m = l.match(p.regex);
          if (m) {
            if (!isExcluded(l, full.replace(/\\/g, '/'), p.name)) {
              hits.push({
                pattern: p.name,
                file: full.replace(/\\/g, '/'),
                line: idx + 1,
                match: m[0],
                text: l.trim().slice(0, 160),
              });
            }
          }
        }
      });
    }
  }
}

scan('src');
scan('shared');

const summary: Record<string, number> = {};
for (const h of hits) summary[h.pattern] = (summary[h.pattern] || 0) + 1;
console.log(`Total hits: ${hits.length}`);
console.table(summary);

if (hits.length > 0) {
  console.log('\nTop 20 remaining hits:');
  for (const h of hits.slice(0, 20)) {
    console.log(`${h.file}:${h.line} [${h.pattern}] -> ${h.text}`);
  }
}

fs.writeFileSync('scripts/filtered-hits.json', JSON.stringify(hits, null, 2));
