import {QueryClient, useMutation} from "@tanstack/react-query";
import {axiosRequest, createUser} from "./api/api-base.service.ts";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {ObsoleteUser} from "../models/models.ts";

export const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

export const useUserMutation = () => {
    return useMutation({
        mutationKey: ['createUser'],
        mutationFn: async (user: ObsoleteUser) => axiosRequest(await createUser(user)),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["users"]})
        },
        onError: () => console.log('error')
    })
}