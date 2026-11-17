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
const footers: { file: string; img: string }[] = [];

for (const f of files) {
  const code = fs.readFileSync(f, 'utf-8');
  const footerMatches = code.match(/<footer[\s\S]*?<\/footer>/g) || [];
  for (const ft of footerMatches) {
    const imgMatches = ft.match(/<img[^>]*>/g) || [];
    for (const img of imgMatches) {
      if (/logo|swiftcart|brand/i.test(img) || /a593324aedcf6cb2/i.test(img)) {
        footers.push({ file: f, img });
      }
    }
  }
}

console.log(`Found ${footers.length} logo tags in footers:`);
const uniqueFooterTags = new Map<string, number>();
for (const r of footers) {
  uniqueFooterTags.set(r.img, (uniqueFooterTags.get(r.img) || 0) + 1);
}
for (const [tag, count] of uniqueFooterTags.entries()) {
  console.log(`[${count}x]: ${tag}`);
}
