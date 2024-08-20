import './Button.scss';
import {ButtonConfig} from "./button.config.ts";

function Button(config: ButtonConfig) {
    const buttonStyles = config.disabled ? 'button--disabled' : `button--hover ${config.colorClass}`

    return <button className={'button ' + buttonStyles} onClick={() => console.log('clicked!')}>
        {config.text}
    </button>
}

export default Button;