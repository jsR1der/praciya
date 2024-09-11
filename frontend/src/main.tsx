import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {Auth0Provider} from "@auth0/auth0-react";

createRoot(document.getElementById('root')!).render(
    <Auth0Provider domain="dev-5wvcwv1dtper1x3a.eu.auth0.com"
                   clientId="PHMpwAoNaLXrU8iQSZTfJZLsdyQtpr8s"
                   cacheLocation="localstorage"
                   authorizationParams={{
                       redirect_uri: window.location.origin
                   }}>
        <App/>
    </Auth0Provider>
)
