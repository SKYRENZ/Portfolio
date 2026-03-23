import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import theme from "../theme/theme";
import NavBar from "../components/Nav/NavBar";
import { heroSectionStyles, aboutSectionStyles } from "../styles/boxStyles";
import AboutContent from "../components/AboutSection/AboutContent";
import heroPhoto from "../assets/461747627_1181910642913802_398230516336479789_n.jpg";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        sx={{
          scrollBehavior: "smooth",
          scrollPaddingTop: "96px",
          "& > section": {
            scrollSnapAlign: "start",
            scrollSnapStop: "always",
            minHeight: "100vh",
          },
        }}
      >
        <Box
          component="section"
          id="home"
        >
          <Box
            sx={{
              ...heroSectionStyles,
              p: 0,
              bgcolor: "#eadac7",
              color: "text.primary",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  minHeight: { xs: "60vh", md: "100vh" },
                  px: { xs: 3, sm: 6, md: 8 },
                  py: { xs: 8, md: 14 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <Typography sx={{ color: "secondary.main", letterSpacing: 6, fontWeight: 700 }}>
                  HELLO
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "2.4rem", sm: "3rem", md: "4.2rem" },
                    lineHeight: 1.08,
                    fontWeight: 500,
                    maxWidth: 620,
                  }}
                >
                  I&apos;m Mark Laurenz, a frontend developer based in the Philippines.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                  <Button variant="contained" sx={{ bgcolor: "primary.main", px: 4, py: 1.3, borderRadius: 0 }}>
                    More About Me
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: "primary.main", color: "primary.main", px: 4, py: 1.3, borderRadius: 0 }}>
                    Get In Touch
                  </Button>
                </Stack>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "50%" },
                  minHeight: { xs: "40vh", md: "100vh" },
                  backgroundImage:
                    `linear-gradient(rgba(10,10,10,.35), rgba(10,10,10,.35)), url('${heroPhoto}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(122,82,48,0.2), rgba(45,27,18,0.25))",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          component="section"
          id="about"
          sx={{
            ...aboutSectionStyles,
          }}
        >
          <AboutContent />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
