import './App.scss'
import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Users from "./components/users/Users.tsx";
import Preview from "./components/preview/Preview.tsx";
import {useEffect, useState} from "react";
import {getToken} from "./apiService.ts";
import Preloader from "./components/preloader/Preloader.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    useEffect(() => {
        getToken().then((response) => setIsAuthenticated(response))
    }, [])
    return (
        <>
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
                    <div className="loader-container">
                        <Preloader size={70}></Preloader>
                    </div>
            }
        </>

    )
}

export default App
