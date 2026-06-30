import { ROUTES, createRoutePath } from '@/constants';

export const PRODUCT_REGISTRY = Object.freeze([
  {
    slug: 'rcx-bicycle',
    name: 'RCX Bicycle',
    domainSlug: 'sports-engineering',
    flagship: true,
    route: createRoutePath(ROUTES.PRODUCT_DETAIL, { productSlug: 'rcx-bicycle' }),
    seo: {
      title: 'RCX Bicycle | STIMULAI',
      description:
        'RCX Bicycle is the first flagship product from STIMULAI, within a broader AI engineering product portfolio.',
      canonicalPath: createRoutePath(ROUTES.PRODUCT_DETAIL, { productSlug: 'rcx-bicycle' }),
    },
  },
]);

export const PRODUCT_DETAIL_FALLBACK_META = Object.freeze({
  title: 'Product | STIMULAI',
  description: 'Explore a STIMULAI AI engineering product.',
  canonicalPath: ROUTES.PRODUCTS,
  noIndex: true,
});

export function getProductBySlug(slug) {
  return PRODUCT_REGISTRY.find((product) => product.slug === slug);
}
