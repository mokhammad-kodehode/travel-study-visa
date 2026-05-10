import type { SchemaTypeDefinition } from 'sanity';
import { countryType } from './country';
import { vnjCountryType } from './vnjCountry';
import { legalServicesPageType } from './legalServicesPage';
import { advantagesSectionType } from './advantagesSection';
import { aboutPageType } from './aboutPage';
import { unitedKingdomPageType } from './unitedKingdomPage';
import { citizenshipCountryType } from './citizenshipCountry';
import { citizenshipIndexPageType } from './citizenshipIndexPage';
import { vnjUAEPageType } from './vnjUAEPage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    countryType,
    vnjCountryType,
    legalServicesPageType,
    advantagesSectionType,
    aboutPageType,
    unitedKingdomPageType,
    citizenshipCountryType,
    citizenshipIndexPageType,
    vnjUAEPageType,
  ],
};
