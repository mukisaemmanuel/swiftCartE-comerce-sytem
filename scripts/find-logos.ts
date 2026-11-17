import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string): string[] {
  let res: string[] = [];
  if (!fs.existsSync(dir)) return res;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res.push(...walk(p));
    else if (p.endsWith('.tsx')) res.push(p);
  }
  return res;
}

const files = walk('src/mockups/buyer');
const results: { file: string; match: string }[] = [];

for (const f of files) {
  const code = fs.readFileSync(f, 'utf-8');
  // Match any image tag that uses a593324aedcf6cb2 or has swiftcart-logo / logo-final / brand in it
  const imgRegex = /<img[^>]+(?:a593324aedcf6cb2|swiftcart-logo|logo-full|swiftcart-logo-icon)[^>]*>/g;
  let m: RegExpExecArray | null;
  while ((m = imgRegex.exec(code)) !== null) {
    results.push({ file: f, match: m[0] });
  }
}

console.log(`Found ${results.length} logo tags:`);
const uniqueTags = new Map<string, number>();
for (const r of results) {
  uniqueTags.set(r.match, (uniqueTags.get(r.match) || 0) + 1);
}

for (const [tag, count] of uniqueTags.entries()) {
  console.log(`[${count}x]: ${tag}`);
}
