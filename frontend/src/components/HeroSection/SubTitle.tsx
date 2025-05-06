import { Typography } from "@mui/material";

const SubTitle = () => (
  <Typography
    variant="subtitle1"
    sx={{
      fontSize: { xs: "2rem", sm: "1.25rem", md: "3rem" },
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
