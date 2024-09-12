import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { Response } from 'express';
import { User } from '../models';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getAllUsers(
    @Query() params: { count: number; current: number },
    @Res() res: Response,
  ) {
    setTimeout(async () => {
      const result = await this.usersService.getPaginatedUsers(params);
      res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .send(result);
    }, 2000);
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
