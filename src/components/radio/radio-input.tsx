import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import './radio-input.scss';

function RadioInput() {
    return <>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel classes={{root: 'radio-button'}} value="frontend"
                                  control={<Radio/>} label="FrontEnd"/>
                <FormControlLabel classes={{root: 'radio-button'}}  value="backend" control={<Radio/>} label="Backend"/>
                <FormControlLabel classes={{root: 'radio-button'}} value="designer" control={<Radio/>}
                                  label="Designer"/>
                <FormControlLabel classes={{root: 'radio-button'}} value="qa" control={<Radio/>} label="QA"/>
            </RadioGroup>
        </FormControl>
    </>
}

export default RadioInput;