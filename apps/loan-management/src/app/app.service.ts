import { Inject, Injectable } from '@nestjs/common';
import { submitDataRequest } from './dto/submit-data-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { SubmitDataEvent } from './events/submit-data.event';
import { SubmitFileEvent } from './events/submit-file-event';

@Injectable()
export class AppService {
  constructor(@Inject('OCR') private readonly ocrClient: ClientProxy) {}
  private readonly sampleData: string[] = [];
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  submitData(data: submitDataRequest) {
    this.sampleData.push(data.data);
    console.log(this.sampleData);
    this.ocrClient.emit('submit_data', new SubmitDataEvent(data.data));
  }

  uploadFile(file: Express.Multer.File) {
    console.log(file);
    this.ocrClient.emit('submit_file', new SubmitFileEvent(file));
  }
}
