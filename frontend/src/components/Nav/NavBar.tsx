import { Box } from "@mui/material";
import NavButton from "./NavButton";

const NavBar = () => {
  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
      {navItems.map((item) => (
        <NavButton
          key={item.label}
          label={item.label}
          onClick={() => handleScroll(item.target)}
        />
      ))}
    </Box>
  );
};

export default NavBar;