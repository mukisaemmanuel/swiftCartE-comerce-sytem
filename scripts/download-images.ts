import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import sharp from 'sharp';

// Hash function for image URL
export function getUrlHash(url: string): string {
  return crypto.createHash('sha256').update(url).digest('hex').slice(0, 16);
}

function walk(dir: string): string[] {
  let res: string[] = [];
  if (!fs.existsSync(dir)) return res;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) res = res.concat(walk(full));
    else if (item === 'code.html') res.push(full);
  }
  return res;
}

export function extractAllImageUrls(): Map<string, string> {
  const urlToHash = new Map<string, string>();
  const files = walk('design');

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /https?:\/\/[^\s"'<>)]+/g;
    let match: RegExpExecArray | null;
    while ((match = imgRegex.exec(content)) !== null) {
      let url = match[0].replace(/[;,\.\)]+$/, '');
      if (
        url.includes('googleusercontent.com') ||
        url.includes('unsplash.com') ||
        /\.(png|jpg|jpeg|webp|svg)/i.test(url)
      ) {
        if (
          !url.includes('fonts.googleapis.com') &&
          !url.includes('cdn.tailwindcss.com') &&
          !url.includes('fonts.gstatic.com')
        ) {
          if (!urlToHash.has(url)) {
            urlToHash.set(url, getUrlHash(url));
          }
        }
      }
    }
  });

  return urlToHash;
}

async function fetchWithRetry(url: string, retries = 3): Promise<Buffer> {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      return Buffer.from(arrayBuffer);
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw new Error(`Failed to fetch ${url}`);
}

async function createPlaceholderWebp(filePath: string) {
  // 400x400 neutral placeholder
  const svg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" fill="#E2E8F0"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="20">SwiftCart Image</text>
  </svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile(filePath);
}

export async function processAllImages() {
  const imagesDir = path.resolve('public/images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const urlToHash = extractAllImageUrls();
  console.log(`Found ${urlToHash.size} unique remote images across mockups.`);

  const imageStats: { url: string; file: string; sizeKb: number; status: string }[] = [];
  const entries = Array.from(urlToHash.entries());

  // Process in batches of 15
  const BATCH_SIZE = 15;
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const chunk = entries.slice(i, i + BATCH_SIZE);
    await Promise.all(
      chunk.map(async ([url, hash]) => {
        const destFile = path.join(imagesDir, `${hash}.webp`);
        const relPath = `images/${hash}.webp`;

        if (fs.existsSync(destFile) && fs.statSync(destFile).size > 100) {
          const stats = fs.statSync(destFile);
          imageStats.push({
            url,
            file: relPath,
            sizeKb: Math.round(stats.size / 1024),
            status: 'cached',
          });
          return;
        }

        try {
          const buffer = await fetchWithRetry(url);
          // Resize max 1200px width, quality 80
          await sharp(buffer)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(destFile);

          const stats = fs.statSync(destFile);
          imageStats.push({
            url,
            file: relPath,
            sizeKb: Math.round(stats.size / 1024),
            status: 'downloaded',
          });
        } catch (err) {
          console.warn(`Could not download ${url.slice(0, 50)}...: ${(err as Error).message}`);
          await createPlaceholderWebp(destFile);
          const stats = fs.statSync(destFile);
          imageStats.push({
            url,
            file: relPath,
            sizeKb: Math.round(stats.size / 1024),
            status: 'placeholder',
          });
        }
      })
    );
    console.log(`Processed ${Math.min(i + BATCH_SIZE, entries.length)}/${entries.length} images...`);
  }

  // Generate docs/IMAGES.md
  let doc = '# Downloaded Images Directory\n\n';
  doc += `Total images processed: ${imageStats.length}\n\n`;
  doc += '| Original URL | Local File | Size (KB) | Status |\n';
  doc += '| --- | --- | --- | --- |\n';

  imageStats.sort((a, b) => a.file.localeCompare(b.file));
  for (const s of imageStats) {
    const truncatedUrl = s.url.length > 80 ? s.url.slice(0, 77) + '...' : s.url;
    doc += `| \`${truncatedUrl}\` | \`${s.file}\` | ${s.sizeKb} KB | ${s.status} |\n`;
  }

  fs.writeFileSync(path.resolve('docs/IMAGES.md'), doc, 'utf8');
  console.log(`Saved docs/IMAGES.md with ${imageStats.length} entries.`);
}

if (process.argv[1]?.endsWith('download-images.ts') || process.argv[1]?.endsWith('download-images.js')) {
  processAllImages().catch((err) => {
    console.error('Image processing failed:', err);
    process.exit(1);
  });
}

