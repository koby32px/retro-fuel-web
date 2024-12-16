// src/components/ImageWithSkeleton.tsx
import React, { useState } from 'react';
import { getImagePath } from '../utils/imagePath';

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
        <div className="absolute inset-0 bg-gradient-to-br from-lime-200 to-green-300 animate-pulse rounded-lg" />
      )}
      {error ? (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image not found</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            setIsLoading(false);
            setError(true);
            e.currentTarget.src = getImagePath('images/placeholder.png');
          }}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton;