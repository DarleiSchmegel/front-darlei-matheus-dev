import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends ImageProps {
  blurDataURL?: string;
  containerClassName?: string;
}

export default function OptimizedImage({
  blurDataURL,
  containerClassName = '',
  className = '',
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-edge-light dark:bg-edge-dark" />
      )}
      <Image
        {...props}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        onLoad={() => setLoading(false)}
        className={`${className} transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
