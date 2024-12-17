// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/', // For custom domain
=======
  base: '/',
>>>>>>> origin/main
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
<<<<<<< HEAD
  },
  publicDir: 'public' // Make sure this is explicitly set
});
=======
  }
});
>>>>>>> origin/main
