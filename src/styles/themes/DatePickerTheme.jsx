import { createTheme } from '@mui/material/styles';

export const DatePickerTheme = createTheme({
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          fontFamily: '"Ubuntu", sans-serif',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontWeight: '400',
        },
      },
    },
  },
});
