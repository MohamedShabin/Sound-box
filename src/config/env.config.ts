import * as dotenv from 'dotenv'

dotenv.config({ quiet: true })

const envConfig = {
  // DB
  DB_TYPE: process.env.DB_TYPE || 'postgres',
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_USER_NAME: process.env.USER_NAME,
  DB_PASSWORD: process.env.PASSWORD,

  // APP
  PORT: process.env.PORT
}

export const env = envConfig