import { ThemeProvider } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import theme from "../theme/theme";
import NavBar from "../components/Nav/NavBar";
import { heroSectionStyles, aboutSectionStyles } from "../styles/boxStyles";
import AboutContent from "../components/AboutSection/AboutContent";
import WorksShowcase from "../components/WorkSection/WorksShowcase";
import heroPhoto from "../assets/461747627_1181910642913802_398230516336479789_n.jpg";


function App() {
  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (!target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navOffset = 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        sx={{
          scrollBehavior: "smooth",
          scrollPaddingTop: { xs: "88px", md: "96px" },
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
                  minHeight: { xs: "58vh", md: "100vh" },
                  px: { xs: 3, sm: 6, md: 8 },
                  py: { xs: 8, sm: 7, md: 10 },
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
                    fontSize: { xs: "2.05rem", sm: "2.5rem", md: "4.2rem" },
                    lineHeight: 1.08,
                    fontWeight: 500,
                    maxWidth: 620,
                  }}
                >
                  I&apos;m Mark Laurenz, a frontend developer based in the Philippines.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "primary.main", px: 4, py: 1.3, borderRadius: 0 }}
                    onClick={() => scrollToSection("#about")}
                  >
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

        <Box
          component="section"
          id="projects"
          sx={{
            minHeight: "100vh",
            background: "radial-gradient(circle at 18% 20%, #2e1d12 0%, #130b07 52%, #090504 100%)",
            color: "#f8efe4",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: "auto auto -18% -12%",
              width: "40vw",
              height: "40vw",
              maxWidth: 440,
              maxHeight: 440,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(180,126,78,0.36) 0%, rgba(180,126,78,0) 74%)",
              filter: "blur(15px)",
              pointerEvents: "none",
            },
          }}
        >
          <WorksShowcase />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
