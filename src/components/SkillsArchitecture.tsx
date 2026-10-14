import { skillGroups } from '../data/site';

export default function SkillsArchitecture() {
  return (
    <section className="w-full border-b border-edge-light dark:border-edge-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
          Stack & práticas
        </h2>

        <dl className="mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 border-t border-edge-light py-6 dark:border-edge-dark sm:grid-cols-12"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted dark:text-ink-muted-dark sm:col-span-3">
                {group.label}
              </dt>
              <dd className="sm:col-span-9">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-surface-light px-2.5 py-1 text-sm font-medium text-ink-primary ring-1 ring-edge-light dark:bg-surface-dark dark:text-ink-light dark:ring-edge-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
