import 'dotenv/config';
export type AppConfig = {
  name: string;
  secret: string;
  port: number;
  env: string;
};

export default {
  name: process.env.APP_NAME,
  secret: process.env.SECRET,
  port: process.env.PORT || 8092,
  env: process.env.NODE_ENV || 'development',
};
