import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '../repositories/IAddressRepository';

@injectable()
export default class GetAllUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute(): Promise<any> {
    this.logger.log('info', 'listing address', {});
    const response = await this.addressRepository.all();
    this.logger.log('info', 'listing address', { response });
    return response;
  }
}
