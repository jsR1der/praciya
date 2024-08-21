import './Upload.scss'
import {useRef, useState} from "react";

function Upload() {
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)


    const tryUpload = (): void => {
        const input: HTMLInputElement | null = inputRef.current;
        if (input) {
            input.onchange = onChange;
            input?.click()
        }
        //     show some kind of popup
    }

    const onChange = () => {
        const input: HTMLInputElement | null = inputRef.current;
        if (input?.files?.length) {
            setImageUrl(input.files[0].name)
        }
        //     show some kind of pop up
    }

    return <div className="input-container">
        <input ref={inputRef} id="fileUpload" accept={'image/jpg,image/jpeg'} type="file" hidden={true}/>
        <button onClick={tryUpload} onChange={onChange}>Upload</button>
        <div>{imageUrl ? imageUrl : 'Upload your photo'}</div>
    </div>

}

export default Upload;