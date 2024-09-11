import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {Career} from "../components/career/Career.tsx";
import {NotFound} from "../components/404/NotFound.tsx";
import {Settings} from "../components/settings/Settings.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App
    },
    {
        path: "career/:id",
        Component: Career
    },
    {
        path: 'settings',
        Component: Settings
    },
    {
        path: "*",
        Component: NotFound
    }
])