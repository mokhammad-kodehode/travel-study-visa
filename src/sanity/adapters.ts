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
export type AboutCtaAction = 'jivo' | 'contacts' | 'whatsapp' | 'telegram' | 'phone' | 'custom';

export type SanityAboutImage = SanityImageSource & { alt?: string };

export type SanityAboutPage = {
  heroImage?: SanityAboutImage;
  heroTitle?: string;
  heroSubtitle?: string;
  heroStats?: AboutHeroStat[];
  missionEnabled?: boolean;
  missionTitle?: string;
  missionSubtitle?: string;
  missionItems?: AboutMissionItem[];
  mainTextEyebrow?: string;
  mainTextTitle?: string;
  mainTextImage?: SanityAboutImage;
  mainText?: PortableTextBlock[];
  timelineEnabled?: boolean;
  timelineTitle?: string;
  timelineSubtitle?: string;
  timelineItems?: AboutTimelineItem[];
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
  hero: { title: string; subtitle: string; imageUrl: string; imageAlt: string; stats: AboutHeroStat[] };
  mission: { enabled: boolean; title: string; subtitle: string; items: AboutMissionItem[] };
  mainText: { eyebrow: string; title: string; imageUrl: string; imageAlt: string; blocks: PortableTextBlock[] };
  timeline: { enabled: boolean; title: string; subtitle: string; items: AboutTimelineItem[] };
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
  const arrOr = <T>(arr: T[] | undefined, fb: T[]): T[] => (Array.isArray(arr) && arr.length > 0 ? arr : fb);
  return {
    hero: {
      title: s.heroTitle || fallback.hero.title,
      subtitle: s.heroSubtitle || fallback.hero.subtitle,
      imageUrl: s.heroImage ? urlFor(s.heroImage).width(1920).url() : fallback.hero.imageUrl,
      imageAlt: s.heroImage?.alt || fallback.hero.imageAlt,
      stats: arrOr(s.heroStats, fallback.hero.stats),
    },
    mission: {
      enabled: s.missionEnabled ?? fallback.mission.enabled,
      title: s.missionTitle || fallback.mission.title,
      subtitle: s.missionSubtitle || fallback.mission.subtitle,
      items: arrOr(s.missionItems, fallback.mission.items),
    },
    mainText: {
      eyebrow: s.mainTextEyebrow ?? fallback.mainText.eyebrow,
      title: s.mainTextTitle || fallback.mainText.title,
      imageUrl: s.mainTextImage ? urlFor(s.mainTextImage).width(1600).url() : fallback.mainText.imageUrl,
      imageAlt: s.mainTextImage?.alt || fallback.mainText.imageAlt,
      blocks: arrOr(s.mainText, fallback.mainText.blocks),
    },
    timeline: {
      enabled: s.timelineEnabled ?? fallback.timeline.enabled,
      title: s.timelineTitle || fallback.timeline.title,
      subtitle: s.timelineSubtitle || fallback.timeline.subtitle,
      items: arrOr(s.timelineItems, fallback.timeline.items),
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

// ============== UK page ==============

export type UkVisaType = { _key?: string; title: string; description: string };
export type UkFeature = { _key?: string; title: string; description: string };
export type UkProcessStep = { _key?: string; title: string; description?: string };

export type SanityUkPage = {
  bannerImage?: SanityAboutImage;
  bannerTitle?: string;
  bannerSubtitle?: string;
  sectionTitle?: string;
  mainImage?: SanityAboutImage;
  mainText?: PortableTextBlock[];
  visaTypesTitle?: string;
  visaTypesSubtitle?: string;
  visaTypes?: UkVisaType[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  features?: UkFeature[];
  documentsTitle?: string;
  documentsSubtitle?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: UkProcessStep[];
};

export type UkPageData = {
  bannerImageUrl: string;
  bannerImageAlt: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionTitle: string;
  mainImageUrl: string;
  mainImageAlt: string;
  mainText: PortableTextBlock[];
  visaTypesTitle: string;
  visaTypesSubtitle: string;
  visaTypes: UkVisaType[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: UkFeature[];
  documentsTitle: string;
  documentsSubtitle: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: UkProcessStep[];
};

export function sanityToUkPage(s: SanityUkPage | null, fallback: UkPageData): UkPageData {
  if (!s) return fallback;
  const arrOr = <T>(arr: T[] | undefined, fb: T[]): T[] => (Array.isArray(arr) && arr.length > 0 ? arr : fb);
  return {
    bannerImageUrl: s.bannerImage ? urlFor(s.bannerImage).width(1920).url() : fallback.bannerImageUrl,
    bannerImageAlt: s.bannerImage?.alt || fallback.bannerImageAlt,
    bannerTitle: s.bannerTitle || fallback.bannerTitle,
    bannerSubtitle: s.bannerSubtitle || fallback.bannerSubtitle,
    sectionTitle: s.sectionTitle || fallback.sectionTitle,
    mainImageUrl: s.mainImage ? urlFor(s.mainImage).width(1200).url() : fallback.mainImageUrl,
    mainImageAlt: s.mainImage?.alt || fallback.mainImageAlt,
    mainText: arrOr(s.mainText, fallback.mainText),
    visaTypesTitle: s.visaTypesTitle || fallback.visaTypesTitle,
    visaTypesSubtitle: s.visaTypesSubtitle || fallback.visaTypesSubtitle,
    visaTypes: arrOr(s.visaTypes, fallback.visaTypes),
    featuresTitle: s.featuresTitle || fallback.featuresTitle,
    featuresSubtitle: s.featuresSubtitle || fallback.featuresSubtitle,
    features: arrOr(s.features, fallback.features),
    documentsTitle: s.documentsTitle || fallback.documentsTitle,
    documentsSubtitle: s.documentsSubtitle || fallback.documentsSubtitle,
    processTitle: s.processTitle || fallback.processTitle,
    processSubtitle: s.processSubtitle || fallback.processSubtitle,
    processSteps: arrOr(s.processSteps, fallback.processSteps),
  };
}

// ============== VNJ UAE page ==============

export type VnjUAEFeature = { _key?: string; title: string; description: string };
export type VnjUAEDocument = { _key?: string; name: string; description?: string };
export type VnjUAEStep = { _key?: string; title: string; description?: string };

export type SanityVnjUAEPage = {
  bannerImage?: SanityAboutImage;
  bannerTitle: string;
  bannerSubtitle?: string;
  sectionTitle?: string;
  description?: PortableTextBlock[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  features?: VnjUAEFeature[];
  documentsTitle?: string;
  documentsSubtitle?: string;
  documents?: VnjUAEDocument[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: VnjUAEStep[];
};

export type VnjUAEPageData = {
  bannerImageUrl: string;
  bannerImageAlt: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionTitle: string;
  description: PortableTextBlock[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: VnjUAEFeature[];
  documentsTitle: string;
  documentsSubtitle: string;
  documents: VnjUAEDocument[];
  processTitle: string;
  processSubtitle: string;
  processSteps: VnjUAEStep[];
};

export function sanityToVnjUAEPage(s: SanityVnjUAEPage | null, fallback: VnjUAEPageData): VnjUAEPageData {
  if (!s) return fallback;
  const arrOr = <T>(arr: T[] | undefined, fb: T[]): T[] => (Array.isArray(arr) && arr.length > 0 ? arr : fb);
  return {
    bannerImageUrl: s.bannerImage ? urlFor(s.bannerImage).width(1920).url() : fallback.bannerImageUrl,
    bannerImageAlt: s.bannerImage?.alt || fallback.bannerImageAlt,
    bannerTitle: s.bannerTitle || fallback.bannerTitle,
    bannerSubtitle: s.bannerSubtitle ?? fallback.bannerSubtitle,
    sectionTitle: s.sectionTitle || fallback.sectionTitle,
    description: arrOr(s.description, fallback.description),
    featuresTitle: s.featuresTitle || fallback.featuresTitle,
    featuresSubtitle: s.featuresSubtitle ?? fallback.featuresSubtitle,
    features: arrOr(s.features, fallback.features),
    documentsTitle: s.documentsTitle || fallback.documentsTitle,
    documentsSubtitle: s.documentsSubtitle ?? fallback.documentsSubtitle,
    documents: arrOr(s.documents, fallback.documents),
    processTitle: s.processTitle || fallback.processTitle,
    processSubtitle: s.processSubtitle ?? fallback.processSubtitle,
    processSteps: arrOr(s.processSteps, fallback.processSteps),
  };
}

// ============== Citizenship index page ==============

export type SanityCitizenshipIndexPage = {
  bannerImage?: SanityAboutImage;
  bannerTitle?: string;
  bannerSubtitle?: string;
  sectionTitle?: string;
  description?: PortableTextBlock[];
};

export type CitizenshipIndexPageData = {
  bannerImageUrl: string;
  bannerImageAlt: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionTitle: string;
  description: PortableTextBlock[];
};

export function sanityToCitizenshipIndexPage(
  s: SanityCitizenshipIndexPage | null,
  fallback: CitizenshipIndexPageData,
): CitizenshipIndexPageData {
  if (!s) return fallback;
  const arrOr = <T>(arr: T[] | undefined, fb: T[]): T[] => (Array.isArray(arr) && arr.length > 0 ? arr : fb);
  return {
    bannerImageUrl: s.bannerImage ? urlFor(s.bannerImage).width(1920).url() : fallback.bannerImageUrl,
    bannerImageAlt: s.bannerImage?.alt || fallback.bannerImageAlt,
    bannerTitle: s.bannerTitle || fallback.bannerTitle,
    bannerSubtitle: s.bannerSubtitle ?? fallback.bannerSubtitle,
    sectionTitle: s.sectionTitle || fallback.sectionTitle,
    description: arrOr(s.description, fallback.description),
  };
}

// ============== Citizenship list ==============

export type SanityCitizenshipListItem = {
  _id: string;
  name: string;
  slug: string;
  flag?: SanityImageSource;
  bannerSubtitle?: string;
};

export type CitizenshipListItem = {
  name: string;
  slug: string;
  flagUrl: string;
  shortDescription: string;
  pageUrl: string;
};

export function sanityToCitizenshipList(items: SanityCitizenshipListItem[] | null): CitizenshipListItem[] {
  if (!Array.isArray(items)) return [];
  return items.map((c) => ({
    name: c.name,
    slug: c.slug,
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    shortDescription: c.bannerSubtitle ?? '',
    pageUrl: `/grajdanstvo/${c.slug}`,
  }));
}

// ============== Citizenship country page ==============

export type CitizenshipBenefit = { _key?: string; title: string; description: string };
export type CitizenshipDocument = { _key?: string; name: string; description?: string };
export type CitizenshipProcessStep = { _key?: string; title: string; description?: string };

export type SanityCitizenshipCountry = {
  _id: string;
  name: string;
  nameAccusative?: string;
  nameGenitive?: string;
  slug: string;
  flag?: SanityImageSource;
  bannerImage?: SanityAboutImage;
  bannerTitle: string;
  bannerSubtitle?: string;
  sectionTitle?: string;
  mainImage?: SanityAboutImage;
  description?: PortableTextBlock[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  benefits?: CitizenshipBenefit[];
  documentsTitle?: string;
  documentsSubtitle?: string;
  documents?: CitizenshipDocument[];
  documentsOutro?: string;
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: CitizenshipProcessStep[];
  outroText?: PortableTextBlock[];
};

export type CitizenshipCountryData = {
  name: string;
  nameAccusative: string;
  nameGenitive: string;
  slug: string;
  flagUrl: string;
  bannerImageUrl: string;
  bannerImageAlt: string;
  bannerTitle: string;
  bannerSubtitle: string;
  sectionTitle: string;
  mainImageUrl: string;
  mainImageAlt: string;
  description: PortableTextBlock[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: CitizenshipBenefit[];
  documentsTitle: string;
  documentsSubtitle: string;
  documents: CitizenshipDocument[];
  documentsOutro: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: CitizenshipProcessStep[];
  outroText: PortableTextBlock[];
};

export function sanityToCitizenshipCountry(c: SanityCitizenshipCountry): CitizenshipCountryData {
  const accusative = c.nameAccusative || c.name;
  const genitive = c.nameGenitive || c.name;
  return {
    name: c.name,
    nameAccusative: accusative,
    nameGenitive: genitive,
    slug: c.slug,
    flagUrl: c.flag ? urlFor(c.flag).url() : '',
    bannerImageUrl: c.bannerImage ? urlFor(c.bannerImage).width(1920).url() : '',
    bannerImageAlt: c.bannerImage?.alt || '',
    bannerTitle: c.bannerTitle,
    bannerSubtitle: c.bannerSubtitle ?? '',
    sectionTitle: c.sectionTitle || `Гражданство ${genitive}`,
    mainImageUrl: c.mainImage ? urlFor(c.mainImage).width(1200).url() : '',
    mainImageAlt: c.mainImage?.alt || '',
    description: c.description ?? [],
    benefitsTitle: c.benefitsTitle || `Что даёт гражданство ${genitive}`,
    benefitsSubtitle: c.benefitsSubtitle ?? '',
    benefits: c.benefits ?? [],
    documentsTitle: c.documentsTitle || 'Необходимые документы для подачи на визу:',
    documentsSubtitle:
      c.documentsSubtitle ?? 'Этот список может варьироваться в зависимости от категории визы и индивидуальных обстоятельств.',
    documents: c.documents ?? [],
    documentsOutro: c.documentsOutro ?? '',
    processTitle: c.processTitle || 'Этапы получения гражданства',
    processSubtitle: c.processSubtitle ?? '',
    processSteps: c.processSteps ?? [],
    outroText: c.outroText ?? [],
  };
}

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
