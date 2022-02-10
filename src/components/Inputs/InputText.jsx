import TextField from '@mui/material/TextField';

import { useStyles } from './InputStyle';

export const Input = ({ label, type = 'text', value, setValue, fullWidth, helperText, error, required }) => {
  const classes = useStyles();

  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return (
    <TextField
      data-testid="input-1"
      fullWidth
      required={required}
      onChange={handleChange}
      value={value}
      className={classes.int}
      variant="standard"
      InputProps={{
        className: classes.lbl,
        disableUnderline: true,
        'data-testid': 'nameInput',
      }}
      InputLabelProps={{
        className: classes.lbl,
      }}
      label={label}
      error={error}
      helperText={helperText}
      type={type}
      sx={{ width: { xs: '250px', md: `${fullWidth && '100%'}` } }}
    />
  );
};
