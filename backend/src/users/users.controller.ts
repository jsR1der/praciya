import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '../../../shared/models';
import { UsersService } from './users.service';
import { UsersPagination } from './users.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAllUsers(
    @Query() params: { count: number; current: number },
  ): Promise<UsersPagination> {
    return await this.usersService.getPaginatedUsers(params);
  }

  @Get(':id')
  public getUsersById(@Param('id') id: string): void {
    this.usersService.getById(+id).then(console.log).catch(console.log);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo'))
  public updateUser(
    @UploadedFile() photo: Express.Multer.File,
    @Body() user: Omit<User, 'photo'>,
    @Param('id') id: string,
  ): void {
    this.usersService
      .updateUser(+id, { ...user })
      .then(console.log)
      .catch(console.log);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: string): void {
    this.usersService
      .delete(+id)
      .then(() => `User with id ${id} has been deleted`)
      .catch(console.log);
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  public async upload(
    @UploadedFile() photo: Express.Multer.File,
    @Body() body: Omit<User, 'photo'>,
  ) {
    const user: Omit<User, 'photo'> = {
      ...body,
      position_id: +body.position_id,
    };
    return await this.usersService.create(user, photo);
  }
}
