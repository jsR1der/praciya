import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "../layout/Layout.tsx";
import Jobs from "../pages/jobs/Jobs.tsx";
import {NotFound} from "../pages/404/NotFound.tsx";
import {DetailsWithErrorBoundary} from "../pages/details/DetailsWithErrorBoundary.tsx";
import {CompanySettings} from "../pages/company-settings/CompanySettings.tsx";

export const Router = () => {
    return (<BrowserRouter>
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route index Component={Jobs}></Route>
                    <Route path=":id" Component={DetailsWithErrorBoundary}></Route>
                    <Route path="settings" Component={CompanySettings}></Route>
                    <Route path="*" Component={NotFound}></Route>
                </Route>
                <Route path="*" Component={NotFound}></Route>
            </Routes>
        </BrowserRouter>
    )
        ;
};