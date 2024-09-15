// import styles from './Layout.module.scss';

import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import {EffectCallback, useCallback, useContext, useEffect, useState} from "react";
import {Context, ContextActionType, ContextValueType, defaultContextValue} from "../services/context.service.ts";
import {useAuth0} from "@auth0/auth0-react";
import {isUserExist, parseUser} from "../utils/auth.ts";

export const Layout = () => {
    const [context, setContext] = useState<ContextValueType>(null)
    const contextValue = useContext(Context);
    const {getAccessTokenSilently, isAuthenticated, isLoading} = useAuth0();
    const saveUser = (user: any) => {
        if (contextValue.setContext) {
            contextValue.setContext(isUserExist(user) ? user : null);
        } else {
            throw Error('Something fucked up...')
        }
    }
    const memoizedSetupContext = useCallback((setContextCallback: ContextActionType) => contextValue.setContext = setContextCallback, [])
    const memoizedSaveUser = useCallback((user: any) => saveUser(user), [])
    const effect: EffectCallback = () => {
        const checkAuthSession = async () => {
            memoizedSetupContext(setContext);
            try {
                const {id_token} = await getAccessTokenSilently({detailedResponse: true});
                const user = parseUser(id_token)
                memoizedSaveUser(user);
            } catch (e: any) {
                // !todo thing about error handling and consequences
                console.error("Error during initialization")

            }
        }
        if (!isAuthenticated) {
            checkAuthSession().then()
        }
    }
    useEffect(effect, [isAuthenticated, memoizedSaveUser, isLoading, getAccessTokenSilently])
    return (
        <>
            <Context.Provider value={defaultContextValue()}>
                <Header></Header>
                <Outlet></Outlet>
            </Context.Provider>
        </>
    );
};