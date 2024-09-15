// import styles from './Layout.module.scss';

import Header from "../components/header/Header.tsx";
import {Outlet, useLocation} from "react-router-dom";
import {EffectCallback, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {DefaultUserModel} from "../models/defaultUser.model.ts";

export const Layout = () => {
    const location = useLocation();
    const {user, getAccessTokenSilently} = useAuth0();

    const effect: EffectCallback = () => {
        console.log(location.pathname)
        const checkAuthSession = async () => {
            try {
                await getAccessTokenSilently();
            } catch (e: any) {
                // !todo thing about error handling and consequences
                console.error("Error during initialization")
            }
        }
        checkAuthSession().then()
    }
    useEffect(effect, [location])
    return (
        <>
            <Header user={user as DefaultUserModel}></Header>
            <Outlet></Outlet>
        </>
    );
};