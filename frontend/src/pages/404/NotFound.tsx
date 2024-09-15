import styles from './NotFound.module.scss'

import {Link} from "react-router-dom";
import Button from "../../components/button/Button.tsx";
import {Color} from "../../utils/types.ts";

export const NotFound = () => {
    return (
        <div className={styles['not-found'] + ' flex flex-col items-center'}>
            Page not found!!!
            <Link to="/">
                <Button colorClass={Color.primary} text="Return"></Button>
            </Link>
        </div>
    );
};