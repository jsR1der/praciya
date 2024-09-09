import { User } from '../../../shared/models';
import { UsersService } from './users.service';
import { UsersPagination } from './users.model';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(params: {
        count: number;
        current: number;
    }): Promise<UsersPagination>;
    getUsersById(id: string): void;
    updateUser(photo: Express.Multer.File, user: Omit<User, 'photo'>, id: string): void;
    deleteUser(id: string): void;
    upload(photo: Express.Multer.File, body: Omit<User, 'photo'>): Promise<import("../entities/testUser.entity").TestUser>;
}
