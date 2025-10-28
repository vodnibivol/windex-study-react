import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

// https://vite.dev/config/
export default defineConfig({
  base: '/windex-study-react/',
  plugins: [react(), VitePluginWebpCompress()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use 'sass:list';
          @use 'sass:color';
          @use "/src/assets/styles/_mixins" as *;
        `,
      },
    },
  },
});
