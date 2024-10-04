export class DefaultUserModel {
    name: string;
    nickname: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    picture: string;
    constructor(data: any) {
        this.name = data.name;
        this.nickname = data.nickname;
        this.updated_at = data.updated_at;
        this.email = data.email;
        this.email_verified = data.email_verified;
        this.picture = data.picture;
    }

}