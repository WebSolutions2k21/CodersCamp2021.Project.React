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
          '&:not(.Mui-selected)': {
            border: 'none',
          },
        },
        root: {
          '&.Mui-selected': {
            '&.Mui-selected': {
              border: '1px solid #16bac6',
              background: '#16bac6',
              fontWeight: '800',
            },
          },
          '&:not(.Mui-selected)': {
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#eff0f4',
              fontWeight: '800',
            },
          },
        },
      },
    },
    MuiYearPicker: {
      styleOverrides: {
        root: {
          '.PrivatePickersYear-root': {
            '.PrivatePickersYear-yearButton': {
              '&.Mui-selected': {
                background: '#16bac6',
                fontWeight: '800',
              },
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#16bac6 !important',
            fontWeight: '800',
          },
        },
      },
    },
  },
});
