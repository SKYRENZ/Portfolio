import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

const ScrollHint = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        Scroll Down
      </Typography>
      <ExpandMoreIcon sx={{ fontSize: 40, animation: `${bounce} 1.5s infinite` }} />
    </Box>
  );
};

export default ScrollHint;