import './App.scss'
import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Users from "./components/users/Users.tsx";
import Preview from "./components/preview/Preview.tsx";
import {persister, queryClient} from "./query.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {useEffect} from "react";
            import {useAuth0} from "@auth0/auth0-react";


const App = () => {
    const {getAccessTokenSilently, isAuthenticated, isLoading} = useAuth0();
    useEffect(() => {
        const checkAuthSession = async () => {
            try {
                await getAccessTokenSilently();
            } catch (e) {
                console.log(e)
            }
        }
        if (!isLoading && !isAuthenticated) {
            checkAuthSession().then().catch(console.log)
        }
    }, [isAuthenticated, isLoading, getAccessTokenSilently])
    return (
        <PersistQueryClientProvider persistOptions={{persister}} client={queryClient}>
            <Header></Header>
            <main className="app-container">
                <Preview></Preview>
                <Users></Users>
                <Form></Form>
            </main>
        </PersistQueryClientProvider>

    )
}

export default App
