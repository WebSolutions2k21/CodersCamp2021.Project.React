import { createTheme, ThemeProvider } from '@mui/material/styles';
import { flexbox } from '@mui/system';
import '../fonts.scss';

const theme = createTheme({
  typography: {
    fontFamily: '"Ubuntu", sans-serif',
  },
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
          textTransform: 'capitalize',
          color: '#112025',
          fontSize: '1rem',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#16bac6',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
  },
});

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
