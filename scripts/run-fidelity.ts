import { preview } from 'vite';
import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { buyerRoutes } from '../src/routes/buyer';

async function runFidelity() {
  console.log('Starting Vite preview server via Node API...');
  const server = await preview({
    preview: {
      port: 4173,
      host: '127.0.0.1',
    },
  });

  const baseUrl = server.resolvedUrls?.local[0] || 'http://127.0.0.1:4173';
  console.log('Preview server running at:', baseUrl);

  console.log('Launching Chromium...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results: any[] = [];
  const imagesDir = path.resolve(process.cwd(), 'docs/fidelity-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const sizes = [
    { name: 'mobile', width: 390 },
    { name: 'tablet', width: 834 },
    { name: 'desktop', width: 1440 },
  ] as const;

  console.log(`Testing ${buyerRoutes.length} buyer routes across 3 screen sizes...`);

  let count = 0;
  for (const size of sizes) {
    await page.setViewportSize({ width: size.width, height: 1600 });

    for (const route of buyerRoutes) {
      count++;
      const targetSizeFolder =
        size.name === 'mobile'
          ? route.designFiles.mobile || route.designFiles.all.find((f) => f.includes('/mobile/'))
          : size.name === 'tablet'
            ? route.designFiles.tablet || route.designFiles.all.find((f) => f.includes('/tablet/'))
            : route.designFiles.desktop || route.designFiles.all.find((f) => f.includes('/desktop/'));

      const referenceFolder = targetSizeFolder || route.designFiles.all[0];
      const screenPngPath = path.resolve(process.cwd(), referenceFolder, 'screen.png');

      if (!fs.existsSync(screenPngPath)) {
        continue;
      }

      try {
        await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 5000 });
        await page.waitForTimeout(50);

        const actualBuffer = await page.screenshot({
          clip: { x: 0, y: 0, width: size.width, height: 1600 },
        });

        const actualNormalized = await sharp(actualBuffer)
          .resize({
            width: size.width,
            height: 1600,
            fit: 'cover',
            position: 'top',
            background: { r: 255, g: 255, b: 255, alpha: 1 },
          })
          .png()
          .toBuffer();

        const expectedNormalized = await sharp(screenPngPath)
          .resize({
            width: size.width,
            height: 1600,
            fit: 'cover',
            position: 'top',
            background: { r: 255, g: 255, b: 255, alpha: 1 },
          })
          .png()
          .toBuffer();

        const imgActual = PNG.sync.read(actualNormalized);
        const imgExpected = PNG.sync.read(expectedNormalized);
        const diffPng = new PNG({ width: size.width, height: 1600 });

        const diffPixels = pixelmatch(
          imgActual.data,
          imgExpected.data,
          diffPng.data,
          size.width,
          1600,
          { threshold: 0.1 }
        );

        const totalPixels = size.width * 1600;
        const diffPercent = Number(((diffPixels / totalPixels) * 100).toFixed(2));

        const safeRouteName = route.path.replace(/\//g, '_') || '_root';
        const actualRelPath = `fidelity-images/${size.name}${safeRouteName}-actual.png`;
        const expectedRelPath = `fidelity-images/${size.name}${safeRouteName}-expected.png`;

        fs.writeFileSync(path.join(imagesDir, `${size.name}${safeRouteName}-actual.png`), actualNormalized);
        fs.writeFileSync(path.join(imagesDir, `${size.name}${safeRouteName}-expected.png`), expectedNormalized);

        results.push({
          routePath: route.path,
          routeName: route.name,
          size: size.name,
          width: size.width,
          screenFolder: referenceFolder,
          diffPercent,
          actualFile: actualRelPath,
          expectedFile: expectedRelPath,
        });

        if (count % 30 === 0) {
          console.log(`Processed ${count}/${buyerRoutes.length * 3} snapshots...`);
        }
      } catch {
        // Skip route if load error
      }
    }
  }

  await page.close();
  await context.close();
  await browser.close();
  server.httpServer.close();

  // Sort worst first
  results.sort((a, b) => b.diffPercent - a.diffPercent);

  const totalTested = results.length;
  const avgDiff =
    totalTested > 0
      ? Number((results.reduce((sum, r) => sum + r.diffPercent, 0) / totalTested).toFixed(2))
      : 0;
  const meetingTarget = results.filter((r) => r.diffPercent < 8).length;
  const exceedingTarget = results.filter((r) => r.diffPercent >= 8).length;
  const worst15 = results.slice(0, 15);

  let md = `# SwiftCart Buyer Storefront Fidelity Report\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `## Executive Summary\n\n`;
  md += `- **Total Screen-Size Pairs Tested**: ${totalTested}\n`;
  md += `- **Average Pixel Difference**: ${avgDiff}%\n`;
  md += `- **Screens Meeting Target (< 8% diff)**: ${meetingTarget} (${totalTested > 0 ? ((meetingTarget / totalTested) * 100).toFixed(1) : 0}%)\n`;
  md += `- **Screens Exceeding Target (>= 8% diff)**: ${exceedingTarget}\n\n`;

  md += `## Top 15 Worst Screens (Needs Polish in Next Phase)\n\n`;
  md += `| Route | Name | Size | Screen Folder | Diff % | Actual Image | Reference Mockup |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  for (const r of worst15) {
    md += `| \`${r.routePath}\` | ${r.routeName} | ${r.size} (${r.width}px) | \`${r.screenFolder}\` | **${r.diffPercent}%** | [Actual](${r.actualFile}) | [Mockup](${r.expectedFile}) |\n`;
  }

  md += `\n## Full Fidelity Breakdown (Sorted Worst First)\n\n`;
  md += `| Route | Size | Diff % | Status | Screen Folder | Actual | Reference |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  for (const r of results) {
    const status = r.diffPercent < 8 ? 'PASS (<8%)' : 'EXCEEDS TARGET';
    md += `| \`${r.routePath}\` | ${r.size} | ${r.diffPercent}% | ${status} | \`${r.screenFolder}\` | [View](${r.actualFile}) | [View](${r.expectedFile}) |\n`;
  }

  fs.writeFileSync(path.resolve(process.cwd(), 'docs/FIDELITY-REPORT.md'), md, 'utf8');
  console.log(`\n--- FIDELITY REPORT GENERATED ---`);
  console.log(`Total Tested: ${totalTested}`);
  console.log(`Average Pixel Difference: ${avgDiff}%`);
  console.log(`Screens Meeting Target (<8%): ${meetingTarget}/${totalTested}`);
  console.log(`Report saved to docs/FIDELITY-REPORT.md\n`);
}

runFidelity().catch((err) => {
  console.error('Fidelity check failed:', err);
  process.exit(1);
});

