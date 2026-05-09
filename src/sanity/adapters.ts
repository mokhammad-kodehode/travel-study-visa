import type { SanityImageSource } from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/react';
import { urlFor } from './imageUrl';
import type { CountryData } from '@/app/data/CountryData';
import type { CountryDataVNJ, VnjOption } from '@/app/data/CountryDataVnj';

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
  bannerImage?: SanityImageSource;
  heroImage?: SanityImageSource;
  bannerTitle?: string;
  bannerSubtitle?: string;
  description?: PortableTextBlock[];
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

  // bannerImage — отдельный фон баннера, heroImage — фото под секцией.
  // Если bannerImage не задан, используем heroImage как fallback (для совместимости со старыми документами).
  const bannerSrc = c.bannerImage ?? c.heroImage;
  const heroSrc = c.heroImage ?? c.bannerImage;

  return {
    name: c.name,
    name_two: c.nameAccusative || c.name,
    nameof: c.slug,
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    backgroundImgUrl: bannerSrc ? urlFor(bannerSrc).width(1920).url() : '',
    heroImageUrl: heroSrc ? urlFor(heroSrc).width(1200).url() : '',
    pageUrl: `/${baseRoute}/${c.slug}`,
    bannerTitle: c.bannerTitle,
    bannerSubtitle: c.bannerSubtitle ?? '',
    description: c.description ?? [],
    feature_one: features[0] ?? '',
    feature_two: features[1] ?? '',
    feature_three: features[2] ?? '',
    feature_four: features[3] ?? '',
    feature_five: features[4] ?? '',
    feature_six: features[5] ?? '',
    feature_seven: features[6] ?? '',
  };
}

/**
 * Документ страницы ВНЖ из Sanity.
 */
export type SanityVnjCountry = {
  _id: string;
  name: string;
  nameAccusative?: string;
  nameGenitive?: string;
  slug: string;
  flag?: SanityImageSource;
  bannerTitle: string;
  bannerSubtitle?: string;
  bannerImage?: SanityImageSource;
  heroImage?: SanityImageSource;
  description?: PortableTextBlock[];
  options?: VnjOption[];
  featureLiving?: string;
  featureTravel?: string;
  featureEducation?: string;
  featureBusiness?: string;
  featureTaxes?: string;
  featureProperty?: string;
  featureCitizenship?: string;
};

/**
 * Документ страницы юридической поддержки из Sanity.
 */
export type SanityLegalServicesArea = {
  _key?: string;
  title: string;
  bullets: string[];
};

export type SanityLegalServicesPage = {
  bannerImage?: SanityImageSource;
  bannerTitle: string;
  bannerSubtitle?: string;
  description?: PortableTextBlock[];
  areasTitle?: string;
  areasSubtitle?: string;
  areas?: SanityLegalServicesArea[];
  calloutTitle?: string;
  calloutText?: string;
  calloutCtaLabel?: string;
};

export type LegalServicesPageData = {
  bannerImageUrl: string;
  bannerTitle: string;
  bannerSubtitle: string;
  description: PortableTextBlock[];
  areasTitle: string;
  areasSubtitle: string;
  areas: SanityLegalServicesArea[];
  calloutTitle: string;
  calloutText: string;
  calloutCtaLabel: string;
};

export type SanityAdvantagesCard = {
  _key?: string;
  title: string;
  description: string;
};

export type SanityAdvantagesSection = {
  title: string;
  cards: SanityAdvantagesCard[];
};

export type AdvantagesSectionData = {
  title: string;
  cards: SanityAdvantagesCard[];
};

export function sanityToAdvantagesSection(s: SanityAdvantagesSection | null, fallback: AdvantagesSectionData): AdvantagesSectionData {
  if (!s) return fallback;
  return {
    title: s.title || fallback.title,
    cards: Array.isArray(s.cards) && s.cards.length > 0 ? s.cards : fallback.cards,
  };
}

// ============== About page ==============

export type AboutHeroStat = { _key?: string; number: string; label: string };
export type AboutMissionItem = { _key?: string; title: string; description: string };
export type AboutTimelineItem = { _key?: string; year: string; title: string; description?: string };
export type AboutCtaAction = 'contacts' | 'whatsapp' | 'telegram' | 'phone' | 'custom';

export type SanityAboutPage = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroStats?: AboutHeroStat[];
  missionEnabled?: boolean;
  missionTitle?: string;
  missionSubtitle?: string;
  missionItems?: AboutMissionItem[];
  mainTextTitle?: string;
  mainText?: PortableTextBlock[];
  timelineEnabled?: boolean;
  timelineTitle?: string;
  timelineSubtitle?: string;
  timelineItems?: AboutTimelineItem[];
  geographyEnabled?: boolean;
  geographyTitle?: string;
  geographySubtitle?: string;
  ctaEnabled?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryAction?: AboutCtaAction;
  ctaPrimaryHref?: string;
  ctaSecondaryEnabled?: boolean;
  ctaSecondaryLabel?: string;
  ctaSecondaryAction?: AboutCtaAction;
  ctaSecondaryHref?: string;
};

export type AboutPageData = {
  hero: { title: string; subtitle: string; stats: AboutHeroStat[] };
  mission: { enabled: boolean; title: string; subtitle: string; items: AboutMissionItem[] };
  mainText: { title: string; blocks: PortableTextBlock[] };
  timeline: { enabled: boolean; title: string; subtitle: string; items: AboutTimelineItem[] };
  geography: { enabled: boolean; title: string; subtitle: string };
  cta: {
    enabled: boolean;
    title: string;
    description: string;
    primaryLabel: string;
    primaryAction: AboutCtaAction;
    primaryHref: string;
    secondaryEnabled: boolean;
    secondaryLabel: string;
    secondaryAction: AboutCtaAction;
    secondaryHref: string;
  };
};

export function sanityToAboutPage(s: SanityAboutPage | null, fallback: AboutPageData): AboutPageData {
  if (!s) return fallback;
  const useArr = <T>(arr: T[] | undefined, fb: T[]): T[] => (Array.isArray(arr) && arr.length > 0 ? arr : fb);
  return {
    hero: {
      title: s.heroTitle || fallback.hero.title,
      subtitle: s.heroSubtitle || fallback.hero.subtitle,
      stats: useArr(s.heroStats, fallback.hero.stats),
    },
    mission: {
      enabled: s.missionEnabled ?? fallback.mission.enabled,
      title: s.missionTitle || fallback.mission.title,
      subtitle: s.missionSubtitle || fallback.mission.subtitle,
      items: useArr(s.missionItems, fallback.mission.items),
    },
    mainText: {
      title: s.mainTextTitle || fallback.mainText.title,
      blocks: useArr(s.mainText, fallback.mainText.blocks),
    },
    timeline: {
      enabled: s.timelineEnabled ?? fallback.timeline.enabled,
      title: s.timelineTitle || fallback.timeline.title,
      subtitle: s.timelineSubtitle || fallback.timeline.subtitle,
      items: useArr(s.timelineItems, fallback.timeline.items),
    },
    geography: {
      enabled: s.geographyEnabled ?? fallback.geography.enabled,
      title: s.geographyTitle || fallback.geography.title,
      subtitle: s.geographySubtitle || fallback.geography.subtitle,
    },
    cta: {
      enabled: s.ctaEnabled ?? fallback.cta.enabled,
      title: s.ctaTitle || fallback.cta.title,
      description: s.ctaDescription || fallback.cta.description,
      primaryLabel: s.ctaPrimaryLabel || fallback.cta.primaryLabel,
      primaryAction: s.ctaPrimaryAction || fallback.cta.primaryAction,
      primaryHref: s.ctaPrimaryHref || fallback.cta.primaryHref,
      secondaryEnabled: s.ctaSecondaryEnabled ?? fallback.cta.secondaryEnabled,
      secondaryLabel: s.ctaSecondaryLabel || fallback.cta.secondaryLabel,
      secondaryAction: s.ctaSecondaryAction || fallback.cta.secondaryAction,
      secondaryHref: s.ctaSecondaryHref || fallback.cta.secondaryHref,
    },
  };
}

export type SanityCountryFlag = {
  _id: string;
  name: string;
  slug: string;
  region: 'europe' | 'asia' | 'america';
  flag?: SanityImageSource;
};

export type GeographyCountry = {
  name: string;
  slug: string;
  region: 'europe' | 'asia' | 'america';
  flagUrl: string;
  pageUrl: string;
};

export function sanityCountriesToGeography(items: SanityCountryFlag[] | null): GeographyCountry[] {
  if (!Array.isArray(items)) return [];
  return items.map((c) => ({
    name: c.name,
    slug: c.slug,
    region: c.region,
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    pageUrl: `/${c.region === 'asia' ? 'visa-asia' : 'visa'}/${c.slug}`,
  }));
}

export function sanityToLegalServicesPage(c: SanityLegalServicesPage): LegalServicesPageData {
  return {
    bannerImageUrl: c.bannerImage ? urlFor(c.bannerImage).width(1920).url() : '',
    bannerTitle: c.bannerTitle,
    bannerSubtitle: c.bannerSubtitle ?? '',
    description: c.description ?? [],
    areasTitle: c.areasTitle ?? 'Основные направления юридической поддержки',
    areasSubtitle: c.areasSubtitle ?? 'Нажмите на раздел, чтобы раскрыть список услуг',
    areas: c.areas ?? [],
    calloutTitle: c.calloutTitle ?? 'Комплексный подход',
    calloutText: c.calloutText ?? '',
    calloutCtaLabel: c.calloutCtaLabel ?? 'Получить консультацию',
  };
}

/**
 * Адаптер: Sanity-документ ВНЖ-страницы → CountryDataVNJ,
 * которую ожидает компонент VNJ_countrys_page/CountryPage.
 */
export function sanityToVnjCountry(c: SanityVnjCountry): CountryDataVNJ {
  const accusative = c.nameAccusative || c.name;
  const genitive = c.nameGenitive || c.name;

  return {
    nameof: c.slug,
    name: c.name,
    name_two: accusative,
    name_three: genitive,
    name_ogo: '',
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    pageUrl: `/vnj/${c.slug}`,
    backgroundImgUrl: c.bannerImage ? urlFor(c.bannerImage).width(1920).url() : '',
    heroImageUrl: c.heroImage ? urlFor(c.heroImage).width(1200).url() : '',
    description: c.description ?? [],
    options: c.options ?? [],
    bannerTitle: c.bannerTitle,
    bannerSubtitle: c.bannerSubtitle ?? '',
    feature_one: c.featureLiving ?? '',
    feature_two: c.featureTravel ?? '',
    feature_three: c.featureEducation ?? '',
    feature_four: c.featureBusiness ?? '',
    feature_five: c.featureTaxes ?? '',
    feature_six: c.featureProperty ?? '',
    feature_seven: c.featureCitizenship ?? '',
  };
}
