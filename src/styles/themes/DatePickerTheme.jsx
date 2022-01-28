import { createTheme } from '@mui/material/styles';

export const DatePickerTheme = createTheme({
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          fontFamily: '"Ubuntu", sans-serif',
          boxShadow: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#16bac6',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        today: {
          color: '#fdc161',
          fontWeight: '800',
        },
        root: {
          Mui: {
            selected: {
              backgroundColor: '#16bac6',
            },
          },
          '&:not(.Mui-selected)': {
            border: 'none',
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
});
