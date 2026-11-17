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
for (const f of files) {
  const code = fs.readFileSync(f, 'utf-8');
  const footerMatches = code.match(/<footer[\s\S]*?<\/footer>/g) || [];
  for (const ft of footerMatches) {
    if (/logo|swiftcart|brand/i.test(ft) || /a593324aedcf6cb2/i.test(ft)) {
      // Find the line containing the img
      const lines = ft.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (/<img/i.test(lines[i]) && (/logo|swiftcart|brand/i.test(lines[i]) || /a593324aedcf6cb2/i.test(lines[i]))) {
          console.log(`FILE: ${f}`);
          console.log(`LINE: ${lines[i].trim()}`);
          console.log('---');
        }
      }
    }
  }
}
