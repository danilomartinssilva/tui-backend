import addressRouter from '@modules/address/infra/http/routes/v1/address.routes';
import { Router } from 'express';
const routes = Router();

routes.use('/address', addressRouter);

export default routes;
