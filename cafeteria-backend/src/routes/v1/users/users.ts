import express, { Request } from 'express';
import _ from 'lodash';
import asyncHandler from '../../../utils/asyncHandler';
import { CreatedResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../utils/validator';
import schema from './schema';
import UserRepo from '../../../database/repository/user-repo';
import { BadRequestError } from '../../../core/api-error';
import mapper from '../../../utils/mapper';

const router = express.Router();

const mappings: any = {
    givenname: 'givenName'
};

router.get('/', validator(schema.search, ValidationSource.QUERY),
    asyncHandler(async (req: Request, res, next) => {
        const users = await UserRepo.find(req.query);
        users.forEach(user => mapper(mappings, user));
        return new SuccessResponse('success', users).send(res);
    }));

router.get('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const user = await UserRepo.findById(req.params.id);
        if (!user) {
            throw new BadRequestError(`User ${req.params.id} not found.`);
        }
        return new SuccessResponse('success', mapper(mappings, user)).send(res);
    }));

router.post('/', validator(schema.create, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {
        const createdUser = await UserRepo.create(req.body);
        return new CreatedResponse('success', mapper(mappings, createdUser)).send(res);
    }));

router.patch('/:id', validator(schema.update, ValidationSource.BODY), validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const user = await UserRepo.findById(req.params.id);
        if (!user) {
            throw new BadRequestError(`User ${req.params.id} not found.`);
        }
        const updates = _.pick(req.body, ['givenName', 'surname', 'mail', 'roles', 'password']);
        Object.assign(user, updates);

        const updatedUser = await UserRepo.update(req.params.id, user);
        return new SuccessResponse('success', mapper(mappings, updatedUser)).send(res);
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
