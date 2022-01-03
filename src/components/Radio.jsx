import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";

const Radio = ({radios, radioChangeHandler}) => {
    const [radioValue, setRadioValue] = useState('1');
    return (
        <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {setRadioValue(e.currentTarget.value); radioChangeHandler(e.currentTarget.value)}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    )
}

export default Radio;