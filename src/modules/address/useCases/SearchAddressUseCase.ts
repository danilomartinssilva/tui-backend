import AppError from '@shared/errors/AppError';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '../repositories/IAddressRepository';

interface IRequest {
  term: string;
}

@injectable()
export default class SearchAddressUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute(query: IRequest): Promise<any> {
    this.logger.log('info', 'listing address', {});
    if (!query.term.trim().length) {
      throw new AppError('Error by search address', {}, 500);
    }
    const response = await this.addressRepository.search(query);
    this.logger.log('info', 'listing address', { response });
    return response;
  }
}
