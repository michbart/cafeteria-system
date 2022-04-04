import { User } from './user';
import { ROLES } from '../auth/roles';

export const USERS: User[] = [
  {
    id: '1',
    username: 'doe',
    password: 'doe',
    givenName: 'John',
    surname: 'Doe',
    balance: 200,
    mail: 'doe@example.com',
  },
  {
    id: '2',
    username: 'srsen',
    password: 'srsen',
    givenName: 'Pepa',
    surname: 'Sršeň',
    balance: 300,
    mail: 'srsen@example.com',
  },
  {
    id: '3',
    username: 'novak',
    password: 'novak',
    givenName: 'Jan',
    surname: 'Novák',
    balance: 200,
    mail: 'novak@example.com',
  },
  {
    id: '4',
    username: 'vareckova',
    password: 'vareckova',
    givenName: 'Miluše',
    surname: 'Vařečková',
    roles: [ROLES.COOK],
    balance: 250,
    mail: 'vareckova@example.com',
  },
  {
    id: '5',
    username: 'kopr',
    password: 'kopr',
    givenName: 'David',
    surname: 'Kopr',
    roles: [ROLES.COOK],
    balance: 1000,
    mail: 'kopr@example.com',
  },
  {
    id: '6',
    username: 'admin',
    password: 'admin',
    givenName: 'Tomáš',
    surname: 'Administrátorský',
    roles: [ROLES.USER_ADMIN, ROLES.COOK],
    balance: 2000,
    mail: 'administratorsky@example.com',
  },
];
