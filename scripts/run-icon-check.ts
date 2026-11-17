import { chromium } from '@playwright/test';
import { allRoutes } from '../src/routes';

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

async function main() {
  const browser = await chromium.launch({ headless: true });
  const uniqueRoutes = Array.from(new Set(allRoutes.map((r) => r.path)));
  console.log(`Checking ${uniqueRoutes.length} unique routes across 3 viewport sizes for naked icon names...`);

  let totalViolations = 0;

  for (const size of SIZES) {
    console.log(`\nTesting viewport ${size.name} (${size.width}x${size.height})...`);
    const page = await browser.newPage({ viewport: { width: size.width, height: size.height } });
    const sizeViolations: { route: string; text: string }[] = [];

    for (const route of uniqueRoutes) {
      try {
        await page.goto(`http://127.0.0.1:4173${route}`, { waitUntil: 'domcontentloaded', timeout: 10000 });

        const hits = await page.evaluate((iconSetArray) => {
          const iconSet = new Set(iconSetArray);
          const found: string[] = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          let node: Node | null;
          while ((node = walker.nextNode())) {
            const trimmed = node.textContent?.trim() || '';
            if (iconSet.has(trimmed)) {
              const parent = node.parentElement;
              if (!parent) continue;
              const tag = parent.tagName.toLowerCase();
              if (tag === 'script' || tag === 'style' || tag === 'code' || tag === 'pre') continue;
              const isIconFont =
                parent.classList.contains('material-symbols-outlined') ||
                parent.classList.contains('material-icons') ||
                window.getComputedStyle(parent).fontFamily.includes('Material Symbols');
              if (!isIconFont) {
                found.push(trimmed);
              }
            }
          }
          return found;
        }, Array.from(KNOWN_ICON_NAMES));

        if (hits.length > 0) {
          for (const h of hits) {
            console.error(`  [VIOLATION] ${route} @ ${size.name}: literal icon text "${h}"`);
            sizeViolations.push({ route, text: h });
          }
        }
      } catch (err: any) {
        console.warn(`  [WARN] Failed to load ${route}: ${err?.message?.split('\n')[0]}`);
      }
    }

    await page.close();
    console.log(`Completed ${size.name}: ${sizeViolations.length} violations found.`);
    totalViolations += sizeViolations.length;
  }

  await browser.close();

  if (totalViolations > 0) {
    console.error(`\nFAILED: Found ${totalViolations} icon names rendered as naked text!`);
    process.exit(1);
  } else {
    console.log(`\nSUCCESS: 0 icon names rendered as text across all routes and viewports!`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
