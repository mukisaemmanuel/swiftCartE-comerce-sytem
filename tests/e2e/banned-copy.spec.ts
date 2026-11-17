import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { allRoutes } from '../../src/routes';

// Banned patterns for UI and data scanning
const BANNED_PATTERNS: { name: string; regex: RegExp }[] = [
  { name: 'escrow', regex: /\bescrows?\b/i },
  { name: 'vault (payment)', regex: /\bvaults?\b/i },
  { name: 'custody', regex: /\bcustody\b/i },
  { name: 'locked funds / ringfenced', regex: /\b(locked funds|ringfenced)\b/i },
  { name: 'Bank of Uganda / BoU', regex: /\b(Bank of Uganda|BoU|BOU)\b/i },
  { name: 'NPS Act', regex: /\b(NPS|National Payment Systems?( Act)?)\b/i },
  { name: 'Stanbic', regex: /\bStanbic\b/i },
  { name: 'HSM', regex: /\bHSM(-[A-Z0-9]+)?\b/i },
  { name: 'enclave', regex: /\benclaves?\b/i },
  { name: 'kill switch', regex: /\bkill[- ]switch\b/i },
  { name: 'statutory', regex: /\bstatutory\b/i },
  { name: 'attestation', regex: /\battestation\b/i },
  { name: 'arbitration', regex: /\barbitration\b/i },
  { name: 'SwiftCoins', regex: /\bSwiftCoins?\b/i },
  { name: 'Afterpay', regex: /\bAfterpay\b/i },
  { name: 'Google Pay', regex: /\bGoogle Pay\b/i },
  { name: 'Apple Pay', regex: /\bApple Pay\b/i },
  { name: 'PayPal', regex: /\bPayPal\b/i },
  { name: 'Lagos', regex: /\bLagos\b/i },
  { name: 'NY / New York', regex: /\b(NY|New York)\b/i },
  { name: 'Dollar amounts', regex: /\$\d+(\.\d+)?/ },
  { name: 'tamper seal/bag', regex: /\btamper[- ](seal|bag)s?\b/i },
  { name: '100% guaranteed', regex: /\b100% guaranteed\b/i },
  { name: 'insured', regex: /\b(insured|underwritten 100%)\b/i },
  { name: 'USSD prompt code', regex: /\*(165|185|175)\*?[0-9#]*/ },
  { name: 'regulated', regex: /\bregulated\b/i },
  { name: 'licensed', regex: /\blicensed\b/i },
  { name: 'Data Protection Act', regex: /\bData Protection( and Privacy)? Act\b/i },
  { name: 'VAT / URA / EFRIS', regex: /\b(VAT|URA|EFRIS)\b/ },
  { name: 'Alex (name)', regex: /\bAlex\b/ },
];

const SIZES = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('Banned Copy Guard (Permanent Quality Gate)', () => {
  // Test 1: Check source data files directly
  test('source data files must contain 0 banned copy items', () => {
    const dataDir = path.resolve('src/data');
    const dataFiles: string[] = [];

    function findFiles(dir: string) {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) findFiles(full);
        else if (/\.(ts|tsx|json)$/.test(entry.name)) dataFiles.push(full);
      }
    }
    findFiles(dataDir);

    const violations: { file: string; line: number; pattern: string; snippet: string }[] = [];

    for (const file of dataFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        for (const p of BANNED_PATTERNS) {
          if (p.regex.test(line)) {
            violations.push({
              file: path.relative(process.cwd(), file).replace(/\\/g, '/'),
              line: idx + 1,
              pattern: p.name,
              snippet: line.trim().slice(0, 100),
            });
          }
        }
      });
    }

    if (violations.length > 0) {
      console.error('Source data violations:', violations);
    }
    expect(violations, `Found ${violations.length} banned copy violations in src/data/`).toEqual([]);
  });

  // Test 2: Check visible text across every route at 390, 834, 1440
  const routesToTest = Array.from(new Set(allRoutes.map((r) => r.path)));

  for (const size of SIZES) {
    test(`scan all routes at ${size.name} (${size.width}px) for banned copy`, async ({ page }) => {
      test.setTimeout(300000); // 5 min for all routes
      await page.setViewportSize({ width: size.width, height: size.height });

      const violations: { route: string; size: string; pattern: string; text: string }[] = [];

      for (const route of routesToTest) {
        const routeObj = allRoutes.find((r) => r.path === route);
        if (routeObj?.role && routeObj.role !== 'buyer') {
          await page.addInitScript((roleName) => {
            localStorage.setItem('swiftcart_user_role', roleName);
          }, routeObj.role);
        }

        await page.goto(route, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(60);

        // Extract visible text from body
        const visibleText = await page.evaluate(() => {
          // Collect text from all visible leaf nodes
          const elements = document.querySelectorAll('body *');
          const texts: string[] = [];
          for (const el of Array.from(elements)) {
            if (['script', 'style', 'svg', 'path'].includes(el.tagName.toLowerCase())) continue;
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;
            // Get leaf or direct text
            if (el.children.length === 0) {
              const t = (el.textContent || '').trim();
              if (t) texts.push(t);
            }
          }
          return texts.join(' \n ');
        });

        for (const p of BANNED_PATTERNS) {
          const match = visibleText.match(p.regex);
          if (match) {
            // Check context of match
            violations.push({
              route,
              size: size.name,
              pattern: p.name,
              text: match[0],
            });
          }
        }
      }

      if (violations.length > 0) {
        console.error(`Banned copy violations at ${size.name}:`, violations);
      }
      expect(violations, `Found ${violations.length} banned copy violations in visible text at ${size.name}`).toEqual([]);
    });
  }
});
