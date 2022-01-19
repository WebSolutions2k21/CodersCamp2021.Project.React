import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'styles/fonts.scss';

interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#16bac6',
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

const Theme = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
