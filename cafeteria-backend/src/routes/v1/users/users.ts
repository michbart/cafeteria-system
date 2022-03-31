import express, { Request } from 'express';
import asyncHandler from '../../../helpers/asyncHandler';
import { CreatedResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import UserRepo from '../../../database/repository/user-repo';
import { BadRequestError } from '../../../core/api-error';
import _ from 'lodash';

const router = express.Router();

router.get('/', validator(schema.search, ValidationSource.QUERY),
    asyncHandler(async (req: Request, res, next) => {

        const query: any = {};
        if (req.query.content) query.content = new RegExp(`${req.query.content}.*`);

        const users = await UserRepo.find(query);

        return new SuccessResponse('success', users).send(res);
    }));

router.get('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const user = await UserRepo.findById(req.params.id);
        if (!user) {
            throw new BadRequestError(`User ${req.params.id} not found.`);
        }
        return new SuccessResponse('success', user).send(res);
    }));

router.post('/', validator(schema.create, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {

        // const duplicate = await UserRepo.find({content: req.body});
        // if (duplicate.length > 0) {
        //     throw new BadRequestError(`User "${req.body.content}" already exists.`);
        // }
        const createdUser = await UserRepo.create(req.body);
        return new CreatedResponse('success', createdUser).send(res);
    }));

router.put('/:id', validator(schema.update, ValidationSource.BODY), validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const user = await UserRepo.findById(req.params.id);
        if (!user) {
            throw new BadRequestError(`User ${req.params.id} not found.`);
        }
        const updates = _.pick(req.body, ['content', 'done']);
        Object.assign(user, updates);

        const updatedUser = await UserRepo.update(req.params.id, user);
        return new SuccessResponse('success', updatedUser).send(res);
    }));

router.delete('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const user = await UserRepo.findById(req.params.id);
        if (!user) {
            throw new BadRequestError(`User ${req.params.id} not found.`);
        }
        const removedUser = await UserRepo.remove(req.params.id);
        return new SuccessResponse('success', removedUser).send(res);
    }));

export default router;
