import Link from 'next/link';
import { ArrowUpRight } from 'phosphor-react';
import { experience } from '../data/site';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
            Experiência
          </h2>
          <span className="hidden font-mono text-xs text-ink-muted dark:text-ink-muted-dark sm:block">
            2019 — presente
          </span>
        </div>

        <ol className="relative mt-12 border-l border-edge-light dark:border-edge-dark">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-12 pl-8 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
                  job.current
                    ? 'border-accent-light bg-accent-light/20 dark:border-accent dark:bg-accent/20'
                    : 'border-ink-muted/40 bg-ground-light dark:border-ink-muted-dark/40 dark:bg-ground-dark'
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-bold text-ink-primary dark:text-ink-light">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-accent-light dark:hover:text-accent"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="font-mono text-xs tabular-nums text-ink-muted dark:text-ink-muted-dark">
                  {job.period} · {job.location}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent-light dark:text-accent">
                {job.role}
              </p>
              <ul className="mt-3 max-w-2xl space-y-1.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-edge-light px-2 py-0.5 font-mono text-xs text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <Link href="/about">
          <a className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:underline dark:text-accent">
            Ver trajetória completa
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </Link>
      </div>
    </section>
  );
}
