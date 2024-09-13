import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entities/company.entity';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { TestUser } from '../users/entities/testUser.entity';
import { S3Service } from '../../services/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, UserEntity, TestUser])],
  controllers: [CompaniesController],
  providers: [CompaniesService, UsersService, S3Service],
})
export class CompaniesModule {}
