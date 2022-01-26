import { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

import { useStyles } from './InputStyle';


export const InputSelect = ({ label, myNames=[] }) => {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const [params, setParams] = useState([]);

    useEffect(()=>{
        setParams(myNames);
    }, [myNames]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <FormControl
            variant="standard" 
            className={classes.int}>

            <InputLabel sx={{ml:"17px", mr:"17px"}}>{label}</InputLabel>

            <Select
                disableUnderline
                value={value}
                onChange={handleChange}
                label={label}
                sx={{
                    ml:"17px", 
                    mr:"17px", 
                    svg: {color:"#16BAC6"}}}>
                <MenuItem disabled value="">
                    <em>{label}</em>
                </MenuItem>

                {params.map(name => (
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

// Use import and <InputSelect label="type" myNames={["dog", "cat"]}/>