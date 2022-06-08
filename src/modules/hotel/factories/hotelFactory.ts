import faker from '@shared/infra/faker/Faker';

function hotelFactory(): Hotel {
  const data = {
    chainCode: faker.string({ length: 2 }),
    iataCode: faker.string({ length: 2 }),
    name: faker.name(),
  };
  return data;
}
export default hotelFactory;
