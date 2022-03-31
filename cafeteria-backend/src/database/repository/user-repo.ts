import query from '../index';
import { User } from '../model/user';
import { v4 as uuid } from 'uuid';

const queries = {
    create: 'INSERT INTO cafeteria.user(id,username,givenName,surname,roles,password,balance,mail) VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
    delete: 'DELETE FROM cafeteria.user WHERE id = $1',
    update: 'UPDATE cafeteria.user SET username = $2, givenName = $3, surname = $4, roles = $5, password = $6, balance = $7, mail = $8 WHERE id = $1',
    read: 'SELECT * FROM cafeteria.user WHERE id = $1',
    list: ''
};

export default class UserRepo {
    public static create(user: any): Promise<any[] | User> {
        return query(queries.create, [uuid(), user.username, user.givenName,
            user.surname, user.roles, user.password, user.balance, user.mail]).then(res => res.rows[0]);
    }

    public static remove(id: string): Promise<any[] | User> {
        return query(queries.delete, id).then(res => res.rows[0]);
    }

    public static findById(id: string): Promise<any[] | User> {
        return query(queries.read, id).then(res => res.rows[0]);
    }

    public static find(query: any): Promise<User[]> {
        return query(query);
    }

    public static async update(id: string, user: any): Promise<any[] | User> {
        return query(queries.update, [id, user.username, user.givenName,
                user.surname, user.roles, user.password, user.balance, user.mail]).then(res => res.rows[0]);
    }
}
