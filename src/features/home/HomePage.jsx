import { RouteDocument } from '@/components/common';
import { DomainSegments } from './DomainSegments.jsx';
import { FeaturedInnovation } from './FeaturedInnovation.jsx';
import { GalleryCarousel } from './GalleryCarousel.jsx';
import { Hero } from './Hero.jsx';
import { HOME_META } from './seo.js';
import { StoriesFromRoad } from './stories/StoriesFromRoad.jsx';

export function HomePage() {
  return (
    <RouteDocument meta={HOME_META}>
      <Hero />
      <DomainSegments />
      <FeaturedInnovation />
      <GalleryCarousel />
      <StoriesFromRoad />
    </RouteDocument>
  );
}
