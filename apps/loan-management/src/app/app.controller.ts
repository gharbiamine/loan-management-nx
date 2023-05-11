import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { submitDataRequest } from './dto/submit-data-request.dto';
import { Express } from 'express';
import { Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

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
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.appService.uploadFile(file);
  }
}
