import {useQuery} from "@tanstack/react-query";
import {getJobsWithPagination} from "./jobs.service.ts";
import {JobModel} from "../../../models/jobModel.ts";
import {Pagination, PaginationPayload} from "../../../models/pagination.model.ts";
import {axiosRequest} from "../api-base.service.ts";

export const useJobsQuery = (payload: PaginationPayload) => {
    return useQuery<Pagination<JobModel> | null>(
        {
            queryKey: ['jobs', payload],
            queryFn: async (): Promise<Pagination<JobModel>> => axiosRequest(await getJobsWithPagination(payload)),
            retry: 3,
            retryDelay: (attempt: number) => attempt === 1 ? 2000 : attempt * 1000,
            initialData: () => null,
            refetchOnWindowFocus: false,
        });
}