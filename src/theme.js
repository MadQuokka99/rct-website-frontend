import { createTheme } from "@mui/material/styles";

export const mainColor = '#182C2C';
export const mainColorLight = '#304b4b';
export const secondaryColor = '#CA6C68';
export const secondaryColorLight = '#F0C2BD';
export const secondaryColorDark = '#B54440';


export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: mainColor,
      light: mainColorLight,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColorLight,
      dark: secondaryColorDark,
    },
  },
});