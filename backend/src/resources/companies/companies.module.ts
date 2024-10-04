import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { S3Service } from '../../services/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [CompaniesController],
  providers: [CompaniesService, S3Service],
})
export class CompaniesModule {}
