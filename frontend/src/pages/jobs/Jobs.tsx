import './Jobs.scss'
import Users from "../../components/users/Users.tsx";
import {persister, queryClient} from "../../services/query.service.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {GlobalErrorBoundary} from "../../components/errors/globalErrorBoundary/GlobalErrorBoundary.tsx";
import {ErrorBoundary} from "react-error-boundary";


const Jobs = () => {

    const onReset = () => window.history.back()

    return (
        <PersistQueryClientProvider persistOptions={{persister}} client={queryClient}>
            <ErrorBoundary FallbackComponent={GlobalErrorBoundary} onReset={onReset}>
                <main className="app-container">
                    <Users></Users>
                </main>
            </ErrorBoundary>
        </PersistQueryClientProvider>

    )
}

export default Jobs
