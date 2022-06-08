import addressFactory from '@modules/hotel/factories/addressFactory';
import FakeLogger from '@shared/infra/logger/fakes/FakeLogger';
import MongoDBMock from '@shared/infra/mongoose/fakes/MongoDBMock';
import 'reflect-metadata';
import AddressMongoose from '../infra/mongoose/schemas/Address';
import MongooseAddressRepository from '../repositories/implementations/MongooseAddressRepository';
import CreateAddressUseCase from './CreateAddressUseCase';

const addressRepository = new MongooseAddressRepository();
const createAddressUseCase = new CreateAddressUseCase(
  FakeLogger,
  addressRepository,
);
const arrayAddressFactory: Address[] = [];
arrayAddressFactory.push(addressFactory());
arrayAddressFactory.push(addressFactory());
arrayAddressFactory.push(addressFactory());
describe('CreateAddressUseCase', () => {
  beforeAll(async () => {
    await MongoDBMock.connect();
    await AddressMongoose.deleteMany({});
  });
  afterAll(async () => {
    await MongoDBMock.disconnect();
  });
  it('should create hotel ', async () => {
    const address = await createAddressUseCase.execute({
      address: arrayAddressFactory,
    });

    const addressFind = await addressRepository.all();
    expect(address).toBeTruthy();
    expect(addressFind.length).toBe(3);
  });
});
