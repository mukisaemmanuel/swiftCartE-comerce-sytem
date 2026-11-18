import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const outDir = path.resolve('docs', 'c1-screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

interface TargetScreen {
  name: string;
  path: string;
  role?: string;
  theme?: 'dark' | 'light';
  width: number;
  height: number;
  outputName: string;
}

const targets: TargetScreen[] = [
  {
    name: 'Home',
    path: '/',
    width: 1440,
    height: 900,
    outputName: 'home.png',
  },
  {
    name: 'Cart',
    path: '/cart',
    width: 1440,
    height: 900,
    outputName: 'cart.png',
  },
  {
    name: 'Payment Methods',
    path: '/payment-methods',
    width: 1440,
    height: 900,
    outputName: 'payment-methods.png',
  },
  {
    name: 'Seller Overview',
    path: '/seller/overview-seller',
    role: 'seller',
    theme: 'dark',
    width: 1440,
    height: 900,
    outputName: 'seller-overview.png',
  },
  {
    name: 'Admin Overview',
    path: '/admin/overview-admin',
    role: 'admin',
    theme: 'dark',
    width: 1440,
    height: 900,
    outputName: 'admin-overview.png',
  },
  {
    name: 'Hub Overview',
    path: '/hub/overview-hub-agent',
    role: 'hub',
    theme: 'dark',
    width: 1440,
    height: 900,
    outputName: 'hub-overview.png',
  },
];

async function capture() {
  const browser = await chromium.launch({ headless: true });

  for (const t of targets) {
    const context = await browser.newContext({
      viewport: { width: t.width, height: t.height },
      deviceScaleFactor: 1,
    });

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
      return route.continue();
    });

    if (t.role) {
      await context.addInitScript(
        ({ roleName, theme }) => {
          localStorage.setItem('swiftcart_user_role', roleName);
          localStorage.setItem('swiftcart_dashboard_theme', theme || 'dark');
        },
        { roleName: t.role, theme: t.theme || 'dark' }
      );
    }

    const page = await context.newPage();
    const url = `https://app.local${t.path}`;
    console.log(`Navigating to ${url} (${t.name})...`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

    await page
      .waitForFunction(
        () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
        { timeout: 10000 }
      )
      .catch(() => {});

    await page.evaluate(() => document.fonts.ready).catch(() => {});
    await page.waitForTimeout(500);

    const dest = path.join(outDir, t.outputName);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`Saved screenshot to ${dest}`);

    await context.close();
  }

  await browser.close();
  console.log('All screenshots captured successfully.');
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
