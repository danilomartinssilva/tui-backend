export default interface IAddressRepository {
  all(): Promise<Address[]>;
}
