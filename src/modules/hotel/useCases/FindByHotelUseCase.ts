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
export default class FindByHotelUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('HotelRepository') private hotelRepository: IHotelRepository,
  ) {}

  public async execute(id: string): Promise<Hotel | any> {
    this.logger.log('info', 'checking isset hotel', { id });

    const findByAddress = await this.hotelRepository.findById(id);
    if (!findByAddress) {
      throw new AppError('Hotel not found.', {}, 404);
    }

    this.logger.log('info', 'checking isset hotel', { findByAddress });

    return findByAddress;
  }
}
