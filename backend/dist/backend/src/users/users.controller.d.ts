import { User } from '../../../shared/models';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): void;
    getUsersById(id: string): void;
    editUser(photo: Express.Multer.File, user: Omit<User, 'photo'>, id: string): void;
    deleteUser(id: string): void;
    upload(photo: Express.Multer.File, body: Omit<User, 'photo'>): void;
}
