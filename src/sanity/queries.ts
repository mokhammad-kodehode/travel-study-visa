import { groq } from 'next-sanity';

export const countryBySlugQuery = groq`
  *[_type == "country" && slug.current == $slug][0]{
    _id,
    name,
    nameAccusative,
    "slug": slug.current,
    region,
    flag,
    heroImage,
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
