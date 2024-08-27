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

export interface UserPagination extends RequestResult {
    "total_pages": number,
    "total_users": number,
    "count": number,
    "page": number,
    "links": {
        "next_url": string,
        "prev_url": string
    },
    users: User[]
}

export interface User extends CreateUserPayload {
    id: string;
    position: string;
    registration_timestamp: number;
}

export interface CreateUserPayload {
    name: string;
    email: string;
    phone: string;
    position_id: number;
    photo: string;
}