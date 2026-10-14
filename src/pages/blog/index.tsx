import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import SEO from '../../components/SEO';

export default function Blog() {
  return (
    <section className="w-full">
      <SEO
        title="Blog — Darlei M. Schmegel"
        description="Notas sobre engenharia de software, decisões de arquitetura e aprendizados construindo produtos — em breve."
        path="/blog"
      />
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-6 py-32">
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">
          Em breve: notas sobre engenharia, decisões de arquitetura e aprendizados construindo
          produtos.
        </p>
        <Link href="/">
          <a className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:underline dark:text-accent">
            <ArrowLeft size={16} weight="bold" />
            Voltar para o início
          </a>
        </Link>
      </div>
    </section>
  );
}
