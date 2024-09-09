import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from '../entities/testUser.entity';
import { S3Service } from '../s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  controllers: [UsersController],
  providers: [UsersService, S3Service],
})
export class UsersModule {}
