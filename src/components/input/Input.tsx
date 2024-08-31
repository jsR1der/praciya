import './Input.scss';
import {FieldError, UseFormRegisterReturn} from "react-hook-form";

function Input(props: { config: UseFormRegisterReturn, placeholder: string, error: FieldError | undefined }) {
    return <div className={'input-container'}>
        <input
            placeholder={props.placeholder}
            className={'input' + (props.error?.message ? ' error-border' : ' ')}
            {...props.config}
        />
        <p className="error-message">{props.error?.message}</p>
        {/*{!props.config.errorMsg && props.config.hint && <p className="hint">{props.config.hint}</p>}*/}
    </div>
}

export default Input;