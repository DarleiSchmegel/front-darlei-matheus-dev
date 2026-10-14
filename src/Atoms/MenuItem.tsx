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
          'relative px-1 py-2 text-sm font-medium transition-colors duration-200',
          'hover:text-accent-light dark:hover:text-accent',
          isActive
            ? 'text-accent-light dark:text-accent'
            : 'text-ink-muted dark:text-ink-muted-dark',
        )}
      >
        {title}
        <span
          className={classNames(
            'absolute left-0 -bottom-px h-px w-full bg-accent-light dark:bg-accent transition-transform duration-300 origin-left',
            isActive ? 'scale-x-100' : 'scale-x-0',
          )}
        />
      </a>
    </Link>
  );
}
