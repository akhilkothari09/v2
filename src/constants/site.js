export const SITE_CONFIG = Object.freeze({
  name: 'STIMULAI',
  legalName: 'STIMULAI',
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://stimulai.com',
  defaultTitle: 'STIMULAI | AI Engineering Company',
  defaultDescription:
    'STIMULAI engineers AI systems and products across sports engineering, advanced mobility, automation and robotics, and environmental sustainability.',
  defaultOgImage: '/og/stimulai.jpg',
  domains: [
    'Sports Engineering',
    'Advanced Mobility',
    'Automation & Robotics',
    'Environmental Sustainability',
  ],
});
