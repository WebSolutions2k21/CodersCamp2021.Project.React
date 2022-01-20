import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { ButtonTheme } from 'styles/themes/CustomButtonTheme'

export const BasicButtons = ({text, color}: any) => {
  return (
    <ThemeProvider theme={ ButtonTheme }>
        <Button variant="contained" color={color}>
          {text}
        </Button>
    </ThemeProvider>
  );
}