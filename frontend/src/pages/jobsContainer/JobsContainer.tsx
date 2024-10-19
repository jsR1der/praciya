import './JobsContainer.scss'
import Jobs from "../../components/jobs/Jobs.tsx";
import {persister, queryClient} from "../../services/query-base.service.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {GlobalErrorBoundary} from "../../components/errors/globalErrorBoundary/GlobalErrorBoundary.tsx";
import {ErrorBoundary} from "react-error-boundary";


const JobsContainer = () => {
    const onReset = () => window.history.back()

    return (
        <PersistQueryClientProvider persistOptions={{persister}} client={queryClient}>
            <ErrorBoundary FallbackComponent={GlobalErrorBoundary} onReset={onReset}>
                <Jobs companyId={null}></Jobs>
            </ErrorBoundary>
        </PersistQueryClientProvider>

    )
}

export default JobsContainer
