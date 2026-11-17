import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  const title = await page.title();
  const html = await page.content();
  console.log('Title:', title);
  console.log('Body length:', html.length);
  
  // Check img src of the logo
  const logoSrc = await page.evaluate(() => {
    const img = document.querySelector('header img');
    return img ? (img as HTMLImageElement).src : 'NO HEADER IMG FOUND';
  });
  console.log('Header logo src:', logoSrc);

  await page.screenshot({ path: 'docs/test-full-desktop.png' });
  await browser.close();
}

main().catch(err => console.error(err));
