import { Router } from 'express';
import HotelController from '../../controllers/HotelController';

const hotelController = new HotelController();

const hotelRouter = Router();

hotelRouter.route('/').get(hotelController.index);
hotelRouter.route('/:id').get(hotelController.findBy);
hotelRouter.route('/').post(hotelController.create);

export default hotelRouter;
