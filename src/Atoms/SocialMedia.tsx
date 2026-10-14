import {
  DribbbleLogo,
  EnvelopeSimple,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react';

interface SocialMediaProps {
  href: string;
  size: number;
  icon:
    | 'Instagram'
    | 'Facebook'
    | 'Github'
    | 'Linkedin'
    | 'Twitter'
    | 'Whatsapp'
    | 'Pinterest'
    | 'Dribbble'
    | 'Email';
}

export default function SocialMedia({ href, icon, size }: SocialMediaProps) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      aria-label={`Acessar ${icon}`}
      className="-m-2 inline-flex h-11 w-11 items-center justify-center text-ink-muted transition-colors duration-200 hover:text-accent-light active:text-accent-light dark:text-ink-muted-dark dark:hover:text-accent dark:active:text-accent"
    >
      {icon === 'Instagram' && <InstagramLogo size={size} />}
      {icon === 'Facebook' && <FacebookLogo size={size} />}
      {icon === 'Github' && <GithubLogo size={size} />}
      {icon === 'Linkedin' && <LinkedinLogo size={size} />}
      {icon === 'Whatsapp' && <WhatsappLogo size={size} />}
      {icon === 'Twitter' && <TwitterLogo size={size} />}
      {icon === 'Dribbble' && <DribbbleLogo size={size} />}
      {icon === 'Email' && <EnvelopeSimple size={size} />}
    </a>
  );
}
