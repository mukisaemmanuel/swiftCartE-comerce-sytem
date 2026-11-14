import { chromium } from '@playwright/test';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';
import { allRoutes } from '../src/routes';

async function runHeadingAudit() {
  console.log('--- Starting Heading Audit (Mobile 390px) ---');
  let previewServer: any;
  let baseUrl = 'http://127.0.0.1:4173';

  try {
    const probe = await fetch(baseUrl).catch(() => null);
    if (!probe || !probe.ok) {
      previewServer = await preview({
        preview: { port: 4173, host: '127.0.0.1' },
      });
      baseUrl = (previewServer.resolvedUrls?.local[0] || baseUrl).replace(/\/+$/, '');
      console.log(`Started Vite preview server at ${baseUrl}`);
    } else {
      baseUrl = baseUrl.replace(/\/+$/, '');
      console.log(`Vite preview server already running at ${baseUrl}`);
    }
  } catch (e) {
    baseUrl = baseUrl.replace(/\/+$/, '');
    console.log(`Using existing preview server at ${baseUrl}`);
  }

  const browser = await chromium.launch({ headless: true });
  const results: { path: string; role: string; heading: string; pass: boolean }[] = [];

  // Filter unique paths
  const uniqueRoutes = Array.from(new Map(allRoutes.map((r) => [r.path, r])).values());
  console.log(`Auditing ${uniqueRoutes.length} unique routes...`);

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
  });

  let count = 0;
  for (const route of uniqueRoutes) {
    count++;
    const page = await context.newPage();

    // Set role in localStorage if not buyer
    if (route.role && route.role !== 'buyer') {
      await page.addInitScript(
        ({ roleName }) => {
          localStorage.setItem('swiftcart_user_role', roleName);
          localStorage.setItem('swiftcart_dashboard_theme', 'dark');
        },
        { roleName: route.role }
      );
    }

    try {
      const url = `${baseUrl}${route.path}`.replace(/([^:])\/\/+/g, '$1/');
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: 10000,
      });

      // Wait for React Suspense fallback
      await page
        .waitForFunction(
          () => !document.body.innerText.includes('Loading SwiftCart Portal...'),
          { timeout: 5000 }
        )
        .catch(() => {});

      // Layout stabilization
      await page.waitForTimeout(100);

      const heading = await page.evaluate(() => {
        const drawer = document.querySelector(
          'aside#seller-drawer, aside#admin-drawer, aside#hub-drawer, aside#rider-drawer'
        );
        const headings = Array.from(
          document.querySelectorAll(
            'h1, h2, h3, header span.font-headline-sm, header span.font-label-lg, main .font-headline-sm'
          )
        );
        for (const el of headings) {
          if (drawer && drawer.contains(el)) continue;
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          if (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0'
          ) {
            const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
            if (text.length > 1 && !text.includes('Loading')) {
              return text;
            }
          }
        }
        const fallback = document.querySelector('main h1, main h2, main h3, main p.font-headline-sm');
        if (fallback) {
          return (fallback.textContent || '').trim().replace(/\s+/g, ' ');
        }
        return '';
      });

      const pass = heading.length > 0;
      results.push({
        path: route.path,
        role: route.role,
        heading: heading || 'NO HEADING FOUND',
        pass,
      });
    } catch (err: any) {
      results.push({
        path: route.path,
        role: route.role,
        heading: `ERROR: ${err.message}`,
        pass: false,
      });
    } finally {
      await page.close();
    }

    if (count % 25 === 0 || count === uniqueRoutes.length) {
      console.log(`Audited ${count} / ${uniqueRoutes.length} routes...`);
    }
  }

  await browser.close();
  if (previewServer) {
    await previewServer.close();
  }

  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass).length;
  console.log(`\n--- Heading Audit Complete: ${passed} passed, ${failed} failed ---\n`);

  // Build markdown table
  let md = '# Heading Audit Report (All Unique Routes at 390px Viewport)\n\n';
  md += `Total Routes Audited: ${uniqueRoutes.length}\n`;
  md += `Passed: ${passed}\n`;
  md += `Failed: ${failed}\n\n`;
  md += '| Path | Role | Heading Found | Status |\n';
  md += '|---|---|---|---|\n';
  for (const r of results) {
    md += `| \`${r.path}\` | ${r.role} | "${r.heading}" | ${r.pass ? 'PASS' : '**FAIL**'} |\n`;
  }

  const outPath = path.join(process.cwd(), 'docs', 'HEADING-AUDIT.md');
  fs.writeFileSync(outPath, md, 'utf-8');
  console.log(`Saved heading audit report to ${outPath}`);
}

runHeadingAudit().catch(console.error);
