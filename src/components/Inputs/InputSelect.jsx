import { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import { useStyles } from './InputStyle';

const names = [
    'Dog',
    'Cat',
    'Rabbit',
    'Bird',
    'Hamster',
    'Rat',
    'Chinchilla',
  ];

export const InputSelect = ({ label }) => {
    const classes = useStyles();
    const [data, setData] = useState('');
  
    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <FormControl
            variant="standard" 
            className={classes.int}>

            <InputLabel sx={{ml:"17px", mr:"17px"}}>{label}</InputLabel>

            <Select
                disableUnderline
                value={data}
                onChange={handleChange}
                label={label}
                sx={{ml:"17px", mr:"17px"}}>
                
                <MenuItem disabled value="">
                    <em>{label}</em>
                </MenuItem>

                {names.map((name) => (
                <MenuItem
                key={name}
                value={name}>
                {name}
                </MenuItem>
                ))}

            </Select>
        </FormControl>
    )
}