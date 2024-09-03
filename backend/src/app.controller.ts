import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  public getAllUsers(): void {}

  @Get('users:id')
  public getUsersById(): void {}

  @Post('users')
  public createUser(): void {}

  @Patch('users:id')
  public editUser(): void {}

  @Delete('users:id')
  public deleteUser(): void {}
}
