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

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={(e) => {
          setIsLoading(false);
          e.currentTarget.src = getImagePath('images/placeholder.png');
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;