// import styles from './Layout.module.scss';

import Header from "../components/header/Header.tsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {EffectCallback, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {UserModel} from "../models/user.model.ts";
import {privateRoutes} from "../router/privateRoutes.ts";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {persister, queryClient} from "../services/query-base.service.ts";

export const Layout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user, getAccessTokenSilently} = useAuth0();

    const effect: EffectCallback = () => {
        const checkAuthSession = async () => {
            try {
                await getAccessTokenSilently();
            } catch (e: any) {
                navigate('/');
                // !todo thing about error handling and consequences
                console.error("Error during initialization")
            }
        }
        if (privateRoutes.includes(location.pathname)) {
            checkAuthSession().then()
        }
    }
    useEffect(effect, [location])
    return (
        <>
            <Header user={user as UserModel}></Header>
            <PersistQueryClientProvider
                persistOptions={{persister}}
                client={queryClient}>
                <Outlet></Outlet>
            </PersistQueryClientProvider>
        </>
    );
};