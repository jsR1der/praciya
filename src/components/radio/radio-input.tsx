import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import './radio-input.scss';
import {ChangeEvent, useEffect, useState} from "react";
import {Position} from "../../utils/types.ts";
import {getPositions} from "../../apiService.ts";
import {UseFormRegisterReturn} from "react-hook-form";

function RadioInput(props: { config: UseFormRegisterReturn, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
    const [positions, setPositions] = useState<Position[]>([])
    useEffect(() => {
        getPositions().then(response => setPositions(response.positions));
    }, [])

    return <>
        <FormControl>
            <FormLabel id="radio-buttons-group">Select your position</FormLabel>
            <RadioGroup
                onChange={props.onChange}
                name="radio-buttons-group">
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