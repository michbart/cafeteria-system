import Joi from '@hapi/joi';
import { JoiObjectId } from '../../../helpers/validator';

export default {
    create: Joi.object().keys({
        username: Joi.string().required().min(1).max(255),
        givenName: Joi.string().required().min(1).max(255),
        surname: Joi.string().required().min(1).max(255),
        roles: Joi.array().optional(),
        password: Joi.string().required().min(1).max(255),
        balance: Joi.string().required().min(1).max(255),
        mail: Joi.string().required().min(1).max(255),
    }),
    id: Joi.object().keys({
        id: JoiObjectId().required()
    }),
    update: Joi.object().keys({
        username: Joi.string().optional().min(1).max(255),
        givenName: Joi.string().optional().min(1).max(255),
        surname: Joi.string().optional().min(1).max(255),
        roles: Joi.array().optional(),
        password: Joi.string().optional().min(1).max(255),
        balance: Joi.string().optional().min(1).max(255),
        mail: Joi.string().optional().min(1).max(255),
    }),
    search: Joi.object().keys({
        content: Joi.string().optional().min(1).max(50),
    })
};
