import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { useStyles } from './InputStyle';


export const Input = ({label, type='text'}) => {
    const classes = useStyles();
    const [data, setData] = useState('');
    const [dataError, setDataError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDataError(false);

        if (data === '') {
            setDataError(true);
        }
    }

    return(
            <TextField 
                onSubmit={handleSubmit}
                onChange={(e) => setData(e.target.value)}
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