import { test, expect, type ConsoleMessage } from '@playwright/test';
import { ROLE_NAV_CONFIGS, ROUTE_HEADING_MAP, DashboardRole } from '../../src/components/dashboard/RoleDashboardShell';

test.describe('Dashboard Unified Navigation Shell Quality Gate (390x844)', () => {
  const roles: DashboardRole[] = ['seller', 'admin', 'super-admin', 'rider', 'hub'];

  for (const role of roles) {
    test(`Role "${role}" operates as ONE unified dashboard app`, async ({ page }) => {
      test.setTimeout(180000); // 3 minutes per role

      const config = ROLE_NAV_CONFIGS[role];
      const overviewPath = config.bottomBarItems[0]?.path || `/${role}`;

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

      await page.setViewportSize({ width: 390, height: 844 });

      // Pre-set user role and theme
      await page.addInitScript(
        ({ roleName }) => {
          localStorage.setItem('swiftcart_user_role', roleName);
          localStorage.setItem('swiftcart_dashboard_theme', 'dark');
        },
        { roleName: role }
      );

      // 1. Open overview screen
      console.log(`[${role}] Navigating to overview: ${overviewPath}`);
      await page.goto(overviewPath, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for React Suspense fallback to disappear
      await page
        .waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 8000 }
        )
        .catch(() => {});

      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(200);

      // 2. Assert shell exists ONCE (one header, one bottom bar if applicable, no duplicates)
      const headerCount = await page.locator('[data-testid="shared-dashboard-header"]').count();
      expect(headerCount, `Role ${role} should have exactly ONE shell header`).toBe(1);

      if (config.bottomBarItems.length > 0) {
        const bottomBarCount = await page.locator('[data-testid="shared-dashboard-bottom-bar"]').count();
        expect(bottomBarCount, `Role ${role} should have exactly ONE bottom bar`).toBe(1);
      }

      // Assert no horizontal scroll on overview
      const overviewOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 2
      );
      expect(overviewOverflow, `Role ${role} overview has horizontal scroll`).toBe(false);

      // 3. Store a marker on the header DOM element to prove it never remounts
      await page.evaluate(() => {
        const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
        if (h) {
          h._shellMountMarker = 'swiftcart-single-instance';
        }
      });

      // 4. Test Drawer Navigation (if role has drawer)
      if (config.hasDrawer && config.drawerItems.length > 0) {
        // Assert drawer is closed by default
        const initialDrawer = page.locator('[data-testid="dashboard-drawer"]');
        await expect(initialDrawer).toHaveClass(/-translate-x-full/);

        // Click hamburger
        console.log(`[${role}] Opening drawer via hamburger`);
        await page.click('.sidebar-hamburger-btn');
        await page.waitForTimeout(300);

        // Assert drawer is open
        await expect(initialDrawer).toHaveClass(/translate-x-0/);
        await expect(page.locator('[data-testid="drawer-backdrop"]')).toBeVisible();

        // Test each menu item in turn
        for (const item of config.drawerItems) {
          if (item.path === '/' || item.path === '/help-centre') {
            continue; // Skip external / exit links for in-dashboard loop
          }

          // If drawer is closed, open it
          const isDrawerClosed = await initialDrawer.evaluate((el) =>
            el.classList.contains('-translate-x-full')
          );
          if (isDrawerClosed) {
            await page.click('.sidebar-hamburger-btn');
            await page.waitForTimeout(250);
          }

          console.log(`[${role}] Clicking drawer menu item: ${item.label} -> ${item.path}`);
          const drawerLink = page.locator(`[data-testid="dashboard-drawer"] a[href="${item.path}"]`);
          await drawerLink.click();
          await page.waitForTimeout(300);

          // Assert URL changed
          const currentUrl = new URL(page.url());
          const cleanPath = currentUrl.pathname.replace(/\/+$/, '') || '/';
          const expectedPath = item.path.replace(/\/+$/, '') || '/';
          expect(cleanPath).toBe(expectedPath);

          // Assert expected heading is visible
          const expectedHeading = ROUTE_HEADING_MAP[cleanPath] || item.label;
          const headerHeading = await page.innerText('[data-testid="shared-dashboard-header"] h1');
          expect(headerHeading.toLowerCase()).toContain(expectedHeading.toLowerCase());

          // Assert header DOM element was NOT remounted
          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h ? h._shellMountMarker : null;
          });
          expect(marker, `Shell header was remounted on navigating to ${item.path}`).toBe(
            'swiftcart-single-instance'
          );

          // Assert drawer is closed after navigation
          await expect(initialDrawer).toHaveClass(/-translate-x-full/);

          // Assert no horizontal scroll
          const isOverflowing = await page.evaluate(
            () => document.documentElement.scrollWidth > window.innerWidth + 2
          );
          expect(isOverflowing, `Route ${item.path} has horizontal scroll`).toBe(false);
        }

        // Test Browser Back button
        console.log(`[${role}] Testing browser back button`);
        await page.goBack();
        await page.waitForTimeout(300);

        // Assert shell is still intact
        const backMarker = await page.evaluate(() => {
          const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
          return h ? h._shellMountMarker : null;
        });
        expect(backMarker, `Shell header remounted after browser back`).toBe(
          'swiftcart-single-instance'
        );
      }

      // 5. Test Bottom Bar Navigation (if role has bottom tabs)
      if (config.bottomBarItems.length > 0) {
        console.log(`[${role}] Testing bottom bar items`);
        for (const tab of config.bottomBarItems) {
          if (tab.label === 'More') {
            console.log(`[${role}] Clicking bottom bar tab: More (toggles drawer)`);
            // "More" toggles drawer on Hub
            await page.click(`[data-testid="shared-dashboard-bottom-bar"] a[href="${tab.path}"]`);
            await page.waitForTimeout(300);
            await expect(page.locator('[data-testid="dashboard-drawer"]')).toHaveClass(/translate-x-0/);
            await page.click('.sidebar-close-btn');
            await page.waitForTimeout(300);
            await expect(page.locator('[data-testid="dashboard-drawer"]')).toHaveClass(/-translate-x-full/);
            continue;
          }

          console.log(`[${role}] Clicking bottom bar tab: ${tab.label} -> ${tab.path}`);
          const tabLink = page.locator(`[data-testid="shared-dashboard-bottom-bar"] a[href="${tab.path}"]`);
          await tabLink.click();
          await page.waitForTimeout(300);

          // Assert URL changed
          const currentUrl = new URL(page.url());
          const cleanPath = currentUrl.pathname.replace(/\/+$/, '') || '/';
          const expectedPath = tab.path.replace(/\/+$/, '') || '/';
          expect(cleanPath).toBe(expectedPath);

          // Assert active tab is highlighted (aria-current="page")
          await expect(tabLink).toHaveAttribute('aria-current', 'page');

          // Assert header DOM element was NOT remounted
          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h ? h._shellMountMarker : null;
          });
          expect(marker, `Shell header was remounted on tab ${tab.label}`).toBe(
            'swiftcart-single-instance'
          );

          // Assert no horizontal scroll
          const isOverflowing = await page.evaluate(
            () => document.documentElement.scrollWidth > window.innerWidth + 2
          );
          expect(isOverflowing, `Tab route ${tab.path} has horizontal scroll`).toBe(false);
        }

        // Test Browser Back button after bottom-bar navigation
        if (config.bottomBarItems.length > 1) {
          console.log(`[${role}] Testing browser back button after bottom-bar navigation`);
          const urlBeforeBack = new URL(page.url()).pathname;
          await page.goBack();
          await page.waitForTimeout(300);
          const urlAfterBack = new URL(page.url()).pathname;
          expect(urlAfterBack, `Expected URL to change after browser back`).not.toBe(urlBeforeBack);

          // Assert shell is still intact
          const backMarkerBottom = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h ? h._shellMountMarker : null;
          });
          expect(backMarkerBottom, `Shell header remounted after browser back from bottom bar`).toBe(
            'swiftcart-single-instance'
          );
        }
      }

      // 6. Assert 0 Console Errors
      expect(consoleErrors, `Role ${role} logged console errors: ${consoleErrors.join('; ')}`).toEqual([]);
    });
  }
});

test.describe('Dashboard Tablet Navigation Shell Quality Gate (834x1112)', () => {
  const roles: DashboardRole[] = ['seller', 'admin', 'super-admin', 'rider', 'hub'];

  for (const role of roles) {
    test(`Role "${role}" operates with responsive tablet navigation (834x1112)`, async ({ page }) => {
      test.setTimeout(180000); // 3 minutes per role

      const config = ROLE_NAV_CONFIGS[role];
      const overviewPath = config.bottomBarItems[0]?.path || `/${role}`;

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

      // Pre-set user role and dark theme default
      await page.addInitScript(
        ({ roleName }) => {
          localStorage.setItem('swiftcart_user_role', roleName);
          localStorage.setItem('swiftcart_dashboard_theme', 'dark');
        },
        { roleName: role }
      );

      // 1. Open overview screen
      console.log(`[tablet-${role}] Navigating to overview: ${overviewPath}`);
      await page.goto(overviewPath, { waitUntil: 'domcontentloaded', timeout: 15000 });

      // Wait for React Suspense fallback to disappear
      await page
        .waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 8000 }
        )
        .catch(() => {});

      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(200);

      // 2. Assert shell header exists ONCE
      const headerCount = await page.locator('[data-testid="shared-dashboard-header"]').count();
      expect(headerCount, `Role ${role} should have exactly ONE shell header on tablet`).toBe(1);

      // 3. Assert bottom bar is HIDDEN on tablet (md:hidden)
      const bottomBar = page.locator('[data-testid="shared-dashboard-bottom-bar"]');
      if (await bottomBar.count() > 0) {
        await expect(bottomBar).toBeHidden();
      }

      // 4. Assert Dark default theme
      const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(initialTheme, `Role ${role} should default to dark theme`).toBe('dark');

      // 5. Test Theme Toggle button flips data-theme
      console.log(`[tablet-${role}] Testing theme toggle button`);
      await page.click('.theme-toggle-btn');
      await page.waitForTimeout(200);
      const toggledTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(toggledTheme, `Theme toggle should switch to light`).toBe('light');

      // Toggle back to dark
      await page.click('.theme-toggle-btn');
      await page.waitForTimeout(200);
      const restoredTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(restoredTheme, `Theme toggle should restore dark`).toBe('dark');

      // 6. Assert no horizontal scroll
      const overviewOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 2
      );
      expect(overviewOverflow, `Role ${role} tablet overview has horizontal scroll`).toBe(false);

      // 7. Store a marker on the header DOM element to prove it never remounts
      await page.evaluate(() => {
        const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
        if (h) {
          h._shellMountMarker = 'swiftcart-single-instance-tablet';
        }
      });

      // 8. Test role-specific tablet navigation
      if (role === 'seller' || role === 'super-admin') {
        // Assert 72px left rail is visible
        console.log(`[tablet-${role}] Checking 72px left rail`);
        const rail = page.locator('[data-testid="dashboard-tablet-rail"]');
        await expect(rail).toBeVisible();

        // Click 2 links from rail and verify navigation
        const railLinks = rail.locator('a');
        const count = await railLinks.count();
        expect(count, `Expected links in ${role} tablet rail`).toBeGreaterThan(1);

        for (let i = 1; i < Math.min(count, 3); i++) {
          const link = railLinks.nth(i);
          const href = await link.getAttribute('href');
          if (!href || href === '/' || href === '/help-centre') continue;

          console.log(`[tablet-${role}] Clicking rail link: ${href}`);
          await link.click();
          await page.waitForTimeout(300);

          const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/';
          const expectedPath = href.replace(/\/+$/, '') || '/';
          expect(currentPath).toBe(expectedPath);

          // Assert header never remounted
          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h ? h._shellMountMarker : null;
          });
          expect(marker, `Header remounted on rail navigation to ${href}`).toBe(
            'swiftcart-single-instance-tablet'
          );

          // Assert no horizontal scroll
          const isOverflowing = await page.evaluate(
            () => document.documentElement.scrollWidth > window.innerWidth + 2
          );
          expect(isOverflowing, `Route ${href} has horizontal scroll on tablet`).toBe(false);
        }
      } else {
        // admin, rider, hub: Top header horizontal nav
        console.log(`[tablet-${role}] Checking top header horizontal nav`);
        const topNav = page.locator('[data-testid="dashboard-tablet-top-nav"]');
        await expect(topNav).toBeVisible();

        // Click links from top nav
        const topLinks = topNav.locator('a');
        const count = await topLinks.count();
        expect(count, `Expected links in ${role} top nav`).toBeGreaterThan(1);

        for (let i = 1; i < Math.min(count, 3); i++) {
          const link = topLinks.nth(i);
          const href = await link.getAttribute('href');
          if (!href || href === '/' || href === '/help-centre') continue;

          console.log(`[tablet-${role}] Clicking top nav tab: ${href}`);
          await link.click();
          await page.waitForTimeout(300);

          const currentPath = new URL(page.url()).pathname.replace(/\/+$/, '') || '/';
          const expectedPath = href.replace(/\/+$/, '') || '/';
          expect(currentPath).toBe(expectedPath);

          // Assert header never remounted
          const marker = await page.evaluate(() => {
            const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
            return h ? h._shellMountMarker : null;
          });
          expect(marker, `Header remounted on top nav navigation to ${href}`).toBe(
            'swiftcart-single-instance-tablet'
          );

          // Assert no horizontal scroll
          const isOverflowing = await page.evaluate(
            () => document.documentElement.scrollWidth > window.innerWidth + 2
          );
          expect(isOverflowing, `Route ${href} has horizontal scroll on tablet`).toBe(false);
        }
      }

      // 9. Test Browser Back button
      console.log(`[tablet-${role}] Testing browser back button`);
      await page.goBack();
      await page.waitForTimeout(300);

      const backMarker = await page.evaluate(() => {
        const h = document.querySelector('[data-testid="shared-dashboard-header"]') as (HTMLElement & { _shellMountMarker?: string }) | null;
        return h ? h._shellMountMarker : null;
      });
      expect(backMarker, `Shell header remounted after browser back on tablet`).toBe(
        'swiftcart-single-instance-tablet'
      );

      // 10. Assert 0 Console Errors
      expect(consoleErrors, `Role ${role} logged console errors: ${consoleErrors.join('; ')}`).toEqual([]);
    });
  }
});
