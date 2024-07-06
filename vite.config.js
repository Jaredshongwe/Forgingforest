import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
    proxy: {
      '/api': 'https://forgingforest.onrender.com',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
