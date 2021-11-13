import { Resource } from '../shared/resources/resource';

export interface User extends Resource {
  username: string;
  givenName: string;
  surname: string;
  roles?: string[];
}
