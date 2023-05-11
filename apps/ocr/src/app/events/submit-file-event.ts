export class SubmitFileEvent {
  constructor(public readonly file: Express.Multer.File) {}
}
