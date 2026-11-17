import * as fs from 'fs';
import sharp from 'sharp';
import { chromium } from '@playwright/test';

async function main() {
  const refPath = 'docs/fidelity-reference/desktop/hub_storage_aging_matrix_swiftcart_desktop_dark.png';
  if (!fs.existsSync(refPath)) {
    console.log('Ref path not found:', refPath);
    return;
  }
  const refMeta = await sharp(refPath).metadata();
  console.log('Ref meta:', refMeta.width, refMeta.height);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await context.addInitScript(() => {
    localStorage.setItem('swiftcart_user_role', 'hub');
    localStorage.setItem('swiftcart_dashboard_theme', 'dark');
  });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/hub/hub-storage-aging-matrix', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const actualBuf = await page.screenshot({ fullPage: true });
  const actualMeta = await sharp(actualBuf).metadata();
  console.log('Actual meta:', actualMeta.width, actualMeta.height);

  await page.screenshot({ path: 'docs/debug-actual-storage.png' });
  await browser.close();
}

main().catch(console.error);
