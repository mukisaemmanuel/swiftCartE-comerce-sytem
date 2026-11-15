import { chromium } from '@playwright/test';
import { preview } from 'vite';
import * as fs from 'fs';
import * as path from 'path';

async function capture() {
  const outDir = path.resolve(process.cwd(), 'docs/dashboard-images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let server: any = null;
  let baseUrl = 'http://127.0.0.1:4173';
  try {
    server = await preview({
      preview: {
        port: 4173,
        host: '127.0.0.1',
      },
    });
    baseUrl = (server.resolvedUrls?.local[0] || 'http://127.0.0.1:4173').replace(/\/$/, '');
  } catch {
    console.log('Using existing preview server at:', baseUrl);
  }
  console.log('Connecting to target server:', baseUrl);

  const browser = await chromium.launch({ headless: true });

  const roles = [
    {
      role: 'seller',
      screens: [
        { name: 'seller-1-overview.png', path: '/seller/overview-seller', openDrawer: false },
        { name: 'seller-2-drawer-open.png', path: '/seller/overview-seller', openDrawer: true },
        { name: 'seller-3-orders.png', path: '/seller/orders-seller', openDrawer: false },
        { name: 'seller-4-products.png', path: '/seller/products-seller', openDrawer: false },
        { name: 'seller-5-riders.png', path: '/seller/riders-seller', openDrawer: false },
      ],
    },
    {
      role: 'admin',
      screens: [
        { name: 'admin-1-overview.png', path: '/admin/overview-admin', openDrawer: false },
        { name: 'admin-2-drawer-open.png', path: '/admin/overview-admin', openDrawer: true },
        { name: 'admin-3-kyc.png', path: '/admin/sellers-directory-admin-1', openDrawer: false },
        { name: 'admin-4-orders.png', path: '/admin/orders-oversight-admin', openDrawer: false },
        { name: 'admin-5-disputes.png', path: '/admin/escrow-disputes-admin', openDrawer: false },
      ],
    },
    {
      role: 'super-admin',
      screens: [
        { name: 'super-admin-1-overview.png', path: '/super-admin/overview-super-admin', openDrawer: false },
        { name: 'super-admin-2-drawer-open.png', path: '/super-admin/overview-super-admin', openDrawer: true },
        { name: 'super-admin-3-users.png', path: '/super-admin/users-roles-super-admin', openDrawer: false },
        { name: 'super-admin-4-settings.png', path: '/super-admin/platform-settings-super-admin', openDrawer: false },
        { name: 'super-admin-5-audit.png', path: '/super-admin/audit-log-super-admin', openDrawer: false },
      ],
    },
    {
      role: 'rider',
      screens: [
        { name: 'rider-1-overview.png', path: '/rider/overview-rider', openDrawer: false },
        { name: 'rider-2-deliveries.png', path: '/rider/deliveries-rider', openDrawer: false },
        { name: 'rider-3-map.png', path: '/rider/rider-map-rider', openDrawer: false },
        { name: 'rider-4-earnings.png', path: '/rider/earnings-rider', openDrawer: false },
        { name: 'rider-5-profile.png', path: '/rider/profile-support-rider', openDrawer: false },
      ],
    },
    {
      role: 'hub',
      screens: [
        { name: 'hub-1-overview.png', path: '/hub/overview-hub-agent', openDrawer: false },
        { name: 'hub-2-drawer-open.png', path: '/hub/overview-hub-agent', openDrawer: true },
        { name: 'hub-3-intake.png', path: '/hub/intake-hub-agent', openDrawer: false },
        { name: 'hub-4-scan.png', path: '/hub/scan-hub-agent', openDrawer: false },
        { name: 'hub-5-pickup.png', path: '/hub/pickup-hub-agent', openDrawer: false },
      ],
    },
  ];

  for (const group of roles) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
    });

    await context.addInitScript(
      ({ roleName }) => {
        localStorage.setItem('swiftcart_user_role', roleName);
        localStorage.setItem('swiftcart_dashboard_theme', 'dark');
      },
      { roleName: group.role }
    );

    const page = await context.newPage();

    for (const s of group.screens) {
      console.log(`[Screenshot] Capturing ${s.name} at ${s.path}`);
      await page.goto(`${baseUrl}${s.path}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForFunction(
        () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
        { timeout: 8000 }
      ).catch(() => {});
      await page.evaluate(() => document.fonts.ready).catch(() => {});
      await page.waitForTimeout(250);

      if (s.openDrawer) {
        await page.click('.sidebar-hamburger-btn').catch(() => {});
        await page.waitForTimeout(350);
      }

      const filePath = path.join(outDir, s.name);
      await page.screenshot({ path: filePath });
      console.log(`  Saved ${filePath}`);
    }

    await context.close();
  }

  await browser.close();
  if (server) await server.close();
  console.log('--- Finished capturing all 25 dashboard screenshots ---');
}

capture().catch((e) => {
  console.error(e);
  process.exit(1);
});
