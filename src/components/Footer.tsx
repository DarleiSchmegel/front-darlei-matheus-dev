import SocialMedia from '../Atoms/SocialMedia';
import { navItems, profile } from '../data/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-edge-light dark:border-edge-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <Link href="/">
          <a className="font-mono text-sm font-medium text-ink-primary dark:text-ink-light">
            darlei<span className="text-accent-light dark:text-accent">.dev</span>
          </a>
        </Link>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className="-my-2 inline-block py-2 text-sm text-ink-muted transition-colors hover:text-accent-light active:text-accent-light dark:text-ink-muted-dark dark:hover:text-accent dark:active:text-accent">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <SocialMedia href={profile.github} icon="Github" size={18} />
          <SocialMedia href={profile.linkedin} icon="Linkedin" size={18} />
          <SocialMedia href={profile.instagram} icon="Instagram" size={18} />
        </div>
      </div>
      <div className="border-t border-edge-light dark:border-edge-dark">
        <p className="mx-auto max-w-6xl px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
          © {new Date().getFullYear()} {profile.fullName} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
