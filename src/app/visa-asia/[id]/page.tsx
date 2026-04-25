import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CountryPageAsia from '@/app/components/Visa_asia_page/Visa_asia_page';
import { client } from '@/sanity/client';
import { countryBySlugQuery } from '@/sanity/queries';
import { sanityToLegacyCountry, type SanityCountry } from '@/sanity/adapters';

export const revalidate = 60;

async function fetchCountry(slug: string): Promise<SanityCountry | null> {
  return client.fetch<SanityCountry | null>(countryBySlugQuery, { slug });
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
      description: 'Получите визу в любую страну Азии. Полное сопровождение.',
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
  return <CountryPageAsia country={sanityToLegacyCountry(country)} />;
}
