import { BadRequestException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { SubmitDataEvent } from './events/submit-data.event';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs';
import { AxiosError } from 'axios';
import Express from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('submit_data')
  handleSubmitData(data: SubmitDataEvent) {
    let textContent: string = '';
    const formData = new FormData();
    formData.append('apikey', 'K83685955588957');
    formData.append('file', new Blob([data.file.buffer]));
    formData.append('language', 'eng');
    formData.append('filetype', 'PNG');
    this.httpService
      .post('https://api.ocr.space/parse/image', formData)
      .pipe(
        catchError((error: AxiosError) => {
          throw new BadRequestException('Bad File Type');
        })
      )
      .subscribe((res) => {
        textContent = res.data.ParsedResults[0];
      });
    console.log(textContent);
    this.appService.handleSubmitData(data);
  }
}
