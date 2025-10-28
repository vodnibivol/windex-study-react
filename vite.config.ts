import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/windex-study-react/',
  plugins: [react()],
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
