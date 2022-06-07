import IAddressRepository from '@modules/address/repositories/IAddressRepository';
import MongooseAddressRepository from '@modules/address/repositories/implementations/MongooseAddressRepository';
import IHotelRepository from '@modules/hotel/repositories/IHotelRepository';
import MongooseHotelRepository from '@modules/hotel/repositories/implementations/MongooseHotelRepository';
import MongooseOfferRepository from '@modules/offer/repositories/implementations/MongooseOfferRepository';
import IOfferRepository from '@modules/offer/repositories/IOfferRepository';
import PinoLogger from '@shared/infra/logger/implementations/PinoLogger';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { container } from 'tsyringe';

container.registerInstance<ILogger>('logger', PinoLogger);
container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  MongooseAddressRepository,
);
container.registerSingleton<IHotelRepository>(
  'HotelRepository',
  MongooseHotelRepository,
);
container.registerSingleton<IOfferRepository>(
  'OfferRepository',
  MongooseOfferRepository,
);
