import { Document, model, Schema } from 'mongoose';

const DOCUMENT_NAME = 'Meal';
const COLLECTION_NAME = 'meals';

export default interface Meal extends Document {
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

export const MealModel = model<Meal>(DOCUMENT_NAME, schema, COLLECTION_NAME);
