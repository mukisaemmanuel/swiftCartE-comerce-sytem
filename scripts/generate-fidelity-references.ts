import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import crypto from 'crypto';

function getLuminance(hex: string): number {
  if (!hex || !hex.startsWith('#')) return 0.5;
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getTargetTheme(folder: string, role: string, codeHtmlPath?: string): 'light' | 'dark' {
  if (role === 'buyer') return 'light';

  // Specific Stitch export anomalies where folder name contradicts the actual design inside code.html
  if (folder === 'seller_applications_kyc_swiftcart_desktop_dark') return 'light';
  if (folder === 'seller_applications_kyc_swiftcart_desktop_light') return 'dark';
  if (folder === 'hub_line_haul_transit_manifest_swiftcart_desktop_light') return 'dark';
  if (folder === 'hub_station_command_overview_swiftcart_desktop_light') return 'dark';
  if (folder === 'hub_damaged_goods_quarantine_bay_tablet_light_1') return 'dark';
  if (folder === 'hub_station_command_overview_tablet_light_1') return 'dark';

  if (folder.includes('light')) return 'light';
  if (folder.includes('dark')) return 'dark';

  if (codeHtmlPath && fs.existsSync(codeHtmlPath)) {
    const html = fs.readFileSync(codeHtmlPath, 'utf-8');
    const surfaceMatch = html.match(/"surface":\s*"([^"]+)"/);
    const bgMatch = html.match(/"background":\s*"([^"]+)"/);
    const hex = (surfaceMatch && surfaceMatch[1]) || (bgMatch && bgMatch[1]);
    if (hex && hex.startsWith('#')) {
      return getLuminance(hex) > 0.4 ? 'light' : 'dark';
    }
    if (html.includes('<html class="light"') || html.includes('data-theme="light"')) return 'light';
    if (html.includes('<html class="dark"') || html.includes('data-theme="dark"')) return 'dark';
  }

  return 'dark';
}

export async function generateReferences() {
  console.log('--- Generating Honest Reference Screenshots from code.html ---');
  const tailwindScriptPath = path.resolve(process.cwd(), 'scripts/tailwindcss.js');
  const tailwindScript = fs.existsSync(tailwindScriptPath) ? fs.readFileSync(tailwindScriptPath, 'utf-8') : '';
  const publicImagesDir = path.resolve(process.cwd(), 'public/images');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const outBase = path.resolve(process.cwd(), 'docs/fidelity-reference');
  if (!fs.existsSync(outBase)) fs.mkdirSync(outBase, { recursive: true });

  const viewports: Record<string, { width: number; height: number }> = {
    mobile: { width: 390, height: 844 },
    tablet: { width: 834, height: 1112 },
    desktop: { width: 1440, height: 900 },
  };

  const sizes = ['mobile', 'tablet', 'desktop'] as const;
  let count = 0;
  let generated = 0;

  for (const size of sizes) {
    const sizeDir = path.resolve('design', size);
    if (!fs.existsSync(sizeDir)) continue;

    const outSizeDir = path.join(outBase, size);
    if (!fs.existsSync(outSizeDir)) fs.mkdirSync(outSizeDir, { recursive: true });

    const vp = viewports[size];
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    await context.addInitScript('window.__name = (fn) => fn;');

    // Intercept CDN tailwind and remote images offline
    await context.route('**/*', async (route) => {
      const url = route.request().url();
      if (url.includes('cdn.tailwindcss.com')) {
        return route.fulfill({
          contentType: 'application/javascript',
          body: tailwindScript,
        });
      }
      if (
        url.includes('googleusercontent.com') ||
        url.includes('unsplash.com') ||
        /\.(png|jpg|jpeg|webp)/i.test(url)
      ) {
        if (!url.includes('fonts.googleapis.com') && !url.includes('fonts.gstatic.com')) {
          const cleanUrl = url.replace(/[;,\.\)]+$/, '');
          const hash = crypto.createHash('sha256').update(cleanUrl).digest('hex').slice(0, 16);
          const imgPath = path.join(publicImagesDir, `${hash}.webp`);
          if (fs.existsSync(imgPath)) {
            return route.fulfill({
              contentType: 'image/webp',
              body: fs.readFileSync(imgPath),
            });
          }
        }
      }
      return route.continue();
    });

    const page = await context.newPage();

    for (const role of fs.readdirSync(sizeDir)) {
      const roleDir = path.join(sizeDir, role);
      if (!fs.statSync(roleDir).isDirectory()) continue;

      for (const folder of fs.readdirSync(roleDir)) {
        const folderDir = path.join(roleDir, folder);
        if (!fs.statSync(folderDir).isDirectory()) continue;

        const codeHtmlPath = path.join(folderDir, 'code.html');
        if (!fs.existsSync(codeHtmlPath)) continue;

        const targetPng = path.join(outSizeDir, `${folder}.png`);
        const targetMeta = path.join(outSizeDir, `${folder}.json`);
        count++;

        let html = fs.readFileSync(codeHtmlPath, 'utf-8');

        const themeClass = getTargetTheme(folder, role, codeHtmlPath);

        // Ensure html tag has theme class and data-theme cleanly without duplicate class attributes
        if (!html.includes('<html')) {
          html = `<html class="${themeClass}" data-theme="${themeClass}" lang="en">` + html + '</html>';
        } else {
          html = html.replace(
            /<html[^>]*>/i,
            `<html class="${themeClass}" data-theme="${themeClass}" lang="en">`
          );
        }

        // Prevent offscreen glow elements from stretching document scrollWidth beyond viewport width
        html = html.replace(
          /<head>/i,
          `<head><style>html, body { overflow-x: hidden !important; width: ${vp.width}px !important; max-width: ${vp.width}px !important; margin: 0 !important; padding: 0 !important; }</style>`
        );

        try {
          await page.setContent(html, { waitUntil: 'load', timeout: 15000 });
          // Stabilize layout and let tailwind script finish class processing
          await page.waitForTimeout(300);
          await page.evaluate('document.fonts && document.fonts.ready').catch(() => { });

          // Extract visible text and structure for text diffing using string evaluation
          const textData = await page.evaluate(`(() => {
            const clean = (s) => (s || '').replace(/\\s+/g, ' ').trim();
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
              .map((el) => clean(el.textContent))
              .filter(Boolean);
            const buttons = Array.from(document.querySelectorAll('button, [role="button"], a.btn'))
              .map((el) => clean(el.textContent))
              .filter((s) => s.length > 0 && s.length < 50);
            const labels = Array.from(document.querySelectorAll('label, [class*="label"], [class*="badge"]'))
              .map((el) => clean(el.textContent))
              .filter((s) => s.length > 0 && s.length < 50);
            const allText = clean(document.body.innerText || '');
            return { headings, buttons, labels, allText };
          })()`);

          // Write reference screenshot
          await page.screenshot({
            path: targetPng,
            fullPage: true,
            animations: 'disabled',
          });

          // Write reference metadata
          fs.writeFileSync(
            targetMeta,
            JSON.stringify(
              {
                folder,
                size,
                role,
                isLight,
                themeClass,
                width: vp.width,
                headings: textData.headings,
                buttons: textData.buttons,
                labels: textData.labels,
              },
              null,
              2
            )
          );

          generated++;
          if (generated % 25 === 0) {
            console.log(`Generated ${generated} reference images...`);
          }
        } catch (err) {
          console.error(`Error generating reference for ${size}/${role}/${folder}:`, err);
        }
      }
    }
    await context.close();
  }

  await browser.close();
  console.log(`--- Finished generating ${generated} / ${count} honest reference screenshots ---`);
}

if (process.argv[1]?.endsWith('generate-fidelity-references.ts')) {
  generateReferences()
    .then(() => process.exit(0))
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}
