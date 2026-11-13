import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('icons-fill-data')) {
            return 'icons-fill';
          }
          if (id.includes('icons-data')) {
            return 'icons';
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
