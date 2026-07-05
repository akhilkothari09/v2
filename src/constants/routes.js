export const ROUTE_SEGMENTS = Object.freeze({
  ROOT: '/',
  COMPANY: 'company',
  DOMAINS: 'domains',
  DOMAIN_DETAIL: 'domains/:domainSlug',
  TECHNOLOGY: 'technology',
  PRODUCTS: 'rcx',
  PRODUCT_DETAIL: 'rcx/:productSlug',
  JOURNAL: 'journal',
  ABOUT: 'about',
  CONTACT: 'contact',
  NOT_FOUND: '404',
});

export const ROUTES = Object.freeze({
  HOME: '/',
  COMPANY: '/company',
  DOMAINS: '/domains',
  DOMAIN_DETAIL: '/domains/:domainSlug',
  TECHNOLOGY: '/technology',
  PRODUCTS: '/rcx',
  PRODUCT_DETAIL: '/rcx/:productSlug',
  JOURNAL: '/journal',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
});

export function createRoutePath(routeTemplate, params = {}) {
  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace(`:${key}`, encodeURIComponent(value)),
    routeTemplate,
  );
}
