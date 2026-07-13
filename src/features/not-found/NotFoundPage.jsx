import { RouteDocument } from '@/components/common';
import { NOT_FOUND_META } from './seo.js';

export function NotFoundPage() {
  return <RouteDocument meta={NOT_FOUND_META} />;
}
