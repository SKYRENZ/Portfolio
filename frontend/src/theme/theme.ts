import { createTheme } from "@mui/material/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: { main: "#7a5230" },
    secondary: { main: "#b98a5c" },
    background: {
      default: "#efe2d3",
      paper: "#f8efe4",
    },
    text: {
      primary: "#2d1b12",
      secondary: "#6b4a33",
    },
  },
  typography,
});

export default theme;
