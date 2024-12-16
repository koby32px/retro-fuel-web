// src/utils/imagePath.ts
export const getImagePath = (path: string) => {
    const basePath = '/retro-fuel-web';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
  };
  
  // Helper specifically for NFT images
  export const getNFTImagePath = (id: string) => {
    return getImagePath(`images/nfts/${id}.png`);
  };