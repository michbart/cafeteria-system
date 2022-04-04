import Joi from '@hapi/joi';

export default {
    create: Joi.object().keys({
        username: Joi.string().required().min(1).max(255),
        givenName: Joi.string().required().min(1).max(255),
        surname: Joi.string().required().min(1).max(255),
        roles: Joi.array().optional(),
        password: Joi.string().required().min(1).max(255),
        balance: Joi.number().required().min(0).max(0),
        mail: Joi.string().required().min(1).max(255),
    }),
    id: Joi.object().keys({
        id: Joi.string().required().min(1).max(255),
    }),
    update: Joi.object().keys({
        username: Joi.string().optional().min(1).max(255),
        givenName: Joi.string().optional().min(1).max(255),
        surname: Joi.string().optional().min(1).max(255),
        roles: Joi.array().optional(),
        password: Joi.string().optional().min(1).max(255),
        balance: Joi.number().optional().min(0).max(10000),
        mail: Joi.string().optional().min(1).max(255),
    }),
    search: Joi.object().keys({
        sortDirection: Joi.string().optional().min(1).max(50),
        sortField: Joi.string().optional().min(1).max(50),
    })
};
