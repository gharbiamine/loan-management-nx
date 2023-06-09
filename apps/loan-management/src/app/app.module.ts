import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'OCR',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'CREDIT',
        transport: Transport.TCP,
        options: { port: 3002 },
      }, 
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
