import './App.scss'
import Header from "./components/header/Header.tsx";
import Form from "./components/form/Form.tsx";
import Users from "./components/users/Users.tsx";
import Preview from "./components/preview/Preview.tsx";
import {useEffect} from "react";
import {getToken} from "./apiService.ts";

function App() {
    useEffect(() => {
        getToken().then()
    }, [])
    return (
        <div>
            <main className="app-container">
                <Header></Header>
                <Preview></Preview>
                <Users></Users>
                <Form></Form>
            </main>
        </div>
    )
}

export default App
