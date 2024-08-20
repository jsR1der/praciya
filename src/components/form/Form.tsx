import './Form.scss';
import Input from "../input/Input.tsx";
import RadioInput from "../radio/radio-input.tsx";
import Upload from "../upload/Upload.tsx";
import Button from "../button/Button.tsx";
import {Color} from "../../utils/types.ts";

function Form() {
    return <section className="flex flex-col items-center">
        <form className="form-container grid justify-items-start grid-cols-1">
            <h1>Working with POST request</h1>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <RadioInput></RadioInput>
            <Upload></Upload>
            <Button colorClass={Color.primary} text="Sign Up"></Button>
        </form>
    </section>
}

export default Form;