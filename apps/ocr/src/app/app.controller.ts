import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { SubmitDataEvent } from './events/submit-data.event';
import { SubmitFileEvent } from './events/submit-file-event';
import { Express } from 'express';
import { Multer } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('submit_data')
  handleSubmitData(data: SubmitDataEvent) {
    console.log('triggered');
    this.appService.handleSubmitData(data);
  }

  @EventPattern('submit_file')
  handleSubmitFile(data: SubmitFileEvent) {
    console.log('triggered');
    this.appService.handleSubmitFile(data);
  }
}
