import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  host: process.env.HOST_MONGODB,
  port: parseInt(process.env.PORT_MONGODB),
  user: process.env.USER_MONGODB,
  password: process.env.PASSWORD_MONGODB,
  database: process.env.DATABASE_MONGODB,
}));
