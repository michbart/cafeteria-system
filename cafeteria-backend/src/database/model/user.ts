import { Resource } from './resource';

export interface User extends Resource {
    username: string;
    givenName: string;
    surname: string;
    roles?: string[];
    password: string;
    balance: number;
    mail: string;
}
