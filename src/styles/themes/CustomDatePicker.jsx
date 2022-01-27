import { createTheme } from '@mui/material/styles';

export const DatePickerTheme = createTheme({
  components: {
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});
