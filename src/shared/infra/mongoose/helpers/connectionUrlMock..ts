import mongodbConfig from '@config/mongodb';

export default function connectionUrlMock(): string {
  const userNameAndPasswordString: string = mongodbConfig.username
    ? `${mongodbConfig.username}:${mongodbConfig.password}@`
    : '';

  return `mongodb://${userNameAndPasswordString}${mongodbConfig.host}:${mongodbConfig.port}/local?authSource=admin`;
}
