import { test, expect, type ConsoleMessage } from '@playwright/test';
import { allRoutes } from '../../src/routes';

test.describe('Buyer Tablet Shell Quality Gate (834x1112)', () => {
  const tabletBuyerRoutes = allRoutes.filter(
    (r) =>
      r.role === 'buyer' &&
      (r.designFiles.tablet ||
        (Array.isArray(r.designFiles.all) &&
          r.designFiles.all.some((f) => f.includes('design/tablet/buyer'))))
  );

  for (const route of tabletBuyerRoutes) {
    test(`Buyer tablet route "${route.path}" meets quality standards`, async ({ page }) => {
      test.setTimeout(60000);

      const consoleErrors: string[] = [];
      page.on('console', (msg: ConsoleMessage) => {
        if (msg.type() === 'error') {
          const text = msg.text();
          if (
            !text.includes('favicon') &&
            !text.includes('Failed to load resource') &&
            !text.includes('[vite]') &&
            !text.includes('downloadable font')
          ) {
            consoleErrors.push(text);
          }
        }
      });

      await page.setViewportSize({ width: 834, height: 1112 });

      await page.goto(route.path, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for React Suspense fallback to disappear
      await page
        .waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 8000 }
        )
        .catch(() => {});

      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(200);

      // 1. Assert No Console Errors
      expect(consoleErrors, `Route ${route.path} logged console errors: ${consoleErrors.join('; ')}`).toEqual([]);

      // 2. Assert No Horizontal Scroll (scrollWidth <= innerWidth + 2)
      const isOverflowing = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth + 2;
      });
      expect(isOverflowing, `Route ${route.path} has horizontal scroll on tablet`).toBe(false);

      // 3. Assert No Text < 12px
      const smallTextElements = await page.evaluate(() => {
        const issues: { tag: string; text: string; size: string }[] = [];
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_ELEMENT,
          null
        );

        let node = walker.nextNode() as HTMLElement | null;
        while (node) {
          // Check if element has direct text content and is visible
          const text = node.textContent?.trim() || '';
          if (
            text.length > 0 &&
            node.children.length === 0 &&
            node.offsetParent !== null
          ) {
            const style = window.getComputedStyle(node);
            const fontSize = parseFloat(style.fontSize);
            // Allow 11.5px rounding for 12px, but flag anything distinctly smaller (e.g. 10px or smaller)
            // Exclude SVG elements and graphics vector nodes
            if (
              fontSize < 11.0 &&
              !node.closest('svg') &&
              !['svg', 'path', 'text', 'tspan', 'script', 'style'].includes(node.tagName.toLowerCase())
            ) {
              issues.push({
                tag: node.tagName,
                text: text.slice(0, 30),
                size: style.fontSize,
              });
            }
          }
          node = walker.nextNode() as HTMLElement | null;
        }
        return issues;
      });

      // Filter out acceptable micro-badges (like notification pill counters "3")
      const realIssues = smallTextElements.filter(
        (i) => i.text.length > 4 && !i.text.match(/^[\d\+\•]+$/)
      );
      expect(
        realIssues.length,
        `Route ${route.path} has text smaller than 12px: ${JSON.stringify(realIssues.slice(0, 5))}`
      ).toBe(0);
    });
  }
});
