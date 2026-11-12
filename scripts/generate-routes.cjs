const fs = require('fs');
const path = require('path');

const indexContent = fs.readFileSync('design/INDEX.md', 'utf8');
const lines = indexContent.split('\n');

const roles = ['buyer', 'seller', 'admin', 'super-admin', 'rider', 'hub'];

// Collect all rows from INDEX.md
const rows = [];
let currentRole = '';

for (const line of lines) {
  if (line.startsWith('## ')) {
    const match = line.match(/##\s+(mobile|tablet|desktop)\s+\/\s+([\w-]+)/);
    if (match) {
      currentRole = match[2];
    }
  } else if (line.startsWith('| design/')) {
    const parts = line.split('|').map((p) => p.trim());
    const folder = parts[1];
    const segs = folder.split('/');
    if (segs.length >= 4) {
      rows.push({
        size: segs[1],
        role: segs[2],
        screen: segs[3],
        folder,
      });
    }
  }
}

console.log('Total design folders parsed:', rows.length);

// Normalize screen name to group mobile, tablet, and desktop together
function getGroupKey(screen) {
  let key = screen
    .replace(/_swiftcart_(mobile|tablet|desktop)(_light|_dark)?/gi, '')
    .replace(/_(mobile|tablet|desktop)(_light|_dark)?/gi, '')
    .replace(/_swiftcart_uganda/gi, '')
    .replace(/_swiftcart/gi, '')
    .replace(/_uganda/gi, '')
    .replace(/_light$/gi, '')
    .replace(/_dark$/gi, '')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');

  return key;
}

function sanitizeName(str) {
  return str
    .replace(/\btamper[-_ ]bag\b/gi, 'Package')
    .replace(/\btamper[-_ ]seal\b/gi, 'Package Seal')
    .replace(/\barbitration\b/gi, 'Dispute')
    .replace(/\bkill[-_ ]switch\b/gi, 'Maintenance Mode')
    .replace(/\bhsm\b/gi, 'Vault')
    .replace(/\bvat\b/gi, 'Tax')
    .replace(/\bura\b/gi, 'Revenue')
    .replace(/\befris\b/gi, 'Receipt')
    .replace(/\bpatricia\s+namubiru\b/gi, 'Support Agent')
    .replace(/\bstanbic\b/gi, 'Escrow')
    .replace(/\benclave\b/gi, 'Vault')
    .replace(/\bhardware[-_ ]token\b/gi, 'Security Key')
    .replace(/\bdual[-_ ]key\b/gi, 'Two Factor')
    .replace(/\broot[-_ ]key\b/gi, 'Master Key')
    .replace(/\bkey[-_ ]rotation\b/gi, 'Key Refresh')
    .replace(/\battestation\b/gi, 'Verification')
    .replace(/\bcryptographic\b/gi, 'Secure')
    .replace(/\bledger[-_ ]hash\b/gi, 'Record Hash')
    .replace(/\bswiftcoins\b/gi, 'Loyalty Points')
    .replace(/\bafterpay\b/gi, 'Pay Later')
    .replace(/\bgoogle[-_ ]pay\b/gi, 'Digital Wallet')
    .replace(/\binstalments?\b/gi, 'Payments')
    .replace(/\bstatutory\b/gi, 'Standard')
    .replace(/\bregulated\b/gi, 'Protected')
    .replace(/\bchief\s+compliance\s+officer\b/gi, 'Compliance Lead')
    .replace(/\bboard\s+resolution\b/gi, 'Admin Decision')
    .replace(/\baffidavit\b/gi, 'Signed Statement')
    .replace(/\bbou\b/gi, 'National Bank')
    .replace(/\bbank\s+of\s+uganda\b/gi, 'Central Bank')
    .replace(/\bnps\b/gi, 'Payment System');
}

function humanize(key) {
  const raw = key
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return sanitizeName(raw);
}

// Group by role and groupKey
const grouped = {};
for (const r of roles) {
  grouped[r] = new Map();
}

for (const row of rows) {
  const role = row.role;
  const groupKey = getGroupKey(row.screen);
  const targetRole = role === 'super-admin' ? 'super-admin' : role;

  if (!grouped[targetRole].has(groupKey)) {
    grouped[targetRole].set(groupKey, {
      key: groupKey,
      role: targetRole,
      name: humanize(groupKey),
      mobile: null,
      tablet: null,
      desktop: null,
      all: [],
    });
  }

  const entry = grouped[targetRole].get(groupKey);
  entry.all.push(row.folder);
  if (row.size === 'mobile' && !entry.mobile) entry.mobile = row.folder;
  if (row.size === 'tablet' && !entry.tablet) entry.tablet = row.folder;
  if (row.size === 'desktop' && !entry.desktop) entry.desktop = row.folder;
}

// Generate path per group
function makePath(role, key) {
  let cleanKey = key
    .replace(/tamper_bag/gi, 'package')
    .replace(/tamper_seal/gi, 'seal')
    .replace(/arbitration/gi, 'dispute')
    .replace(/kill_switch/gi, 'maintenance-mode')
    .replace(/hsm/gi, 'vault')
    .replace(/vat/gi, 'tax')
    .replace(/ura/gi, 'revenue')
    .replace(/efris/gi, 'receipt')
    .replace(/stanbic/gi, 'escrow')
    .replace(/google_pay/gi, 'digital-wallet')
    .replace(/afterpay/gi, 'pay-later')
    .replace(/instalments/gi, 'payments');

  if (role === 'buyer') {
    if (cleanKey === 'home' || cleanKey === 'home_marketplace_2' || cleanKey === 'home_marketplace_3') return '/';
    return `/${cleanKey.replace(/_/g, '-')}`;
  }
  return `/${role}/${cleanKey.replace(/_/g, '-')}`;
}

// Ensure unique paths
for (const r of Object.keys(grouped)) {
  const usedPaths = new Set();
  for (const [key, entry] of grouped[r].entries()) {
    let p = makePath(entry.role, key);
    if (usedPaths.has(p)) {
      p = `${p}-alt`;
    }
    usedPaths.add(p);
    entry.path = p;
  }
}

// Output statistics
let totalCovered = 0;
for (const r of Object.keys(grouped)) {
  let count = 0;
  for (const entry of grouped[r].values()) {
    count += entry.all.length;
  }
  totalCovered += count;
  console.log(`${r}: ${grouped[r].size} unique routes (covering ${count} design folders)`);
}
console.log('Total design folders covered:', totalCovered);

// Write TypeScript files
function generateTsFile(roleName, entries, exportName) {
  const code = `import type { RouteDefinition } from './types';

export const ${exportName}: RouteDefinition[] = [
${entries
  .map(
    (e) => `  {
    path: ${JSON.stringify(e.path)},
    name: ${JSON.stringify(e.name)},
    role: ${JSON.stringify(e.role)},
    designFiles: {
      ${e.mobile ? `mobile: ${JSON.stringify(e.mobile)},` : ''}
      ${e.tablet ? `tablet: ${JSON.stringify(e.tablet)},` : ''}
      ${e.desktop ? `desktop: ${JSON.stringify(e.desktop)},` : ''}
      all: ${JSON.stringify(e.all, null, 6).trim()},
    },
  },`
  )
  .join('\n')}
];
`;
  return code;
}

// Buyer
fs.writeFileSync(
  'src/routes/buyer.ts',
  generateTsFile('buyer', Array.from(grouped['buyer'].values()), 'buyerRoutes')
);

// Seller
fs.writeFileSync(
  'src/routes/seller.ts',
  generateTsFile('seller', Array.from(grouped['seller'].values()), 'sellerRoutes')
);

// Admin & Super Admin
const adminEntries = [
  ...Array.from(grouped['admin'].values()),
  ...Array.from(grouped['super-admin'].values()),
];
fs.writeFileSync(
  'src/routes/admin.ts',
  generateTsFile('admin', adminEntries, 'adminRoutes')
);

// Rider
fs.writeFileSync(
  'src/routes/rider.ts',
  generateTsFile('rider', Array.from(grouped['rider'].values()), 'riderRoutes')
);

// Hub
fs.writeFileSync(
  'src/routes/hub.ts',
  generateTsFile('hub', Array.from(grouped['hub'].values()), 'hubRoutes')
);

// Combine in index.ts
const indexTs = `import type { RouteDefinition, UserRole } from './types';
import { buyerRoutes } from './buyer';
import { sellerRoutes } from './seller';
import { adminRoutes } from './admin';
import { riderRoutes } from './rider';
import { hubRoutes } from './hub';

export * from './types';
export * from './buyer';
export * from './seller';
export * from './admin';
export * from './rider';
export * from './hub';

export const allRoutes: RouteDefinition[] = [
  ...buyerRoutes,
  ...sellerRoutes,
  ...adminRoutes,
  ...riderRoutes,
  ...hubRoutes,
];

export const getRoutesByRole = (role: UserRole): RouteDefinition[] => {
  if (role === 'admin' || role === 'super-admin') {
    return adminRoutes.filter((r) => r.role === role || r.role === 'admin');
  }
  return allRoutes.filter((r) => r.role === role);
};

export const findRouteByPath = (path: string): RouteDefinition | undefined => {
  return allRoutes.find((r) => r.path === path);
};
`;

fs.writeFileSync('src/routes/index.ts', indexTs);
console.log('Routes generated successfully.');
