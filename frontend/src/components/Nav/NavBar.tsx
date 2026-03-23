import { Box, Link, Typography } from "@mui/material";

const NavBar = () => {
  const navItems = [
    { label: "Intro", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Works", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: 10, md: 20 },
        left: { xs: 10, md: 24 },
        right: { xs: 10, md: 24 },
        zIndex: 1000,
        bgcolor: "rgba(58, 36, 24, 0.9)",
        border: "1px solid rgba(185, 138, 92, 0.35)",
        boxShadow: "0 12px 30px rgba(60, 34, 18, 0.35)",
        backdropFilter: "blur(5px)",
        px: { xs: 1.5, sm: 2.2, md: 4 },
        py: { xs: 1.4, md: 2.2 },
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        borderRadius: "4px",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 0 },
      }}
    >
      <Typography sx={{ color: "#f8efe4", fontSize: { xs: "1.8rem", md: "2.2rem" }, lineHeight: 1, fontFamily: "Georgia, serif" }}>
        SKY.
      </Typography>
      <Box sx={{ display: "flex", gap: { xs: 1.4, sm: 2, md: 4 }, alignItems: "center", flexWrap: "wrap" }}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            underline="none"
            sx={{
              color: "#f0dbc3",
              fontSize: { xs: ".95rem", md: "1rem" },
              "&:hover": { color: "#fff7ec" },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
