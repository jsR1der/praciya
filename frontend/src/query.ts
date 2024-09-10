import {QueryClient, useMutation} from "@tanstack/react-query";
import {createUser} from "./apiService.ts";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {User} from "../../shared/models.ts";

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
        mutationFn: async (user: User) => createUser(user),
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ["users"]})
        }
    })
}