import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

export default responsiveFontSizes(theme);
