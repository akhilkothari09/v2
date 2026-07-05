import { createBrowserRouter } from 'react-router-dom';
import { RouteErrorBoundary } from '@/components/common';
import { ROUTE_SEGMENTS } from '@/constants';
import { RootLayout } from '@/layouts';
import { lazyNamed } from '@/utils';

const HomePage = lazyNamed(() => import('@/features/home'), 'HomePage');
const CompanyPage = lazyNamed(() => import('@/features/company'), 'CompanyPage');
const DomainsPage = lazyNamed(() => import('@/features/domains'), 'DomainsPage');
const TechnologyPage = lazyNamed(() => import('@/features/technology'), 'TechnologyPage');
const ProductsPage = lazyNamed(() => import('@/features/products'), 'ProductsPage');
const JournalPage = lazyNamed(() => import('@/features/journal'), 'JournalPage');
const AboutPage = lazyNamed(() => import('@/features/about'), 'AboutPage');
const ContactPage = lazyNamed(() => import('@/features/contact'), 'ContactPage');
const NotFoundPage = lazyNamed(() => import('@/features/not-found'), 'NotFoundPage');

export const appRoutes = [
  {
    path: ROUTE_SEGMENTS.ROOT,
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },

      // Aliases for the home page
      { path: 'home', element: <HomePage /> },
      { path: 'gallery', element: <HomePage /> },

      { path: ROUTE_SEGMENTS.COMPANY, element: <CompanyPage /> },
      { path: ROUTE_SEGMENTS.DOMAINS, element: <DomainsPage /> },
      { path: ROUTE_SEGMENTS.TECHNOLOGY, element: <TechnologyPage /> },
      { path: ROUTE_SEGMENTS.PRODUCTS, element: <ProductsPage /> },
      { path: ROUTE_SEGMENTS.JOURNAL, element: <JournalPage /> },
      { path: ROUTE_SEGMENTS.ABOUT, element: <AboutPage /> },
      { path: ROUTE_SEGMENTS.CONTACT, element: <ContactPage /> },
      { path: ROUTE_SEGMENTS.NOT_FOUND, element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(appRoutes, {
  basename: import.meta.env.BASE_URL,
});
