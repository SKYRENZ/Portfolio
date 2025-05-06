import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import typography from "../theme/typography";
import NameDisplay from "../components/NameDisplay";
import ScrollHint from "../components/ScrollHint";
import NavBar from "../components/NavBar";
import Background from "../components/1stBackground";
import SubTitle from "../components/SubTitle";
import { heroSectionStyles, aboutSectionStyles } from "../styles/boxStyles";

const theme = createTheme({ typography });

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section with Galaxy Background */}
      <Background>
        <NavBar />
        <Box id ="home"sx={heroSectionStyles}>
          <SubTitle />
          <NameDisplay />
          <Box sx={{ mt: 4 }}>
            <ScrollHint />
          </Box>
        </Box>
      </Background>
      {/* Other Sections with different background */}
      <Box id="about" sx={aboutSectionStyles}>
        <Typography variant="h2" sx={{ mb: 2 }}>About Me</Typography>
        <Typography sx={{ maxWidth: 600, textAlign: "center" }}>
          {/* Your about content here */}
          I am a passionate developer...
        </Typography>
      </Box>
      {/* Add more sections as needed */}
    </ThemeProvider>
  );
}

export default App;