import { RouteDocument } from '@/components/common';
import { StoriesFromRoad } from '../home/stories/StoriesFromRoad.jsx';
import { REVIEWS_META } from './seo.js';

export function ReviewsPage() {
  return (
    <RouteDocument meta={REVIEWS_META}>
      <StoriesFromRoad />
    </RouteDocument>
  );
}
