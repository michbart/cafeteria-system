import express, { Request } from 'express';
import _ from 'lodash';
import asyncHandler from '../../../utils/asyncHandler';
import { CreatedResponse, SuccessResponse } from '../../../core/api-response';
import validator, { ValidationSource } from '../../../utils/validator';
import schema from './schema';
import MealRepo from '../../../database/repository/meal-repo';
import { BadRequestError } from '../../../core/api-error';
import mapper from '../../../utils/mapper';

const router = express.Router();

const mappings: any = {
    nameeng: 'nameEng'
};

router.get('/', validator(schema.search, ValidationSource.QUERY),
    asyncHandler(async (req: Request, res, next) => {
        const meals = await MealRepo.find(req.query);
        meals.forEach(meal => mapper(mappings, meal));
        return new SuccessResponse('success', meals).send(res);
    }));

router.get('/:id', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const meal = await MealRepo.findById(req.params.id);
        if (!meal) {
            throw new BadRequestError(`Meal ${req.params.id} not found.`);
        }
        return new SuccessResponse('success', mapper(mappings, meal)).send(res);
    }));

router.post('/', validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const duplicate = await MealRepo.find({content: req.body.content});
        if (duplicate.length > 0) {
            throw new BadRequestError(`Meal "${req.body.content}" already exists.`);
        }
        const createdMeal = await MealRepo.create(req.body.content);
        return new CreatedResponse('success', mapper(mappings, createdMeal)).send(res);
    }));

router.patch('/:id', validator(schema.update, ValidationSource.BODY), validator(schema.id, ValidationSource.PARAM),
    asyncHandler(async (req: Request, res, next) => {
        const meal = await MealRepo.findById(req.params.id);
        if (!meal) {
            throw new BadRequestError(`Meal ${req.params.id} not found.`);
        }
        const updates = _.pick(req.body, ['name', 'nameEng', 'date', 'cost', 'alergens']);
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
