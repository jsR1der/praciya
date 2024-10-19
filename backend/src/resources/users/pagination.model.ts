export interface Pagination<T> extends PaginationPayload {
  pageCount: number;
  items: T[];
}

export interface PaginationPayload {
  limit: number;
  page: number;
}

export interface JobsPagination extends PaginationPayload {
  companyId: number | undefined;
}
