import addressRouter from '@modules/address/infra/http/routes/v1/address.routes';
import hotelRouter from '@modules/hotel/infra/http/routes/v1/hotels.routes';
import { Router } from 'express';
const routes = Router();

routes.use('/address', addressRouter);
routes.use('/hotel', hotelRouter);

export default routes;
