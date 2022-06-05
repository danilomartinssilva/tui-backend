import { Request, Response } from 'express';
export default class AddressController {
  public async index(request: Request<any, any, any, any>, response: Response) {
    return response.json({ message: 'Oi' });
  }
}
