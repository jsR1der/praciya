import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestUser } from '../entities/testUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
