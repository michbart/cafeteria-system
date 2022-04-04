import { v4 as uuid } from 'uuid';
import query from '../index';
import { Order } from '../model/order';
import { BadRequestError } from '../../core/api-error';


const queries = {
    create: 'INSERT INTO cafeteria.order(id,userId,mealId) VALUES($1, $2, $3)',
    delete: 'DELETE FROM cafeteria.order WHERE id = $1',
    update: '',
    read: 'SELECT * FROM cafeteria.order WHERE id = $1',
    list: 'SELECT m.* FROM cafeteria.meal m LEFT JOIN cafeteria.order o ' +
        'ON m.id = o.mealid WHERE o.userid = $1 ORDER BY'
};

const sort = {
    fields: ['date'],
    directions: ['asc', 'desc']
};

export default class OrdersRepo {
    public static create(order: any): Promise<any[] | Order> {
        return query(queries.create, [uuid(), order.userId, order.mealId]).then(res => res.rows[0]);
    }

    public static remove(id: string): Promise<any[] | Order> {
        return query(queries.delete, [id]).then(res => res.rows[0]);
    }

    public static findById(id: string): Promise<any[] | Order> {
        return query(queries.read, [id]).then(res => res.rows[0]);
    }

    public static find(params: any): Promise<any[] | Order[]> {
        if (params.sortField && sort.fields.indexOf(params.sortField) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        if (params.sortDirection && sort.directions.indexOf(params.sortDirection) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        return query(`${queries.list} ${params.sortField} ${params.sortDirection}`, [params.id]).then(res => res.rows);
    }

    public static async update(id: string, order: any): Promise<any[] | Order> {
        return query(queries.update, [id, order.userId, order.mealId]).then(res => res.rows[0]);
    }
}
