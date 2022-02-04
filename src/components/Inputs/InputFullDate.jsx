import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab/';
import { TextField } from '@mui/material/';

import { useStyles } from './InputStyle';

export const InputFullDate = ({ label, value, setValue }) => {
  const classes = useStyles();

  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['day', 'month', 'year']}
        inputFormat="d MMMM y"
        label={<div className={classes.lbl2}>{label}</div>}
        minDate={Date.now()}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            className={classes.int}
            variant="standard"
            {...params}
            sx={{
              svg: {
                color: '#16BAC6',
                mb: '7px',
                mr: '3px',
              },
            }}
          />
        )}
        InputProps={{
          className: classes.lbl,
          disableUnderline: true,
        }}
      />
    </LocalizationProvider>
  );
};
