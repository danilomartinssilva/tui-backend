import appConfig from '@config/app';
import connectionUrl from '@shared/infra/mongoose/helpers/connectionUrl';
import MongoDB from '@shared/infra/mongoose/MongoDB';
import 'dotenv/config';
import app from './app';

MongoDB.connect(connectionUrl());
app.listen(appConfig.port, () =>
  console.log(`⚡️ Server listening on port ${appConfig.port}`),
);
