import { enumToLabel } from './enum.util';
import { Option } from '../models/option';

export function faqToOptions<T>(source: any): Option<T>[] {
  return source.reduce((merged, category) => [...merged, { label: enumToLabel(category.id), value: category.id }], []);
}
