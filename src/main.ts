import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{cors:true});

  const config = new DocumentBuilder()
    .setTitle('User example')
    .setDescription('The users API decription')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'token')
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },'access-token',)
    .build();
    const document = SwaggerModule.createDocument(app, config);

    // const options = {
    //   swaggerOptions: {
    //     authAction: {
    //       defaultBearerAuth: {
    //         name: 'defaultBearerAuth',
    //         schema: {
    //           description: 'Default',
    //           type: 'http',
    //           in: 'header',
    //           scheme: 'bearer',
    //           bearerFormat: 'JWT',
    //         },
    //         value: 'thisIsASampleBearerAuthToken123',
    //       },
    //     },
    //   },
    // };

    SwaggerModule.setup('api',app, document);

  await app.listen(3000);
}

bootstrap();
