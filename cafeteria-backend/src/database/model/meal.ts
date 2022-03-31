import { Resource } from './resource';

export interface Meal extends Resource {
    name: string;
    nameEng: string;
    alergens?: string[];
    cost: string;
    date: string;
}
