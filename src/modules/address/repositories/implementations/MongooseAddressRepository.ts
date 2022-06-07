import AddressMongoose from '@modules/address/infra/mongoose/schemas/Address';
import IAddressRepository, {
  IAddressFindQuery,
  IHotelRequest,
} from '../IAddressRepository';

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
  async search(find: IAddressFindQuery): Promise<Address[]> {
    const response = await AddressMongoose.find({
      $or: [
        {
          countryName: new RegExp(find.term, 'g'),
        },
        {
          cityName: new RegExp(find.term, 'g'),
        },
      ],
    });
    return response;
  }
  async findById(id: string): Promise<Address | null> {
    const response = await AddressMongoose.findOne({ _id: id }).populate(
      'hotels',
    );
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

    if (response) {
      return true;
    }
    return false;
  }
}
