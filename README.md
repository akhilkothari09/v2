# STIMULAI Frontend Architecture

STIMULAI is structured as an AI engineering company platform, not as a bicycle company website. The RCX Bicycle can live as the first product inside the product registry, while future products and business segments can be added without changing the application shell.

## Folder Structure

```txt
src/
  app/                  App providers, router, and application shell wiring
  assets/
    fonts/              Local font files
    icons/              Brand and product icons
    images/             Optimized raster and vector imagery
    videos/             Product and brand video assets
  components/
    animations/         Motion, GSAP, and animation helpers
    common/             Cross-feature components such as SEO and route states
    layout/             Layout primitives used by app-level layouts
    ui/                 Reusable design system primitives
  constants/            Theme, site, route, and brand constants
  contexts/             Cross-cutting providers
  features/
    about/
    company/
    contact/
    domains/
    home/
    journal/
    products/
    technology/
  hooks/                Shared React hooks
  layouts/              Route layouts
  services/             API clients and data-fetching clients
  styles/               Global CSS and Tailwind layers
  utils/                Framework-agnostic helpers
```

## Architecture

- Feature folders own their route entry components, SEO metadata, and future feature-specific services.
- `src/app/router.jsx` centralizes route-based code splitting with lazy imports per feature.
- `src/app/providers.jsx` composes Helmet, TanStack Query, Framer Motion, and Lenis smooth scrolling.
- `src/constants/theme.tokens.js` is the source of truth for app theme tokens and Tailwind extension values.
- `src/services/httpClient.js` and `src/services/queryClient.js` provide stable integration points for API work.
- Route components are intentionally non-visual placeholders for now. Page UI can be added inside each feature without changing the app shell.
