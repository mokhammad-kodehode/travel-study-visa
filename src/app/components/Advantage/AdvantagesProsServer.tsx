import { cache } from 'react';
import { client } from '@/sanity/client';
import { advantagesSectionBySlugQuery } from '@/sanity/queries';
import { sanityToAdvantagesSection, type SanityAdvantagesSection } from '@/sanity/adapters';
import AdvantagesTwo, { advantagesFallback } from './AdvantageCardTwo/AdvangeCardTwo';

const fetchPros = cache(async () => {
  return client.fetch<SanityAdvantagesSection | null>(advantagesSectionBySlugQuery, { slug: 'advantages' });
});

export default async function AdvantagesProsServer() {
  const data = await fetchPros();
  return <AdvantagesTwo data={sanityToAdvantagesSection(data, advantagesFallback)} />;
}
