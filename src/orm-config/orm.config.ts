import * as dotenv from "dotenv";
import { env } from "src/config/env.config";
// dotenv.config({ quiet: true });
module.exports = {
  type: env.DB_TYPE,
  database: env.DB_NAME,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER_NAME,
  password: env.DB_PASSWORD,
  logging: true,
  autoLoadEntities: true,
  synchronize: false
};
