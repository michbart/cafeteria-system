import express, { Request } from 'express';
import asyncHandler from '../../../helpers/asyncHandler';
import { CreatedResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../helpers/validator';
import schema from './schema';
import MealRepo from '../../../database/repository/meal-repo';
import { BadRequestError } from '../../../core/api-error';
import _ from 'lodash';

const router = express.Router();

router.get('/', validator(schema.search, ValidationSource.QUERY),
    asyncHandler(async (req: Request, res, next) => {
        const meals = await MealRepo.find(req.query);
        return new SuccessResponse('success', meals).send(res);
    }));

router.get('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const meal = await MealRepo.findById(req.params.id);
        if (!meal) {
            throw new BadRequestError(`Meal ${req.params.id} not found.`);
        }
        return new SuccessResponse('success', meal).send(res);
    }));

router.post('/', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const duplicate = await MealRepo.find({content: req.body.content});
        if (duplicate.length > 0) {
            throw new BadRequestError(`Meal "${req.body.content}" already exists.`);
        }
        console.log('body' + JSON.stringify(req.body));
        const createdMeal = await MealRepo.create(req.body.content);
        return new CreatedResponse('success', createdMeal).send(res);
    }));

router.put('/:id', validator(schema.update, ValidationSource.BODY), validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const meal = await MealRepo.findById(req.params.id);
        if (!meal) {
            throw new BadRequestError(`Meal ${req.params.id} not found.`);
        }
        const updates = _.pick(req.body, ['content', 'done']);
        Object.assign(meal, updates);
        const updatedMeal = await MealRepo.update(req.params.id, meal);
        return new SuccessResponse('success', updatedMeal).send(res);
    }));

router.delete('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const meal = await MealRepo.findById(req.params.id);
        if (!meal) {
            throw new BadRequestError(`Meal ${req.params.id} not found.`);
        }
        const removedMeal = await MealRepo.remove(req.params.id);
        return new SuccessResponse('success', removedMeal).send(res);
    }));

export default router;
