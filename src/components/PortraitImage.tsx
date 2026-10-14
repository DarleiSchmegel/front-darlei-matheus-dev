import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface PortraitImageProps {
  sizes: string;
  priority?: boolean;
}

export default function PortraitImage({ sizes, priority = false }: PortraitImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="aspect-[543/724] bg-surface-light dark:bg-surface-dark">
      {mounted && (
        <Image
          src={
            resolvedTheme === 'dark' ? '/assets/darlei-dark.png' : '/assets/darlei-light.png'
          }
          alt="Retrato de Darlei M. Schmegel em escritório"
          width={543}
          height={724}
          layout="responsive"
          sizes={sizes}
          priority={priority}
        />
      )}
    </div>
  );
}
