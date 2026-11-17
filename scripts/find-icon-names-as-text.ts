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

const files = walk('src');
const hits: { file: string; line: number; text: string }[] = [];

// Common icon names in our mockups that might be mistakenly rendered as text
const iconNames = [
  'check_circle', 'verified_user', 'arrow_forward', 'arrow_back', 'expand_more',
  'expand_less', 'keyboard_arrow_down', 'keyboard_arrow_up', 'keyboard_arrow_right',
  'keyboard_arrow_left', 'shopping_bag', 'shopping_cart', 'local_shipping',
  'two_wheeler', 'inventory_2', 'account_balance_wallet', 'grid_view', 'help_outline',
  'support_agent', 'shield_lock', 'sync_alt', 'notifications', 'favorite_border',
  'local_fire_department', 'storefront', 'receipt_long', 'fact_check', 'qr_code_scanner'
];

for (const f of files) {
  const lines = fs.readFileSync(f, 'utf-8').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip imports, Icon component props, comments, or class definitions
    if (line.includes('<Icon') || line.includes('icon=') || line.includes('icon:') || line.includes('import ') || line.includes('material-symbols-outlined')) {
      continue;
    }
    for (const icon of iconNames) {
      // Check if icon is in JSX text node: >check_circle< or {'check_circle'} or `check_circle`
      const regex = new RegExp(`>[\\s]*${icon}[\\s]*<|\\{\\s*['"\`]${icon}['"\`]\\s*\\}`, 'i');
      if (regex.test(line)) {
        hits.push({ file: f, line: i + 1, text: line.trim() });
      }
    }
  }
}

console.log(`Found ${hits.length} occurrences of icon names rendered as text:`);
for (const h of hits) {
  console.log(`[${h.file}:${h.line}] ${h.text}`);
}
