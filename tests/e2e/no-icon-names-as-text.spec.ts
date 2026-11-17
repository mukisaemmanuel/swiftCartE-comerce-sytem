import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { allRoutes } from '../../src/routes';

const iconDir = path.resolve('node_modules/@material-symbols/svg-400/outlined');
const allIconFiles = fs.readdirSync(iconDir).map((f) => f.replace(/\.svg$/, ''));
const ALL_MATERIAL_ICONS = new Set(allIconFiles);

const SIZES = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('No Icon Names Rendered as Text', () => {
  const routesToTest = Array.from(new Set(allRoutes.map((r) => r.path)));

  for (const size of SIZES) {
    test(`routes at ${size.name} (${size.width}px) have no icon names as text`, async ({ page }) => {
      test.setTimeout(300000); // 5 min for scanning all routes
      await page.setViewportSize({ width: size.width, height: size.height });

      const violations: { route: string; size: string; tag: string; text: string; html: string }[] = [];

      for (const route of routesToTest) {
        const routeObj = allRoutes.find((r) => r.path === route);
        if (routeObj?.role && routeObj.role !== 'buyer') {
          await page.addInitScript((roleName) => {
            localStorage.setItem('swiftcart_user_role', roleName);
          }, routeObj.role);
        }

        await page.goto(route, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(100);

        const hits = await page.evaluate((iconsArray) => {
          const iconSet = new Set(iconsArray);
          const snakeRegex = /^[a-z]+(_[a-z]+)+$/;
          const found: { tag: string; text: string; html: string }[] = [];

          const allElements = document.querySelectorAll('*');
          for (const el of Array.from(allElements)) {
            // Must be leaf element (no child element nodes)
            if (el.children.length > 0) continue;

            const tag = el.tagName.toLowerCase();
            if (['script', 'style', 'code', 'pre', 'svg', 'path', 'symbol'].includes(tag)) continue;

            // Must be visible
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;
            if (el.clientWidth === 0 && el.clientHeight === 0) continue;

            // Must NOT be an icon font
            const isIconFont =
              el.classList.contains('material-symbols-outlined') ||
              el.classList.contains('material-icons') ||
              style.fontFamily.includes('Material Symbols') ||
              style.fontFamily.includes('Material Icons');
            if (isIconFont) continue;

            const text = (el.textContent || '').trim();
            if (!text) continue;

            // Check if text matches /^[a-z]+(_[a-z]+)+$/ or any name in @material-symbols/svg-400
            if (snakeRegex.test(text) || iconSet.has(text)) {
              found.push({
                tag,
                text,
                html: el.outerHTML.slice(0, 100),
              });
            }
          }
          return found;
        }, Array.from(ALL_MATERIAL_ICONS));

        for (const hit of hits) {
          violations.push({ route, size: size.name, ...hit });
        }
      }

      expect(
        violations,
        `Found icon names rendered as raw text: ${JSON.stringify(violations, null, 2)}`
      ).toHaveLength(0);
    });
  }
});
