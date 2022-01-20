import { createTheme } from "@mui/material/styles";

export const ButtonTheme = createTheme({
    palette: {
      primary: {
        main: '#fdc161',
        contrastText: '#fff',
      },
      secondary: {
        main: '#eff0f4',
        contrastText: '#000',
      },
    },
});