import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import 'dotenv/config'

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  synchronize: false,
  migrations: [__dirname + '/src/migrations/*.ts'],
  migrationsRun: true,
  autoLoadEntities: true,
}
