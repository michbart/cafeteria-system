import { User } from './user';
import { ROLES } from '../auth/roles';

export const USERS: User[] = [
  {
    id: '1',
    username: 'doe',
    givenName: 'John',
    surname: 'Doe',
  },
  {
    id: '2',
    username: 'srsen',
    givenName: 'Pepa',
    surname: 'Sršeň',
  },
  {
    id: '3',
    username: 'novak',
    givenName: 'Jan',
    surname: 'Novák',
  },
  {
    id: '4',
    username: 'vareckova',
    givenName: 'Miluše',
    surname: 'Vařečková',
    roles: [ROLES.COOK],
  },
  {
    id: '5',
    username: 'kopr',
    givenName: 'David',
    surname: 'Kopr',
    roles: [ROLES.COOK],
  },
  {
    id: '6',
    username: 'administratorsky',
    givenName: 'Tomáš',
    surname: 'Administrátorský',
    roles: [ROLES.USER_ADMIN, ROLES.COOK],
  },
];
