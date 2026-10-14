import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'default' | 'secundary';
  children: ReactNode;
}

export default function Button({ children, variant, className, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-sm px-6 py-2.5 text-sm font-medium transition-colors duration-200';

  const variants = {
    primary:
      'bg-accent-light text-white hover:bg-accent-light/90 dark:bg-accent dark:text-ground-dark dark:hover:bg-accent/90',
    secundary:
      'border border-edge-light text-ink-primary hover:border-accent-light hover:text-accent-light dark:border-edge-dark dark:text-ink-light dark:hover:border-accent dark:hover:text-accent',
    default:
      'border border-edge-light text-ink-muted hover:text-ink-primary hover:border-ink-muted dark:border-edge-dark dark:text-ink-muted-dark dark:hover:text-ink-light dark:hover:border-ink-muted-dark',
  };

  return (
    <button {...props} className={classNames(base, variants[variant], className)}>
      {children}
    </button>
  );
}
