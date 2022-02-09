import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DesktopTimePicker } from '@mui/lab/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useStyles } from './InputStyle';

const theme = createTheme({
  palette: {
    primary: {
      main: '#16BAC6',
    },
  },
});

export const InputTime = ({ label, value, setValue }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopTimePicker
          label={<div className={classes.lbl2}>{label}</div>}
          value={value}
          mask="__:__ _M"
          onChange={(value) => setValue && setValue(value)}
          renderInput={(params) => (
            <TextField
              className={classes.int}
              variant="standard"
              {...params}
              sx={{
                width: '250px ',
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
