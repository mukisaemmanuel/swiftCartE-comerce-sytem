import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Security Gate: Handover Delivery Code Confidentiality', () => {
  it('handover code references only exist on buyer screens, never in seller/admin/rider screens', () => {
    const srcDir = path.resolve(__dirname, '../src');

    function scanFiles(dir: string): string[] {
      const results: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results.push(...scanFiles(fullPath));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          results.push(fullPath);
        }
      }
      return results;
    }

    const allSrcFiles = scanFiles(srcDir);

    // Filter files in seller, admin, rider, or hub directories
    const nonBuyerFiles = allSrcFiles.filter((filePath) => {
      const normalized = filePath.replace(/\\/g, '/');
      return (
        normalized.includes('/seller/') ||
        normalized.includes('/admin/') ||
        normalized.includes('/rider/') ||
        normalized.includes('/hub/')
      );
    });

    for (const filePath of nonBuyerFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(
        content.includes('handoverCode'),
        `Security Violation: ${filePath} contains 'handoverCode'. Handover codes must ONLY appear on the buyer side!`
      ).toBe(false);
    }
  });

  it('seller pages, data, and domain types never expose buyer phone, full street address, or delivery codes', () => {
    const srcDir = path.resolve(__dirname, '../src');

    function scanFiles(dir: string): string[] {
      const results: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results.push(...scanFiles(fullPath));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          results.push(fullPath);
        }
      }
      return results;
    }

    const allSrcFiles = scanFiles(srcDir);
    const sellerFiles = allSrcFiles.filter((filePath) => {
      const normalized = filePath.replace(/\\/g, '/');
      return (
        normalized.includes('/pages/seller/') ||
        normalized.includes('/data/seller/') ||
        normalized.includes('seller.types.ts')
      );
    });

    const prohibitedTokens = [
      'handoverCode',
      'deliveryCode',
      'buyerPhone',
      'streetAddress',
      'buyerAddress',
      'deliveryOtp',
    ];

    for (const filePath of sellerFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      for (const token of prohibitedTokens) {
        expect(
          content.includes(token),
          `Privacy/Security Violation: ${filePath} contains '${token}'. Sellers must only receive buyer first name and district!`
        ).toBe(false);
      }
    }
  });
});

