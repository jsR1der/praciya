export class CreateApplicationDto {
  cv: Express.Multer.File;
  letter: string;
  ip?: string;
}
