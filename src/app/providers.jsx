import { QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { SmoothScrollProvider, ThemeProvider } from '@/contexts';
import { queryClient } from '@/services';

export function AppProviders({ children }) {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </MotionConfig>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
