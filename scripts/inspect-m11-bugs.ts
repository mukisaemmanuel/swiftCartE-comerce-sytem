import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string, ext = '.tsx'): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      results.push(...walk(p, ext));
    } else if (p.endsWith(ext)) {
      results.push(p);
    }
  }
  return results;
}

const files = walk('src');
const logoImgs = new Map<string, string[]>();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf-8');
  const imgRegex = /<img[^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = imgRegex.exec(content)) !== null) {
    const tag = m[0];
    if (/swiftcart|logo/i.test(tag) && !/data-alt=/i.test(tag)) {
      const srcMatch = tag.match(/src=\{?[`"']([^`"'}]+)[`"']\}?/);
      const src = srcMatch ? srcMatch[1] : tag;
      if (!logoImgs.has(src)) logoImgs.set(src, []);
      logoImgs.get(src)!.push(`${f}: ${tag.replace(/\s+/g, ' ')}`);
    }
  }
}

console.log('=== LOGO IMAGES FOUND IN SRC ===');
for (const [src, list] of logoImgs.entries()) {
  console.log(`\nSRC: ${src} (${list.length} occurrences)`);
  for (const item of list.slice(0, 5)) {
    console.log(`  - ${item}`);
  }
}
