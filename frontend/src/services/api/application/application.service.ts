import {apiService} from "../api-base.service.ts";
import {ApplicationModel} from "../../../models/application.model.ts";

export const submitApplication = async (application: ApplicationModel) => {
    return await apiService.instance.post<ApplicationModel>('applications', application, {headers: {"Content-Type": "multipart/form-data"}});
}

export const hasSubmitted = async () => {
    return await apiService.instance.get<boolean>('applications/canSubmit')
}
