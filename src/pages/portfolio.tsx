import ContactSection from '../components/ContactSection';
import { ProjectRow } from '../components/ProjectsSection';
import SEO from '../components/SEO';
import { projects } from '../data/site';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Projetos — Darlei M. Schmegel"
        description="Projetos selecionados de Darlei M. Schmegel: ERP Sienge, plataformas de trading, SaaS CRM para imobiliárias e pipeline de desenvolvimento assistido por IA."
        path="/portfolio"
      />
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-40 lg:pb-28">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-primary dark:text-ink-light sm:text-5xl">
            Projetos
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted dark:text-ink-muted-dark">
            Produtos próprios, plataformas em que atuei e decisões de engenharia — cada item com o
            problema, a solução e a stack envolvida.
          </p>

          <div className="mt-14">
            {projects.map((project) => (
              <ProjectRow key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-edge-light dark:border-edge-dark">
        <ContactSection />
      </div>
    </>
  );
}
