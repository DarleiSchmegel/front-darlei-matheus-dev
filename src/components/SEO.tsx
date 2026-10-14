import Head from 'next/head';
import { profile } from '../data/site';

const SITE_URL = 'https://darleimatheus.dev';
const SITE_NAME = 'Darlei M. Schmegel';
const OG_IMAGE = `${SITE_URL}/assets/darlei-dark.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = '/' }: SEOProps) {
  const url = `${SITE_URL}${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: 'Software Engineer · Product Builder',
    url: SITE_URL,
    image: OG_IMAGE,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin, profile.instagram],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidade Federal de Pelotas (UFPel)',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Softplan',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pelotas',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1086" />
      <meta property="og:image:height" content="1448" />
      <meta property="og:image:alt" content={`Retrato de ${profile.name}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
