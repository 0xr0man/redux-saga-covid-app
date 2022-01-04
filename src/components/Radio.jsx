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
      <FormControl component="fieldset">
      <FormLabel component="legend">Continent</FormLabel>
      <RadioGroup
        aria-label="continent"
        name="controlled-radio-buttons-group"
        value={radioValue}
        onChange={(e) => {setRadioValue(e.target.value); radioChangeHandler(e.target.value)}}
      >
        {radios.map((radio, idx) => (
          <FormControlLabel value={radio.value} control={<Radio />} label={radio.name} />
        ))}
        </RadioGroup>
       </FormControl>
    )
}

export default RadioComponent;