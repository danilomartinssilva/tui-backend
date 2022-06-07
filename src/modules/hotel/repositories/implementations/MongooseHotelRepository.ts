import HotelMongoose from '@modules/hotel/infra/mongoose/schemas/Hotel';
import IHotelRepository from '@modules/hotel/repositories/IHotelRepository';
import { IHotelRequest, IOfferRequest } from '../IHotelRepository';

export default class MongooseHotelRepository implements IHotelRepository {
  async create(hotel: IHotelRequest[]): Promise<Hotel[] | undefined> {
    const response = await HotelMongoose.insertMany(hotel);

    if (response) {
      return response;
    }
    return;
  }
  async findById(id: string): Promise<Hotel | null> {
    const response = await HotelMongoose.findOne({ _id: id }).populate(
      'offers',
    );
    if (response) return response;
    return null;
  }

  async addOffer(offer: IOfferRequest): Promise<boolean> {
    const response = await HotelMongoose.updateOne(
      { _id: offer.hotel_id },
      {
        $push: {
          offers: {
            $each: offer.offers_id,
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
