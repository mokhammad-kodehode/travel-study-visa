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
