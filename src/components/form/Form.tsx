import './Form.scss';
import Input from "../input/Input.tsx";
import RadioInput from "../radio/radio-input.tsx";
import Upload from "../upload/Upload.tsx";
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";

function Form() {
    return <section className="form-container flex flex-col gap-[10px] items-center">
        <h1>Working with POST request</h1>
        <form className="form grid justify-items-start justify-center grid-cols-1">
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <RadioInput></RadioInput>
            <Upload></Upload>
        </form>
        <Button colorClass={Color.primary} text="Sign Up"></Button>
    </section>
}

export default Form;