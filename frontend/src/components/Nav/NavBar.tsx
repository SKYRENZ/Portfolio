import { Box } from "@mui/material";
import GooeyNav from "./GooeyNav";

const NavBar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box sx={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
      <GooeyNav items={navItems} />
    </Box>
  );
};

export default NavBar;