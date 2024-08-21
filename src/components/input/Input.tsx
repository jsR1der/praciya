import './Input.scss';
import {InputConfig} from "./input.config.ts";

function Input(config: InputConfig) {
    return <div className='input-outer-container'>
        <div className={'input-container ' + (config.error ? 'error' : '')}>
            <input name={config.name}
                   value={config.value}
                   type={config.type ? config.type : 'text'}
                   placeholder={config.placeholder}
                   onChange={config.onChange}
                   className="input"/>
        </div>
        {config.error && <p className="error">{config.error}</p>}
        {!config.error && config.hint && <p className="hint">{config.hint}</p>}
    </div>
}

export default Input;