import { Resource } from '../shared/resources/resource';

export interface Dish extends Resource {
  name: string;
  nameEng: string;
  alergens?: string[];
  cost: string;
  date: string;
}
