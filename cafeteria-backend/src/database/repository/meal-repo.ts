import query from '../index';
import { Meal } from '../model/meal';
import { v4 as uuid } from 'uuid';

const queries = {
    create: 'INSERT INTO cafeteria.meal(id,name,nameEng,alergens,cost,date) VALUES($1, $2, $3, $4, $5, $6)',
    delete: 'DELETE FROM cafeteria.meal WHERE id = $1',
    update: 'UPDATE cafeteria.meal SET name = $2, nameEng = $3, alergens = $4, cost = $5, date = $6 WHERE id = $1',
    read: 'SELECT * FROM cafeteria.meal WHERE id = $1',
    list: 'SELECT * FROM cafeteria.meal ORDER BY $1 '
};

export default class MealRepo {

    public static create(meal: any): Promise<any[] | Meal> {
        return query(queries.create, [uuid(), meal.name, meal.nameEng, meal.alergens, meal.cost, meal.date]).then(res => res.rows[0]);
    }

    public static remove(id: string): Promise<any[] | Meal> {
        return query(queries.delete, id).then(res => res.rows[0]);
    }

    public static findById(id: string): Promise<any[] | Meal> {
        return query(queries.read, id).then(res => res.rows[0]);
    }

    public static find(params: any): Promise<Meal[]> {
        console.log(params);
        return query(queries.list, [params.sortField]).then(res => res.rows[0]);
    }

    public static async update(id: string, meal: any): Promise<any[] | Meal> {
        return query(queries.update, [id, meal.name, meal.nameEng. meal.alergens, meal.cost, meal.date]).then(res => res.rows[0]);
    }
}
