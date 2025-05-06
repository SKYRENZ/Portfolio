import { Typography } from "@mui/material";

const NameDisplay = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem", lg: "7vw" },
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        textShadow: "0 0 20px #a0f, 0 0 40px #0ff",
        wordBreak: "break-word",
        maxWidth: "100%",
      }}
    >
      Mark Laurenz Listangco
    </Typography>
  );
};

export default NameDisplay;