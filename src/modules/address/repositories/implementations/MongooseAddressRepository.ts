import AddressMongoose from '@modules/address/infra/mongoose/schemas/Address';
import IAddressRepository, { IHotelRequest } from '../IAddressRepository';

export default class MongooseAddressRepository implements IAddressRepository {
  async all(): Promise<Address[]> {
    const response = await AddressMongoose.find().populate({ path: 'hotels' });
    return response;
  }
  async create(address: Address[]): Promise<boolean> {
    const response = await AddressMongoose.insertMany(address);
    if (response) {
      return true;
    }
    return response;
  }
  async findById(id: string): Promise<Address | null> {
    const response = await AddressMongoose.findOne({ _id: id });
    if (response) return response;
    return null;
  }
  async addHotel(hotel: IHotelRequest): Promise<boolean> {
    const response = await AddressMongoose.updateOne(
      { _id: hotel.address_id },
      {
        $push: {
          hotels: {
            $each: hotel.hotel_ids,
          },
        },
      },
    );
    console.log('###', response);

    if (response) {
      return true;
    }
    return false;
  }
}
