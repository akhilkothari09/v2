import { SEO } from './SEO.jsx';

export function RouteDocument({ meta, children }) {
  return (
    <>
      <SEO {...meta} />
      {children}
    </>
  );
}
