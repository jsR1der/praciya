export enum Color {
    primary = 'primary',
    secondary = 'secondary',
    background = 'background'
}


export interface UserPagination {
    "success": boolean,
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

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: string;
    registration_timestamp: number;
    photo: string;
}