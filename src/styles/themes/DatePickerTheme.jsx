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
          '&.Mui-selected': {
            '&.Mui-selected': {
              background: '#16bac6',
              fontWeight: '800',
            },
          },
          '&:not(.Mui-selected)': {
            border: 'none',
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#eff0f4',
              fontWeight: '800',
            },
          },
        },
      },
    },
  },
});
