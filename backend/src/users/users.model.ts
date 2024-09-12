import { User } from '../models';

export interface UsersPagination extends PaginationPayload {
  pages: number;
  users: User<string>[];
}

export interface PaginationPayload {
  current: number;
  count: number;
}
