import './Button.scss';
import {ReactElement} from "react";
import {ButtonComponent} from "./buttonConfig.ts";

const Button: ButtonComponent = (config): ReactElement => {
    const buttonStyles = config?.disabled ? 'button--disabled' : `button--hover ${config.classes.color}`

    return <button
        className={'button ' + buttonStyles}
        type={config.type ? config.type : 'button'}
        onClick={config.action}>
        {config.text}
    </button>
}

export default Button;