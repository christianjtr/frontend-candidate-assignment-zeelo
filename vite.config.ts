import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@app', replacement: resolve(__dirname, './src/app') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@context', replacement: resolve(__dirname, './src/context') },
      { find: '@hooks', replacement: resolve(__dirname, './src/hooks') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@routes', replacement: resolve(__dirname, './src/routes') },
      { find: '@services', replacement: resolve(__dirname, './src/services') },
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@app-types', replacement: resolve(__dirname, './src/types') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') },
    ],
  },
});
