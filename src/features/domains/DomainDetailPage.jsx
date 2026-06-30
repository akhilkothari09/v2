import { useParams } from 'react-router-dom';
import { RouteDocument } from '@/components/common';
import { DOMAIN_DETAIL_FALLBACK_META, getDomainBySlug } from './domain.registry.js';

export function DomainDetailPage() {
  const { domainSlug } = useParams();
  const domain = getDomainBySlug(domainSlug);

  return <RouteDocument meta={domain?.seo ?? DOMAIN_DETAIL_FALLBACK_META} />;
}
