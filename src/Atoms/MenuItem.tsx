import classNames from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  href: string;
  title: string;
  isActive: boolean;
}

export default function MenuItem({ href, title, isActive }: MenuItemProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          'flex items-center px-3 my-3 border-b-2 font-bold text-lg text-gray-100 hover:text-green-300 hover:border-green-300 transition-colors',
          {
            'border-transparent': !isActive,
            'text-green-300 border-green-300': isActive,
          },
        )}
      >
        {title}
      </a>
    </Link>
  );
}
