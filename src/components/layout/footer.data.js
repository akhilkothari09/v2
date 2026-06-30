import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { ROUTES } from '@/constants';

export const footerNavigation = Object.freeze([
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Company', to: ROUTES.COMPANY },
  { label: 'Technology', to: ROUTES.TECHNOLOGY },
  { label: 'Journal', to: ROUTES.JOURNAL },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Contact', to: ROUTES.CONTACT },
]);

export const footerDomains = Object.freeze([
  { label: 'Sports Engineering', to: `${ROUTES.DOMAINS}#sports-engineering` },
  { label: 'Advanced Mobility', to: `${ROUTES.DOMAINS}#advanced-mobility` },
  { label: 'Automation & Robotics', to: `${ROUTES.DOMAINS}#automation-robotics` },
  {
    label: 'Environmental Sustainability',
    to: `${ROUTES.DOMAINS}#environmental-sustainability`,
  },
]);

export const footerProducts = Object.freeze([
  { label: 'RCX Smart Bicycle', to: ROUTES.PRODUCTS },
  { label: 'Product Registry', to: ROUTES.PRODUCTS },
  { label: 'Engineering Roadmap', to: ROUTES.TECHNOLOGY },
]);

export const footerLegal = Object.freeze([
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
]);

export const footerSocial = Object.freeze([
  { label: 'Email', href: 'mailto:akhilkothari04@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stimulai-tech/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'Instagram', href: 'https://www.instagram.com/stimulai_tech/', icon: Instagram },
]);
