import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { useStyles } from './InputStyle';


export const Input = ({ label, type='text', value, setValue }) => {
    const classes = useStyles();
    const [dataError, setDataError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataError(false);

        if (value === '') {
            setDataError(true);
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return(
            <TextField 
                onSubmit={handleSubmit}
                onChange={handleChange}
                value={value}
                className={classes.int}
                variant="standard"
                InputProps={{
                    className: classes.lbl,
                    disableUnderline: true
                  }}
                InputLabelProps={{
                    className: classes.lbl
                }}
                label={label}
                error={dataError}
                type={type}
            />  
    )
}