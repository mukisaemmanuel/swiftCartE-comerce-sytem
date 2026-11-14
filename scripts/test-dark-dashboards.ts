import { preview } from 'vite';
import { chromium } from '@playwright/test';

function getLuminance(rgbStr: string): number {
  const m = rgbStr.match(/\d+(\.\d+)?/g);
  if (!m || m.length < 3) return 1;
  const r = parseFloat(m[0]) / 255;
  const g = parseFloat(m[1]) / 255;
  const b = parseFloat(m[2]) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function run() {
  console.log('--- Starting Dark Dashboards Playwright Verification ---');
  let server: any;
  let baseUrl = 'http://127.0.0.1:4173';

  try {
    server = await preview({ preview: { port: 4173, host: '127.0.0.1' } });
    baseUrl = (server.resolvedUrls?.local[0] || 'http://127.0.0.1:4173').replace(/\/$/, '');
  } catch (err) {
    console.log('Using fallback baseUrl:', baseUrl, err);
  }

  const browser = await chromium.launch({ headless: true });

  const dashboardRoutes = [
    { role: 'seller', path: '/seller/overview-seller' },
    { role: 'admin', path: '/admin/overview-admin' },
    { role: 'super-admin', path: '/super-admin/overview-super-admin' },
    { role: 'rider', path: '/rider/overview-rider' },
    { role: 'hub', path: '/hub/overview-hub-agent' },
  ];

  let passed = 0;
  let failed = 0;

  for (const { role, path } of dashboardRoutes) {
    console.log(`\nTesting Role "${role}" at ${path}...`);
    // 1. Fresh context per screen, no saved theme or storage
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();

    try {
      await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle', timeout: 15000 });

      // 2. Assert page background is dark (luminance < 0.2)
      const darkBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
      const darkLum = getLuminance(darkBg);
      const dataTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

      console.log(`  Initial background: ${darkBg} (luminance: ${darkLum.toFixed(3)}), data-theme: "${dataTheme}"`);
      if (darkLum >= 0.2) {
        throw new Error(`Expected dark background (luminance < 0.2), got ${darkLum.toFixed(3)} (${darkBg})`);
      }
      if (dataTheme !== 'dark') {
        throw new Error(`Expected data-theme="dark", got "${dataTheme}"`);
      }

      // 3. Click the theme toggle button in the top bar
      const toggleBtn = page.locator('.theme-toggle-btn').first();
      await toggleBtn.waitFor({ state: 'visible', timeout: 5000 });
      await toggleBtn.click();
      await page.waitForTimeout(300);

      // 4. Assert page background is light (luminance >= 0.5)
      const lightBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
      const lightLum = getLuminance(lightBg);
      const lightTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

      console.log(`  Toggled background: ${lightBg} (luminance: ${lightLum.toFixed(3)}), data-theme: "${lightTheme}"`);
      if (lightLum < 0.5) {
        throw new Error(`Expected light background (luminance >= 0.5), got ${lightLum.toFixed(3)} (${lightBg})`);
      }
      if (lightTheme !== 'light') {
        throw new Error(`Expected data-theme="light", got "${lightTheme}"`);
      }

      // 5. Reload and assert persisted
      await page.reload({ waitUntil: 'networkidle', timeout: 15000 });
      const reloadedBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
      const reloadedLum = getLuminance(reloadedBg);
      const reloadedTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

      console.log(`  Reloaded background: ${reloadedBg} (luminance: ${reloadedLum.toFixed(3)}), data-theme: "${reloadedTheme}"`);
      if (reloadedLum < 0.5) {
        throw new Error(`Expected persisted light background after reload, got ${reloadedLum.toFixed(3)} (${reloadedBg})`);
      }
      if (reloadedTheme !== 'light') {
        throw new Error(`Expected persisted data-theme="light" after reload, got "${reloadedTheme}"`);
      }

      console.log(`  ✓ PASS: Role "${role}" dark default, toggle, and persistence verified.`);
      passed++;
    } catch (err: any) {
      console.error(`  ✗ FAIL: Role "${role}": ${err.message}`);
      failed++;
    } finally {
      await context.close();
    }
  }

  // Buyer Test: light only, no toggle
  console.log('\nTesting Role "buyer" at / ...');
  const buyerContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  const buyerPage = await buyerContext.newPage();
  try {
    await buyerPage.goto(`${baseUrl}/`, { waitUntil: 'networkidle', timeout: 15000 });
    const buyerBg = await buyerPage.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
    const buyerLum = getLuminance(buyerBg);
    const buyerTheme = await buyerPage.evaluate(() => document.documentElement.getAttribute('data-theme'));
    const toggleCount = await buyerPage.locator('.theme-toggle-btn').count();

    console.log(`  Buyer background: ${buyerBg} (luminance: ${buyerLum.toFixed(3)}), data-theme: "${buyerTheme}", toggle buttons: ${toggleCount}`);
    if (buyerLum < 0.5) {
      throw new Error(`Expected light background for buyer, got luminance ${buyerLum.toFixed(3)}`);
    }
    if (buyerTheme !== 'light') {
      throw new Error(`Expected buyer data-theme="light", got "${buyerTheme}"`);
    }
    if (toggleCount !== 0) {
      throw new Error(`Expected 0 theme toggle buttons on buyer view, found ${toggleCount}`);
    }

    console.log('  ✓ PASS: Buyer is light and has no theme toggle.');
    passed++;
  } catch (err: any) {
    console.error(`  ✗ FAIL: Buyer test: ${err.message}`);
    failed++;
  } finally {
    await buyerContext.close();
  }

  await browser.close();
  if (server) {
    server.httpServer.close();
  }

  console.log(`\n========================================`);
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
