import { groq } from 'next-sanity';

export const countryBySlugQuery = groq`
  *[_type == "country" && slug.current == $slug][0]{
    _id,
    name,
    nameAccusative,
    "slug": slug.current,
    region,
    flag,
    bannerImage,
    heroImage,
    bannerTitle,
    bannerSubtitle,
    description,
    features
  }
`;

export const allCountrySlugsQuery = groq`
  *[_type == "country" && defined(slug.current)]{
    "slug": slug.current,
    region
  }
`;

export const countriesByRegionQuery = groq`
  *[_type == "country" && region == $region]|order(name asc){
    _id,
    name,
    "slug": slug.current,
    region,
    flag,
    heroImage
  }
`;

export const vnjCountryBySlugQuery = groq`
  *[_type == "vnjCountry" && slug.current == $slug][0]{
    _id,
    name,
    nameAccusative,
    nameGenitive,
    "slug": slug.current,
    flag,
    bannerTitle,
    bannerSubtitle,
    bannerImage,
    heroImage,
    description,
    options,
    featureLiving,
    featureTravel,
    featureEducation,
    featureBusiness,
    featureTaxes,
    featureProperty,
    featureCitizenship
  }
`;

export const allVnjCountrySlugsQuery = groq`
  *[_type == "vnjCountry" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const legalServicesPageQuery = groq`
  *[_type == "legalServicesPage"][0]{
    bannerImage,
    bannerTitle,
    bannerSubtitle,
    description,
    areasTitle,
    areasSubtitle,
    areas,
    calloutTitle,
    calloutText,
    calloutCtaLabel
  }
`;

export const advantagesSectionBySlugQuery = groq`
  *[_type == "advantagesSection" && slug.current == $slug][0]{
    title,
    cards
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    heroImage,
    heroTitle,
    heroSubtitle,
    heroStats,
    missionEnabled,
    missionTitle,
    missionSubtitle,
    missionItems,
    mainTextEyebrow,
    mainTextTitle,
    mainTextImage,
    mainText,
    timelineEnabled,
    timelineTitle,
    timelineSubtitle,
    timelineItems,
    ctaEnabled,
    ctaTitle,
    ctaDescription,
    ctaPrimaryLabel,
    ctaPrimaryAction,
    ctaPrimaryHref,
    ctaSecondaryEnabled,
    ctaSecondaryLabel,
    ctaSecondaryAction,
    ctaSecondaryHref
  }
`;

export const unitedKingdomPageQuery = groq`
  *[_type == "unitedKingdomPage"][0]{
    bannerImage,
    bannerTitle,
    bannerSubtitle,
    sectionTitle,
    mainImage,
    mainText,
    visaTypesTitle,
    visaTypesSubtitle,
    visaTypes,
    featuresTitle,
    featuresSubtitle,
    features,
    documentsTitle,
    documentsSubtitle,
    processTitle,
    processSubtitle,
    processSteps
  }
`;

export const citizenshipCountryBySlugQuery = groq`
  *[_type == "citizenshipCountry" && slug.current == $slug][0]{
    _id,
    name,
    nameAccusative,
    nameGenitive,
    "slug": slug.current,
    flag,
    bannerImage,
    bannerTitle,
    bannerSubtitle,
    sectionTitle,
    mainImage,
    description,
    benefitsTitle,
    benefitsSubtitle,
    benefits,
    documentsTitle,
    documentsSubtitle,
    documents,
    documentsOutro,
    processTitle,
    processSubtitle,
    processSteps,
    outroText
  }
`;

export const allCitizenshipCountrySlugsQuery = groq`
  *[_type == "citizenshipCountry" && defined(slug.current)]{
    "slug": slug.current
  }
`;

/** Все страны (без heroImage) — для секции «География работы» на странице О компании. */
export const allCountriesForGeographyQuery = groq`
  *[_type == "country" && defined(slug.current)]|order(name asc){
    _id,
    name,
    "slug": slug.current,
    region,
    flag
  }
`;
