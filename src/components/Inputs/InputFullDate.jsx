import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab/';
import { TextField } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';

import { DatePickerTheme } from '../../styles/themes/DatePickerTheme';
import { useStyles } from './InputStyle';

export const InputFullDate = ({ label, value, setValue }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={DatePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['day', 'month']}
          mask="__/__/____"
          label={<div className={classes.lbl2}>{label}</div>}
          minDate={Date.now()}
          value={value}
          onChange={(value) => setValue && setValue(value)}
          renderInput={(params) => (
            <TextField
              className={classes.int}
              variant="standard"
              {...params}
              sx={{
                width: '250px',
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
    </ThemeProvider>
  );
};
