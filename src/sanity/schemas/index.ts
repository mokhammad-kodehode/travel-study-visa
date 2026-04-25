import type { SchemaTypeDefinition } from 'sanity';
import { countryType } from './country';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [countryType],
};
