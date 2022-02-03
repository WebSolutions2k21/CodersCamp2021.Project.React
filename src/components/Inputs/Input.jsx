import { useState } from 'react';
import TextField from '@mui/material/TextField';

import { useStyles } from './InputStyle';

export const Input = ({ label, type = 'text', value, setValue, fullWidth, helperText, error, required}) => {
  const classes = useStyles();
  const [dataError, setDataError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataError(!value);
  };

  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return (
    <TextField
      fullWidth
      required= {required}
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={value}
      className={classes.int}
      variant="standard"
      InputProps={{
        className: classes.lbl,
        disableUnderline: true,
      }}
      InputLabelProps={{
        className: classes.lbl,
      }}
      label={label}
      error={error}
      helperText={helperText}
      // error={dataError}

      type={type}
      sx={{ width: { xs: '250px', md: `${fullWidth && '100%'}` } }}
    />
  );
};
