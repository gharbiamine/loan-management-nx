import { Injectable } from '@nestjs/common';
import { SubmitDataEvent } from './events/submit-data.event';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  handleSubmitData(data: SubmitDataEvent) {
    console.log('CREDIT received data: ' + data.data + ' from Loan Management');
  }
}
