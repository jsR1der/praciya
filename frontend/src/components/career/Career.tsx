// import styles from './Career.module.scss';
import {useParams} from 'react-router-dom';
// import {useAsyncErrorBoundary} from "../errors/asyncErrorBoundary/UseAsyncErrorBoundary.ts";

export const Career = () => {
    // const catchAsync = useAsyncErrorBoundary();
    const {id} = useParams();
    return <div>{id}</div>
};
