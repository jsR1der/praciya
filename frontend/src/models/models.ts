export class User<T = File> {
    id: number;
    name: string;
    email: string;
    phone: string;
    position_id: number;
    photo?: T;
}

