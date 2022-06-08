import faker from '@shared/infra/faker/Faker';
function addressFactory(): Address {
  const data = {
    cityCode: faker.string({ length: 2 }),
    countryName: faker.country(),
    regionCode: faker.country(),
    cityName: faker.city(),
  };
  return data;
}
export default addressFactory;
