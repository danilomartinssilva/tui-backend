import AddressMongoose from '@modules/address/infra/mongoose/schemas/Address';
import IAddressRepository from '../IAddressRepository';

export default class MongooseAddressRepository implements IAddressRepository {
  async all(): Promise<Address[]> {
    const response = await AddressMongoose.find();
    return response;
  }
  async create(address: Address[]): Promise<boolean> {
    const response = await AddressMongoose.insertMany(address);
    if (response) {
      return true;
    }
    return response;
  }
}
