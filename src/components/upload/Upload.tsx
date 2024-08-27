import './Upload.scss'
import {ChangeEvent, MouseEventHandler, useRef, useState} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

function Upload(props: { config: UseFormRegisterReturn, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
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

    return <div className="input">
        <input {...props.config}
               onChange={props.onChange}
               ref={(e) => inputRef.current = e}
               accept={'image/jpg,image/jpeg'} type="file"
               hidden={true}/>
        <button onClick={tryUpload}>Upload</button>
        <div>{image ? image.name : 'Upload your photo'}</div>
    </div>

}

export default Upload;