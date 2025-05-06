import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import typography from "../theme/typography";
import NameDisplay from "../components/NameDisplay";
import ScrollHint from "../components/ScrollHint";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import SubTitle from "../components/SubTitle";

const theme = createTheme({ typography });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <NavBar />
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <SubTitle />
          <NameDisplay />
          <Box sx={{ mt: 4 }}>
            <ScrollHint />
          </Box>
        </Box>
      </Background>
    </ThemeProvider>
  );
}

export default App;