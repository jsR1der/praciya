import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import './radio-input.scss';
import {useEffect, useState} from "react";
import {Position} from "../../utils/types.ts";
import {getPositions} from "../../apiService.ts";
import {RadioInputConfig} from "./radio-input.config.ts";

function RadioInput(config: RadioInputConfig) {
    const [positions, setPositions] = useState<Position[]>([])
    useEffect(() => {
        getPositions().then(response => setPositions(response.positions))
    }, [])
    return <>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
            <RadioGroup
                defaultValue={1}
                onChange={config.onChange}
                aria-labelledby="demo-radio-buttons-group-label"
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