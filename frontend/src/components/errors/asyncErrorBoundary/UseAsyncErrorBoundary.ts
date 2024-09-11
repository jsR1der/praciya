import {useCallback, useState} from "react";

export const useAsyncErrorBoundary = () => {
    const [_, setError] = useState<Error | null>(null)
    return useCallback((error: Error) => {
        setError(() => {
            throw error;
        })
    }, [setError])
}