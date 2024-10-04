import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestUserEntity } from './entities/testUser.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/user/update-user.dto';
import { PaginationPayload, UsersPagination } from './users.model';
import { S3Service } from '../../services/s3.service';
import { User } from '../../models';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(TestUserEntity)
    private readonly testUserRepository: Repository<TestUserEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly s3Service: S3Service,
  ) {}

  public async getPaginatedUsers(
    payload: PaginationPayload,
  ): Promise<UsersPagination> {
    const users = await this.testUserRepository.find();
    return this.calculatePagination(users, payload);
  }

  private calculatePagination(
    users: User<string>[],
    payload: PaginationPayload,
  ): UsersPagination {
    return {
      current: payload.count ? payload.count : 1,
      pages: Math.ceil(users.length / payload.count),
      count: payload.count,
      users,
    };
  }

  public async getById(id: number): Promise<any> {
    return await this.testUserRepository.findBy({ id: id });
  }

  public async updateTestUser(
    id: number,
    updateDto: UpdateUserDto,
  ): Promise<any> {
    return await this.testUserRepository.update({ id: id }, updateDto);
  }

  public async delete(id: number): Promise<any> {
    return await this.testUserRepository.delete({ id });
  }

  public async create(
    user: Omit<User, 'photo'>,
    file: Express.Multer.File,
  ): Promise<TestUserEntity | null> {
    const photoUrl = await this.s3Service.uploadFile(file);
    if (!photoUrl) {
      throw new Error('Something with s3 bucket');
    }
    const newEntry = this.testUserRepository.create({
      ...user,
      photo: photoUrl,
    });
    return await this.testUserRepository.save(newEntry);
  }

  public async createUser(user: UserEntity): Promise<UserEntity> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
}
