import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DesktopTimePicker } from '@mui/lab/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useStyles } from './InputStyle';

const theme = createTheme({
  palette: {
    primary: {
      main: 'red',
    },
  },
});

export const InputTime = ({ label, value, setValue }) => {
  const classes = useStyles();

  const handleChange = ({ target: { value } }) => setValue && setValue(value);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopTimePicker
          label={<div className={classes.lbl2}>{label}</div>}
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
                  mb: '9px',
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
