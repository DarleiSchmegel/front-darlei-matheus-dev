import Image from 'next/image';
import { GraduationCap, Trophy } from 'phosphor-react';
import SEO from '../components/SEO';
import { profile } from '../data/site';

const paragraphs = [
  'Sou desenvolvedor de software Full Stack, formado em Engenharia de Computação pela Universidade Federal de Pelotas (UFPel), com experiência na construção e evolução de sistemas de software.',
  'Minha atuação combina desenvolvimento backend e frontend, com foco em arquitetura, qualidade de código e soluções sustentáveis a longo prazo. Trabalho com tecnologias como Java, React e o ecossistema Node.js, com interesse especial em NestJS, sistemas bem estruturados e práticas modernas de engenharia de software.',
  'Além do desenvolvimento em si, gosto de entender os problemas por trás dos produtos. Exploro ideias, desenho soluções, avalio decisões técnicas e desenvolvo projetos próprios — especialmente produtos SaaS voltados a resolver problemas reais de negócios.',
  'Também tenho interesse em como a inteligência artificial pode transformar o processo de desenvolvimento de software. Busco aplicar abordagens estruturadas e ferramentas de IA para melhorar o planejamento, a implementação, a revisão e a qualidade das entregas.',
  'Este espaço reúne um pouco do que construo, das tecnologias que estudo e das ideias que exploro. Mais do que listar ferramentas, quero compartilhar projetos, decisões e aprendizados que representem minha maneira de pensar e construir software.',
];

export default function About() {
  return (
    <section className="w-full">
      <SEO
        title="Sobre — Darlei M. Schmegel"
        description="Trajetória e filosofia de engenharia de Darlei M. Schmegel: Engenharia de Computação pela UFPel, desenvolvimento full stack, produtos SaaS e desenvolvimento assistido por IA."
        path="/about"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-32 md:pt-40 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-8">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-5xl">
            Sobre mim
          </h1>
          <p className="mt-2 font-mono text-sm text-accent-light dark:text-accent">
            {profile.role}
          </p>

          <div className="mt-10 max-w-2xl space-y-6">
            {paragraphs.map((text) => (
              <p
                key={text.slice(0, 32)}
                className="text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="w-40 overflow-hidden border border-edge-light dark:border-edge-dark lg:w-full">
            <div className="dark:hidden">
              <Image
                src="/assets/darlei-light.png"
                alt="Retrato de Darlei M. Schmegel em escritório"
                width={543}
                height={724}
                layout="responsive"
              />
            </div>
            <div className="hidden dark:block">
              <Image
                src="/assets/darlei-dark.png"
                alt="Retrato de Darlei M. Schmegel em escritório"
                width={543}
                height={724}
                layout="responsive"
              />
            </div>
          </div>

          <div className="mt-10 border-t border-edge-light dark:border-edge-dark">
            <div className="flex gap-4 border-b border-edge-light py-5 dark:border-edge-dark">
              <GraduationCap
                size={22}
                className="mt-0.5 shrink-0 text-accent-light dark:text-accent"
              />
              <div>
                <h2 className="font-display text-base font-bold text-ink-primary dark:text-ink-light">
                  Engenharia de Computação
                </h2>
                <p className="mt-1 text-sm text-ink-muted dark:text-ink-muted-dark">
                  Universidade Federal de Pelotas — UFPel
                </p>
                <p className="mt-1 font-mono text-xs tabular-nums text-ink-muted dark:text-ink-muted-dark">
                  Mar 2018 — Dez 2022
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-b border-edge-light py-5 dark:border-edge-dark">
              <Trophy size={22} className="mt-0.5 shrink-0 text-accent-light dark:text-accent" />
              <div>
                <h2 className="font-display text-base font-bold text-ink-primary dark:text-ink-light">
                  1º lugar — Hackathon UFPel 2022
                </h2>
                <p className="mt-1 text-sm text-ink-muted dark:text-ink-muted-dark">
                  Solução para eliminar filas dos ônibus de apoio da universidade.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-5">
              <div>
                <h2 className="font-display text-base font-bold text-ink-primary dark:text-ink-light">
                  Idiomas
                </h2>
                <ul className="mt-2 space-y-1 font-mono text-xs text-ink-muted dark:text-ink-muted-dark">
                  <li>Português — nativo</li>
                  <li>Inglês — intermediário</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
