import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomLinkProps {
  href: string;
  type: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
}

export default function CustomLink({ href, type, children }: CustomLinkProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'text-sm underline-offset-4 transition-colors duration-200 hover:text-accent-light dark:hover:text-accent hover:underline',
          {
            'text-ink-muted dark:text-ink-muted-dark': type === 'primary',
            'text-accent-light dark:text-accent': type === 'secondary',
            'text-ink-primary dark:text-ink-light': type === 'tertiary',
          },
        )}
      >
        {children}
      </a>
    </Link>
  );
}
