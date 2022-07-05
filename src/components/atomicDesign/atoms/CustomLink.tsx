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
        className={classNames('text-lg hover:border-b-2 transition-colors', {
          'text-gray-50 hover:text-green-300 hover:border-green-300': type === 'primary',
          'text-green-300  hover:border-green-300': type === 'secondary',
        })}
      >
        {children}
      </a>
    </Link>
  );
}
