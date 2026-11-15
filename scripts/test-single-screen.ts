import { preview } from 'vite';
import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { allRoutes } from '../src/routes';

const screenArg = process.argv[2];
const sizeArg = (process.argv[3] || 'desktop') as 'mobile' | 'tablet' | 'desktop';
const roleArg = process.argv[4] || 'buyer';

async function main() {
  if (!screenArg) {
    console.error('Usage: npx tsx scripts/test-single-screen.ts <screen_folder_name> [mobile|tablet|desktop] [role]');
    process.exit(1);
  }

  const vpMap = {
    mobile: { width: 390, height: 844 },
    tablet: { width: 834, height: 1112 },
    desktop: { width: 1440, height: 900 },
  };

  const vp = vpMap[sizeArg];
  const screenDir = path.resolve(process.cwd(), 'design', sizeArg, roleArg, screenArg);
  const screenPng = path.join(screenDir, 'screen.png');

  if (!fs.existsSync(screenPng)) {
    console.error('screen.png not found at', screenPng);
    process.exit(1);
  }

  const relPath = `design/${sizeArg}/${roleArg}/${screenArg}`.replace(/\\/g, '/');
  const route = allRoutes.find(
    (r) =>
      r.role === roleArg &&
      (r.designFiles[sizeArg] === relPath ||
        (Array.isArray(r.designFiles.all) && r.designFiles.all.includes(relPath)))
  );

  if (!route) {
    console.error('No route matches', relPath);
    process.exit(1);
  }

  console.log(`Testing screen "${screenArg}" (${sizeArg}) on route "${route.path}"`);

  let server: any = null;
  let baseUrl = 'http://127.0.0.1:4173';
  try {
    server = await preview({
      preview: {
        port: 4173,
        host: '127.0.0.1',
      },
    });
    baseUrl = (server.resolvedUrls?.local[0] || server.resolvedUrls?.network[0] || 'http://127.0.0.1:4173').replace(/\/$/, '');
  } catch {
    baseUrl = baseUrl.replace(/\/$/, '');
  }
  console.log('Using preview URL:', baseUrl);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });

  if (route.role && route.role !== 'buyer') {
    await context.addInitScript(
      ({ roleName }) => {
        localStorage.setItem('swiftcart_user_role', roleName);
        localStorage.setItem('swiftcart_dashboard_theme', 'light');
      },
      { roleName: route.role }
    );
  }

  const page = await context.newPage();
  await page.goto(`${baseUrl}${route.path}`, {
    waitUntil: 'domcontentloaded',
    timeout: 15000,
  });

  await page.waitForFunction(
    () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
    { timeout: 10000 }
  ).catch(() => {});
  await page.evaluate(() => document.fonts.ready).catch(() => {});
  await page.waitForTimeout(300);

  // Read expected image
  let expectedImg = sharp(screenPng);
  const expectedMeta = await sharp(screenPng).metadata();
  let origW = expectedMeta.width || vp.width;
  let origH = expectedMeta.height || vp.height;

  if (screenArg === 'add_mobile_money_bottom_sheet_swiftcart_uganda' && origW > 800) {
    expectedImg = sharp(screenPng).extract({ left: 590, top: 205, width: 390, height: 844 });
    origW = 390;
    origH = 844;
  } else if (screenArg === 'sign_in_register_swiftcart_tablet' && origW > 1200) {
    expectedImg = sharp(screenPng).extract({ left: 383, top: 40, width: 834, height: Math.min(1050, origH - 40) });
    origW = 834;
    origH = Math.min(1050, origH - 40);
  }

  const scale = vp.width / origW;
  const scaledOrigH = Math.round(origH * scale);

  const actualBuffer = await page.screenshot({ fullPage: true, animations: 'disabled' });
  const actualMeta = await sharp(actualBuffer).metadata();
  const actualH = actualMeta.height || vp.height;

  const compH = Math.min(scaledOrigH, actualH, 3200);

  console.log('Orig Expected:', origW, 'x', origH, 'Scaled H:', scaledOrigH, 'Actual H:', actualH, 'Comp H:', compH);

  const domInfo = await page.evaluate(() => {
    const b = window.getComputedStyle(document.body);
    const m = document.querySelector('main');
    const mc = m ? window.getComputedStyle(m) : null;
    const h = document.querySelector('header');
    const hc = h ? window.getComputedStyle(h) : null;
    return {
      bodyBg: b.backgroundColor,
      mainBg: mc?.backgroundColor,
      mainPt: mc?.paddingTop,
      headerH: hc?.height,
    };
  });
  console.log('DOM info:', JSON.stringify(domInfo));

  const expectedResized = await expectedImg
    .resize({
      width: vp.width,
      height: compH,
      fit: 'cover',
      position: 'top',
    })
    .png()
    .toBuffer();

  const actualCropped = await sharp(actualBuffer)
    .resize({
      width: vp.width,
      height: compH,
      fit: 'cover',
      position: 'top',
    })
    .png()
    .toBuffer();

  const imgExpected = PNG.sync.read(expectedResized);
  const imgActual = PNG.sync.read(actualCropped);
  const diffPng = new PNG({ width: vp.width, height: compH });

  const diffPixels = pixelmatch(
    imgExpected.data,
    imgActual.data,
    diffPng.data,
    vp.width,
    compH,
    { threshold: 0.15, includeAA: false }
  );

  const totalPixels = vp.width * compH;
  const diffPercent = Number(((diffPixels / totalPixels) * 100).toFixed(2));

  // Save side-by-side to inspect
  const diffBuffer = PNG.sync.write(diffPng);
  const sideBySide = await sharp({
    create: {
      width: vp.width * 3,
      height: compH,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      { input: expectedResized, left: 0, top: 0 },
      { input: actualCropped, left: vp.width, top: 0 },
      { input: diffBuffer, left: vp.width * 2, top: 0 },
    ])
    .png()
    .toFile('docs/fidelity-images/test-single-diff.png');

  console.log(`Saved side-by-side to docs/fidelity-images/test-single-diff.png`);
  console.log(`Result: ${diffPercent}% diff (${diffPercent <= 12 ? 'OK' : diffPercent <= 25 ? 'CHECK' : 'BAD'})`);
  await browser.close();
  if (server) {
    await server.close();
  }
}

main().catch(console.error);
