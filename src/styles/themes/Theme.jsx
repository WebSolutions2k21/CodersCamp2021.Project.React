import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../fonts.scss';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#eff0f4',
      dark: '#112025',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff;',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Ubuntu", sans-serif',
          textTransform: 'capitalize',
          color: '#112025',
          fontSize: '1rem',
        },
      },
    },
  },
});

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
