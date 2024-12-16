// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/retro-fuel-web/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'home': ['./src/pages/Home.tsx'],
          'collection': ['./src/pages/Collection.tsx'],
          'nft-detail': ['./src/pages/NFTDetail.tsx'],
          'nft-metadata': ['./src/config/nftsMetadata.ts']
        }
      }
    },
    chunkSizeWarningLimit: 500
  }
})