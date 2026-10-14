import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { List, Moon, Sun, X } from 'phosphor-react';
import MenuItem from '../Atoms/MenuItem';
import { navItems } from '../data/site';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < 80 || current < prevScrollPos.current);
      prevScrollPos.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <nav
      className={`fixed z-50 w-full border-b border-edge-light/70 bg-ground-light/80 backdrop-blur-md transition-[top] duration-300 ease-out dark:border-edge-dark/70 dark:bg-ground-dark/80 ${
        visible ? 'top-0' : '-top-24'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <a
            aria-label="Voltar para a página inicial"
            className="font-mono text-sm font-medium tracking-tight text-ink-primary dark:text-ink-light"
          >
            darlei<span className="text-accent-light dark:text-accent">.dev</span>
          </a>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <MenuItem href={item.href} title={item.label} isActive={isActive(item.href)} />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 font-mono text-xs text-ink-muted dark:text-ink-muted-dark lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-light dark:bg-accent" />
            Software Engineer @ Starian
          </span>

          <button
            type="button"
            aria-label="Alternar tema"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-ink-muted transition-colors hover:text-ink-primary dark:text-ink-muted-dark dark:hover:text-ink-light"
          >
            {mounted && theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-ink-primary dark:text-ink-light md:hidden"
          >
            {navbarOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className="border-t border-edge-light bg-ground-light px-6 py-4 dark:border-edge-dark dark:bg-ground-dark md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a
                    onClick={() => setNavbarOpen(false)}
                    className={`block py-1 text-base font-medium ${
                      isActive(item.href)
                        ? 'text-accent-light dark:text-accent'
                        : 'text-ink-primary dark:text-ink-light'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
