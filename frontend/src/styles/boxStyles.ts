export const heroSectionStyles = {
  width: "100%",
  minHeight: "100vh",
  height: "100vh", // Ensures full viewport height
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden", // Ensures background stays inside
  zIndex: 1,
  px: 2, // Responsive horizontal padding
  boxSizing: "border-box",
  overflowX: "hidden",
};

export const aboutSectionStyles = {
  width: "100vw",
  minHeight: "100vh",
  background: "#111", // Change this to any color or gradient you want
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  py: 10,
};