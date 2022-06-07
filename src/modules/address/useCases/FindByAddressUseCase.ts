import AppError from '@shared/errors/AppError';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '../repositories/IAddressRepository';

@injectable()
export default class FindByAddressUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute(id: string): Promise<any> {
    this.logger.log('info', 'listing address', {});
    if (!id) {
      throw new AppError('Error by search address', {}, 500);
    }
    const response = await this.addressRepository.findById(id);
    this.logger.log('info', 'listing address', { response });
    return response;
  }
}
