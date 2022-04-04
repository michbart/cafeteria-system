import Joi from '@hapi/joi';

export default {
    create: Joi.object().keys({
        userId: Joi.string().required().min(1).max(255),
        mealId: Joi.string().required().min(1).max(255),
    }),
    id: Joi.object().keys({
        id: Joi.string().required().min(1).max(255)
    }),
    update: Joi.object().keys({
        content: Joi.string().optional().min(1).max(100),
        done: Joi.boolean().optional(),
    }),
    search: Joi.object().keys({
        sortDirection: Joi.string().optional().min(1).max(50),
        sortField: Joi.string().optional().min(1).max(50),
        id: Joi.string().optional().min(1).max(255),
    })
};
