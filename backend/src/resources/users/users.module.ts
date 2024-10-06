import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from '../../services/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, S3Service],
})
export class UsersModule {}
