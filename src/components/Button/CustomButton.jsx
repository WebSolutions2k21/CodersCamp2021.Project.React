import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { ButtonTheme } from '../../styles/themes/CustomButtonTheme';

export const CustomButton = ({ text, color, size, clickAction, disabled }) => {
  let handleClick = () => {
    clickAction();
  };

  return (
    <ThemeProvider theme={ButtonTheme}>

      {clickAction ? (
        <Button variant="contained" color={color} size={size} onClick={handleClick} disabled={disabled}>
          {text}
        </Button>
      ) : (
        <Button type="submit" variant="contained" color={color} size={size} disabled={disabled}>
          {text}
        </Button>
      )}
      
    </ThemeProvider>
  );
};
