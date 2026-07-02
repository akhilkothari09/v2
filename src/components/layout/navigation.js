import { ROUTES } from '@/constants';

export const PRIMARY_NAV_ITEMS = Object.freeze([
  { label: 'Home', to: ROUTES.HOME },
  { label: 'Domains', to: ROUTES.DOMAINS },
  { label: 'RCX', to: ROUTES.PRODUCTS },
  { label: 'Gallery', to: `${ROUTES.HOME}#home-gallery`, hash: '#home-gallery' },
  { label: 'Contact', to: ROUTES.CONTACT },
]);

export const FOOTER_NAV_ITEMS = Object.freeze([
  { label: 'Company', to: ROUTES.COMPANY },
  { label: 'Engineering Domains', to: ROUTES.DOMAINS },
  { label: 'Technology', to: ROUTES.TECHNOLOGY },
  { label: 'RCX', to: ROUTES.PRODUCTS },
  { label: 'Journal', to: ROUTES.JOURNAL },
  { label: 'About', to: ROUTES.ABOUT },
  { label: 'Contact', to: ROUTES.CONTACT },
]);
