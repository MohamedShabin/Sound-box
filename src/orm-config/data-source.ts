import { DataSource, DataSourceOptions } from 'typeorm'
import { env } from 'src/config/env.config'

const DataSourceConnection: DataSourceOptions = {
  type: 'postgres',
  database: env.DB_NAME,
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER_NAME,
  password: env.DB_PASSWORD,
  logging: true,
  synchronize: false,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*.ts']
}

// Migration generate command
// npx ts-node -P tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate -d ./src/orm-config/data-source.ts ./src/migrations/add-email-column


// Migration run command
// npx ts-node -P tsconfig.json -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/orm-config/data-source.ts

/*
Implement Migration and just watch (https:typeorm.io/docs/data-source/data-source/)
Implement SnackCase
Implement payments history
Upload to GitHub
Implement WebSocket to another way
Implement MQTT only Back-end
Implement Front-end
*/
export const AppDataSource = new DataSource(DataSourceConnection)
