import { TestUser } from '../entities/testUser.entity';
import { Repository } from 'typeorm';
import { User } from '../../../shared/models';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PaginationPayload, UsersPagination } from './users.model';
import { S3Service } from '../s3.service';
export declare class UsersService {
    private readonly userRepository;
    private readonly s3Service;
    constructor(userRepository: Repository<TestUser>, s3Service: S3Service);
    getPaginatedUsers(payload: PaginationPayload): Promise<UsersPagination>;
    private calculatePagination;
    getById(id: number): Promise<any>;
    updateUser(id: number, updateDto: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<any>;
    create(user: Omit<User, 'photo'>, file: Express.Multer.File): Promise<TestUser | null>;
}
