import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestUser } from '../entities/testUser.entity';
import { Repository } from 'typeorm';
import { User } from '../../../shared/models';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(TestUser)
    private readonly userRepository: Repository<TestUser>,
  ) {}

  public async getAll(): Promise<TestUser[]> {
    return await this.userRepository.find();
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

  public async create(user: User<Buffer>): Promise<any> {
    const newEntry = this.userRepository.create(user);
    return await this.userRepository.save(newEntry);
  }
}
