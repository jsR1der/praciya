import './App.scss'
import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Users from "./components/users/Users.tsx";
import Preview from "./components/preview/Preview.tsx";
import {persister, queryClient} from "./services/query.service.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {GlobalErrorBoundary} from "./components/errors/globalErrorBoundary/GlobalErrorBoundary.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {useAsyncErrorBoundary} from "./components/errors/asyncErrorBoundary/UseAsyncErrorBoundary.ts";


const App = () => {
    const catchAsync = useAsyncErrorBoundary();
    const {getAccessTokenSilently, isAuthenticated, isLoading} = useAuth0();
    useEffect(() => {
        const checkAuthSession = async () => {
            try {
                await getAccessTokenSilently();
            } catch (e: unknown) {
                catchAsync(e as Error)
            }
        }
        if (!isLoading && !isAuthenticated) {
            checkAuthSession()
                .then()
                .catch(e => catchAsync(e))
        }
    }, [catchAsync, isAuthenticated, isLoading, getAccessTokenSilently])

    const onReset = () => window.history.back()

    return (
        <PersistQueryClientProvider persistOptions={{persister}} client={queryClient}>
            <ErrorBoundary FallbackComponent={GlobalErrorBoundary} onReset={onReset}>
                <Header></Header>
                <main className="app-container">
                    <Preview></Preview>
                    <Users></Users>
                    <Form></Form>
                </main>
            </ErrorBoundary>
        </PersistQueryClientProvider>

    )
}

export default App
