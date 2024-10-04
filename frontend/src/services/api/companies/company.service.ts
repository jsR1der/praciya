import {CompanyModel} from "../../../models/company.model.ts";
import {apiService} from "../api-base.service.ts";
import {AxiosResponse} from "axios";

export const createCompany = async (company: Partial<CompanyModel>) => {
    return await apiService.instance.post<CompanyModel>('companies', company);
}

export const editCompany = async (company: Partial<CompanyModel>) => {
    return await apiService.instance.patch<CompanyModel>(`companies/${company.id}`, company);
}

export const getCompany = async (email: string | undefined): Promise<AxiosResponse<CompanyModel>> => {
    return await apiService.instance.get<CompanyModel>(`companies/${email}`);
}

// edit

// delete ( will delete user along)

