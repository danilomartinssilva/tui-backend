export type AddressRequest = {
  cityCode: string;
  regionCode: string;
  cityName: string;
};
export type IHotelRequest = {
  hotel_ids: string[];
  address_id: string;
};

export type IAddressFindQuery = {
  term: string;
};

export default interface IAddressRepository {
  all(): Promise<Address[]>;
  create(address: AddressRequest[]): Promise<boolean>;
  addHotel(address: IHotelRequest): Promise<boolean>;
  findById(id: string): Promise<Address | null>;
  search(find: IAddressFindQuery): Promise<Address[]>;
}
