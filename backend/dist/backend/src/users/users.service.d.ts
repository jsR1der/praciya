import { TestUser } from '../entities/testUser.entity';
import { Repository } from 'typeorm';
import { User } from '../../../shared/models';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<TestUser>);
    getAll(): Promise<TestUser[]>;
    getById(id: number): Promise<any>;
    updateUser(id: number, updateDto: UpdateUserDto): Promise<any>;
    delete(id: number): Promise<any>;
    create(user: User<Buffer>): Promise<any>;
}
