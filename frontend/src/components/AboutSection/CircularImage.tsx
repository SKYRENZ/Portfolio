import { Box } from "@mui/material";

interface CircularImageProps {
  alt: string;
  size?: number; // Optional size prop for the image
}

const CircularImage: React.FC<CircularImageProps> = ({ alt, size = 200 }) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid white", // Optional border
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Optional shadow
      }}
    >
      <img
        src="/profile.jpg" // Hardcoded image path
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default CircularImage;