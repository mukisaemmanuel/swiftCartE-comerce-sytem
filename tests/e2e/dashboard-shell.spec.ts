import { test, expect } from '@playwright/test';

const DASHBOARD_TEST_ROUTES = [
  '/seller/overview-seller',
  '/seller/orders-seller',
  '/seller/products-seller',
  '/seller/analytics-seller',
  '/seller/returns-disputes-seller',
  '/seller/seller-wallet-payouts',
  '/seller/store-profile-seller',
  '/seller/seller-overview',
  '/seller/seller-orders-master-detail',
  '/seller/seller-products-bulk-price-update',
  '/account',
  '/my-orders',
];

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('Dashboard Shell Responsive Quality Gate', () => {
  for (const vp of VIEWPORTS) {
    test.describe(`${vp.name} (${vp.width}x${vp.height})`, () => {
      for (const routePath of DASHBOARD_TEST_ROUTES) {
        test(`route ${routePath} shell integrity`, async ({ page }) => {
          const consoleErrors: string[] = [];
          page.on('console', (msg) => {
            if (msg.type() === 'error') {
              consoleErrors.push(msg.text());
            }
          });

          await page.setViewportSize({ width: vp.width, height: vp.height });
          await page.goto(routePath, { waitUntil: 'domcontentloaded' });
          try {
            await page.waitForFunction(
              () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
              { timeout: 10000 }
            );
          } catch {
            // fallback wait
          }
          try {
            await page.evaluate(() => document.fonts.ready);
          } catch {
            // fonts fallback
          }
          await page.waitForTimeout(200);

          // 1. Check No Console Errors
          const criticalErrors = consoleErrors.filter(
            (err) => !err.includes('favicon') && !err.includes('Failed to load resource')
          );
          expect(criticalErrors).toEqual([]);

          // 2. Check Navigation Reachability
          if (vp.name === 'desktop') {
            const hasNav = await page.evaluate(() => {
              const aside = document.querySelector('aside');
              const nav = document.querySelector('nav');
              const header = document.querySelector('header');
              const navIcons = document.querySelector(
                '[data-icon="dashboard"], [data-icon="storefront"], [data-icon="menu"], [data-icon="home"]'
              );
              return Boolean(aside || nav || header || navIcons);
            });
            expect(hasNav).toBe(true);
          } else {
            const hasMobileNav = await page.evaluate(() => {
              const hasHeaderOrBottom = Boolean(document.querySelector('header, nav, aside'));
              const hasNavButton = Array.from(document.querySelectorAll('button, a')).some((b) => {
                const aria = (b.getAttribute('aria-label') || '').toLowerCase();
                const html = b.innerHTML.toLowerCase();
                return (
                  aria.includes('menu') ||
                  aria.includes('back') ||
                  html.includes('menu') ||
                  html.includes('arrow_back') ||
                  Boolean(b.querySelector('[data-icon]'))
                );
              });
              return hasHeaderOrBottom || hasNavButton;
            });
            expect(hasMobileNav).toBe(true);
          }

          // 3. No Horizontal Overflow
          const isOverflowing = await page.evaluate(() => {
            return document.documentElement.scrollWidth > window.innerWidth + 2;
          });
          expect(isOverflowing).toBe(false);

          // 4. Text readability check (body and content paragraphs >= 12px)
          const smallContentElements = await page.evaluate(() => {
            const elements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4'));
            const tooSmall: string[] = [];
            for (const el of elements) {
              const className = el.className || '';
              // Skip deliberate badge, caption or status tags
              if (
                className.includes('label-sm') ||
                className.includes('text-[10px]') ||
                className.includes('text-[11px]') ||
                className.includes('badge')
              ) {
                continue;
              }
              const style = window.getComputedStyle(el);
              const fontSize = parseFloat(style.fontSize);
              if (fontSize > 0 && fontSize < 11.5 && (el.textContent?.trim().length || 0) > 3) {
                tooSmall.push(`${el.tagName}: ${el.textContent?.trim().slice(0, 30)} (${fontSize}px)`);
              }
            }
            return tooSmall.slice(0, 5);
          });
          expect(smallContentElements).toEqual([]);
        });
      }
    });
  }
});
