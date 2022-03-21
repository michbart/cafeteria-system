import { Types } from 'mongoose';
import User, { UserModel } from '../model/user';

export default class UserRepo {
    public static remove(id: Types.ObjectId): Promise<User> {
        return UserModel.findByIdAndRemove(id).lean<User>().exec();
    }

    public static findById(id: Types.ObjectId): Promise<User> {
        return UserModel
            .findById(id)
            .lean<User>()
            .exec();
    }

    public static find(query: any): Promise<User[]> {
        return UserModel
            .find({ ...query })
            .lean<User>()
            .exec();
    }

    public static async create(content: string, done: boolean)
        : Promise<User> {
        const user = await UserModel.create(<User> {
            content,
            done
        });
        return user.toObject();
    }

    public static async update(id: Types.ObjectId, content: string, done: boolean)
        : Promise<User> {
        const user = await UserModel.findByIdAndUpdate(id, {content, done}, {new: true});
        return user.toObject();
    }
}
