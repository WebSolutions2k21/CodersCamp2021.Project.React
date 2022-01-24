import { createTheme } from '@mui/material/styles';

export const ButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#fdc161',
      dark: '#ff9c00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#eff0f4',
      contrastText: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontWeight: '400',
        },
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: '16px',
          },
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: '24px',
          },
        },
      ],
    },
  },
});
