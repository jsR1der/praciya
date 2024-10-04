import {useMutation, useQuery} from "@tanstack/react-query";
import {createCompany, editCompany, getCompany} from "./company.service.ts";
import {CompanyModel} from "../../../models/company.model.ts";
import {axiosRequest} from "../api-base.service.ts";
import {queryClient} from "../../query-base.service.ts";


export const useCreateCompanyMutation = () => {
    return useMutation({
        mutationKey: ['createCompany'],
        mutationFn: async (company: Partial<CompanyModel>) => createCompany(company),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["getCompany"]})
        },
    })
}

export const useEditCompanyMutation = () => {
    return useMutation({
        mutationKey: ['editCompany'],
        mutationFn: async (company: Partial<CompanyModel>) => editCompany(company),
    })
}

export const useCompanyQuery = (email: string | undefined) => {
    return useQuery<CompanyModel | null>(
        {
            queryKey: ['getCompany', email],
            queryFn: async (): Promise<CompanyModel | null> => axiosRequest(await getCompany(email)),
            retry: false,
            retryDelay: (attempt: number) => attempt === 1 ? 2000 : attempt * 1000,
            initialData: () => null,
            refetchOnWindowFocus: false,
            throwOnError: false
        });
}