import {CurrencyEnum} from "./enums.model.ts";

export interface JobModel {
    id?: string;
    companyId: string;
    companyName: string;
    jobTitle: string;
    city: string | null;
    fork: number;
    currency: CurrencyEnum;
    description: string;
    views: number;
    applications_sent: number;
    created_at: string;
    updated_at: string;

}