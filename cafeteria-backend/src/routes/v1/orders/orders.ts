import express, { Request } from 'express';
import asyncHandler from '../../../helpers/asyncHandler';
import { CreatedResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import OrderRepo from '../../../database/repository/order-repo';
import { BadRequestError } from '../../../core/api-error';
import _ from 'lodash';

const router = express.Router();

router.get('/', validator(schema.search, ValidationSource.QUERY),
    asyncHandler(async (req: Request, res, next) => {
        const query: any = {};
        if (req.query.content) {
            query.content = new RegExp(`${req.query.content}.*`);
        }
        const orders = await OrderRepo.find(query);

        return new SuccessResponse('success', orders).send(res);
    }));

router.get('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const order = await OrderRepo.findById(req.params.id);
        if (!order) {
            throw new BadRequestError(`Order ${req.params.id} not found.`);
        }
        return new SuccessResponse('success', order).send(res);
    }));

router.post('/', validator(schema.create, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {
        const duplicate = await OrderRepo.find({content: req.body.content});
        if (duplicate.length > 0) {
            throw new BadRequestError(`Order "${req.body.content}" already exists.`);
        }
        const createdOrder = await OrderRepo.create(req.body.content);
        return new CreatedResponse('success', createdOrder).send(res);
    }));

router.put('/:id', validator(schema.update, ValidationSource.BODY), validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const order = await OrderRepo.findById(req.params.id);
        if (!order) {
            throw new BadRequestError(`Order ${req.params.id} not found.`);
        }
        const updates = _.pick(req.body, ['content', 'done']);
        Object.assign(order, updates);

        const updatedOrder = await OrderRepo.update(req.params.id, order);
        return new SuccessResponse('success', updatedOrder).send(res);
    }));

router.delete('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const order = await OrderRepo.findById(req.params.id);
        if (!order) {
            throw new BadRequestError(`Order ${req.params.id} not found.`);
        }
        const removedOrder = await OrderRepo.remove(req.params.id);
        return new SuccessResponse('success', removedOrder).send(res);
    }));

export default router;
