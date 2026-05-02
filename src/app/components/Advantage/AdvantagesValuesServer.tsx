import { cache } from 'react';
import { client } from '@/sanity/client';
import { advantagesSectionBySlugQuery } from '@/sanity/queries';
import { sanityToAdvantagesSection, type SanityAdvantagesSection } from '@/sanity/adapters';
import Advantages, { valuesFallback } from './AdvantageCard/AdvantageCard';

const fetchValues = cache(async () => {
  return client.fetch<SanityAdvantagesSection | null>(advantagesSectionBySlugQuery, { slug: 'values' });
});

export default async function AdvantagesValuesServer() {
  const data = await fetchValues();
  return <Advantages data={sanityToAdvantagesSection(data, valuesFallback)} />;
}
