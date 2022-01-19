import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useStyles } from './InputStyle';


interface Props {
    label: string;
    type?: string; 
  }

export const Input = ({label, type='text'}:Props) => {
    const classes = useStyles();
    const [data, setData] = useState('');
    const [dataError, setDataError] = useState(false);

    const handleSubmit = (e:any) => {
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