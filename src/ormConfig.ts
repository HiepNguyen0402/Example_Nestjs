// import {ConnectionOptions} from 'typeorm';
// import entities from './typeorm';

// // You can load you .env file here synchronously using dotenv package (not installed here),
// // import * as dotenv from 'dotenv';
// // import * as fs from 'fs';
// // const environment = process.env.NODE_ENV || 'development';
// // const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// // You can also make a singleton service that load and expose the .env file content.
// // ...


// // Check typeORM documentation for more information.
// const config: ConnectionOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3307,
//   username: 'root',
//   password: 'root123',
//   database: 'nguoidung',
//   entities,
//   synchronize: true,

//   // We are using migrations, synchronize should be set to false.

//   // Run migrations automatically,
//   // you can disable this if you prefer running migration manually.
//   migrationsRun: true,
//   logging: true,
//   logger: 'file',

//   // allow both start:prod and start:dev to use migrations
//   // __dirname is either dist or src folder, meaning either
//   // the compiled js in prod or the ts in dev
//   migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
//   // cli: {
//   //   migrationsDir: 'src/migrations',
//   // },
// };

// export = config;