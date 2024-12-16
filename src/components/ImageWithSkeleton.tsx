// src/components/ImageWithSkeleton.tsx
import React, { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Create an inline SVG placeholder
  const placeholderSvg = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#9ca3af" 
        text-anchor="middle" dominant-baseline="middle">
        Koby NFT
      </text>
    </svg>
  `;

  const svgUrl = `data:image/svg+xml,${encodeURIComponent(placeholderSvg)}`;

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-lime-200 to-green-300 animate-pulse rounded-lg" />
      )}
      <img
        src={svgUrl}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageWithSkeleton;