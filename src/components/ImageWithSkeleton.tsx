// src/components/ImageWithSkeleton.tsx
import React, { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-lime-200 to-green-300 animate-pulse rounded-lg flex items-center justify-center">
          <span className="text-green-700 font-medium">Loading...</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-red-100 flex items-center justify-center rounded-lg">
          <span className="text-red-500 font-medium">Failed to load image</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={() => {
          setIsLoading(false);
          setError(false);
        }}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;