export const profile = {
  name: 'Darlei M. Schmegel',
  fullName: 'Darlei Matheus Schmegel',
  role: 'Software Engineer · Product Builder',
  location: 'Pelotas, RS · Brasil',
  email: 'contato@darleimatheus.dev',
  phone: '+55 51 99628-8296',
  whatsapp: 'https://wa.me/5551996288296',
  github: 'https://github.com/darleischmegel',
  linkedin: 'https://www.linkedin.com/in/darlei-schmegel-9766981a5',
  instagram: 'https://www.instagram.com/darleischmegel/',
};

export const intro = {
  headline: 'Engenharia de software com visão de produto.',
  body: 'Mais de 5 anos construindo e evoluindo sistemas reais — do principal ERP da construção civil brasileira a plataformas de trading usadas em toda a América Latina. Hoje, também projeto e desenvolvo produtos SaaS próprios, com processos de engenharia acelerados por IA.',
};

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    company: 'Starian / Softplan — Sienge',
    companyUrl: 'https://www.sienge.com.br/',
    role: 'Software Engineer (Full Stack Java + React)',
    period: 'Abr 2025 — presente',
    location: 'Florianópolis, SC',
    current: true,
    points: [
      'Desenvolvimento do Sienge, principal ERP da construção civil no Brasil',
      'Funcionalidades com Java, Spring Boot e React; construção e manutenção de APIs REST',
      'Desenvolvimento guiado por especificações (Spec-Driven Development) e evolução da arquitetura do produto',
      'Colaboração com Product Managers, Designers e QA; code reviews e desenvolvimento orientado por testes',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'REST'],
  },
  {
    company: 'Nelogica',
    companyUrl: 'https://www.nelogica.com.br/',
    role: 'Desenvolvedor de Software',
    period: 'Set 2023 — Abr 2025',
    location: 'Porto Alegre, RS',
    points: [
      'Manutenção e melhorias contínuas em plataformas de trading — Profit, Vetor e BlackArrow, principais ferramentas do mercado financeiro da América Latina',
      'Novas funcionalidades garantindo eficiência e atualização constante das soluções',
    ],
    stack: ['Delphi', 'Sistemas em tempo real'],
  },
  {
    company: 'App Masters',
    companyUrl: 'https://www.appmasters.io/',
    role: 'Frontend Developer',
    period: 'Set 2021 — Mar 2022',
    location: 'Remoto',
    points: [
      'Aplicações com React/Next.js e TypeScript, Hooks e componentes funcionais',
      'SSG e SSR do Next.js; consumo de endpoints GraphQL com Apollo Client',
      'Estilização com styled-components e Ant Design',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'GraphQL'],
  },
  {
    company: 'PET Computação — UFPel',
    role: 'Bolsista',
    period: 'Jun 2019 — Jun 2023',
    location: 'Pelotas, RS',
    points: [
      'Programa de Educação Tutorial do Governo Federal — pesquisa, ensino e extensão universitária',
      'Projetos aplicando conhecimentos de graduação em contextos reais, em grupo de 12 bolsistas',
    ],
    stack: ['Ensino', 'Pesquisa', 'Extensão'],
  },
  {
    company: 'Freelancer',
    role: 'Full Stack Software Engineer',
    period: '2021 — presente',
    location: 'Remoto',
    points: [
      'Aplicações SaaS com NestJS, React e PostgreSQL; arquitetura com Prisma ORM e GraphQL',
      'Deploy com Docker e EasyPanel; integração com AWS e MinIO',
      'Desenvolvimento completo, dos requisitos à produção',
    ],
    stack: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'AWS'],
  },
];

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Sienge — ERP para construção civil',
    category: 'Produto enterprise',
    year: '2025 —',
    description:
      'Desenvolvimento full stack no principal ERP da construção civil do Brasil: funcionalidades de produto, APIs REST e evolução contínua da arquitetura, dentro de um fluxo orientado por especificações.',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    link: 'https://www.sienge.com.br/',
  },
  {
    title: 'SaaS CRM para imobiliárias',
    category: 'Produto próprio',
    year: '2023 —',
    description:
      'CRM desenhado para o fluxo real de corretores: gestão de imóveis e leads, integração com WhatsApp e automações com IA para qualificação e follow-up de clientes.',
    stack: ['NestJS', 'React', 'Prisma', 'PostgreSQL', 'WhatsApp API', 'IA'],
  },
  {
    title: 'Pipeline de desenvolvimento com IA',
    category: 'Engenharia de processo',
    year: '2024 —',
    description:
      'Fluxo estruturado de desenvolvimento assistido por IA: discovery, PRDs, especificações técnicas, tarefas, execução, revisão e QA — tornando a entrega de software mais previsível.',
    stack: ['Spec-Driven Dev', 'PRDs', 'Tech Specs', 'Code Review', 'QA'],
  },
  {
    title: 'Profit · Vetor · BlackArrow',
    category: 'Plataformas de trading',
    year: '2023–2025',
    description:
      'Manutenção e evolução das principais ferramentas do mercado financeiro da América Latina na Nelogica — sistemas desktop de grande escala onde performance e estabilidade são requisito.',
    stack: ['Delphi', 'Real-time', 'Mercado financeiro'],
    link: 'https://www.nelogica.com.br/',
  },
  {
    title: 'Fila Zero — Hackathon UFPel',
    category: '1º lugar',
    year: '2022',
    description:
      'Solução vencedora do Hackathon 2022 da UFPel para eliminar filas nos ônibus de apoio da universidade — do problema à solução funcional em equipe.',
    stack: ['Hackathon', 'Produto', 'Mobilidade'],
  },
];

export const skillGroups = [
  {
    label: 'Linguagens',
    items: ['Java', 'TypeScript', 'JavaScript', 'SQL', 'Delphi'],
  },
  {
    label: 'Backend',
    items: ['Spring Boot', 'NestJS', 'Node.js', 'GraphQL', 'REST APIs', 'Prisma ORM'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Styled Components'],
  },
  {
    label: 'Dados & Infra',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'AWS', 'CI/CD', 'Git'],
  },
  {
    label: 'Arquitetura & Práticas',
    items: [
      'Clean Architecture',
      'Domain-Driven Design',
      'Microservices',
      'Spec-Driven Development',
      'AI-Assisted Development',
      'Code Review',
      'Test Automation',
    ],
  },
];

export const navItems = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Projetos' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
];
