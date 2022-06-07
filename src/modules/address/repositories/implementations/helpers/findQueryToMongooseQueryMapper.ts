import { AddressDocument } from '@modules/address/infra/mongoose/schemas/Address';
import { MongooseFilterQuery } from 'mongoose';
import { IAddressFindQuery } from '../../IAddressRepository';

/**
 * Maps a IAccountFindQuery into a proper MongooseFilterQuery.
 */
export default function findQueryToMongooseQueryMapper(
  findQuery: IAddressFindQuery,
): MongooseFilterQuery<AddressDocument> {
  const { term } = findQuery;

  const query: MongooseFilterQuery<AddressDocument> = {};
  if (term && term.trim()) {
    console.log('query**************', query);
    query.$or.push({ countryName: /${term}/ }, { cityName: /${term}/ });
  }

  return query;
}
