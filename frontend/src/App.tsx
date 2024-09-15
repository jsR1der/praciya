import {Auth0Provider} from "@auth0/auth0-react";
import {Router} from "./router/Router.tsx";

export const App = () => {

    return (
        <>
            <Auth0Provider domain="dev-5wvcwv1dtper1x3a.eu.auth0.com"
                           clientId="PHMpwAoNaLXrU8iQSZTfJZLsdyQtpr8s"
                           cacheLocation="localstorage"
                           authorizationParams={{
                               redirect_uri: window.location.origin
                           }}>
                <Router></Router>
            </Auth0Provider>
        </>
    );
};