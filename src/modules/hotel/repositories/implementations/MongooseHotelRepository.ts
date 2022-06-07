import HotelMongoose from '@modules/hotel/infra/mongoose/schemas/Hotel';
import IHotelRepository from '@modules/hotel/repositories/IHotelRepository';
import { IHotelRequest } from '../IHotelRepository';

export default class MongooseHotelRepository implements IHotelRepository {
  async create(hotel: IHotelRequest[]): Promise<Hotel[] | undefined> {
    const response = await HotelMongoose.insertMany(hotel);

    if (response) {
      return response;
    }
    return;
  }
}
