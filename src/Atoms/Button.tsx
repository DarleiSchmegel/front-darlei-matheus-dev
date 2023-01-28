import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'default' | 'primary' | 'secundary';
  children: ReactNode;
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  switch (variant) {
    case 'primary':
      return (
        <button
          {...props}
          className="rounded-md  bg-blue-600 px-9 py-2.5 text-lg font-medium text-gray-100"
        >
          {children}
        </button>
      );
    case 'secundary':
      return (
        <button
          {...props}
          className="
            rounded-md
            border-2 
            border-green-300
            px-9 
            py-2.5 
            text-lg 
            font-medium
            text-green-300 
             
            hover:text-gray-100 
            hover:bg-green-300
            dark:border-gray-100
            dark:text-gray-100"
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          {...props}
          className="rounded-md border-2 
          border-gray-700 dark:bg-green-300 px-9 py-2.5 text-lg font-medium text-gray-700 "
        >
          {children}
        </button>
      );
  }
}
