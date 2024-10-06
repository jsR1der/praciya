import {JobModel} from "./jobModel.ts";
import {UserModel} from "./user.model.ts";

export interface CompanyModel {
    id?: number;
    name: string;
    phone: string | null;
    email: string | null;
    email_verified: boolean;
    updated_at: string;
    picture: string;
    linkedIn: string | null;
    dou: string | null;
    jobs: JobModel[];
}

export class UserToCompanyAdapter {
    public company: Partial<CompanyModel> = {};

    constructor(user: UserModel) {
        this.company.name = user?.nickname || '';
        this.company.phone = '';
        this.company.email = user?.email || '';
        this.company.email_verified = user?.email_verified || false;
        this.company.updated_at = user?.updated_at || '';
        this.company.picture = user?.picture || '';
        this.company.linkedIn = '';
        this.company.dou = '';
        this.company.jobs = [];
    }
}