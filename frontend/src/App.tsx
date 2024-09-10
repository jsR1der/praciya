import './App.scss'
import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Users from "./components/users/Users.tsx";
import Preview from "./components/preview/Preview.tsx";
import {useState} from "react";
import Preloader from "./components/preloader/Preloader.tsx";
import {persister, queryClient} from "./query.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";


const App = () => {
    const [isAuthenticated] = useState<boolean>(true)
    return (
        <PersistQueryClientProvider persistOptions={{persister}} client={queryClient}>
            {
                isAuthenticated
                    ?
                    <>
                        <Header></Header>
                        <main className="app-container">
                            <Preview></Preview>
                            <Users></Users>
                            <Form></Form>
                        </main>
                    </>
                    :
                    <Preloader size={70}></Preloader>
            }
        </PersistQueryClientProvider>

    )
}

export default App
