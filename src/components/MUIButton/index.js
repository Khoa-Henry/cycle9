import React from 'react';
import Button from '@mui/material/Button';

const MUIButton = (props) => {
    return(
        <Button onClick={props.onClick} variant={`${props.style}`} disabled={props.turnoff}>{props.buttonName}</Button>
    )
}
export default MUIButton;