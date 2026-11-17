import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string): string[] {
  let res: string[] = [];
  if (!fs.existsSync(dir)) return res;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res.push(...walk(p));
    else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.html')) res.push(p);
  }
  return res;
}

const files = walk('src');
for (const f of files) {
  const code = fs.readFileSync(f, 'utf-8');
  if (code.includes('a593324aedcf6cb2')) {
    const matches = code.match(/a593324aedcf6cb2/g);
    console.log(`${f}: ${matches?.length}`);
  }
}
