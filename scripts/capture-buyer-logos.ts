import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch();
  
  // Desktop
  const pageDesktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageDesktop.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await pageDesktop.screenshot({ path: 'docs/test-buyer-desktop-header.png', clip: { x: 0, y: 0, width: 1440, height: 120 } });

  // Tablet
  const pageTablet = await browser.newPage({ viewport: { width: 834, height: 1112 } });
  await pageTablet.goto('http://localhost:5173/account', { waitUntil: 'networkidle' });
  await pageTablet.screenshot({ path: 'docs/test-buyer-tablet-header.png', clip: { x: 0, y: 0, width: 834, height: 120 } });

  await browser.close();
  console.log('Screenshots saved.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
