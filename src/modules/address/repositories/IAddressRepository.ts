export type AddressRequest = {
  cityCode: string;
  regionCode: string;
  cityName: string;
};
export default interface IAddressRepository {
  all(): Promise<Address[]>;
  create(address: AddressRequest[]): Promise<boolean>;
}
