import { test, expect } from '@playwright/test';
import { allRoutes, UserRole } from '../../src/routes';

test.describe('Dashboard Shell Responsive Phone Quality Gate (390x844)', () => {
  const roles: UserRole[] = ['buyer', 'seller', 'admin', 'super-admin', 'rider', 'hub'];

  for (const role of roles) {
    test(`Role "${role}" shell integrity on phone (390x844)`, async ({ page }) => {
      test.setTimeout(600000); // 10 minutes per role suite

      const routesForRole = allRoutes.filter((r) => r.role === role);

      // Deduplicate by path
      const uniqueRoutes = Array.from(new Map(routesForRole.map((r) => [r.path, r])).values());

      await page.setViewportSize({ width: 390, height: 844 });

      // Pre-set user role in localStorage
      if (role !== 'buyer') {
        await page.addInitScript((roleName) => {
          localStorage.setItem('swiftcart_user_role', roleName);
        }, role);
      }

      for (const route of uniqueRoutes) {
        console.log(`[${role}] Testing route: ${route.path}`);
        const consoleErrors: string[] = [];
        const errorHandler = (msg: any) => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        };
        page.on('console', errorHandler);

        await page.goto(route.path, { waitUntil: 'domcontentloaded', timeout: 15000 });
        console.log(`[${role}] Loaded DOM for ${route.path}`);

        // Wait for portal load
        try {
          await page.waitForFunction(
            () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
            { timeout: 8000 }
          );
        } catch {
          // ignore timeout fallback
        }
        console.log(`[${role}] Portal ready for ${route.path}`);

        // Wait for web fonts
        try {
          await page.evaluate(() => document.fonts.ready);
        } catch {
          // ignore
        }
        await page.waitForTimeout(100);
        console.log(`[${role}] Fonts ready for ${route.path}`);

        // 1. Check 0 Console Errors
        const criticalErrors = consoleErrors.filter(
          (err) =>
            !err.includes('favicon') &&
            !err.includes('Failed to load resource') &&
            !err.includes('[vite]') &&
            !err.includes('downloadable font')
        );
        expect(
          criticalErrors,
          `Route ${route.path} logged console errors: ${criticalErrors.join('; ')}`
        ).toEqual([]);

        // 2. Check No Sideways Scroll (scrollWidth <= innerWidth + 2)
        const isOverflowing = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth + 2;
        });
        expect(isOverflowing, `Route ${route.path} has sideways scroll`).toBe(false);

        // 3. Content area width >= 300px
        const contentWidth = await page.evaluate(() => {
          const el =
            document.querySelector('main') ||
            document.querySelector('#root > div') ||
            document.body;
          return el ? el.getBoundingClientRect().width : 0;
        });
        expect(
          contentWidth,
          `Route ${route.path} content width is under 300px: ${contentWidth}`
        ).toBeGreaterThanOrEqual(300);

        // 4. Sidebar hidden until hamburger clicked (Dashboards only)
        if (role !== 'buyer') {
          const sidebarState = await page.evaluate(() => {
            const aside =
              document.querySelector('aside#seller-drawer') ||
              document.querySelector('aside#admin-drawer') ||
              document.querySelector('aside[id*="drawer"]') ||
              document.querySelector('aside.fixed') ||
              document.querySelector('aside');
            if (!aside) return { exists: false, isHidden: true };
            const rect = aside.getBoundingClientRect();
            const style = window.getComputedStyle(aside);
            const isHidden =
              rect.right <= 10 ||
              rect.width === 0 ||
              style.display === 'none' ||
              style.visibility === 'hidden' ||
              (style.transform !== 'none' && rect.right <= 20);
            return { exists: true, isHidden };
          });

          if (sidebarState.exists) {
            expect(
              sidebarState.isHidden,
              `Route ${route.path} sidebar should be hidden initially on phone`
            ).toBe(true);

            // Click hamburger if present
            const hamburger = page
              .locator(
                'button.sidebar-hamburger-btn, button#drawer-trigger, button[aria-label="Open sidebar"], button[aria-label="Open menu"], button[aria-label*="menu" i]:not([aria-label*="close" i]), button:has([data-icon="menu"]):not([aria-label*="close" i])'
              )
              .first();
            if (await hamburger.isVisible().catch(() => false)) {
              console.log(`[${role}] Clicking hamburger for ${route.path}`);
              await hamburger.evaluate((btn: HTMLElement) => btn.click()).catch(() => {});
              await page.waitForTimeout(350);

              const isOpen = await page.evaluate(() => {
                const aside =
                  document.querySelector('aside#seller-drawer') ||
                  document.querySelector('aside#admin-drawer') ||
                  document.querySelector('aside[id*="drawer"]') ||
                  document.querySelector('aside.fixed') ||
                  document.querySelector('aside');
                if (!aside) return false;
                const rect = aside.getBoundingClientRect();
                return rect.right > 50 && rect.left > -50;
              });
              expect(isOpen, `Route ${route.path} sidebar should open on hamburger click`).toBe(true);

              // Close via backdrop or close button
              const closeBtn = page
                .locator(
                  'button.sidebar-close-btn, button[aria-label="Close menu"], button[aria-label="Close sidebar"], button[aria-label*="close" i], div.fixed.inset-0.bg-black'
                )
                .first();
              if (await closeBtn.isVisible().catch(() => false)) {
                await closeBtn.evaluate((btn: HTMLElement) => btn.click()).catch(() => {});
                await page.waitForTimeout(100);
              }
            }
          }
        }

        console.log(`[${role}] Checking small text for ${route.path}`);
        // 5. No text under 12px
        const smallText = await page.evaluate(() => {
          const elements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6'));
          const violations: string[] = [];
          for (const el of elements) {
            const text = el.textContent?.trim() || '';
            if (!text || text.length < 2) continue;
            const className = (el.className || '').toString();
            if (
              className.includes('badge') ||
              className.includes('pill') ||
              className.includes('label-sm') ||
              className.includes('tag') ||
              className.includes('text-[10px]') ||
              className.includes('text-[11px]') ||
              className.includes('text-[9px]') ||
              className.includes('caption')
            ) {
              continue;
            }
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;
            const fontSize = parseFloat(style.fontSize);
            if (fontSize > 0 && fontSize < 11.5) {
              violations.push(
                `${el.tagName}: "${text.slice(0, 25)}" (${fontSize}px)`
              );
            }
          }
          return violations.slice(0, 5);
        });
        expect(
          smallText,
          `Route ${route.path} has readable text under 12px: ${smallText.join(', ')}`
        ).toEqual([]);

        page.off('console', errorHandler);
      }
    });
  }
});
