import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { SubmitDataEvent } from './events/submit-data.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @EventPattern('submit_data')
  handleSubmitData(data: SubmitDataEvent) {
    console.log('triggered from loan management');
    this.appService.handleSubmitData(data);
  }
}
