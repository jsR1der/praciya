import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '../../../shared/models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getAllUsers(): void {
    this.usersService.getAll().then(console.log).catch(console.log);
  }

  @Get(':id')
  public getUsersById(@Param('id') id: string): void {
    this.usersService.getById(+id).then(console.log).catch(console.log);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('photo'))
  public editUser(
    @UploadedFile() photo: Express.Multer.File,
    @Body() user: Omit<User, 'photo'>,
    @Param('id') id: string,
  ): void {
    this.usersService
      .updateUser(+id, { ...user, photo: photo.buffer })
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
  public upload(
    @UploadedFile() photo: Express.Multer.File,
    @Body() body: Omit<User, 'photo'>,
  ) {
    const user: User<Buffer> = {
      photo: photo.buffer,
      ...body,
      position_id: +body.position_id,
    };
    this.usersService.create(user).then(console.log).catch(console.log);
  }
}
