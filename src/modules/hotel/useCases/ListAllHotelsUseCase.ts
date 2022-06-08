import IAddressRepository from '@modules/address/repositories/IAddressRepository';
import AppError from '@shared/errors/AppError';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IHotelRepository from '../repositories/IHotelRepository';

interface Hotel {
  chainCode: string;
  iataCode: string;
  name: string;
}

interface IRequest {
  hotel: Hotel[];
  address_id: any;
}

@injectable()
export default class ListAllHotelsUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('HotelRepository') private hotelRepository: IHotelRepository,
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute({
    hotel,
    address_id,
  }: IRequest): Promise<Hotel[] | any> {
    this.logger.log('info', 'checking isset address', { hotel });

    const findByAddress = await this.addressRepository.findById(address_id);
    if (!findByAddress) {
      throw new AppError('Address not found.', {}, 404);
    }
    this.logger.log('info', 'creating hotel', { hotel });

    const addedHotel = await this.hotelRepository.create(hotel);
    if (!addedHotel) {
      throw new AppError('Address - not found.');
    }
    const hotel_ids = addedHotel?.map(item => item._id || '');
    this.logger.log('info', 'created hotel', { addedHotel });

    this.logger.log('info', 'adding to address valid', { hotel_ids });
    const insertInAddressDocument = await this.addressRepository.addHotel({
      address_id,
      hotel_ids: hotel_ids || [],
    });
    this.logger.log('info', 'added hotel into address', {
      insertInAddressDocument,
    });
    return addedHotel;
  }
}
