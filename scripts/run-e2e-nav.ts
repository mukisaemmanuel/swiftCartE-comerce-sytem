import { chromium } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';
import { ROLE_NAV_CONFIGS, ROUTE_HEADING_MAP, DashboardRole } from '../src/components/dashboard/RoleDashboardShell';

async function main() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  const browser = await chromium.launch({ headless: true });
  const roles: DashboardRole[] = ['seller', 'admin', 'super-admin', 'rider', 'hub'];

  let totalPassed = 0;
  let totalFailed = 0;

  console.log(`\n========================================`);
  console.log(`E2E Unified Navigation Suite (390x844)`);
  console.log(`========================================\n`);

  for (const role of roles) {
    const config = ROLE_NAV_CONFIGS[role];
    const overviewPath = config.bottomBarItems[0]?.path || `/${role}`;

    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
    });

    await context.addInitScript(
      ({ roleName }) => {
        localStorage.setItem('swiftcart_user_role', roleName);
        localStorage.setItem('swiftcart_dashboard_theme', 'dark');
      },
      { roleName: role }
    );

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
      console.log(`Testing Role: ${role}`);
      // 1. Open overview
      await page.goto(`https://app.local${overviewPath}`, { waitUntil: 'domcontentloaded' });
      await page
        .waitForFunction(() => !document.body.innerText.includes('Loading SwiftCart Portal...') && document.querySelector('#root > *'), { timeout: 10000 })
        .catch(() => {});
      await page.waitForTimeout(300);

      // 2. Shell exists ONCE
      const headerCount = await page.locator('[data-testid="shared-dashboard-header"]').count();
      if (headerCount !== 1) throw new Error(`Expected 1 header, found ${headerCount}`);

      if (config.bottomBarItems.length > 0) {
        const bottomBarCount = await page.locator('[data-testid="shared-dashboard-bottom-bar"]').count();
        if (bottomBarCount !== 1) throw new Error(`Expected 1 bottom bar, found ${bottomBarCount}`);
      }

      // 3. Mark header to verify no remounting
      await page.evaluate(() => {
        const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
        if (h) h._shellMountMarker = 'swiftcart-single-instance';
      });

      // 4. Test Drawer Navigation (if applicable)
      if (config.hasDrawer && config.drawerItems.length > 0) {
        const initialDrawer = page.locator('[data-testid="dashboard-drawer"]');
        const isClosedInitially = await initialDrawer.evaluate((el) => el.classList.contains('-translate-x-full'));
        if (!isClosedInitially) throw new Error('Drawer should be closed initially');

        // Open drawer
        await page.click('.sidebar-hamburger-btn');
        await page.waitForTimeout(250);
        const isOpenAfterClick = await initialDrawer.evaluate((el) => el.classList.contains('translate-x-0'));
        if (!isOpenAfterClick) throw new Error('Drawer should be open after hamburger click');

        // Test each drawer menu item
        for (const item of config.drawerItems) {
          if (item.path === '/' || item.path === '/help-centre') continue;

          const isClosed = await initialDrawer.evaluate((el) => el.classList.contains('-translate-x-full'));
          if (isClosed) {
            await page.click('.sidebar-hamburger-btn');
            await page.waitForTimeout(250);
          }

          const drawerLink = page.locator(`[data-testid="dashboard-drawer"] a[href="${item.path}"]`);
          await drawerLink.click();
          await page.waitForTimeout(300);

          const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/';
          const expectedPath = item.path.replace(/\/+$/, '') || '/';
          if (currentPath !== expectedPath) throw new Error(`URL mismatch: expected ${expectedPath}, got ${currentPath}`);

          // Assert marker preserved
          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h?._shellMountMarker;
          });
          if (marker !== 'swiftcart-single-instance') throw new Error(`Header remounted on drawer nav to ${item.path}`);

          // Assert drawer closed
          const isClosedAfterNav = await initialDrawer.evaluate((el) => el.classList.contains('-translate-x-full'));
          if (!isClosedAfterNav) throw new Error(`Drawer not closed after navigating to ${item.path}`);
        }
        console.log(`  ✓ [${role}] Drawer navigation verified (${config.drawerItems.length} items, no remounts)`);
      }

      // 5. Test Bottom Bar items
      if (config.bottomBarItems.length > 0) {
        for (const tab of config.bottomBarItems) {
          if (tab.label === 'More') {
            await page.click(`[data-testid="shared-dashboard-bottom-bar"] a[href="${tab.path}"]`);
            await page.waitForTimeout(250);
            await page.click('.sidebar-close-btn');
            await page.waitForTimeout(250);
            continue;
          }

          const tabLink = page.locator(`[data-testid="shared-dashboard-bottom-bar"] a[href="${tab.path}"]`);
          await tabLink.click();
          await page.waitForTimeout(300);

          const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/';
          const expectedPath = tab.path.replace(/\/+$/, '') || '/';
          if (currentPath !== expectedPath) throw new Error(`Bottom tab URL mismatch: expected ${expectedPath}, got ${currentPath}`);

          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h?._shellMountMarker;
          });
          if (marker !== 'swiftcart-single-instance') throw new Error(`Header remounted on bottom bar tab ${tab.label}`);
        }
        console.log(`  ✓ [${role}] Bottom bar navigation verified (${config.bottomBarItems.length} tabs, no remounts)`);
      }

      console.log(`  ✓ [${role}] Role operates as ONE unified dashboard app!`);
      totalPassed++;
    } catch (err: any) {
      console.error(`  ✗ [${role}] FAILED: ${err.message}`);
      totalFailed++;
    } finally {
      await context.close();
    }
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`E2E Unified Navigation Summary: ${totalPassed} passed, ${totalFailed} failed`);
  console.log(`========================================\n`);

  if (totalFailed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal error running navigation tests:', err);
  process.exit(1);
});
