import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
export declare class S3Service {
    private readonly configService;
    readonly s3Client: S3Client;
    private readonly bucketName;
    constructor(configService: ConfigService);
    uploadFile(file: Express.Multer.File): Promise<string | null>;
    private generateS3Url;
}
