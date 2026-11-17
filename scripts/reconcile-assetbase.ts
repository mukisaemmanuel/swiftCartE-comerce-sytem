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
let fixedCount = 0;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  const hasAssetBase = content.includes('const assetBase') || content.includes('assetBase =');
  const original = content;

  if (!hasAssetBase) {
    // If file doesn't have assetBase defined, use /brand/... directly
    content = content.replace(/`\$\{assetBase\}\/brand\/([^`]+)`/g, '"/brand/$1"');
    content = content.replace(/\{`\$\{assetBase\}\/brand\/([^`]+)`\}/g, '"/brand/$1"');
  } else {
    // If file has assetBase defined, ensure any /brand/ uses ${assetBase}/brand/ so assetBase is read
    content = content.replace(/src="\/brand\/([^"]+)"/g, 'src={`${assetBase}/brand/$1`}');
  }

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf-8');
    fixedCount++;
  }
}

console.log(`Reconciled assetBase in ${fixedCount} files.`);
