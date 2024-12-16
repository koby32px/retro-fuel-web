// src/utils/imagePath.ts
export const getImagePath = (path: string) => {
    const basePath = '/retro-fuel-web';
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
  };