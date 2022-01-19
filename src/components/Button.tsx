import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fdc161',
      darker: '#fdc161',
      contrastText: '#fff',
    },
    secondary: {
      main: '#eff0f4',
      darker: '#eff0f4',
      contrastText: '#112025',
    },
  },
});

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const BasicButtons = ({text}:any) => {
  return (
    <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          {text}
        </Button>
    </ThemeProvider>
  );
}

export default BasicButtons;