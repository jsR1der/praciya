import {CompanyModel} from "../../../models/company.model.ts";
import {UserModel} from "../../../models/user.model.ts";
import {apiService, getData} from "../api-base.service.ts";

export const createCompany = async (company: CompanyModel, user: UserModel) => {
    return await apiService.instance.post<CompanyModel>('companies', {company, user});
}

export const getCompany = async (email: string): Promise<CompanyModel> => {
    const data = await apiService.instance.get<CompanyModel>(`companies/${email}`);
    return getData(data);
}

// edit

// delete ( will delete user along)

