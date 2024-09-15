import {QueryClient, useMutation} from "@tanstack/react-query";
import {createUser} from "./api.service.ts";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {DefaultUser} from "../models/models.ts";

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
        mutationFn: async (user: DefaultUser) => createUser(user),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["users"]})
        }
    })
}