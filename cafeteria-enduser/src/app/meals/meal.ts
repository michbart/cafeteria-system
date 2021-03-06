import { Resource } from '../shared/resources/resource';

export interface Meal extends Resource {
  name: string;
  nameEng: string;
  alergens?: string[];
  cost: number;
  date: string;
}
