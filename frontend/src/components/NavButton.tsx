import { Button } from "@mui/material";

interface NavButtonProps {
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label }) => {
  return (
    <Button variant="outlined" sx={{ color: "primary.main", borderColor: "primary.main" }}>
      {label}
    </Button>
  );
};

export default NavButton;