import Head from 'next/head';
import { profile } from '../data/site';

const SITE_URL = 'https://me.darleimatheus.dev';
const SITE_NAME = 'Darlei M. Schmegel';
const OG_IMAGE = `${SITE_URL}/assets/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  publishedTime,
  tags,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const isArticle = type === 'article';

  const personJsonLd = {
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
      name: 'Starian / Softplan',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pelotas',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    image: OG_IMAGE,
    datePublished: publishedTime,
    author: {
      '@type': 'Person',
      name: profile.fullName,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: profile.fullName,
      url: SITE_URL,
    },
    keywords: tags && tags.length > 0 ? tags.join(', ') : undefined,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={isArticle ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Retrato de ${profile.name}`} />

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle &&
        tags?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(isArticle ? articleJsonLd : personJsonLd),
        }}
      />
    </Head>
  );
}
