import { Typography } from "@mui/material";

const SubTitle = () => (
  <Typography
    variant="subtitle1"
    sx={{
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
      color: "white",
      textAlign: "center",
      letterSpacing: 2,
      mb: 2,
      textShadow: "0 0 10px #a0f, 0 0 20px #0ff",
    }}
  >
    HI, I am
  </Typography>
);

export default SubTitle;
