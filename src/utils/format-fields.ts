import { Fields } from '../@types/globals';
import { capitalize } from './capitalize';

export const formatFields = (fields: Fields[]): Fields[] =>
  fields
    .map((field) => ({ ...field, name: `${capitalize(field.name)}:` }))
    .sort((prev, next) => prev.x_index - next.x_index);
