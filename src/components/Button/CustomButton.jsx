import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { ButtonTheme } from '../../styles/themes/CustomButtonTheme';

export const CustomButton = ({ text, color, size, clickAction }) => {
  let handleClick = () => {
    clickAction && clickAction();
  };

  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button variant="contained" color={color} size={size} onClick={handleClick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};
