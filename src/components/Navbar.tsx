import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { List, Moon, Sun, X } from 'phosphor-react';
import MenuItem from '../Atoms/MenuItem';
import { navItems, profile } from '../data/site';

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

  useEffect(() => {
    if (!navbarOpen) return;

    document.body.style.overflow = 'hidden';

    const close = () => setNavbarOpen(false);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    const desktop = window.matchMedia('(min-width: 768px)');

    document.addEventListener('keydown', onKeyDown);
    router.events.on('routeChangeComplete', close);
    if (desktop.addEventListener) {
      desktop.addEventListener('change', close);
    } else {
      desktop.addListener(close);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      router.events.off('routeChangeComplete', close);
      if (desktop.removeEventListener) {
        desktop.removeEventListener('change', close);
      } else {
        desktop.removeListener(close);
      }
    };
  }, [navbarOpen, router.events]);

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed z-50 w-full border-b border-edge-light/70 bg-ground-light/80 backdrop-blur-md transition-[top] duration-300 ease-out dark:border-edge-dark/70 dark:bg-ground-dark/80 ${
          visible || navbarOpen ? 'top-0' : '-top-24'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]">
          <Link href="/">
            <a
              aria-label="Voltar para a página inicial"
              className="inline-flex h-11 items-center font-mono text-sm font-medium tracking-tight text-ink-primary dark:text-ink-light"
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
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light motion-safe:animate-pulse dark:bg-accent" />
              Software Engineer @ Starian
            </span>

            <button
              type="button"
              aria-label="Alternar tema"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="-m-2 inline-flex h-11 w-11 items-center justify-center text-ink-muted transition-colors hover:text-ink-primary dark:text-ink-muted-dark dark:hover:text-ink-light"
            >
              {mounted && theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              type="button"
              aria-label={navbarOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="-m-2 inline-flex h-11 w-11 items-center justify-center text-ink-primary dark:text-ink-light md:hidden"
            >
              {navbarOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!navbarOpen}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto overscroll-y-contain bg-ground-light transition-[opacity,transform,visibility] duration-300 ease-out dark:bg-ground-dark md:hidden ${
          navbarOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-6 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a
                  onClick={() => setNavbarOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`flex items-baseline gap-4 border-b border-edge-light/60 py-4 font-display text-2xl font-bold tracking-tight transition-colors duration-200 active:text-accent-light dark:border-edge-dark/60 dark:active:text-accent ${
                    isActive(item.href)
                      ? 'text-accent-light dark:text-accent'
                      : 'text-ink-primary dark:text-ink-light'
                  }`}
                >
                  <span className="font-mono text-xs font-medium text-ink-muted dark:text-ink-muted-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-edge-light/60 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] pb-[env(safe-area-inset-bottom)] dark:border-edge-dark/60">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center font-mono text-sm text-ink-muted transition-colors hover:text-accent-light active:text-accent-light dark:text-ink-muted-dark dark:hover:text-accent dark:active:text-accent"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </>
  );
}
