import './Form.scss';
import Input from "../input/Input.tsx";
import RadioInput from "../radio/radio-input.tsx";
import Upload from "../upload/Upload.tsx";
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";
import {CreateUserForm} from "./form.model.ts";
import {regExps} from "./form.service.ts";
import {SubmitHandler, useForm, UseFormRegisterReturn} from "react-hook-form";
import {ChangeEvent} from "react";
import {checkImageResolution, checkSize} from "../upload/upload.service.ts";
import {createUser} from "../../apiService.ts";

function Form() {
    const {register, handleSubmit, setValue, formState: {errors, isValid}} = useForm<CreateUserForm>()

    const submit: SubmitHandler<CreateUserForm> = (data: CreateUserForm) => {
        if (isValid) {
            data.photo.text().then(photoToSend => {
                createUser({...data, photo: photoToSend, phone: `+38${data.phone}`}).then(console.log)
            })

        }
        console.log(data)
        // send post request
    }
    const radioChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setValue('position_id', +target.value, {shouldDirty: true, shouldTouch: true})
    }
    const fileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const file = target.files ? target.files[0] : null;
        if (file) {
            try {
                const _URL = window.URL || window.webkitURL;
                const image = new Image();
                const objectUrl = _URL.createObjectURL(file);
                checkSize(file.size);
                image.onload = () => {
                    checkImageResolution({width: image.width, height: image.height})
                    setValue('photo', file, {shouldDirty: true, shouldTouch: true})
                }
                image.src = objectUrl;
            } catch (e) {
                // show snackbar with error
                console.error(e)
            }
        } else {
            console.log('no file')
        }
    }


    const inputConfigs: Record<string,
        UseFormRegisterReturn> = {
        name: {

            ...register('name', {
                pattern: {
                    value: regExps.name,
                    message: "Name should be from 2 to 60 characters length"
                },
                value: 'LeonidKuchma',
                required: true
            })
            ,
        },
        email: {
            ...register('email', {
                pattern: {value: regExps.email, message: "Invalid email"},
                value: 'leonidBig@ukr.net'
            })
        },
        phone: {
            ...register('phone', {
                pattern: {
                    value: regExps.phone,
                    message: "Phone should be 10 characters length and start with 0"
                },
                value: '0998877667'
            })
        },
        position_id: {
            ...register('position_id', {value: 1}),
        },
        photo: {
            ...register('photo'),
        }
    }


    return <section className="form-container flex flex-col gap-[20px] items-center">
        <h1>Become client</h1>
        <form onSubmit={handleSubmit(submit)}
              className="form grid justify-items-start justify-center grid-cols-1">
            <Input config={inputConfigs.name} placeholder="Your name" error={errors.name}></Input>
            <Input config={inputConfigs.email} placeholder="Email" error={errors.email}></Input>
            <Input config={inputConfigs.phone} placeholder="Phone" error={errors.phone}></Input>
            <RadioInput config={inputConfigs.position_id} onChange={radioChange}></RadioInput>
            <Upload config={inputConfigs.photo} onChange={fileChange}></Upload>
            <Button colorClass={Color.primary} type="submit" text="Sign Up"></Button>
        </form>
    </section>
}

export default Form;