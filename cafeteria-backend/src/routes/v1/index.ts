import express from 'express';
import apikey from '../../auth/apikey';
import users from './users/users';
import meals from './meals/meals';
import orders from './orders/orders';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/users', users);
router.use('/meals', meals);
router.use('/orders', orders);

export default router;
