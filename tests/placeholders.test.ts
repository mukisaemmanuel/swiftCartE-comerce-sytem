import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_SELLERS } from '../src/data/mockData';

describe('Quality Gate: Placeholder Assets Check', () => {
  const publicDir = path.resolve('public');

  it('ensures every /placeholders/... path referenced in src/ exists in public/placeholders/', () => {
    const srcDir = path.resolve('src');
    const referencedPlaceholders = new Set<string>();

    function scanDir(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(fullPath);
        } else if (/\.(tsx?|jsx?|css|html)$/.test(entry.name)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          const matches = content.match(/\/placeholders\/[a-zA-Z0-9_\-\.]+\.svg/g);
          if (matches) {
            matches.forEach((m) => referencedPlaceholders.add(m));
          }
        }
      }
    }

    scanDir(srcDir);

    expect(referencedPlaceholders.size).toBeGreaterThan(0);

    const missingFiles: string[] = [];
    for (const relPath of referencedPlaceholders) {
      const diskPath = path.join(publicDir, relPath.replace(/^\//, ''));
      if (!fs.existsSync(diskPath)) {
        missingFiles.push(`${relPath} (expected at ${diskPath})`);
      }
    }

    expect(missingFiles).toEqual([]);
  });

  it('ensures every image path used by mockData and category data actually exists on disk', () => {
    const pathsToCheck = new Set<string>();

    // 1. Categories
    for (const cat of MOCK_CATEGORIES) {
      if (cat.imageUrl) pathsToCheck.add(cat.imageUrl);
    }

    // 2. Products
    for (const prod of MOCK_PRODUCTS) {
      if (prod.images) {
        for (const img of prod.images) {
          pathsToCheck.add(img);
        }
      }
    }

    // 3. Sellers
    for (const seller of MOCK_SELLERS) {
      if (seller.logoUrl) pathsToCheck.add(seller.logoUrl);
      if (seller.bannerUrl) pathsToCheck.add(seller.bannerUrl);
    }

    expect(pathsToCheck.size).toBeGreaterThan(0);

    const missingOnDisk: string[] = [];
    for (const p of pathsToCheck) {
      const cleanPath = p.replace(/^\//, '');
      const fullDiskPath = path.join(publicDir, cleanPath);
      if (!fs.existsSync(fullDiskPath)) {
        missingOnDisk.push(`${p} -> missing at ${fullDiskPath}`);
      }
    }

    expect(missingOnDisk).toEqual([]);
  });
});
