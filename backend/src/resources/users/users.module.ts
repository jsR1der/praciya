import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUserEntity } from './entities/testUser.entity';
import { S3Service } from '../../services/s3.service';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUserEntity, UserEntity])],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, S3Service],
})
export class UsersModule {}
