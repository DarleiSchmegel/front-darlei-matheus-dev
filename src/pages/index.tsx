import { GetStaticProps } from 'next';
import AchievementsTeaser from '../components/AchievementsTeaser';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SEO from '../components/SEO';
import SkillsArchitecture from '../components/SkillsArchitecture';
import { projects } from '../data/site';
import { getBlurDataURL } from '../lib/images';

interface HomeProps {
  portraitBlurDark: string;
  portraitBlurLight: string;
}

export default function Home({ portraitBlurDark, portraitBlurLight }: HomeProps) {
  return (
    <>
      <SEO
        title="Darlei M. Schmegel — Software Engineer · Product Builder"
        description="Engenheiro de software full stack com mais de 5 anos construindo sistemas reais: ERP Sienge na Softplan, plataformas de trading na Nelogica e produtos SaaS próprios com desenvolvimento assistido por IA."
      />
      <Hero portraitBlurDark={portraitBlurDark} portraitBlurLight={portraitBlurLight} />
      <ProjectsSection projects={projects.slice(0, 3)} />
      <ExperienceSection />
      <AchievementsTeaser />
      <SkillsArchitecture />
      <ContactSection />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const portraitBlurDark = await getBlurDataURL('/assets/darlei-dark.png');
  const portraitBlurLight = await getBlurDataURL('/assets/darlei-light.png');

  return {
    props: {
      portraitBlurDark,
      portraitBlurLight,
    },
  };
};
