import './Upload.scss'
import {useRef, useState} from "react";
import {checkImageResolution, checkSize} from "./upload.service.ts";

function Upload(props: { onChange: (args: any) => any, name: string }) {
    const [image, setImage] = useState<File | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)


    const tryUpload = (event: any): void => {
        event.preventDefault();
        const input: HTMLInputElement | null = inputRef.current;
        if (input) {
            input.onchange = onChange;
            input?.click()
        }
        //     show some kind of popup
    }

    const onChange = () => {
        const input: HTMLInputElement | null = inputRef.current;
        if (input?.files?.length && input.files.length > 0) {
            try {
                // validate file
                const _URL = window.URL || window.webkitURL;
                const file = input.files[0];
                const image = new Image();
                const objectUrl = _URL.createObjectURL(file);
                checkSize(file.size);
                image.onload = () => {
                    checkImageResolution({width: image.width, height: image.height})
                    setImage(file)
                }
                image.src = objectUrl;
            } catch (e) {
                // show snackbar with error
                console.error(e)
            }
        }
        //     show some kind of pop up
    }

    return <div className="input-container">
        <input ref={inputRef} id={props.name} name={props.name} onChange={props.onChange}
               accept={'image/jpg,image/jpeg'} type="file"
               hidden={true}/>
        <button onClick={tryUpload}>Upload</button>
        <div>{image ? image.name : 'Upload your photo'}</div>
    </div>

}

export default Upload;