import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 834, height: 1112 } });
  await context.addInitScript(() => {
    localStorage.setItem('swiftcart_user_role', 'hub');
    localStorage.setItem('swiftcart_dashboard_theme', 'dark');
  });

  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/hub/hub-pickup-handover-console', { waitUntil: 'networkidle' });

  const heading = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h1, h2, h3, h4, span')).slice(0, 15).map(el => el.textContent?.trim()).filter(Boolean);
  });
  console.log('Top elements:', heading);

  await browser.close();
}

main().catch(console.error);
