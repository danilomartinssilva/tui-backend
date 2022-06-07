import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IAddressRepository from '../repositories/IAddressRepository';

interface Address {
  cityCode: string;
  regionCode: string;
  cityName: string;
  countryName: string;
}

interface IRequest {
  address: Address[];
}

@injectable()
export default class CreateAddressUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('AddressRepository') private addressRepository: IAddressRepository,
  ) {}

  public async execute({ address }: IRequest): Promise<any> {
    this.logger.log('info', 'creating address', { address });
    const response = await this.addressRepository.create(address);
    this.logger.log('info', 'created address', { response });
    return response;
  }
}
