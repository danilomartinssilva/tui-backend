export type AddressRequest = {
  cityCode: string;
  regionCode: string;
  cityName: string;
};
export type IHotelRequest = {
  hotel_ids: string[];
  address_id: string;
};
export default interface IAddressRepository {
  all(): Promise<Address[]>;
  create(address: AddressRequest[]): Promise<boolean>;
  addHotel(address: IHotelRequest): Promise<boolean>;
  findById(id: string): Promise<Address | null>;
}
