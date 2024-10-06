import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "../layout/Layout.tsx";
import JobsContainer from "../pages/jobsContainer/JobsContainer.tsx";
import {NotFound} from "../pages/404/NotFound.tsx";
import {DetailsWithErrorBoundary} from "../pages/details/DetailsWithErrorBoundary.tsx";
import {Suspense} from "react";
import {Settings} from "../pages/settings/Settings.tsx";


export const Router = () => {
    return (<BrowserRouter>
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route index Component={JobsContainer}></Route>
                    <Route path="/jobs/:id" Component={DetailsWithErrorBoundary}></Route>
                    <Route path="settings"
                           element={<Suspense fallback={<div>wait...</div>}><Settings></Settings></Suspense>}></Route>
                    <Route path="*" Component={NotFound}></Route>
                </Route>
                <Route path="*" Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>
    )
        ;
};