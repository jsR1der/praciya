import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    create(createAppDto: CreateAppDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAppDto: UpdateAppDto): string;
    remove(id: string): string;
}
