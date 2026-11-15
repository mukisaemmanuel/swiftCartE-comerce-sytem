import { test, expect } from '@playwright/test';

// Helper to compute relative luminance from rgb/rgba string
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

for (const vp of viewports) {
  test.describe(`Dashboard Dark Default & Theme Toggle (${vp.name} ${vp.width}x${vp.height})`, () => {
    for (const { role, path } of dashboardRoutes) {
      test(`[${vp.name}] Role "${role}" renders dark by default, toggles to light, and persists on reload`, async ({ browser }) => {
        // 1. Fresh browser context with NO stored theme or preferences
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
        });
        const page = await context.newPage();

        // Open route
        await page.goto(path, { waitUntil: 'networkidle' });

        // 2. Assert page background is DARK (luminance < 0.2)
        const darkBgColor = await page.evaluate(() => {
          return window.getComputedStyle(document.body).backgroundColor;
        });
        const darkLum = getLuminance(darkBgColor);
        console.log(`[${vp.name}-${role}] Default Dark Background: ${darkBgColor} (luminance: ${darkLum.toFixed(3)})`);
        expect(darkLum).toBeLessThan(0.2);

        // Verify data-theme attribute
        const themeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(themeAttr).toBe('dark');

        // 3. Click the sun/moon theme toggle button in the top bar
        const toggleBtn = page.locator('.theme-toggle-btn').first();
        await expect(toggleBtn).toBeVisible({ timeout: 5000 });
        await toggleBtn.click();

        // Wait a moment for DOM/state update
        await page.waitForTimeout(300);

        // 4. Assert page background is LIGHT (luminance >= 0.5)
        const lightBgColor = await page.evaluate(() => {
          return window.getComputedStyle(document.body).backgroundColor;
        });
        const lightLum = getLuminance(lightBgColor);
        console.log(`[${vp.name}-${role}] Toggled Light Background: ${lightBgColor} (luminance: ${lightLum.toFixed(3)})`);
        expect(lightLum).toBeGreaterThanOrEqual(0.5);

        const lightThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(lightThemeAttr).toBe('light');

        // 5. Assert light theme persists on reload
        await page.reload({ waitUntil: 'networkidle' });
        const reloadedBgColor = await page.evaluate(() => {
          return window.getComputedStyle(document.body).backgroundColor;
        });
        const reloadedLum = getLuminance(reloadedBgColor);
        console.log(`[${vp.name}-${role}] Reloaded Light Background: ${reloadedBgColor} (luminance: ${reloadedLum.toFixed(3)})`);
        expect(reloadedLum).toBeGreaterThanOrEqual(0.5);

        const reloadedThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
        expect(reloadedThemeAttr).toBe('light');

        // 6. Assert light theme persists across routes in same dashboard
        const nextRouteMap: Record<string, string> = {
          seller: '/seller/orders-seller',
          admin: '/admin/orders-oversight-admin',
          'super-admin': '/super-admin/platform-settings-super-admin',
          rider: '/rider/deliveries-rider',
          hub: '/hub/intake-hub-agent',
        };
        const nextRoute = nextRouteMap[role];
        if (nextRoute) {
          console.log(`[${vp.name}-${role}] Navigating to second route: ${nextRoute}`);
          await page.goto(nextRoute, { waitUntil: 'networkidle' });
          const secondRouteTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
          expect(secondRouteTheme, `Theme should persist as light on ${nextRoute}`).toBe('light');
          const secondRouteBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
          const secondRouteLum = getLuminance(secondRouteBg);
          expect(secondRouteLum, `Background luminance on ${nextRoute} should remain light`).toBeGreaterThanOrEqual(0.5);
        }

        await context.close();
      });
    }

    test(`[${vp.name}] Buyer view stays light and has NO theme toggle button`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();

      await page.goto('/', { waitUntil: 'networkidle' });

      // Assert page background is light (luminance >= 0.5)
      const buyerBgColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
      });
      const buyerLum = getLuminance(buyerBgColor);
      console.log(`[${vp.name}-buyer] Home Background: ${buyerBgColor} (luminance: ${buyerLum.toFixed(3)})`);
      expect(buyerLum).toBeGreaterThanOrEqual(0.5);

      // Assert data-theme is light
      const buyerThemeAttr = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
      expect(buyerThemeAttr).toBe('light');

      // Assert NO theme toggle button is present on buyer screens
      const toggleCount = await page.locator('.theme-toggle-btn').count();
      expect(toggleCount).toBe(0);

      await context.close();
    });
  });
}
