// src/utils/imagePath.ts
export const getImagePath = (path: string) => {
    // For production with custom domain
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${cleanPath}`; // Just return relative path since base URL is handled by Vite
  };
  
  // Helper specifically for NFT images
  export const getNFTImagePath = (id: string) => {
    return getImagePath(`images/nfts/${id}.png`);
  };