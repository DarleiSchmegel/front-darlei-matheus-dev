import { ArrowUpRight } from 'phosphor-react';
import SocialMedia from '../Atoms/SocialMedia';
import { profile } from '../data/site';

export default function ContactSection() {
  return (
    <section id="contato" className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-4xl">
              Vamos construir algo juntos?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">
              Aberto a conversas sobre oportunidades de engenharia, projetos SaaS e parcerias
              técnicas. O canal mais rápido é o e-mail — respondo no mesmo dia útil.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light/90 dark:bg-accent dark:text-ground-dark dark:hover:bg-accent/90"
            >
              {profile.email}
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <ul className="divide-y divide-edge-light border-y border-edge-light font-mono text-sm dark:divide-edge-dark dark:border-edge-dark">
              <li className="flex items-center justify-between py-4">
                <span className="text-ink-muted dark:text-ink-muted-dark">localização</span>
                <span className="text-ink-primary dark:text-ink-light">{profile.location}</span>
              </li>
              <li className="flex items-center justify-between py-4">
                <span className="text-ink-muted dark:text-ink-muted-dark">whatsapp</span>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-primary transition-colors hover:text-accent-light dark:text-ink-light dark:hover:text-accent"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center justify-between py-4">
                <span className="text-ink-muted dark:text-ink-muted-dark">github</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-primary transition-colors hover:text-accent-light dark:text-ink-light dark:hover:text-accent"
                >
                  @darleischmegel
                </a>
              </li>
              <li className="flex items-center justify-between py-4">
                <span className="text-ink-muted dark:text-ink-muted-dark">linkedin</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-primary transition-colors hover:text-accent-light dark:text-ink-light dark:hover:text-accent"
                >
                  /darlei-schmegel
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-5">
              <SocialMedia href={profile.github} icon="Github" size={20} />
              <SocialMedia href={profile.linkedin} icon="Linkedin" size={20} />
              <SocialMedia href={profile.instagram} icon="Instagram" size={20} />
              <SocialMedia href={profile.whatsapp} icon="Whatsapp" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
