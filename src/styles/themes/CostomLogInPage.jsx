import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../fonts.scss';

export const LoginPageTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Ubuntu", sans-serif',
          fontWeight: 400,
        },
      },
    },
  },
});
