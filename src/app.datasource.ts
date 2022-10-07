import entities from './typeorm';
import { DataSource } from 'typeorm';
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root123',
    database: 'nguoidung',
    entities,
    
    logging: true,
    synchronize: true,
    // migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
    // migrationsTableName: "migrations",
    // migrationsRun: true,
    migrations: ['src/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });