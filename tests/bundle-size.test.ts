import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

function getFilesRecursively(dir: string): { filePath: string; sizeBytes: number }[] {
  let results: { filePath: string; sizeBytes: number }[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      const stats = fs.statSync(fullPath);
      results.push({ filePath: fullPath, sizeBytes: stats.size });
    }
  }
  return results;
}

describe('Production bundle size checks', () => {
  const MAX_ASSET_SIZE_BYTES = 300 * 1024; // 300 KB

  it('fails if any single asset in dist/ is over 300 KB', () => {
    const distDir = path.resolve('dist');
    expect(
      fs.existsSync(distDir),
      'dist/ folder must exist (run pnpm run build first)'
    ).toBe(true);

    const assets = getFilesRecursively(distDir);
    expect(assets.length).toBeGreaterThan(0);

    const oversizedAssets = assets.filter(
      (asset) => asset.sizeBytes > MAX_ASSET_SIZE_BYTES
    );

    if (oversizedAssets.length > 0) {
      const details = oversizedAssets
        .map(
          (a) =>
            `${path.relative(process.cwd(), a.filePath)} (${(a.sizeBytes / 1024).toFixed(2)} KB)`
        )
        .join(', ');
      expect.fail(
        `The following assets in dist/ exceed the 300 KB limit: ${details}`
      );
    }

    expect(oversizedAssets).toHaveLength(0);
  });
});
