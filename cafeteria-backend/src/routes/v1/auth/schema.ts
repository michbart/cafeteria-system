import Joi from '@hapi/joi';

export default {
    authenticate: Joi.object().keys({
        token: Joi.string().required().min(1).max(255),
    }),
    verify: Joi.object().keys({
        userId: Joi.string().optional().min(1).max(255),
        token: Joi.string().optional().min(1).max(255)
    }),
    logout: Joi.object().keys({
        userId: Joi.string().required().min(1).max(255),
        token: Joi.string().required().min(1).max(255)
    }),
};
