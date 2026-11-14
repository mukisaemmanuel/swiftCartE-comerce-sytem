import { preview } from 'vite';
import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { allRoutes } from '../src/routes';

export interface ScreenFidelityItem {
  screenPath: string;
  size: 'mobile' | 'tablet' | 'desktop';
  role: string;
  screenName: string;
  routePath: string;
  routeName: string;
  diffPercent: number | null;
  status: 'OK' | 'CHECK' | 'BAD' | 'WRONG_PAGE';
  imageFile: string;
  expectedHeading?: string;
  foundHeading?: string;
  error?: string;
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

export function extractMockupHeading(codeHtmlPath: string): string {
  if (!fs.existsSync(codeHtmlPath)) return '';
  const content = fs.readFileSync(codeHtmlPath, 'utf-8');

  const clean = (raw: string) =>
    decodeEntities(raw.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

  // 1. First h1 or h2 text
  let match = content.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
  if (match) {
    const text = clean(match[1]);
    if (text) return text;
  }

  // 2. Fallback to h3..h6
  match = content.match(/<h[3-6][^>]*>([\s\S]*?)<\/h[3-6]>/i);
  if (match) {
    const text = clean(match[1]);
    if (text) return text;
  }

  // 3. Fallback to prominent title span/div
  match = content.match(
    /<(?:div|span|p|header)[^>]*(?:font-headline|font-title|font-bold|text-headline|text-title)[^>]*>([\s\S]*?)<\/(?:div|span|p|header)>/i
  );
  if (match) {
    const text = clean(match[1]);
    if (text && text.length > 2) return text;
  }

  return '';
}

export async function runHonestFidelity() {
  console.log('--- Starting Honest Fidelity Test (Part A) ---');
  let server: any = null;
  let baseUrl = 'http://127.0.0.1:4173';
  try {
    server = await preview({
      preview: {
        port: 4173,
        host: '127.0.0.1',
      },
    });
    baseUrl = (server.resolvedUrls?.local[0] || 'http://127.0.0.1:4173').replace(/\/$/, '');
  } catch {
    console.log('Preview server port in use, connecting to existing preview server at:', baseUrl);
    baseUrl = baseUrl.replace(/\/$/, '');
  }
  console.log('Using target URL:', baseUrl);

  const browser = await chromium.launch({ headless: true });

  const imagesDir = path.resolve(process.cwd(), 'docs/fidelity-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const viewportMap = {
    mobile: { width: 390, height: 844 },
    tablet: { width: 834, height: 1112 },
    desktop: { width: 1440, height: 900 },
  } as const;

  const sizes = ['mobile'] as const;
  const results: ScreenFidelityItem[] = [];

  // Collect all folders in design/<size>/<role>/<screen>
  const foldersToTest: {
    size: 'mobile' | 'tablet' | 'desktop';
    role: string;
    screen: string;
    relPath: string;
    fullPath: string;
    codeHtmlPath: string;
  }[] = [];

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
          codeHtmlPath: path.join(screenDir, 'code.html'),
        });
      }
    }
  }

  console.log(`Found ${foldersToTest.length} total screen.png mockups in design/`);

  let count = 0;
  for (const item of foldersToTest) {
    count++;
    const { size, role, screen, relPath, fullPath, codeHtmlPath } = item;
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

    const expectedHeading = extractMockupHeading(codeHtmlPath);
    const safeFileName = `${size}-${role}-${screen}.png`;

    // Fresh browser context per screen with no stored auth
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });

    // If role needs a signed-in mock user, set it before navigation exactly as dev does
    if (route.role && route.role !== 'buyer') {
      await context.addInitScript((roleName) => {
        localStorage.setItem('swiftcart_user_role', roleName);
      }, route.role);
    }

    const page = await context.newPage();

    try {
      await page.goto(`${baseUrl}${route.path}`, {
        waitUntil: 'domcontentloaded',
        timeout: 15000,
      });

      // Wait for React Suspense fallback to disappear
      await page
        .waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 10000 }
        )
        .catch(() => {});

      // Wait for web fonts to load
      await page.evaluate(() => document.fonts.ready).catch(() => {});

      // Layout stabilization
      await page.waitForTimeout(200);

      // 1. Assert location.pathname equals route
      const currentUrl = new URL(page.url());
      const currentPath = currentUrl.pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
      const expectedPath = route.path.replace(/\/+/g, '/').replace(/\/$/, '') || '/';

      if (currentPath !== expectedPath) {
        throw new Error(`wrong page rendered: expected pathname "${expectedPath}", got "${currentPath}"`);
      }

      // 2. Assert heading from mockup's code.html is visible
      const pageText = await page.evaluate(() => document.body.innerText);
      const cleanExpected = expectedHeading.toLowerCase().trim();
      const cleanText = pageText.toLowerCase().replace(/\s+/g, ' ');

      // Dashboard / Overview variants
      const expectedVariants = [cleanExpected];
      if (cleanExpected.includes('dashboard')) {
        expectedVariants.push(cleanExpected.replace(/dashboard/g, 'overview'));
      }
      if (cleanExpected.includes('overview')) {
        expectedVariants.push(cleanExpected.replace(/overview/g, 'dashboard'));
      }

      // Split expected heading into significant words (min 3 chars)
      const sigWords = cleanExpected
        .split(/[^a-z0-9]+/)
        .filter(
          (w) =>
            w.length >= 3 &&
            !['and', 'for', 'the', 'with', 'from', 'dashboard', 'overview'].includes(w)
        );

      const headingMatched =
        cleanExpected.length === 0 ||
        expectedVariants.some((v) => cleanText.includes(v)) ||
        (sigWords.length > 0 && sigWords.some((w) => cleanText.includes(w)));

      if (!headingMatched) {
        throw new Error(
          `wrong page rendered: expected heading "${expectedHeading}" not visible in page content`
        );
      }

      // 3. Screenshot full height at exact viewport width
      const actualBuffer = await page.screenshot({ fullPage: true });

      // Read screen.png
      const meta = await sharp(fullPath).metadata();
      const origW = meta.width || vp.width;
      const origH = meta.height || vp.height;

      // Scale screen.png to viewport width
      const scale = vp.width / origW;
      const scaledOrigH = Math.round(origH * scale);

      // Actual screenshot dimensions
      const actualMeta = await sharp(actualBuffer).metadata();
      const actualH = actualMeta.height || vp.height;

      // Crop both to shorter height
      const compH = Math.min(scaledOrigH, actualH, 3200);

      const expectedBuffer = await sharp(fullPath)
        .resize({
          width: vp.width,
          height: compH,
          fit: 'cover',
          position: 'top',
        })
        .png()
        .toBuffer();

      const actualCropped = await sharp(actualBuffer)
        .resize({
          width: vp.width,
          height: compH,
          fit: 'cover',
          position: 'top',
        })
        .png()
        .toBuffer();

      const imgExpected = PNG.sync.read(expectedBuffer);
      const imgActual = PNG.sync.read(actualCropped);
      const diffPng = new PNG({ width: vp.width, height: compH });

      const numDiff = pixelmatch(
        imgExpected.data,
        imgActual.data,
        diffPng.data,
        vp.width,
        compH,
        { threshold: 0.15, includeAA: false }
      );

      const totalPixels = vp.width * compH;
      const diffPercent = Number(((numDiff / totalPixels) * 100).toFixed(2));
      const status: 'OK' | 'CHECK' | 'BAD' =
        diffPercent <= 12 ? 'OK' : diffPercent <= 25 ? 'CHECK' : 'BAD';

      // Composite side-by-side: [ expected | actual | diff ]
      const diffBuffer = PNG.sync.write(diffPng);
      const compositeBuffer = await sharp({
        create: {
          width: vp.width * 3,
          height: compH,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        },
      })
        .composite([
          { input: expectedBuffer, left: 0, top: 0 },
          { input: actualCropped, left: vp.width, top: 0 },
          { input: diffBuffer, left: vp.width * 2, top: 0 },
        ])
        .png()
        .toBuffer();

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
        expectedHeading,
      });

      if (results.length % 25 === 0) {
        console.log(`Audited ${results.length} screens...`);
      }
    } catch (err: any) {
      const errMsg = String(err.message || err);
      const isWrongPage = errMsg.includes('wrong page rendered');

      // If wrong page rendered, do NOT compute percentage
      results.push({
        screenPath: relPath,
        size,
        role,
        screenName: screen,
        routePath: route.path,
        routeName: route.name,
        diffPercent: null,
        status: isWrongPage ? 'WRONG_PAGE' : 'BAD',
        imageFile: '',
        expectedHeading,
        error: errMsg,
      });
      console.warn(`[${isWrongPage ? 'WRONG_PAGE' : 'ERROR'}] ${relPath}: ${errMsg}`);
    } finally {
      await page.close();
      await context.close();
    }
  }

  await browser.close();
  if (server?.httpServer) {
    server.httpServer.close();
  }

  // Summary counts
  const summary: Record<
    string,
    { ok: number; check: number; bad: number; wrongPage: number; total: number }
  > = {};

  for (const r of results) {
    const key = `${r.role} / ${r.size}`;
    if (!summary[key]) {
      summary[key] = { ok: 0, check: 0, bad: 0, wrongPage: 0, total: 0 };
    }
    summary[key].total++;
    if (r.status === 'OK') summary[key].ok++;
    else if (r.status === 'CHECK') summary[key].check++;
    else if (r.status === 'WRONG_PAGE') summary[key].wrongPage++;
    else summary[key].bad++;
  }

  // Sort: wrong page first, then highest diffPercent
  results.sort((a, b) => {
    if (a.status === 'WRONG_PAGE' && b.status !== 'WRONG_PAGE') return -1;
    if (b.status === 'WRONG_PAGE' && a.status !== 'WRONG_PAGE') return 1;
    return (b.diffPercent || 0) - (a.diffPercent || 0);
  });

  // Generate docs/FIDELITY-REPORT.md
  let md = `# SwiftCart Visual Fidelity Report (Honest Audit)\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += `## Summary by Role and Screen Size\n\n`;
  md += `| Role / Size | OK (<=12%) | CHECK (12-25%) | BAD (>25%) | Wrong Page Rendered | Total Screens |\n`;
  md += `|---|---|---|---|---|---|\n`;

  let sumOk = 0,
    sumCheck = 0,
    sumBad = 0,
    sumWrong = 0,
    sumTotal = 0;

  for (const [k, v] of Object.entries(summary).sort((a, b) => a[0].localeCompare(b[0]))) {
    md += `| **${k}** | ${v.ok} | ${v.check} | ${v.bad} | ${v.wrongPage} | ${v.total} |\n`;
    sumOk += v.ok;
    sumCheck += v.check;
    sumBad += v.bad;
    sumWrong += v.wrongPage;
    sumTotal += v.total;
  }
  md += `| **TOTAL** | **${sumOk}** | **${sumCheck}** | **${sumBad}** | **${sumWrong}** | **${sumTotal}** |\n\n`;

  md += `## 20 Worst Screens (Top Discrepancies & Wrong Pages)\n\n`;
  md += `| Route | Role | Size | Screen Folder | Diff % | Status | Expected Heading | Side-by-Side (Expected \\| Actual \\| Diff) |\n`;
  md += `|---|---|---|---|---|---|---|---|\n`;

  for (const r of results.slice(0, 20)) {
    const diffStr = r.diffPercent !== null ? `${r.diffPercent}%` : 'N/A';
    const imgLink = r.imageFile ? `[View Side-by-Side](${r.imageFile})` : (r.error || 'N/A');
    md += `| \`${r.routePath}\` | ${r.role} | ${r.size} | \`${r.screenName}\` | **${diffStr}** | **${r.status}** | "${r.expectedHeading || ''}" | ${imgLink} |\n`;
  }

  md += `\n## Complete Screen Fidelity Breakdown\n\n`;
  md += `| Route | Role | Size | Diff % | Status | Expected Heading | Mockup Folder | Side-by-Side Comparison |\n`;
  md += `|---|---|---|---|---|---|---|---|\n`;
  for (const r of results) {
    const diffStr = r.diffPercent !== null ? `${r.diffPercent}%` : 'N/A';
    const imgLink = r.imageFile ? `[View Image](${r.imageFile})` : (r.error || 'N/A');
    md += `| \`${r.routePath}\` | ${r.role} | ${r.size} | ${diffStr} | **${r.status}** | "${r.expectedHeading || ''}" | \`${r.screenName}\` | ${imgLink} |\n`;
  }

  fs.writeFileSync(path.resolve(process.cwd(), 'docs/FIDELITY-REPORT.md'), md, 'utf8');

  console.log('\n--- FIDELITY AUDIT COMPLETE ---');
  console.log(`Total Evaluated: ${sumTotal}`);
  console.log(`OK (<=12%): ${sumOk}`);
  console.log(`CHECK (12-25%): ${sumCheck}`);
  console.log(`BAD (>25%): ${sumBad}`);
  console.log(`Wrong Page Rendered: ${sumWrong}`);
  console.log('Summary by role & size:');
  console.table(summary);
  console.log('Report saved to docs/FIDELITY-REPORT.md\n');

  return { sumOk, sumCheck, sumBad, sumWrong, sumTotal, summary, results };
}

if (process.argv[1]?.includes('run-fidelity')) {
  runHonestFidelity().catch((err) => {
    console.error('Fatal fidelity run error:', err);
    process.exit(1);
  });
}
