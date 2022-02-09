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
      dark: '#fff',
      contrastText: '#000',
    },
    textInfo: {
      main: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Ubuntu", sans-serif',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          fontWeight: '400',
        },
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: '16px',
            minWidth: '120px',
            paddingRight: '25px',
            paddingLeft: '25px',
          },
        },
        {
          props: { size: 'medium' },
          style: {
            fontSize: '20px',
            minWidth: '150px',
            paddingRight: '25px',
            paddingLeft: '25px',
          },
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: '24px',
            paddingRight: '25px',
            paddingLeft: '25px',
            minWidth: '180px',
          },
        },
      ],
    },
  },
});
