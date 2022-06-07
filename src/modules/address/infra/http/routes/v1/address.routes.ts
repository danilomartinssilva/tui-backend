import { Router } from 'express';
import AddressController from '../../controllers/AddressController';

const addressController = new AddressController();

const addressRouter = Router();

addressRouter.route('/').get(addressController.index);
addressRouter.route('/').post(addressController.create);
export default addressRouter;
