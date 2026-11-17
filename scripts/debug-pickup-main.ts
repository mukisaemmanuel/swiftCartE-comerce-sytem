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

  const mainElements = await page.evaluate(() => {
    const main = document.querySelector('main');
    if (!main) return 'NO MAIN ELEMENT';
    return Array.from(main.querySelectorAll('h1, h2, h3, h4, span, button')).slice(0, 30).map(el => el.textContent?.trim()).filter(Boolean);
  });
  console.log('Main elements:', mainElements);

  await browser.close();
}

main().catch(console.error);
