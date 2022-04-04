import { v4 as uuid } from 'uuid';
import query from '../index';
import { Meal } from '../model/meal';
import { BadRequestError } from '../../core/api-error';

const queries = {
    create: 'INSERT INTO cafeteria.meal(id,name,nameEng,alergens,cost,date) VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
    delete: 'DELETE FROM cafeteria.meal WHERE id = $1',
    update: 'UPDATE cafeteria.meal SET name = $2, nameEng = $3, alergens = $4, cost = $5, date = $6 WHERE id = $1 RETURNING id',
    read: 'SELECT * FROM cafeteria.meal WHERE id = $1',
    listSort: 'SELECT * FROM cafeteria.meal ORDER BY',
    list: 'SELECT cafeteria.meal.*, QTY.orders FROM cafeteria.meal LEFT JOIN ' +
        '(SELECT COUNT(cafeteria."order".mealid) AS orders, cafeteria."order".mealid FROM cafeteria."order" GROUP BY cafeteria."order".mealid) AS QTY ' +
        'ON cafeteria.meal.id = QTY.mealid ORDER BY'
};

const sort = {
    fields: ['date'],
    directions: ['asc', 'desc']
};

export default class MealRepo {

    public static create(meal: any): Promise<any[] | Meal> {
        return query(queries.create, [uuid(), meal.name, meal.nameEng, meal.alergens, meal.cost, meal.date]).then(res => res.rows[0]);
    }

    public static remove(id: string): Promise<any[] | Meal> {
        return query(queries.delete, [id]).then(res => res.rows[0]);
    }

    public static findById(id: string): Promise<any[] | Meal> {
        return query(queries.read, [id]).then(res => res.rows[0]);
    }

    public static find(params: any): Promise<any[] | Meal[]> {
        if (params.sortField && sort.fields.indexOf(params.sortField) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        if (params.sortDirection && sort.directions.indexOf(params.sortDirection) < 0) {
            throw new BadRequestError('Unsupported value.');
        }
        if (params.showOrders === 'true') {
            return query(`${queries.list} ${params.sortField} ${params.sortDirection}`, []).then(res => res.rows);
        }
        return query(`${queries.listSort} ${params.sortField} ${params.sortDirection}`, []).then(res => res.rows);
    }

    public static async update(id: string, meal: any): Promise<any[] | Meal> {
        return query(queries.update, [id, meal.name, meal.nameEng, JSON.stringify(meal.alergens), meal.cost, meal.date]).then(res => res.rows[0]);
    }
}
