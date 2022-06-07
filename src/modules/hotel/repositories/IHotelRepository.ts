export type IHotelRequest = {
  chainCode: string;
  iataCode: string;
  name: string;
  available: boolean;
};
export default interface IHotelRepository {
  create(address: IHotelRequest[]): Promise<Hotel[] | undefined>;
}
