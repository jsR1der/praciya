import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import './radio-input.scss';
import {ChangeEvent} from "react";
import {UseFormRegisterReturn} from "react-hook-form";
import {positions} from "../form/form.service.ts";

function RadioInput(props: {
    config: UseFormRegisterReturn,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
},) {


    return <>
        <FormControl>
            <FormLabel id="radio-buttons-group">Select your position</FormLabel>
            <RadioGroup
                onChange={props.onChange}
                name="radio-buttons-group"
                defaultValue="1">
                {positions.map(position => <FormControlLabel
                    key={position.id}
                    classes={{root: 'radio-button'}}
                    value={position.id}
                    control={<Radio/>}
                    label={position.name}/>)}
            </RadioGroup>
        </FormControl>
    </>
}

export default RadioInput;