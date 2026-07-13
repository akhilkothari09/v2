import { RouteDocument } from '@/components/common';
import { JOURNAL_META } from './seo.js';

export function JournalPage() {
  return <RouteDocument meta={JOURNAL_META} />;
}
