import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
import entities from './typeorm';
import { UserModule } from './user/user.module';
import {ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/Auth.service';
import { AuthModule } from './auth/Auth.module';
import { AppService } from './app.service';

@Module({
  // controllers: [AppController],
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root123',
    database: 'nguoidung',
    entities,
    synchronize: true,
  }),
      AuthModule,
      UserModule,
      ConfigModule.forRoot(),
  ],
  providers: [AppService],

})
export class AppModule {}
