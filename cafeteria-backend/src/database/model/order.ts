import { Resource } from './resource';

export interface Order extends Resource {
    userId: string;
    mealId: string;
}
