import express, { Request } from 'express';
import _ from 'lodash';
import asyncHandler from '../../../utils/asyncHandler';
import { AuthFailureResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../utils/validator';
import schema from './schema';
import AuthRepo from '../../../database/repository/auth-repo';

const router = express.Router();

router.post('/authenticate', validator(schema.authenticate, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {
        try {
            const credentials = JSON.parse(atob(req.body.token));
            const meals = await AuthRepo.authenticate(credentials);
            return new SuccessResponse('success', meals).send(res);
        } catch (e) {
            return new AuthFailureResponse().send(res);
        }
    }));

router.post('/verify', validator(schema.verify, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {
        const meals = await AuthRepo.verify(req.body);
        return new SuccessResponse('success', meals).send(res);
    }));

router.post('/logout', validator(schema.logout, ValidationSource.BODY),
    asyncHandler(async (req: Request, res, next) => {
        const meals = await AuthRepo.logout(req.body);
        return new SuccessResponse('success', meals).send(res);
    }));

export default router;
