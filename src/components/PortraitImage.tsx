import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface PortraitImageProps {
  sizes: string;
  priority?: boolean;
  blurDataDark?: string;
  blurDataLight?: string;
}

export default function PortraitImage({
  sizes,
  priority = false,
  blurDataDark,
  blurDataLight,
}: PortraitImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';
  const blurDataURL = isDark ? blurDataDark : blurDataLight;

  return (
    <div className="relative aspect-[543/724] bg-surface-light dark:bg-surface-dark">
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-edge-light dark:bg-edge-dark" />
      )}
      {mounted && (
        <Image
          src={isDark ? '/assets/darlei-dark.png' : '/assets/darlei-light.png'}
          alt="Retrato de Darlei M. Schmegel em escritório"
          width={543}
          height={724}
          layout="responsive"
          sizes={sizes}
          priority={priority}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          onLoad={() => setLoading(false)}
          className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
    </div>
  );
}
