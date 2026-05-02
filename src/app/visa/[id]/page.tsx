import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryPage from '@/app/components/Visa_EU_page/Visa_EU_page';
import AdvantagesProsServer from '@/app/components/Advantage/AdvantagesProsServer';
import { client } from '@/sanity/client';
import { countryBySlugQuery, allCountrySlugsQuery } from '@/sanity/queries';
import { sanityToLegacyCountry, type SanityCountry } from '@/sanity/adapters';

// ISR: страница пересобирается раз в 60 секунд после изменения в Sanity
export const revalidate = 60;

// React cache дедуплицирует повторные вызовы внутри одного request.
const fetchCountry = cache(async (slug: string): Promise<SanityCountry | null> => {
  return client.fetch<SanityCountry | null>(countryBySlugQuery, { slug });
});

// Пре-рендер всех визовых стран Европы и Америки на билде.
export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: string; region: string }>>(allCountrySlugsQuery);
  return slugs.filter((s) => s.region !== 'asia').map((s) => ({ id: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const country = await fetchCountry(id);
  if (!country) {
    return {
      title: 'Оформление виз | Travel and Study',
      description: 'Получите визу в любую страну Европы. Полное сопровождение.',
    };
  }
  const accusative = country.nameAccusative || country.name;
  return {
    title: `Виза в ${accusative} | Оформление и поддержка`,
    description: `Помогаем оформить визы в ${accusative}. Подготовка документов, запись на собеседование, консультации.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const country = await fetchCountry(id);
  if (!country) notFound();
  return <CountryPage country={sanityToLegacyCountry(country)} advantagesSlot={<AdvantagesProsServer />} />;
}
