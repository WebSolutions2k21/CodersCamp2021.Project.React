import { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';

import { useStyles } from './InputStyle';

export const InputSelect = ({ label, myNames = [], value, setValue, error = false }) => {
  const classes = useStyles();
  const [params, setParams] = useState([]);

  useEffect(() => {
    setParams(myNames);
  }, [myNames]);

  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return (
    <FormControl variant="standard" className={classes.int} sx={{ width: '250px' }} error={error}>
      <InputLabel sx={{ ml: '17px', mr: '17px' }}>{label}</InputLabel>
      <Select
        disableUnderline
        value={value}
        onChange={handleChange}
        label={label}
        sx={{
          ml: '17px',
          mr: '17px',
          svg: { color: '#16BAC6' },
        }}
      >
        <MenuItem disabled value="">
          <em>{label}</em>
        </MenuItem>

        {params.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
      {error ? <FormHelperText error>Required</FormHelperText> : ''}
    </FormControl>
  );
};

// Use import and <InputSelect label="type" myNames={["dog", "cat"]}/>
