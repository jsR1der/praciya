import {apiService} from "../api-base.service.ts";
import {AxiosResponse} from "axios";
import {JobModel} from "../../../models/jobModel.ts";
import {Pagination, PaginationPayload} from "../../../models/pagination.model.ts";

export const createJob = async (job: Partial<JobModel>) => {
    return await apiService.instance.post<JobModel>('jobs', job);
}

export const editJob = async (job: Partial<JobModel>) => {
    return await apiService.instance.patch<JobModel>(`jobs/${job.id}`, job);
}

export const getJobsWithPagination = async (params: PaginationPayload): Promise<AxiosResponse<Pagination<JobModel>>> => {
    return await apiService.instance.get<Pagination<JobModel>>(`jobs`, {params});
}

// edit

// delete ( will delete user along)

