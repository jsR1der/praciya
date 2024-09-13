import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommandInput } from '@aws-sdk/client-s3/dist-types/commands/PutObjectCommand';

@Injectable()
export class S3Service {
  public readonly s3Client = new S3Client({
    region: this.configService.get('S3REGION'),
  });
  private readonly bucketName = this.configService.get('S3BUCKETNAME');

  constructor(private readonly configService: ConfigService) {}

  public async uploadFile(file: Express.Multer.File): Promise<string | null> {
    const date = new Date().getTime();
    const Key = date + file.originalname;
    const options: PutObjectCommandInput = {
      Bucket: this.bucketName,
      Key,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    const putObjectCommand = new PutObjectCommand(options);
    const result = await this.s3Client.send(putObjectCommand);
    return result.$metadata.httpStatusCode === 200
      ? this.generateS3Url(Key)
      : null;
  }

  private generateS3Url(key: string): string {
    return `https://${this.bucketName}.s3.${this.configService.get('S3REGION')}.amazonaws.com/${key}`;
  }
}
