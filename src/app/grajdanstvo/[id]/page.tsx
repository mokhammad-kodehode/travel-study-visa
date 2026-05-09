import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/client';
import { citizenshipCountryBySlugQuery, allCitizenshipCountrySlugsQuery } from '@/sanity/queries';
import { sanityToCitizenshipCountry, type SanityCitizenshipCountry } from '@/sanity/adapters';
import CitizenshipPage from '@/app/components/Citizenship_page/CitizenshipPage';

export const revalidate = 60;

const fetchCountry = cache(async (slug: string) => {
  return client.fetch<SanityCitizenshipCountry | null>(citizenshipCountryBySlugQuery, { slug });
});

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(allCitizenshipCountrySlugsQuery);
  return slugs.map((s) => ({ id: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const raw = await fetchCountry(id);
  if (!raw) {
    return { title: 'Гражданство | Travel and Study' };
  }
  const accusative = raw.nameAccusative || raw.name;
  return {
    title: `Гражданство ${accusative} | Travel and Study`,
    description: raw.bannerSubtitle || `Оформление гражданства ${accusative} с полным юридическим сопровождением.`,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const raw = await fetchCountry(id);
  if (!raw) notFound();
  const data = sanityToCitizenshipCountry(raw);
  return <CitizenshipPage data={data} />;
}
