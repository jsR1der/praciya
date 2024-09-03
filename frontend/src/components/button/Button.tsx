import './Button.scss';
import {ButtonConfig} from "../../models/button.config.ts";

function Button(config: ButtonConfig) {
    const buttonStyles = config.disabled ? 'button--disabled' : `button--hover ${config.colorClass}`

    return <button
        className={'button ' + buttonStyles}
        type={config.type ? config.type : 'button'}
        onClick={config.action}>
        {config.text}
    </button>
}

export default Button;