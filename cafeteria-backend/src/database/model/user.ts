import { Document, model, Schema } from 'mongoose';

const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';

export default interface User extends Document {
    content: string;
    done: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const schema = new Schema(
    {
        content: {
            type: Schema.Types.String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 100,
        },
        done: {
            type: Schema.Types.Boolean,
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true
    });

export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
