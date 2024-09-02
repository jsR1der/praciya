import './Upload.scss'
import {ChangeEvent, MouseEventHandler, useRef, useState} from "react";
import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {handleErrorMessage} from "../../utils/forms.ts";

function Upload(props: {
    config: UseFormRegisterReturn,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    error: FieldError | undefined
}) {
    const [image, setImage] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)


    const tryUpload: MouseEventHandler<HTMLButtonElement> = (event: any): void => {
        event.preventDefault();
        const input: HTMLInputElement | null = inputRef.current;
        input?.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement;
            if (target.files?.length) {
                setImage(target.files[0])
            } else {
                throw Error('Fuck you!!!')
            }
        })
        input?.click()


    }

    return <div>
        <div className="input">
            <input {...props.config}
                   onChange={props.onChange}
                   ref={(e) => inputRef.current = e}
                   accept={'image/jpg,image/jpeg'} type="file"
                   hidden={true}/>
            <button onClick={tryUpload}>Upload</button>
            <div className="truncate">{image ? image.name : 'Upload your photo'}</div>
        </div>
        <p className="error-message">{handleErrorMessage(props.error)}</p>
    </div>

}

export default Upload;