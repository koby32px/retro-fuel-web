// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    assetsDir: 'assets',
    copyPublicDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'home': ['./src/pages/Home.tsx'],
          'collection': ['./src/pages/Collection.tsx'],
          'nft-detail': ['./src/pages/NFTDetail.tsx'],
        }
      }
    }
  },
  publicDir: 'public'
});