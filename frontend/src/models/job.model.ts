export interface JobModel {
    companyId: string;
    companyName: string;
    jobTitle: string;
    city: string | null;
    fork: number;
    currency: 'USD' | 'EUR' | 'UAH';
    description: string;
    views: number;
    applications_sent: number;
    created_at: string;
    updated_at: string;

}