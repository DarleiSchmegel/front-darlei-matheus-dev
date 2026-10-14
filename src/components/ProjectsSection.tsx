import Link from 'next/link';
import { ArrowUpRight } from 'phosphor-react';
import { Project } from '../data/site';

interface ProjectRowProps {
  project: Project;
  showDivider?: boolean;
}

export function ProjectRow({ project, showDivider = true }: ProjectRowProps) {
  const Title = project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 font-display text-xl font-bold text-ink-primary transition-colors hover:text-accent-light dark:text-ink-light dark:hover:text-accent sm:text-2xl"
    >
      {project.title}
      <ArrowUpRight
        size={18}
        className="text-ink-muted transition-colors group-hover:text-accent-light dark:text-ink-muted-dark dark:group-hover:text-accent"
      />
    </a>
  ) : (
    <span className="font-display text-xl font-bold text-ink-primary dark:text-ink-light sm:text-2xl">
      {project.title}
    </span>
  );

  return (
    <article
      className={`grid gap-4 py-8 sm:grid-cols-12 sm:gap-8 ${
        showDivider ? 'border-t border-edge-light dark:border-edge-dark' : ''
      }`}
    >
      <div className="sm:col-span-4 lg:col-span-3">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-light dark:text-accent">
          {project.category}
        </p>
        <p className="mt-1 font-mono text-xs tabular-nums text-ink-muted dark:text-ink-muted-dark">
          {project.year}
        </p>
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <h3>{Title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-ink-muted-dark">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-edge-light px-2 py-0.5 font-mono text-xs text-ink-muted dark:border-edge-dark dark:text-ink-muted-dark"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

interface ProjectsSectionProps {
  projects: Project[];
  heading?: string;
  showAllLink?: boolean;
}

export default function ProjectsSection({
  projects,
  heading = 'Projetos selecionados',
  showAllLink = true,
}: ProjectsSectionProps) {
  return (
    <section id="projetos" className="w-full border-b border-edge-light dark:border-edge-dark">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
            {heading}
          </h2>
          {showAllLink && (
            <Link href="/portfolio">
              <a className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light transition-colors hover:underline dark:text-accent">
                Ver todos
                <ArrowUpRight size={14} weight="bold" />
              </a>
            </Link>
          )}
        </div>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
