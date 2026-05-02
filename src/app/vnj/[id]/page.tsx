import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryPage from '@/app/components/VNJ_countrys_page/CountryPage';
import { client } from '@/sanity/client';
import { vnjCountryBySlugQuery, allVnjCountrySlugsQuery } from '@/sanity/queries';
import { sanityToVnjCountry, type SanityVnjCountry } from '@/sanity/adapters';

export const revalidate = 60;

// React cache дедуплицирует повторные вызовы внутри одного request —
// generateMetadata и Page будут разделять одну ответ от Sanity.
const fetchVnjCountry = cache(async (slug: string): Promise<SanityVnjCountry | null> => {
  return client.fetch<SanityVnjCountry | null>(vnjCountryBySlugQuery, { slug });
});

// Пре-рендер всех ВНЖ-страниц на билде — первый посетитель получает мгновенный HTML.
export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: string }>>(allVnjCountrySlugsQuery);
  return slugs.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = await fetchVnjCountry(id);
  if (!country) {
    return {
      title: 'Оформление ВНЖ | Travel and Study',
      description: 'Получите ВНЖ в любой стране Европы. Полное сопровождение.',
    };
  }
  const accusative = country.nameAccusative || country.name;
  return {
    title: `ВНЖ в ${accusative} | Оформление и сопровождение`,
    description: `Помогаем оформить ВНЖ в ${accusative}. Подготовка документов, консультации, полное сопровождение.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = await fetchVnjCountry(id);
  if (!country) notFound();
  return <CountryPage country={sanityToVnjCountry(country)} />;
}
