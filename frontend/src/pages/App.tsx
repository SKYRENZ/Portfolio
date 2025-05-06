import { ThemeProvider } from "@mui/material/styles";
import mytheme from "../theme/theme"; // Your predefined theme
import Home from "../pages/Home";

function App() {
  return (
    <ThemeProvider theme={mytheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;