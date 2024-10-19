export interface Pagination<T> extends PaginationPayload {
    pageCount: number;
    items: T[];
}

export interface PaginationPayload {
    limit: number;
    page: number;
    companyId?: number | null;
}