import { Types } from 'mongoose';
import Order, { OrderModel } from '../model/order';

export default class OrdersRepo {
    public static remove(id: Types.ObjectId): Promise<Order> {
        return OrderModel.findByIdAndRemove(id).lean<Order>().exec();
    }

    public static findById(id: Types.ObjectId): Promise<Order> {
        return OrderModel
            .findById(id)
            .lean<Order>()
            .exec();
    }

    public static find(query: any): Promise<Order[]> {
        return OrderModel
            .find({ ...query })
            .lean<Order>()
            .exec();
    }

    public static async create(content: string, done: boolean)
        : Promise<Order> {
        const order = await OrderModel.create(<Order> {
            content,
            done
        });
        return order.toObject();
    }

    public static async update(id: Types.ObjectId, content: string, done: boolean)
        : Promise<Order> {
        const note = await OrderModel.findByIdAndUpdate(id, {content, done}, {new: true});
        return note.toObject();
    }
}
