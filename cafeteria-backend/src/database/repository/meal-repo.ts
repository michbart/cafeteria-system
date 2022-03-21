import { Types } from 'mongoose';
import Meal, { MealModel } from '../model/meal';

export default class MealRepo {
    public static remove(id: Types.ObjectId): Promise<Meal> {
        return MealModel.findByIdAndRemove(id).lean<Meal>().exec();
    }

    public static findById(id: Types.ObjectId): Promise<Meal> {
        return MealModel
            .findById(id)
            .lean<Meal>()
            .exec();
    }

    public static find(query: any): Promise<Meal[]> {
        return MealModel
            .find({ ...query })
            .lean<Meal>()
            .exec();
    }

    public static async create(content: string, done: boolean)
        : Promise<Meal> {
        const meal = await MealModel.create(<Meal> {
            content,
            done
        });
        return meal.toObject();
    }

    public static async update(id: Types.ObjectId, content: string, done: boolean)
        : Promise<Meal> {
        const meal = await MealModel.findByIdAndUpdate(id, {content, done}, {new: true});
        return meal.toObject();
    }
}
