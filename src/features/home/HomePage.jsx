import { RouteDocument } from '@/components/common';
//import { DomainsSection } from './DomainsSection.jsx';
import { DomainSegments } from './DomainSegments.jsx';
// import { EngineeringExperience } from './EngineeringExperience.jsx';
import { FeaturedInnovation } from './FeaturedInnovation.jsx';
import { Hero } from './Hero.jsx';
import { HOME_META } from './seo.js';
import { StoriesFromRoad } from './stories/StoriesFromRoad.jsx';

export function HomePage() {
  return (
    <RouteDocument meta={HOME_META}>
      <Hero />
      {/* <DomainsSection /> */}
      <DomainSegments />
      <FeaturedInnovation />
      <StoriesFromRoad />
      {/* <EngineeringExperience /> */}
    </RouteDocument>
  );
}
