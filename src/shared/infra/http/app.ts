import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.get('/status', (r, res) => res.status(200).json({ message: 'OK' }));

export default app;
