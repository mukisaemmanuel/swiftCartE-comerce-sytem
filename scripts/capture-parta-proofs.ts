import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });

  // 1. Buyer desktop
  const pageBuyerDesktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageBuyerDesktop.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await pageBuyerDesktop.screenshot({ path: 'docs/proof-buyer-desktop.png' });

  // 2. Buyer tablet
  const pageBuyerTablet = await browser.newPage({ viewport: { width: 834, height: 1112 } });
  await pageBuyerTablet.goto('http://127.0.0.1:4173/account', { waitUntil: 'networkidle' });
  await pageBuyerTablet.screenshot({ path: 'docs/proof-buyer-tablet.png' });

  // 3. Seller desktop (showing sidebar with check_circle icon next to Store Profile & KYC)
  const pageSellerDesktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await pageSellerDesktop.goto('http://127.0.0.1:4173/seller/overview-seller', { waitUntil: 'networkidle' });
  await pageSellerDesktop.screenshot({ path: 'docs/proof-seller-desktop.png' });

  // 4. Admin phone (showing header with Escrow Ledger title and no truncation)
  const pageAdminPhone = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await pageAdminPhone.goto('http://127.0.0.1:4173/admin/overview-admin', { waitUntil: 'networkidle' });
  await pageAdminPhone.screenshot({ path: 'docs/proof-admin-phone.png' });

  await browser.close();
  console.log('All Part A full proof screenshots captured successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
