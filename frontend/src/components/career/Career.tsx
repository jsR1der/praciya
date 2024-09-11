// import styles from './Career.module.scss';
import {useParams} from 'react-router-dom';

export const Career = () => {
    const {id} = useParams();
    return <div>{id}</div>;
};
