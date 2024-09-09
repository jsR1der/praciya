import { User } from '../../../shared/models';

export interface UsersPagination extends PaginationPayload {
  pages: number;
  users: User<string>[];
}

export interface PaginationPayload {
  current: number;
  count: number;
}
