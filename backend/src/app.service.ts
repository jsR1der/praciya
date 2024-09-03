import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getAllUsers(): void {}

  public getUserById(id: number): void {}

  public createUser(): void {}

  public updateUser(id: number): void {}

  public deleteUser(id: number): void {}
}
