import { RouteDocument } from '@/components/common';
import { ContactSection } from '../home/ContactSection.jsx';
import { CONTACT_META } from './seo.js';

export function ContactPage() {
  return (
    <RouteDocument meta={CONTACT_META}>
      <ContactSection />
    </RouteDocument>
  );
}