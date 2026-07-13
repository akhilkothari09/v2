import { ROUTES, createRoutePath } from '@/constants';

export const ENGINEERING_DOMAINS = Object.freeze([
  {
    slug: 'sports-engineering',
    name: 'Sports Engineering',
    route: createRoutePath(ROUTES.DOMAIN_DETAIL, { domainSlug: 'sports-engineering' }),
    seo: {
      title: 'Sports Engineering | STIMULAI',
      description:
        'STIMULAI applies AI engineering to sports performance, products, sensing, and intelligent athletic systems.',
      canonicalPath: createRoutePath(ROUTES.DOMAIN_DETAIL, {
        domainSlug: 'sports-engineering',
      }),
    },
  },
  {
    slug: 'advanced-mobility',
    name: 'Advanced Mobility',
    route: createRoutePath(ROUTES.DOMAIN_DETAIL, { domainSlug: 'advanced-mobility' }),
    seo: {
      title: 'Advanced Mobility | STIMULAI',
      description:
        'STIMULAI develops AI systems for intelligent mobility platforms, vehicle experiences, and connected products.',
      canonicalPath: createRoutePath(ROUTES.DOMAIN_DETAIL, {
        domainSlug: 'advanced-mobility',
      }),
    },
  },
  {
    slug: 'automation-robotics',
    name: 'Automation & Robotics',
    route: createRoutePath(ROUTES.DOMAIN_DETAIL, { domainSlug: 'automation-robotics' }),
    seo: {
      title: 'Automation & Robotics | STIMULAI',
      description:
        'STIMULAI engineers AI-driven automation, robotic workflows, and intelligent control systems.',
      canonicalPath: createRoutePath(ROUTES.DOMAIN_DETAIL, {
        domainSlug: 'automation-robotics',
      }),
    },
  },
  {
    slug: 'environmental-sustainability',
    name: 'Environmental Sustainability',
    route: createRoutePath(ROUTES.DOMAIN_DETAIL, {
      domainSlug: 'environmental-sustainability',
    }),
    seo: {
      title: 'Environmental Sustainability | STIMULAI',
      description:
        'STIMULAI uses AI engineering to support environmental monitoring, optimization, and sustainable systems.',
      canonicalPath: createRoutePath(ROUTES.DOMAIN_DETAIL, {
        domainSlug: 'environmental-sustainability',
      }),
    },
  },
]);

export const DOMAIN_DETAIL_FALLBACK_META = Object.freeze({
  title: 'Engineering Domain | STIMULAI',
  description: 'Explore a STIMULAI AI engineering domain.',
  canonicalPath: ROUTES.DOMAINS,
  noIndex: true,
});

export function getDomainBySlug(slug) {
  return ENGINEERING_DOMAINS.find((domain) => domain.slug === slug);
}
