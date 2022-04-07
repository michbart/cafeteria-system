import { v4 as uuid } from 'uuid';
import query from '../index';
import { User } from '../model/user';
import { BadRequestError } from '../../core/api-error';
import { hash } from '../../utils/password';

const queries = {
    create: 'INSERT INTO cafeteria.user(id,username,givenName,surname,roles,password,balance,mail) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
    delete: 'DELETE FROM cafeteria.user WHERE id = $1',
    update: 'UPDATE cafeteria.user SET givenName = $2, surname = $3, roles = $4, password = $5, mail = $6 WHERE id = $1 RETURNING id',
    read: 'SELECT * FROM cafeteria.user WHERE id = $1',
    list: 'SELECT * FROM cafeteria.user ORDER BY'
};

const sort = {
    fields: ['username'],
    directions: ['asc', 'desc']
};

export default class UserRepo {
    public static async create(user: any): Promise<any[] | User> {
        const password = await hash(user.password);
        return query(queries.create, [uuid(), user.username, user.givenName, user.surname,
                user.roles, password, user.balance, user.mail]).then(res => res.rows[0]);
    }

    public static remove(id: string): Promise<any[] | User> {
        return query(queries.delete, [id]).then(res => res.rows[0]);
    }

    public static findById(id: string): Promise<any[] | User> {
        return query(queries.read, [id]).then(res => res.rows[0]);
    }

    public static find(params: any): Promise<any[] | User[]> {
        if (params.sortField && sort.fields.indexOf(params.sortField) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        if (params.sortDirection && sort.directions.indexOf(params.sortDirection) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        return query(`${queries.list} ${params.sortField} ${params.sortDirection}`, []).then(res => res.rows);
    }

    public static async update(id: string, user: any): Promise<any[] | User> {
        return query(queries.update, [id, user.givenName,
                user.surname, JSON.stringify(user.roles), user.password, user.mail]).then(res => res.rows[0]);
    }
}
