import { Multer } from 'multer';
import { Express } from 'express';
export class SubmitDataEvent {
  constructor(public readonly file: Express.Multer.File) {}
}
