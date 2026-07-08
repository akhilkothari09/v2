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
  contact: {
    email: 'connect@stimulai.in',
    phone: '+91 8860253376',
    address: 'Arcadia, South City II, Sector 49, Gurugram, Haryana 122018',
    mapUrl: 'https://www.google.com/maps/@28.4181012,77.0498815,18z?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/stimulai-tech/',
    instagram: 'https://www.instagram.com/stimulai_tech/',
    github: 'https://github.com',
  },
});
