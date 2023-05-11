/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */


import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    }
  );
  await app.listen();
}

bootstrap();
