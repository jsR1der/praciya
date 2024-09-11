import {createRoot} from 'react-dom/client'
import './index.scss'
import {Auth0Provider} from "@auth0/auth0-react";
import {RouterProvider} from "react-router-dom";
import {router} from "./services/router.service.ts";

createRoot(document.getElementById('root')!).render(
    <Auth0Provider domain="dev-5wvcwv1dtper1x3a.eu.auth0.com"
                   clientId="PHMpwAoNaLXrU8iQSZTfJZLsdyQtpr8s"
                   cacheLocation="localstorage"
                   authorizationParams={{
                       redirect_uri: window.location.origin
                   }}>
        <RouterProvider router={router}></RouterProvider>
    </Auth0Provider>
)
