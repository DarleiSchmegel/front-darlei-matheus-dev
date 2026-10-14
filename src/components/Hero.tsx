import { ArrowUpRight } from 'phosphor-react';
import Link from 'next/link';
import PortraitImage from './PortraitImage';
import SocialMedia from '../Atoms/SocialMedia';
import { intro, profile } from '../data/site';

const credentials = ['Sienge · Starian', 'Nelogica', 'App Masters', 'UFPel'];

export default function Hero() {
  return (
    <section className="w-full border-b border-edge-light dark:border-edge-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-32 md:pt-40 lg:flex-row lg:items-center lg:gap-20 lg:pb-24">
        <div className="flex-1">
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink-primary dark:text-ink-light sm:text-5xl lg:text-6xl">
            {intro.headline}
          </h1>
          <p className="mt-4 font-mono text-sm text-accent-light dark:text-accent">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            {intro.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/portfolio">
              <a className="inline-flex items-center gap-2 rounded-sm bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light/90 active:bg-accent-light/80 dark:bg-accent dark:text-ground-dark dark:hover:bg-accent/90 dark:active:bg-accent/80">
                Explorar projetos
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </Link>
            <Link href="/about">
              <a className="inline-flex items-center gap-2 rounded-sm border border-edge-light px-6 py-3 text-sm font-medium text-ink-primary transition-colors duration-200 hover:border-ink-muted active:border-ink-muted dark:border-edge-dark dark:text-ink-light dark:hover:border-ink-muted-dark dark:active:border-ink-muted-dark">
                Sobre mim
              </a>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <SocialMedia href={profile.github} icon="Github" size={22} />
            <SocialMedia href={profile.linkedin} icon="Linkedin" size={22} />
            <SocialMedia href={profile.instagram} icon="Instagram" size={22} />
            <SocialMedia href={`mailto:${profile.email}`} icon="Email" size={22} />
          </div>
        </div>

        <div className="shrink-0">
          <figure className="w-56 sm:w-64 lg:w-72">
            <div className="relative">
              <div className="absolute -right-2 -top-2 h-6 w-6 border-r border-t border-accent-light dark:border-accent" />
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-accent-light dark:border-accent" />
              <div className="overflow-hidden border border-edge-light dark:border-edge-dark">
                <PortraitImage
                  sizes="(min-width:1024px) 288px, (min-width:640px) 256px, 224px"
                  priority
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
              <span>{profile.name}</span>
              <span>{profile.location}</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="border-t border-edge-light dark:border-edge-dark">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted dark:text-ink-muted-dark">
            Experiência em
          </span>
          {credentials.map((org) => (
            <span
              key={org}
              className="text-sm font-medium text-ink-primary/80 dark:text-ink-light/80"
            >
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
