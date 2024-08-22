import './Form.scss';
import Input from "../input/Input.tsx";
import RadioInput from "../radio/radio-input.tsx";
import Upload from "../upload/Upload.tsx";
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";
import {useState} from "react";
import {FormModel} from "./form.model.ts";
import {getFileAsBinaryString} from "../upload/upload.service.ts";

function Form() {
    const [form, setForm] = useState<FormModel>({name: '', email: '', phone: '', position_id: 0, photo: ''});

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target) {
            try {
                if (target.type === 'file') {
                    getFileAsBinaryString(target.files).then(blob => {
                        setForm({...form, [target.name]: blob})
                    })
                } else {
                    setForm({...form, [target.name]: target.value})
                }
            } catch (e) {
                console.error(e)
            }
        }
    }


    // const submit = () => {
    //
    // }

    return <section className="form-container flex flex-col gap-[20px] items-center">
        <h1>Working with POST request</h1>
        <form className="form grid justify-items-start justify-center grid-cols-1">
            <Input value={form.name}
                   name="name"
                   onChange={handleChange}
                   placeholder="Your name"></Input>
            <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Email"></Input>
            <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                hint="+38 (XXX) XXX - XX - XX"></Input>
            <RadioInput onChange={handleChange}></RadioInput>
            <Upload name="photo" onChange={handleChange}></Upload>
        </form>
        <Button colorClass={Color.primary} text="Sign Up"></Button>
    </section>
}

export default Form;