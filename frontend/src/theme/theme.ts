import { createTheme } from "@mui/material/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
  },
  typography,
});

export default theme;