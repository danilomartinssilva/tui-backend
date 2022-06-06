import AddressMongoose from '@modules/address/infra/mongoose/schemas/Address';
import IAddressRepository from '../IAddressRepository';

export default class MongooseAddressRepository implements IAddressRepository {
  async all(): Promise<Address[]> {
    const response = await AddressMongoose.find();
    console.log('response', response);
    return response;
  }
}
