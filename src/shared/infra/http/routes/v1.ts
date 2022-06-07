import addressRouter from '@modules/address/infra/http/routes/v1/address.routes';
import hotelRouter from '@modules/hotel/infra/http/routes/v1/hotels.routes';
import offerRouter from '@modules/offer/infra/http/routes/v1/offers.routes';
import { Router } from 'express';
const routes = Router();

routes.use('/address', addressRouter);
routes.use('/hotel', hotelRouter);
routes.use('/offers', offerRouter);

export default routes;
