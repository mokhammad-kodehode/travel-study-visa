import { cache } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LegalServices from './LegalServices';
import AdvantagesValuesServer from '@/app/components/Advantage/AdvantagesValuesServer';
import { client } from '@/sanity/client';
import { legalServicesPageQuery } from '@/sanity/queries';
import { sanityToLegalServicesPage, type SanityLegalServicesPage } from '@/sanity/adapters';

export const revalidate = 60;

const fetchPage = cache(async (): Promise<SanityLegalServicesPage | null> => {
  return client.fetch<SanityLegalServicesPage | null>(legalServicesPageQuery);
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage();
  const title = data?.bannerTitle || 'Юридическая поддержка';
  return {
    title: `${title} | Travel and Study`,
    description:
      'Юридическая поддержка для частных лиц и компаний — иммиграция, визы, документы, легализация, бизнес.',
  };
}

export default async function Page() {
  const data = await fetchPage();
  if (!data) notFound();
  return <LegalServices data={sanityToLegalServicesPage(data)} valuesSlot={<AdvantagesValuesServer />} />;
}
