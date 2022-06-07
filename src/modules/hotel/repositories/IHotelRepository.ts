export type IHotelRequest = {
  chainCode: string;
  iataCode: string;
  name: string;
};
export type IOfferRequest = {
  hotel_id: string;
  offers_id: string[];
};
export default interface IHotelRepository {
  create(address: IHotelRequest[]): Promise<Hotel[] | undefined>;
  findById(id: string): Promise<Hotel | null>;
  addOffer(offer: IOfferRequest): Promise<boolean>;
}
