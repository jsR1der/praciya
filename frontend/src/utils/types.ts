export enum Color {
    primary = 'primary',
    secondary = 'secondary',
    background = 'background'
}

export interface RequestResult {
    success: boolean;
}

export interface OnChangeCallback {
    onChange: (...args: any[]) => any
}

export interface Positions extends RequestResult {
    positions: Position[]
}

export interface Position {
    id: number;
    name: string;
}

export interface UserPagination {
    pages: number,
    current: number,
    count: number,
    users: User[]
}

export interface User extends CreateUserPayload {
    id: string;
    position: string;
    registration_timestamp: number;
}

export interface CreateUserPayload<T = File> {
    name: string;
    email: string;
    phone: string;
    position_id: string;
    photo: T;
}