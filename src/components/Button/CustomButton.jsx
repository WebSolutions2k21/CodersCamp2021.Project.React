import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { ButtonTheme } from '../../styles/themes/CustomButtonTheme';

export const CustomButton = ({ text = 'ADD PET', color, size, clickAction }) => {
  let handleClick = () => {
    clickAction();
  };

  return (
    <ThemeProvider theme={ButtonTheme}>
      <Button variant="contained" color={color} size={size} onClick={handleClick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};

// HOW TO USE THIS BUTTON:
//
// import {CustomButton} from 'enter correct path'

// <CustomButton
//        color="primary/secondary" - pick one of the themes
//        size="small/medium/large" - pick one of the sizes
//        clickAction={() => {
//          insert your function eg. alert('Klikam się!');
//        }}
// />
