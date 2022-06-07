import CreateAddressUseCase from '@modules/address/useCases/CreateAddressUseCase';
import FindByAddressUseCase from '@modules/address/useCases/FindByAddressUseCase';
import GetAllUseCase from '@modules/address/useCases/GetAllUseCase';
import SearchAddressUseCase from '@modules/address/useCases/SearchAddressUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export default class AddressController {
  public async index(
    request: Request<any, any, any, any>,
    response: Response,
  ): Promise<Response> {
    const addressUseCase = container.resolve(GetAllUseCase);
    const data = await addressUseCase.execute();
    return response.json(data);
  }
  public async search(
    request: Request<any, any, any, any>,
    response: Response,
  ): Promise<Response> {
    const { term } = request.query;

    const addressUseCase = container.resolve(SearchAddressUseCase);

    const data = await addressUseCase.execute({ term });
    return response.json(data);
  }
  public async findBy(
    request: Request<any, any, any, any>,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const addressUseCase = container.resolve(FindByAddressUseCase);

    const data = await addressUseCase.execute(id);
    return response.json(data);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { address } = request.body;

    const createAddress = container.resolve(CreateAddressUseCase);
    await createAddress.execute({
      address,
    });
    return response.status(201).send();
  }
}
