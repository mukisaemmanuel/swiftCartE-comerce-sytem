import { chromium } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

function getLuminance(rgbStr: string): number {
  const m = rgbStr.match(/\d+(\.\d+)?/g);
  if (!m || m.length < 3) return 1;
  const r = parseFloat(m[0]) / 255;
  const g = parseFloat(m[1]) / 255;
  const b = parseFloat(m[2]) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];

const dashboardRoutes = [
  { role: 'seller', path: '/seller/overview-seller' },
  { role: 'admin', path: '/admin/overview-admin' },
  { role: 'super-admin', path: '/super-admin/overview-super-admin' },
  { role: 'rider', path: '/rider/overview-rider' },
  { role: 'hub', path: '/hub/overview-hub-agent' },
];

const nextRouteMap: Record<string, string> = {
  seller: '/seller/orders-seller',
  admin: '/admin/orders-oversight-admin',
  'super-admin': '/super-admin/platform-settings-super-admin',
  rider: '/rider/deliveries-rider',
  hub: '/hub/intake-hub-agent',
};

async function main() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  const browser = await chromium.launch({ headless: true });
  let passed = 0;
  let failed = 0;

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    for (const { role, path: routePath } of dashboardRoutes) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });

      // Offline router for dist matching run-fidelity.ts
      await context.route('**/*', async (route) => {
        const reqUrl = route.request().url();
        if (reqUrl.startsWith('https://app.local')) {
          const urlObj = new URL(reqUrl);
          const pathname = urlObj.pathname;
          if (pathname.startsWith('/assets/')) {
            const filePath = path.join(distDir, pathname);
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath);
              const mime =
                ext === '.js'
                  ? 'application/javascript'
                  : ext === '.css'
                  ? 'text/css'
                  : ext === '.woff2'
                  ? 'font/woff2'
                  : 'application/octet-stream';
              return route.fulfill({ status: 200, contentType: mime, body: fs.readFileSync(filePath) });
            }
          }
          if (pathname.startsWith('/brand/') || pathname.startsWith('/images/')) {
            const filePath = path.resolve('public', pathname.slice(1));
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath);
              const mime =
                ext === '.png'
                  ? 'image/png'
                  : ext === '.webp'
                  ? 'image/webp'
                  : ext === '.svg'
                  ? 'image/svg+xml'
                  : 'application/octet-stream';
              return route.fulfill({ status: 200, contentType: mime, body: fs.readFileSync(filePath) });
            }
          }
          return route.fulfill({ status: 200, contentType: 'text/html', body: indexHtml });
        }
        await route.continue();
      });

      const page = await context.newPage();

      try {
        // 1. Fresh context -> open route
        await page.goto(`https://app.local${routePath}`, { waitUntil: 'domcontentloaded' });
        await page
          .waitForFunction(() => !document.body.innerText.includes('Loading SwiftCart Portal...') && document.querySelector('#root > *'), { timeout: 10000 })
          .catch(() => {});
        await page.waitForTimeout(300);

        // 2. Assert page background is DARK (luminance < 0.2)
        const darkBgColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
        const darkLum = getLuminance(darkBgColor);
        const themeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

        if (darkLum >= 0.2 || themeAttr !== 'dark') {
          throw new Error(`Expected dark default (lum < 0.2, theme=dark), got lum=${darkLum.toFixed(3)}, theme=${themeAttr}, bg=${darkBgColor}`);
        }
        console.log(`  ✓ [${vp.name}-${role}] Dark default verified (lum=${darkLum.toFixed(3)}, theme=${themeAttr})`);

        // 3. Toggle to light
        const toggleBtn = page.locator('.theme-toggle-btn').first();
        await toggleBtn.waitFor({ state: 'visible', timeout: 5000 });
        await toggleBtn.click();
        await page.waitForTimeout(300);

        // 4. Assert page background is LIGHT (luminance >= 0.5)
        const lightBgColor = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
        const lightLum = getLuminance(lightBgColor);
        const lightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

        if (lightLum < 0.5 || lightThemeAttr !== 'light') {
          throw new Error(`Expected toggled light (lum >= 0.5, theme=light), got lum=${lightLum.toFixed(3)}, theme=${lightThemeAttr}, bg=${lightBgColor}`);
        }
        console.log(`  ✓ [${vp.name}-${role}] Toggled to light (lum=${lightLum.toFixed(3)}, theme=${lightThemeAttr})`);

        // 5. Assert light theme persists on reload
        await page.reload({ waitUntil: 'domcontentloaded' });
        await page
          .waitForFunction(() => !document.body.innerText.includes('Loading SwiftCart Portal...') && document.querySelector('#root > *'), { timeout: 10000 })
          .catch(() => {});
        await page.waitForTimeout(300);
        const reloadedLum = getLuminance(await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor));
        const reloadedThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));

        if (reloadedLum < 0.5 || reloadedThemeAttr !== 'light') {
          throw new Error(`Expected persisted light on reload, got lum=${reloadedLum.toFixed(3)}, theme=${reloadedThemeAttr}`);
        }
        console.log(`  ✓ [${vp.name}-${role}] Light persists on reload (lum=${reloadedLum.toFixed(3)}, theme=${reloadedThemeAttr})`);

        // 6. Assert light theme persists across routes
        const nextRoute = nextRouteMap[role];
        if (nextRoute) {
          await page.goto(`https://app.local${nextRoute}`, { waitUntil: 'domcontentloaded' });
          await page
            .waitForFunction(() => !document.body.innerText.includes('Loading SwiftCart Portal...') && document.querySelector('#root > *'), { timeout: 10000 })
            .catch(() => {});
          await page.waitForTimeout(300);
          const nextRouteTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
          const nextRouteLum = getLuminance(await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor));

          if (nextRouteLum < 0.5 || nextRouteTheme !== 'light') {
            throw new Error(`Expected persisted light on ${nextRoute}, got lum=${nextRouteLum.toFixed(3)}, theme=${nextRouteTheme}`);
          }
          console.log(`  ✓ [${vp.name}-${role}] Light persists across navigation to ${nextRoute}`);
        }

        passed++;
      } catch (err: any) {
        console.error(`  ✗ [${vp.name}-${role}] FAILED: ${err.message}`);
        failed++;
      } finally {
        await context.close();
      }
    }

    // Buyer test
    const buyerContext = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    await buyerContext.route('**/*', async (route) => {
      const reqUrl = route.request().url();
      if (reqUrl.startsWith('https://app.local')) {
        const urlObj = new URL(reqUrl);
        const pathname = urlObj.pathname;
        if (pathname.startsWith('/assets/')) {
          const filePath = path.join(distDir, pathname);
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath);
            const mime =
              ext === '.js'
                ? 'application/javascript'
                : ext === '.css'
                ? 'text/css'
                : ext === '.woff2'
                ? 'font/woff2'
                : 'application/octet-stream';
            return route.fulfill({ status: 200, contentType: mime, body: fs.readFileSync(filePath) });
          }
        }
        if (pathname.startsWith('/brand/') || pathname.startsWith('/images/')) {
          const filePath = path.resolve('public', pathname.slice(1));
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath);
            const mime =
              ext === '.png'
                ? 'image/png'
                : ext === '.webp'
                ? 'image/webp'
                : ext === '.svg'
                ? 'image/svg+xml'
                : 'application/octet-stream';
            return route.fulfill({ status: 200, contentType: mime, body: fs.readFileSync(filePath) });
          }
        }
        return route.fulfill({ status: 200, contentType: 'text/html', body: indexHtml });
      }
      await route.continue();
    });

    const buyerPage = await buyerContext.newPage();
    try {
      await buyerPage.goto('https://app.local/', { waitUntil: 'domcontentloaded' });
      await buyerPage
        .waitForFunction(() => document.documentElement.getAttribute('data-theme') === 'light' && document.querySelector('#root > *'), { timeout: 10000 })
        .catch(() => {});
      await buyerPage.waitForTimeout(300);
      const buyerLum = getLuminance(await buyerPage.evaluate(() => window.getComputedStyle(document.body).backgroundColor));
      const buyerTheme = await buyerPage.evaluate(() => document.documentElement.getAttribute('data-theme'));
      const toggleCount = await buyerPage.locator('.theme-toggle-btn').count();

      if (buyerLum < 0.5 || buyerTheme !== 'light' || toggleCount !== 0) {
        throw new Error(`Expected buyer light with 0 toggles, got lum=${buyerLum.toFixed(3)}, theme=${buyerTheme}, toggles=${toggleCount}`);
      }
      console.log(`  ✓ [${vp.name}-buyer] Buyer is light default with NO theme toggle button (lum=${buyerLum.toFixed(3)}, toggles=${toggleCount})`);
      passed++;
    } catch (err: any) {
      console.error(`  ✗ [${vp.name}-buyer] FAILED: ${err.message}`);
      failed++;
    } finally {
      await buyerContext.close();
    }
  }

  await browser.close();
  console.log(`\n========================================`);
  console.log(`E2E Dark Dashboards Summary: ${passed} passed, ${failed} failed`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal error running dark dashboard tests:', err);
  process.exit(1);
});
