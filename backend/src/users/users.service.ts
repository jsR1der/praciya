import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestUser } from '../entities/testUser.entity';
import { Repository } from 'typeorm';
import { User } from '../../../shared/models';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PaginationPayload, UsersPagination } from './users.model';
import { S3Service } from '../s3.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(TestUser)
    private readonly userRepository: Repository<TestUser>,
    private readonly s3Service: S3Service,
  ) {}

  public async getPaginatedUsers(
    payload: PaginationPayload,
  ): Promise<UsersPagination> {
    const users = await this.userRepository.find();
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
    return await this.userRepository.findBy({ id: id });
  }

  public async updateUser(id: number, updateDto: UpdateUserDto): Promise<any> {
    return await this.userRepository.update({ id: id }, updateDto);
  }

  public async delete(id: number): Promise<any> {
    return await this.userRepository.delete({ id });
  }

  public async create(
    user: Omit<User, 'photo'>,
    file: Express.Multer.File,
  ): Promise<TestUser | null> {
    const photoUrl = await this.s3Service.uploadFile(file);
    if (!photoUrl) {
      throw new Error('Something with s3 bucket');
    }
    const newEntry = this.userRepository.create({ ...user, photo: photoUrl });
    return await this.userRepository.save(newEntry);
  }
}
