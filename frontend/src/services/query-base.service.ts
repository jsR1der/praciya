import {QueryClient} from "@tanstack/react-query";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";

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
