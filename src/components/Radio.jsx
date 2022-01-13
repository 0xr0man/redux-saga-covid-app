import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";

const RadioComponent = ({radios, radioChangeHandler}) => {
    const [radioValue, setRadioValue] = useState('1');
    return (
        <div className={"continent-radios-container"}>
            <FormControl component="fieldset">
              <FormLabel className={"continent-radios-legend"} component="legend">Continent</FormLabel>
              <RadioGroup
                aria-label="continent"
                className={"continent-radios-group"}
                name="controlled-radio-buttons-group"
                value={radioValue}
                onChange={(e) => {setRadioValue(e.target.value); radioChangeHandler(e.target.value)}}
              >
                {radios.map((radio, idx) => (
                  <FormControlLabel
                      value={radio.value}
                      className={"continentRadioLabel"+radio.name}
                      control={<Radio className={"continentRadio"+radio.name} />}
                      label={radio.name} />
                ))}
                </RadioGroup>
           </FormControl>
        </div>
    )
}

export default RadioComponent;