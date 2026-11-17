import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 834, height: 1112 } });
  await context.addInitScript(() => {
    localStorage.setItem('swiftcart_user_role', 'hub');
    localStorage.setItem('swiftcart_dashboard_theme', 'dark');
  });

  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/hub/hub-pickup-handover-console', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);

  const pageText = await page.evaluate(() => document.body.innerText);
  console.log('Has "All Ready (19)":', pageText.includes('All Ready (19)'));
  console.log('Has "AUTO":', pageText.includes('AUTO'));
  console.log('Has "Zebra DS3678":', pageText.includes('Zebra DS3678'));
  console.log('Has "Priority (>24h)":', pageText.includes('Priority (>24h)'));
  console.log('Has "Staged Bay A (7)":', pageText.includes('Staged Bay A (7)'));

  await browser.close();
}

main().catch(console.error);
