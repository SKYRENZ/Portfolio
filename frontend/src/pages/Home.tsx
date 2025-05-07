import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import typography from "../theme/typography";
import NameDisplay from "../components/HeroSection/NameDisplay";
import ScrollHint from "../components/HeroSection/ScrollHint";
import NavBar from "../components/Nav/NavBar";
import SubTitle from "../components/HeroSection/SubTitle";
import { heroSectionStyles, aboutSectionStyles } from "../styles/boxStyles";
import CircularImage from "../components/AboutSection/CircularImage";
import ParticlesBackground from "../components/HeroSection/ParticlesBackground";

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
        <CircularImage alt="Your Name" size={200} />
        <Typography variant="h2" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography sx={{ maxWidth: 600, textAlign: "center" }}>
          I am a passionate developer...
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;