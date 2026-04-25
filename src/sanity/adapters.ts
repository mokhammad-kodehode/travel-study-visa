import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from './imageUrl';
import type { CountryData } from '@/app/data/CountryData';

/**
 * Документ страны как приходит из Sanity (после нашего GROQ-проектора).
 */
export type SanityCountry = {
  _id: string;
  name: string;
  nameAccusative?: string;
  slug: string;
  region: 'europe' | 'asia' | 'america';
  flag?: SanityImageSource;
  heroImage?: SanityImageSource;
  description?: string;
  features?: string[];
};

/**
 * Адаптер: превращает Sanity-документ в форму CountryData,
 * которую ожидают существующие компоненты страниц.
 *
 * Пока компоненты (Visa_EU_page, Visa_asia_page) не переписаны — это нужно.
 */
export function sanityToLegacyCountry(c: SanityCountry): CountryData {
  const features = c.features ?? [];
  const baseRoute = c.region === 'asia' ? 'visa-asia' : 'visa';

  return {
    name: c.name,
    name_two: c.nameAccusative || c.name,
    nameof: c.slug,
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    backgroundImgUrl: c.heroImage ? urlFor(c.heroImage).width(1600).url() : '',
    pageUrl: `/${baseRoute}/${c.slug}`,
    description: c.description ?? '',
    feature_one: features[0] ?? '',
    feature_two: features[1] ?? '',
    feature_three: features[2] ?? '',
    feature_four: features[3] ?? '',
    feature_five: features[4] ?? '',
    feature_six: features[5] ?? '',
    feature_seven: features[6] ?? '',
  };
}
