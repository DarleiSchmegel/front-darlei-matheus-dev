import Link from 'next/link';
import { ArrowUpRight } from 'phosphor-react';
import { achievements } from '../data/site';

export default function AchievementsTeaser() {
  const featured = achievements.slice(0, 3);

  return (
    <section className="w-full border-b border-edge-light dark:border-edge-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
            Reconhecimentos
          </h2>
          <Link href="/about#conquistas">
            <a className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light transition-colors hover:underline dark:text-accent">
              Ver credenciais
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((achievement) => (
            <article
              key={achievement.id}
              className="flex flex-col border border-edge-light bg-surface-light p-6 transition-colors duration-300 hover:border-accent-light/50 dark:border-edge-dark dark:bg-surface-dark dark:hover:border-accent/50"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent-light dark:text-accent">
                {achievement.category}
              </p>
              <p className="mt-1 font-mono text-[10px] tabular-nums text-ink-muted dark:text-ink-muted-dark">
                {achievement.date}
              </p>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-ink-primary dark:text-ink-light">
                {achievement.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-ink-muted dark:text-ink-muted-dark">
                {achievement.organization}
              </p>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-ink-muted dark:text-ink-muted-dark">
                {achievement.highlight}
              </p>
            </article>
          ))}
        </div>

        <Link href="/about#conquistas">
          <a className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:underline dark:text-accent">
            Explorar certificados e premiações completas
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </Link>
      </div>
    </section>
  );
}
