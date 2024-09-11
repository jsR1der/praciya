import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {NotFound} from "../components/404/NotFound.tsx";
import {Settings} from "../components/settings/Settings.tsx";
import {CareerWithErrorBoundary} from "../components/career/CareerWithErrorBoundary.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: "career/:id",
        Component: CareerWithErrorBoundary,
    },
    {
        path: 'settings',
        Component: Settings,
    },
    {
        path: "*",
        Component: NotFound
    }
])