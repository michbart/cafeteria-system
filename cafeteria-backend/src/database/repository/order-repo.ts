import query from '../index';
import { Order } from '../model/order';
import { v4 as uuid } from 'uuid';

const queries = {
    create: 'INSERT INTO cafeteria.order(id,userId,mealId) VALUES($1, $2, $3)',
    delete: 'DELETE FROM cafeteria.order WHERE id = $1',
    update: '',
    read: 'SELECT * FROM cafeteria.order WHERE id = $1',
    list: ''
};

export default class OrdersRepo {
    public static create(order: any): Promise<any[] | Order> {
        return query(queries.create, [uuid(), order.userId, order.mealId]).then(res => res.rows[0]);;
    }

    public static remove(id: string): Promise<any[] | Order> {
        return query(queries.delete, id).then(res => res.rows[0]);;
    }

    public static findById(id: string): Promise<any[] | Order> {
        return query(queries.read, id).then(res => res.rows[0]);;
    }

    public static find(query: any): Promise<Order[]> {
        return query(query);
    }

    public static async update(id: string, order: any): Promise<any[] | Order> {
        return query(queries.update, [id, order.userId, order.mealId]).then(res => res.rows[0]);;
    }
}
