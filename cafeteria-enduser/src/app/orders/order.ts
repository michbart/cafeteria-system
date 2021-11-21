import { Resource } from '../shared/resources/resource';

export interface Order extends Resource {
  userId: string;
  mealId: string;
}
