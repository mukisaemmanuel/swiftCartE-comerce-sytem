import { test, expect } from '@playwright/test';
import { allRoutes } from '../../src/routes';

const SIZES = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];

const KNOWN_ICON_NAMES = new Set([
  'check_circle',
  'verified_user',
  'arrow_forward',
  'arrow_back',
  'expand_more',
  'expand_less',
  'keyboard_arrow_down',
  'keyboard_arrow_up',
  'keyboard_arrow_right',
  'keyboard_arrow_left',
  'shopping_bag',
  'shopping_cart',
  'local_shipping',
  'two_wheeler',
  'inventory_2',
  'account_balance_wallet',
  'grid_view',
  'help_outline',
  'support_agent',
  'shield_lock',
  'sync_alt',
  'favorite_border',
  'local_fire_department',
  'storefront',
  'receipt_long',
  'fact_check',
  'qr_code_scanner',
  'swap_horiz',
  'content_copy',
  'more_vert',
  'more_horiz',
  'filter_list',
  'chevron_right',
  'chevron_left',
]);

test.describe('No Icon Names Rendered as Text', () => {
  // Unique paths across all roles
  const routesToTest = Array.from(new Set(allRoutes.map((r) => r.path)));

  for (const size of SIZES) {
    test(`routes at ${size.name} (${size.width}px) have no icon names as text`, async ({ page }) => {
      test.setTimeout(300000); // 5 min for scanning all routes
      await page.setViewportSize({ width: size.width, height: size.height });

      const violations: { route: string; size: string; text: string }[] = [];

      for (const route of routesToTest) {
        await page.goto(route, { waitUntil: 'domcontentloaded' });

        const rawIconHits = await page.evaluate((iconSetArray) => {
          const iconSet = new Set(iconSetArray);
          const hits: string[] = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            const trimmed = node.textContent?.trim() || '';
            if (iconSet.has(trimmed)) {
              const parent = node.parentElement;
              if (!parent) continue;
              const tag = parent.tagName.toLowerCase();
              if (tag === 'script' || tag === 'style') continue;
              const isIconFont =
                parent.classList.contains('material-symbols-outlined') ||
                parent.classList.contains('material-icons') ||
                window.getComputedStyle(parent).fontFamily.includes('Material Symbols');
              if (!isIconFont) {
                if (tag === 'code' || tag === 'pre') continue;
                hits.push(trimmed);
              }
            }
          }
          return hits;
        }, Array.from(KNOWN_ICON_NAMES));

        for (const hit of rawIconHits) {
          violations.push({ route, size: size.name, text: hit });
        }
      }

      expect(
        violations,
        `Found icon names rendered as raw text: ${JSON.stringify(violations, null, 2)}`
      ).toHaveLength(0);
    });
  }
});
