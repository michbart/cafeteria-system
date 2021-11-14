import { User } from './user';
import { ROLES } from '../auth/roles';

export const USERS: User[] = [
  {
    id: '1',
    username: 'doe',
    password: 'doe',
    givenName: 'John',
    surname: 'Doe',
    balance: '200 CZK',
  },
  {
    id: '2',
    username: 'srsen',
    password: 'srsen',
    givenName: 'Pepa',
    surname: 'Sršeň',
    balance: '300 CZK',
  },
  {
    id: '3',
    username: 'novak',
    password: 'novak',
    givenName: 'Jan',
    surname: 'Novák',
    balance: '200 CZK',
  },
  {
    id: '4',
    username: 'vareckova',
    password: 'vareckova',
    givenName: 'Miluše',
    surname: 'Vařečková',
    roles: [ROLES.COOK],
    balance: '250 CZK',
  },
  {
    id: '5',
    username: 'kopr',
    password: 'kopr',
    givenName: 'David',
    surname: 'Kopr',
    roles: [ROLES.COOK],
    balance: '1000 CZK',
  },
  {
    id: '6',
    username: 'administratorsky',
    password: 'administratorsky',
    givenName: 'Tomáš',
    surname: 'Administrátorský',
    roles: [ROLES.USER_ADMIN, ROLES.COOK],
    balance: '2000 CZK',
  },
];
