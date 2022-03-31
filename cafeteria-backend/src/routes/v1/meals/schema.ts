import Joi from '@hapi/joi';
import { JoiObjectId } from '../../../helpers/validator';

export default {
    create: Joi.object().keys({
        name: Joi.string().required().min(1).max(255),
        nameEng: Joi.string().required().min(1).max(255),
        alergens: Joi.array().optional(),
        cost: Joi.string().required().min(1).max(255),
        date: Joi.string().required().min(1).max(255),
    }),
    id: Joi.object().keys({
        id: JoiObjectId().required()
    }),
    update: Joi.object().keys({
        name: Joi.string().optional().min(1).max(255),
        nameEng: Joi.string().optional().min(1).max(255),
        alergens: Joi.array().optional(),
        cost: Joi.string().optional().min(1).max(255),
        date: Joi.string().optional().min(1).max(255),
    }),
    search: Joi.object().keys({
        sortDirection: Joi.string().optional().min(1).max(50),
        sortField: Joi.string().optional().min(1).max(50),
    })
};
