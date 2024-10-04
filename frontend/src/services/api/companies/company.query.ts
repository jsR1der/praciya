import {useMutation, useQuery} from "@tanstack/react-query";
import {createCompany, getCompany} from "./companies-api.service.ts";
import {UserModel} from "../../../models/user.model.ts";
import {CompanyModel} from "../../../models/company.model.ts";


export const useCompanyMutation = () => {
    return useMutation({
        mutationKey: ['createCompany'],
        mutationFn: async (props: {
            company: CompanyModel,
            user: UserModel
        }) => createCompany(props.company, props.user),
    })
}

export const useCompanyQuery = (email: string) => {
    return useQuery<CompanyModel | null>(
        {
            queryKey: ['getCompany'],
            queryFn: async (): Promise<CompanyModel> => getCompany(email),
            retry: 3,
            retryDelay: (attempt: number) => attempt === 1 ? 2000 : attempt * 1000,
            initialData: () => null,
            refetchOnWindowFocus: false
        });
}