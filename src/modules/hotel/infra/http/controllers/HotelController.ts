import CreateHotelUseCase from '@modules/hotel/useCases/CreateHotelUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
export default class HotelController {
  public async index(
    request: Request<any, any, any, any>,
    response: Response,
  ): Promise<Response> {
    return response.json({ message: 'Hotel' });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { hotel, address_id } = request.body;
    const createHotel = container.resolve(CreateHotelUseCase);
    const createdHotel = await createHotel.execute({
      hotel,
      address_id,
    });

    return response.status(201).send();
  }
}
