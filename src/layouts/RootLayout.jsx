import { Suspense } from 'react';
import { RouteFallback } from '@/components/common';
import {
  BackToTop,
  Footer,
  GlobalCursor,
  Navbar,
  PageTransition,
  ScrollProgress,
  ScrollRestoration,
  SkipLink,
} from '@/components/layout';

export function RootLayout() {
  return (
    <>
      <SkipLink />
      <ScrollRestoration />
      <ScrollProgress />
      <GlobalCursor />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background text-text-primary" tabIndex={-1}>
        <Suspense fallback={<RouteFallback />}>
          <PageTransition />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
