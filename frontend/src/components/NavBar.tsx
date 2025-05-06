import { Box } from "@mui/material";
import NavButton from "./NavButton";

const NavBar = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <Box sx={{ display: "flex", gap: 2, position: "absolute", top: 20, right: 20 }}>
      {navItems.map((item) => (
        <NavButton key={item} label={item} />
      ))}
    </Box>
  );
};

export default NavBar;