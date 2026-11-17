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
let modifiedCount = 0;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  const original = content;

  // Replace /brand/... with `${assetBase}/brand/...` if inside JSX src
  content = content.replace(
    /src="\/brand\/swiftcart-logo-icon\.png"/g,
    'src={`${assetBase}/brand/swiftcart-logo-icon.png`}'
  );
  content = content.replace(
    /src="\/brand\/swiftcart-logo-icon-white\.png"/g,
    'src={`${assetBase}/brand/swiftcart-logo-icon-white.png`}'
  );

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8');
    modifiedCount++;
  }
}

console.log(`Updated logos in ${modifiedCount} buyer files to reference \${assetBase}/brand/...`);
