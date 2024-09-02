import styles from './input.module.scss';
import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {handleErrorMessage} from "../../utils/forms.ts";

export function Input(props: { config: UseFormRegisterReturn, placeholder: string, error: FieldError | undefined }) {
    return <div className={styles['input-container']}>
        <input
            placeholder={props.placeholder}
            className={styles.input + (props.error?.message || props.error?.type === 'required' ? ` ${styles.errorBorder}` : ' ')}
            {...props.config}
        />
        <p className={styles.errorMessage}>{handleErrorMessage(props.error)}</p>
    </div>
}