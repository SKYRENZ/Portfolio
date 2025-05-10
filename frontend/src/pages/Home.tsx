import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import typography from "../theme/typography";
import NameDisplay from "../components/HeroSection/NameDisplay";
import ScrollHint from "../components/HeroSection/ScrollHint";
import NavBar from "../components/Nav/NavBar";
import SubTitle from "../components/HeroSection/SubTitle";
import { heroSectionStyles, aboutSectionStyles } from "../styles/boxStyles";
import ParticlesBackground from "../components/HeroSection/ParticlesBackground";
import AboutContent from "../components/AboutSection/AboutContent";
import CircularImage from "../components/CircularImage";

const theme = createTheme({ typography });

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section with Galaxy Background */}
      <NavBar />
      <Box id="home" sx={heroSectionStyles}>
        <div className="particles-bg-absolute">
          <ParticlesBackground />
        </div>
        <SubTitle />
        <NameDisplay />
        <Box sx={{ mt: 4 }}>
          <ScrollHint />
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" sx={aboutSectionStyles}>
        <AboutContent />
      </Box>
    </ThemeProvider>
  );
}

export default App;