import { RouteDocument } from '@/components/common';
import { ContactSection } from './ContactSection.jsx';
import { DomainsSection } from './DomainsSection.jsx';
import { EngineeringExperience } from './EngineeringExperience.jsx';
import { FeaturedInnovation } from './FeaturedInnovation.jsx';
import { Hero } from './Hero.jsx';
import { HOME_META } from './seo.js';
import { StoriesFromRoad } from './stories/StoriesFromRoad.jsx';
import { WhoWeAre } from './WhoWeAre.jsx';

export function HomePage() {
  return (
    <RouteDocument meta={HOME_META}>
      <Hero />
      <WhoWeAre />
      <DomainsSection />
      <FeaturedInnovation />
      <StoriesFromRoad />
      <EngineeringExperience />
      <ContactSection />
    </RouteDocument>
  );
}
