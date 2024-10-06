import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}
  // private readonly testUserRepository: Repository<TestUserEntity>, // @InjectRepository(TestUserEntity)
  // @InjectRepository(UserEntity)
  // private readonly userRepository: Repository<UserEntity>,
  // s3Service: S3Service,

  // public async getById(id: number): Promise<any> {
  //   return await this.testUserRepository.findBy({ id: id });
  // }
  //
  // public async updateTestUser(
  //   id: number,
  //   updateDto: UpdateUserDto,
  // ): Promise<any> {
  //   return await this.testUserRepository.update({ id: id }, updateDto);
  // }
  //
  // public async delete(id: number): Promise<any> {
  //   return await this.testUserRepository.delete({ id });
  // }
  //
  // public async create(
  //   user: Omit<User, 'photo'>,
  //   file: Express.Multer.File,
  // ): Promise<TestUserEntity | null> {
  //   const photoUrl = await this.s3Service.uploadFile(file);
  //   if (!photoUrl) {
  //     throw new Error('Something with s3 bucket');
  //   }
  //   const newEntry = this.testUserRepository.create({
  //     ...user,
  //     photo: photoUrl,
  //   });
  //   return await this.testUserRepository.save(newEntry);
  // }
  //
  // public async createUser(user: UserEntity): Promise<UserEntity> {
  //   const newUser = this.userRepository.create(user);
  //   return await this.userRepository.save(newUser);
  // }
}
