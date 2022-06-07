import '@shared/container';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { container } from 'tsyringe';
import ILogger from '../logger/interfaces/ILogger';
import routes from './routes';
const app = express();

const logger = container.resolve<ILogger>('logger');
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (logger.http) app.use(logger.http());
app.use(routes);
app.get('/status', (r, res) => res.status(200).json({ message: 'OK' }));

export default app;
