// import styles from './Details.module.scss';
import {useParams} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";
// import {useAsyncErrorBoundary} from "../errors/asyncErrorBoundary/UseAsyncErrorBoundary.ts";

export const Details = () => {
    const {isAuthenticated} = useAuth0()
    useEffect(() => {
        console.log(isAuthenticated)
    }, [isAuthenticated]);
    // const catchAsync = useAsyncErrorBoundary();
    const {id} = useParams();
    return <div>{id}</div>
};
