import { Button } from "@mui/material";

interface NavButtonProps {
  label: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "primary.main",
        borderColor: "primary.main",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
          borderColor: "primary.dark",
        },
        "&:active": {
          backgroundColor: "primary.dark",
          color: "white",
          borderColor: "primary.dark",
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavButton;