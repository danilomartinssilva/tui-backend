import IAddressRepository from '@modules/address/repositories/IAddressRepository';
import MongooseAddressRepository from '@modules/address/repositories/implementations/MongooseAddressRepository';
import PinoLogger from '@shared/infra/logger/implementations/PinoLogger';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { container } from 'tsyringe';

container.registerInstance<ILogger>('logger', PinoLogger);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  MongooseAddressRepository,
);
