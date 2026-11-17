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
const occurrences: { file: string; section: string; tag: string; isDark: boolean }[] = [];

for (const f of files) {
  const code = fs.readFileSync(f, 'utf-8');
  // Check header
  const headerMatch = code.match(/<header[\s\S]*?<\/header>/g);
  if (headerMatch) {
    for (const h of headerMatch) {
      const imgMatches = h.match(/<img[^>]*>/g) || [];
      for (const img of imgMatches) {
        if (/logo|swiftcart|brand|a593324aedcf6cb2|95ec767b02525811|f1bbfd17fdb92d75|6666a05c76c4c201|72ed6cc157770beb|5b99427efcba69e4|37ca7db9721adf1a|ad6f7f7fb7a5ee6f|f77d9c2410d1b883|6ef56f7b9b3ddf40|18a63b8793377535|e65f6d7fb679f160|9e6e1814fdfbfa57|abfa3c4dbb6c6e0a|ecfbfc472ab6b281|aeb9118a4ba966b9|8077dcff605ab76e|35aa19b36e6443c5|2110b1926df8ecac|0904559101697798|ce3704038c05f2da/i.test(img)) {
          const isDark = /invert|brightness-0|brightness-200|text-surface-bright|bg-inverse-surface/i.test(h);
          occurrences.push({ file: f, section: 'header', tag: img, isDark });
        }
      }
    }
  }

  // Check footer
  const footerMatch = code.match(/<footer[\s\S]*?<\/footer>/g);
  if (footerMatch) {
    for (const ft of footerMatch) {
      const imgMatches = ft.match(/<img[^>]*>/g) || [];
      for (const img of imgMatches) {
        if (/logo|swiftcart|brand|a593324aedcf6cb2|95ec767b02525811|f1bbfd17fdb92d75|6666a05c76c4c201|72ed6cc157770beb|5b99427efcba69e4|37ca7db9721adf1a|ad6f7f7fb7a5ee6f|f77d9c2410d1b883|6ef56f7b9b3ddf40|18a63b8793377535|e65f6d7fb679f160|9e6e1814fdfbfa57|abfa3c4dbb6c6e0a|ecfbfc472ab6b281|aeb9118a4ba966b9|8077dcff605ab76e|35aa19b36e6443c5|2110b1926df8ecac|0904559101697798|ce3704038c05f2da/i.test(img)) {
          const isDark = /invert|brightness-0|brightness-200|text-surface-bright|bg-inverse-surface/i.test(ft);
          occurrences.push({ file: f, section: 'footer', tag: img, isDark });
        }
      }
    }
  }
}

console.log(`Found ${occurrences.length} total logo tags in buyer headers/footers.`);
const headerCount = occurrences.filter(o => o.section === 'header').length;
const footerCount = occurrences.filter(o => o.section === 'footer').length;
console.log(`Headers: ${headerCount}, Footers: ${footerCount}`);

const tags = new Map<string, number>();
for (const o of occurrences) {
  tags.set(`${o.section} [dark:${o.isDark}] => ${o.tag}`, (tags.get(`${o.section} [dark:${o.isDark}] => ${o.tag}`) || 0) + 1);
}
for (const [t, c] of tags.entries()) {
  console.log(`${c}x: ${t}`);
}
