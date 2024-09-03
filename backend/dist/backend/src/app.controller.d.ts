import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllUsers(): void;
    getUsersById(): void;
    createUser(): void;
    editUser(): void;
    deleteUser(): void;
}
