// All comments are for testing what this input looks like

// import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DesktopTimePicker } from '@mui/lab/';

import { useStyles } from './InputStyle';


export const InputTime = ({ label, value, setValue }) => {
    const classes = useStyles();
    //const [value, setValue] = useState(new Date('2018-01-01T00:00:00.000Z'));

    const handleChange = ({target: {value}}) => setValue && setValue(value);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopTimePicker
            label={<div className={classes.lbl2}>{label}</div>}
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField 
                className={classes.int} 
                variant="standard" 
                {...params} 
                sx={{
                    svg: {
                        color:"#16BAC6", 
                        mb:"9px", 
                        mr:"3px"}
                  }}/>}
            InputProps={{
                className: classes.lbl,
                disableUnderline: true,
                }}
            />
        </LocalizationProvider>
    );
}