import Link from 'next/link';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo,
  WhatsappLogo,
  PinterestLogo,
  DribbbleLogo,
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
    | 'Dribbble';
}

export default function SocialMedia({ href, icon, size }: SocialMediaProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="teste"
      aria-label={`Acessar ${icon}`}
    >
      <a className="text-white hover:text-green-300 transition-colors">
        <span className="sr-only">{icon}</span>
        {icon === 'Instagram' && <InstagramLogo size={size} />}
        {icon === 'Facebook' && <FacebookLogo size={size} />}
        {icon === 'Github' && <GithubLogo size={size} />}
        {icon === 'Linkedin' && <LinkedinLogo size={size} />}
        {icon === 'Pinterest' && <PinterestLogo size={size} />}
        {icon === 'Whatsapp' && <WhatsappLogo size={size} />}
        {icon === 'Twitter' && <TwitterLogo size={size} />}
        {icon === 'Dribbble' && <DribbbleLogo size={size} />}
      </a>
    </Link>
  );
}
