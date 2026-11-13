import { preview } from 'vite';
import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { allRoutes } from '../src/routes';

interface ScreenFidelityItem {
  screenPath: string;
  size: 'mobile' | 'tablet' | 'desktop';
  role: string;
  screenName: string;
  routePath: string;
  routeName: string;
  diffPercent: number;
  status: 'OK' | 'CHECK' | 'BAD';
  imageFile: string;
  error?: string;
}

export async function runHonestFidelity() {
  console.log('--- Starting Honest Fidelity Test ---');
  let server: any = null;
  let baseUrl = 'http://127.0.0.1:4173';
  try {
    server = await preview({
      preview: {
        port: 4173,
        host: '127.0.0.1',
      },
    });
    baseUrl = server.resolvedUrls?.local[0] || 'http://127.0.0.1:4173';
  } catch {
    console.log('Preview server port in use, connecting to existing preview server at:', baseUrl);
  }
  console.log('Using target URL:', baseUrl);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const imagesDir = path.resolve(process.cwd(), 'docs/fidelity-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const viewportMap = {
    mobile: { width: 390, height: 844 },
    tablet: { width: 834, height: 1112 },
    desktop: { width: 1440, height: 900 },
  } as const;

  const sizes = ['mobile', 'tablet', 'desktop'] as const;
  const results: ScreenFidelityItem[] = [];

  // Collect all folders in design/<size>/<role>/<screen>
  const foldersToTest: { size: 'mobile' | 'tablet' | 'desktop'; role: string; screen: string; relPath: string; fullPath: string }[] = [];

  for (const size of sizes) {
    const sizeDir = path.join(process.cwd(), 'design', size);
    if (!fs.existsSync(sizeDir)) continue;
    for (const role of fs.readdirSync(sizeDir)) {
      const roleDir = path.join(sizeDir, role);
      if (!fs.statSync(roleDir).isDirectory()) continue;
      for (const screen of fs.readdirSync(roleDir)) {
        const screenDir = path.join(roleDir, screen);
        if (!fs.statSync(screenDir).isDirectory()) continue;
        const screenPng = path.join(screenDir, 'screen.png');
        if (!fs.existsSync(screenPng)) continue;

        const relPath = `design/${size}/${role}/${screen}`.replace(/\\/g, '/');
        foldersToTest.push({
          size,
          role,
          screen,
          relPath,
          fullPath: screenPng,
        });
      }
    }
  }

  console.log(`Found ${foldersToTest.length} total screen.png mockups in design/`);

  let processedCount = 0;
  for (const item of foldersToTest) {
    processedCount++;
    const { size, role, screen, relPath, fullPath } = item;
    const vp = viewportMap[size];

    // Find route that uses this exact folder for THAT size
    const route = allRoutes.find(
      (r) =>
        r.role === role &&
        (r.designFiles[size] === relPath ||
          (Array.isArray(r.designFiles.all) && r.designFiles.all.includes(relPath)))
    );

    if (!route) {
      // Skipped: No route uses this exact folder for this size
      continue;
    }

    try {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() =>
        page.goto(`${baseUrl}${route.path}`, { waitUntil: 'domcontentloaded', timeout: 10000 })
      );

      // Wait for React.lazy chunks to load (Suspense fallback disappears)
      try {
        await page.waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 10000 }
        );
      } catch {}

      // Wait for web fonts to load
      try {
        await page.evaluate(() => document.fonts.ready);
      } catch {}

      // Layout stabilization
      await page.waitForTimeout(300);

      // Verify page URL and expected heading match the route
      const currentUrl = page.url();
      const normalizedPath = route.path.replace(/\/$/, '');
      if (normalizedPath && !currentUrl.includes(normalizedPath)) {
        throw new Error(`URL mismatch for route ${route.path}: got ${currentUrl}`);
      }

      const hasContent = await page.evaluate(() => {
        const h = document.querySelector('h1, h2, h3, header, main, [role="main"]');
        return Boolean(h && (h.textContent?.trim().length || 0) > 0);
      });
      if (!hasContent) {
        throw new Error(`No heading or main content rendered for ${route.path}`);
      }

      // Read screen.png
      const meta = await sharp(fullPath).metadata();
      const origW = meta.width || vp.width;
      const origH = meta.height || vp.height;

      // Scale screen.png to viewport width
      const scale = vp.width / origW;
      const targetHeight = Math.min(Math.round(origH * scale), 3200);

      // Expected image scaled to viewport width and targetHeight
      const expectedBuffer = await sharp(fullPath)
        .resize({
          width: vp.width,
          height: targetHeight,
          fit: 'fill',
        })
        .png()
        .toBuffer();

      // Actual screenshot at targetHeight
      const actualBuffer = await page.screenshot({
        clip: { x: 0, y: 0, width: vp.width, height: targetHeight },
      });

      const actualNormalized = await sharp(actualBuffer)
        .resize({
          width: vp.width,
          height: targetHeight,
          fit: 'cover',
          position: 'top',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toBuffer();

      const imgExpected = PNG.sync.read(expectedBuffer);
      const imgActual = PNG.sync.read(actualNormalized);
      const diffPng = new PNG({ width: vp.width, height: targetHeight });

      const numDiff = pixelmatch(
        imgExpected.data,
        imgActual.data,
        diffPng.data,
        vp.width,
        targetHeight,
        { threshold: 0.1 }
      );

      const totalPixels = vp.width * targetHeight;
      const diffPercent = Number(((numDiff / totalPixels) * 100).toFixed(2));
      const status: 'OK' | 'CHECK' | 'BAD' =
        diffPercent <= 12 ? 'OK' : diffPercent <= 25 ? 'CHECK' : 'BAD';

      // Composite side-by-side: [ expected | actual | diff ]
      const diffBuffer = PNG.sync.write(diffPng);
      const compositeBuffer = await sharp({
        create: {
          width: vp.width * 3,
          height: targetHeight,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      })
        .composite([
          { input: expectedBuffer, left: 0, top: 0 },
          { input: actualNormalized, left: vp.width, top: 0 },
          { input: diffBuffer, left: vp.width * 2, top: 0 },
        ])
        .png()
        .toBuffer();

      const safeFileName = `${size}-${role}-${screen}.png`;
      fs.writeFileSync(path.join(imagesDir, safeFileName), compositeBuffer);

      results.push({
        screenPath: relPath,
        size,
        role,
        screenName: screen,
        routePath: route.path,
        routeName: route.name,
        diffPercent,
        status,
        imageFile: `fidelity-images/${safeFileName}`,
      });

      if (results.length % 20 === 0) {
        console.log(`Evaluated ${results.length} matched screens...`);
      }
    } catch (err: any) {
      console.error(`Error comparing ${relPath}:`, err.message || err);
      results.push({
        screenPath: relPath,
        size,
        role,
        screenName: screen,
        routePath: route.path,
        routeName: route.name,
        diffPercent: 100,
        status: 'BAD',
        imageFile: '',
        error: String(err.message || err),
      });
    }
  }

  await page.close();
  await context.close();
  await browser.close();
  if (server?.httpServer) {
    server.httpServer.close();
  }

  // Sort worst first
  results.sort((a, b) => b.diffPercent - a.diffPercent);

  // Group summary by role and size
  const summary: Record<string, { ok: number; check: number; bad: number; total: number }> = {};
  for (const r of results) {
    const key = `${r.role} / ${r.size}`;
    if (!summary[key]) summary[key] = { ok: 0, check: 0, bad: 0, total: 0 };
    summary[key].total++;
    if (r.status === 'OK') summary[key].ok++;
    else if (r.status === 'CHECK') summary[key].check++;
    else summary[key].bad++;
  }

  // Generate docs/FIDELITY-REPORT.md
  let md = `# SwiftCart Visual Fidelity Report\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `## Summary by Role and Screen Size\n\n`;
  md += `| Role / Size | OK (<=12%) | CHECK (12-25%) | BAD (>25%) | Total Screens |\n`;
  md += `|---|---|---|---|---|\n`;

  let sumOk = 0, sumCheck = 0, sumBad = 0, sumTotal = 0;
  for (const [k, v] of Object.entries(summary).sort((a, b) => a[0].localeCompare(b[0]))) {
    md += `| **${k}** | ${v.ok} | ${v.check} | ${v.bad} | ${v.total} |\n`;
    sumOk += v.ok;
    sumCheck += v.check;
    sumBad += v.bad;
    sumTotal += v.total;
  }
  md += `| **TOTAL** | **${sumOk}** | **${sumCheck}** | **${sumBad}** | **${sumTotal}** |\n\n`;

  md += `## 20 Worst Screens (Highest Pixel Discrepancy)\n\n`;
  md += `| Route | Role | Size | Screen Folder | Diff % | Status | Side-by-Side (Expected \\| Actual \\| Diff) |\n`;
  md += `|---|---|---|---|---|---|---|\n`;

  for (const r of results.slice(0, 20)) {
    const imgLink = r.imageFile ? `[View Side-by-Side](${r.imageFile})` : 'N/A';
    md += `| \`${r.routePath}\` | ${r.role} | ${r.size} | \`${r.screenName}\` | **${r.diffPercent}%** | **${r.status}** | ${imgLink} |\n`;
  }

  md += `\n## Complete Screen Fidelity Breakdown (Sorted Worst First)\n\n`;
  md += `| Route | Role | Size | Diff % | Status | Mockup Folder | Side-by-Side Comparison |\n`;
  md += `|---|---|---|---|---|---|---|\n`;
  for (const r of results) {
    const imgLink = r.imageFile ? `[View Image](${r.imageFile})` : 'N/A';
    md += `| \`${r.routePath}\` | ${r.role} | ${r.size} | ${r.diffPercent}% | **${r.status}** | \`${r.screenName}\` | ${imgLink} |\n`;
  }

  fs.writeFileSync(path.resolve(process.cwd(), 'docs/FIDELITY-REPORT.md'), md, 'utf8');

  console.log('\n--- FIDELITY AUDIT COMPLETE ---');
  console.log(`Total Evaluated: ${sumTotal}`);
  console.log(`OK (<=12%): ${sumOk}`);
  console.log(`CHECK (12-25%): ${sumCheck}`);
  console.log(`BAD (>25%): ${sumBad}`);
  console.log('Summary by role & size:');
  console.table(summary);
  console.log('Report saved to docs/FIDELITY-REPORT.md\n');

  return { sumOk, sumCheck, sumBad, sumTotal, summary, results };
}

if (process.argv[1]?.includes('run-fidelity')) {
  runHonestFidelity().catch((err) => {
    console.error('Fatal fidelity run error:', err);
    process.exit(1);
  });
}
