import type { SchemaTypeDefinition } from 'sanity';
import { countryType } from './country';
import { vnjCountryType } from './vnjCountry';
import { legalServicesPageType } from './legalServicesPage';
import { advantagesSectionType } from './advantagesSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [countryType, vnjCountryType, legalServicesPageType, advantagesSectionType],
};
