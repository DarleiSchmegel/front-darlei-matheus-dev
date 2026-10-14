import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SEO from '../components/SEO';
import SkillsArchitecture from '../components/SkillsArchitecture';
import { projects } from '../data/site';

export default function Home() {
  return (
    <>
      <SEO
        title="Darlei M. Schmegel — Software Engineer · Product Builder"
        description="Engenheiro de software full stack com mais de 5 anos construindo sistemas reais: ERP Sienge na Softplan, plataformas de trading na Nelogica e produtos SaaS próprios com desenvolvimento assistido por IA."
      />
      <Hero />
      <ProjectsSection projects={projects.slice(0, 3)} />
      <ExperienceSection />
      <SkillsArchitecture />
      <ContactSection />
    </>
  );
}
