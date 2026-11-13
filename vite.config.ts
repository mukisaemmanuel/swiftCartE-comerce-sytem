import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function splitLargeCssPlugin(): Plugin {
  return {
    name: 'split-large-css',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && 'source' in asset && typeof asset.source === 'string') {
          const css = asset.source
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s*([:;,{}])\s*/g, '$1')
            .replace(/;}/g, '}');

          if (css.length > 250 * 1024) {
            const half = Math.floor(css.length / 2);
            const splitIdx = css.indexOf('}', half);
            if (splitIdx !== -1) {
              const part1 = css.slice(0, splitIdx + 1);
              const part2 = css.slice(splitIdx + 1);

              asset.source = part1;

              const part2Name = fileName.replace(/\.css$/, '-part2.css');
              this.emitFile({
                type: 'asset',
                fileName: part2Name,
                source: part2,
              });

              const indexHtml = bundle['index.html'];
              if (indexHtml && 'source' in indexHtml && typeof indexHtml.source === 'string') {
                indexHtml.source = indexHtml.source.replace(
                  '</head>',
                  `  <link rel="stylesheet" crossorigin href="/${part2Name}">\n</head>`
                );
              }
            } else {
              asset.source = css;
            }
          } else {
            asset.source = css;
          }
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), splitLargeCssPlugin()],
  build: {
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('icons-fill-data-1')) {
            return 'icons-fill-1';
          }
          if (id.includes('icons-fill-data-2')) {
            return 'icons-fill-2';
          }
          if (id.includes('icons-data-1')) {
            return 'icons-1';
          }
          if (id.includes('icons-data-2')) {
            return 'icons-2';
          }
          if (id.includes('node_modules/firebase')) {
            return 'firebase';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('src/mockups/buyer/screens/')) {
            const match = id.match(/screens[\\/]([^\\/]+)/);
            if (match) {
              const parts = match[1].split('_');
              const group = parts.length > 2 ? `${parts[0]}-${parts[1]}` : parts[0];
              return `scr-${group}`;
            }
          }
          if (id.includes('src/mockups/buyer/')) {
            const match = id.match(/mockups[\\/]buyer[\\/]([^\\/]+)/);
            if (match) {
              return `scr-${match[1].toLowerCase()}`;
            }
          }
          if (id.includes('src/mockups/seller/screens/')) {
            const match = id.match(/screens[\\/]([^\\/]+)/);
            if (match) {
              const parts = match[1].split('_');
              const group = parts.length > 2 ? `${parts[0]}-${parts[1]}` : parts[0];
              return `seller-scr-${group}`;
            }
          }
          if (id.includes('src/mockups/seller/')) {
            const match = id.match(/mockups[\\/]seller[\\/]([^\\/]+)/);
            if (match) {
              return `seller-${match[1].toLowerCase()}`;
            }
          }
        },
      },
    },
  },
  // @ts-expect-error vitest configuration extension
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    exclude: ['**/node_modules/**', '**/dist/**', 'tests/e2e/**', '**/*.spec.ts'],
  },
});
