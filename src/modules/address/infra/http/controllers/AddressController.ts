import GetAllUseCase from '@modules/address/useCases/GetAllUseCase';
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
}
