import Joi from '@hapi/joi';

export default {
    create: Joi.object().keys({
        name: Joi.string().required().min(1).max(255),
        nameEng: Joi.string().required().min(1).max(255),
        alergens: Joi.array().optional(),
        cost: Joi.number().required().min(1).max(255),
        date: Joi.string().required().min(1).max(255),
    }),
    id: Joi.object().keys({
        id: Joi.string().required().min(1).max(255)
    }),
    update: Joi.object().keys({
        name: Joi.string().optional().min(1).max(255),
        nameEng: Joi.string().optional().min(1).max(255),
        alergens: Joi.array().optional(),
        cost: Joi.number().optional().min(1).max(1000),
        date: Joi.string().optional().min(1).max(255),
    }),
    search: Joi.object().keys({
        sortDirection: Joi.string().optional().min(1).max(50),
        sortField: Joi.string().optional().min(1).max(50),
        showOrders: Joi.string().optional().min(1).max(50),
    })
};
