import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { submitDataRequest } from './dto/submit-data-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Post()
  submitData(@Body() data: submitDataRequest) {
    this.appService.submitData(data);
  }
}
