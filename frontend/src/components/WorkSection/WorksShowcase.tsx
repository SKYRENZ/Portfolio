import { useMemo, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import gymCover from "../../assets/cavin/thumbnail.jpg";
import gymScreenOverview from "../../assets/cavin/014470b1-060d-4086-a1e7-0ba4cbfbf39c.jpg";
import gymScreenTransactionType from "../../assets/cavin/267763f8-28c3-4229-a782-96471651a7f3.jpg";
import gymScreenQrPrint from "../../assets/cavin/2c718220-9486-42d8-bcf9-a9268287c043.jpg";
import gymScreenCheckIn from "../../assets/cavin/96eefbb4-d6aa-4eb9-bca9-a0285ac082a6.jpg";
import gymScreenAccountAdmin from "../../assets/cavin/b04af012-b1d3-4e47-a376-2d5f23c1fd14.jpg";
import gymScreenDashboardAdmin from "../../assets/cavin/e2aa7da4-defe-4a8e-9d33-8fb117d38062.jpg";
import gymScreenQrScanner from "../../assets/cavin/f617f46b-fb93-48f0-867f-096fe5f6691a.jpg";
import gymScreenCustomerRecords from "../../assets/cavin/f59e4af6-a0dd-4c81-b9a4-298fc3c35c12.jpg";

interface ProjectSlide {
  title: string;
  caption: string;
  accent: string;
  image?: string;
}

interface ProjectTemplate {
  id: string;
  title: string;
  category: string;
  summary: string;
  about: string;
  tech: string[];
  slides: ProjectSlide[];
  cover?: string;
}

const projectsTemplate: ProjectTemplate[] = [
  {
    id: "gym-walkin-member-management",
    title: "Gym-WalkIn-and-Member-Management-Web-app-System",
    category: "Management System",
    summary: "Gym walk-in, membership, records, and transaction tracking platform",
    about:
      "A web-based gym operations system for handling customer records, walk-ins, memberships, QR check-ins, transaction logs, and account management dashboards.",
    tech: ["React", "TypeScript", "MUI", "QR Scanner"],
    cover: gymCover,
    slides: [
      {
        title: "Login Screen",
        caption: "Secure entry point for admin and receptionist users",
        accent: "#59361f",
        image: gymCover,
      },
      {
        title: "Receptionist Dashboard",
        caption: "Overview of check-ins, walk-ins, members, and transactions",
        accent: "#4f2f1a",
        image: gymScreenOverview,
      },
      {
        title: "Transaction Type",
        caption: "Quick transaction flow for walk-in, membership, renewal, and group options",
        accent: "#6a4127",
        image: gymScreenTransactionType,
      },
      {
        title: "QR Check-In Details",
        caption: "Member profile and attendance confirmation before check-in",
        accent: "#714a2d",
        image: gymScreenCheckIn,
      },
      {
        title: "QR Membership Print",
        caption: "Member card preview with QR code generation and printing",
        accent: "#7f5432",
        image: gymScreenQrPrint,
      },
      {
        title: "Customer Records",
        caption: "Searchable customer list with filters and action controls",
        accent: "#5e3a22",
        image: gymScreenCustomerRecords,
      },
      {
        title: "Accounts Management",
        caption: "Admin account listing with role controls and deactivation actions",
        accent: "#6c4529",
        image: gymScreenAccountAdmin,
      },
      {
        title: "Admin Analytics",
        caption: "Monthly member and walk-in tracking with customer activity table",
        accent: "#7c5030",
        image: gymScreenDashboardAdmin,
      },
      {
        title: "Live QR Scanner",
        caption: "Camera-based QR scan modal for fast member check-in",
        accent: "#5b3822",
        image: gymScreenQrScanner,
      },
    ],
  },
  {
    id: "brewboard",
    title: "BrewBoard",
    category: "Web App",
    summary: "Task and mood dashboard template",
    about:
      "Template case study for a productivity dashboard. The final version can include account flow, analytics cards, and custom widgets.",
    tech: ["React", "TypeScript", "MUI"],
    slides: [
      { title: "Home Panel", caption: "Landing and quick stats", accent: "#8c5a34" },
      { title: "Tasks", caption: "Kanban-style board preview", accent: "#6f4728" },
      { title: "Insights", caption: "Charts and weekly report", accent: "#a9754a" },
    ],
  },
  {
    id: "pixelbrew",
    title: "PixelBrew Studio",
    category: "Portfolio",
    summary: "Creative showcase template",
    about:
      "Template portfolio project focused on polished visuals, motion interactions, and responsive composition.",
    tech: ["Vite", "React", "Figma"],
    slides: [
      { title: "Hero", caption: "Typography and bold intro", accent: "#5a3a25" },
      { title: "Projects", caption: "Case cards and interactions", accent: "#7e5130" },
      { title: "Contact", caption: "Form and social links", accent: "#9e6a3f" },
    ],
  },
  {
    id: "beanmart",
    title: "BeanMart",
    category: "E-Commerce",
    summary: "Coffee shop storefront template",
    about:
      "Template e-commerce build with product cards, checkout flow mockup, and inventory-ready structure.",
    tech: ["Node", "Express", "PostgreSQL"],
    slides: [
      { title: "Catalog", caption: "Grid and filters", accent: "#6a4026" },
      { title: "Product", caption: "Detail panel with variants", accent: "#855235" },
      { title: "Checkout", caption: "Order summary + payment", accent: "#b07f52" },
    ],
  },
  {
    id: "huddlehub",
    title: "HuddleHub",
    category: "Collaboration",
    summary: "Team workspace template",
    about:
      "Template collaboration app concept for teams. Includes channels, shared notes, and progress tracking blocks.",
    tech: ["React", "Socket.IO", "MySQL"],
    slides: [
      { title: "Rooms", caption: "Channel layout and threads", accent: "#5b3421" },
      { title: "Notes", caption: "Shared docs preview", accent: "#784a2c" },
      { title: "Timeline", caption: "Milestone progress board", accent: "#98633d" },
    ],
  },
  {
    id: "playforge",
    title: "PlayForge",
    category: "Game Dev",
    summary: "2D game showcase template",
    about:
      "Template game project page showing character concepts, gameplay screens, and release roadmap.",
    tech: ["Godot", "Aseprite", "Figma"],
    slides: [
      { title: "World", caption: "Level style and palette", accent: "#4d2c1d" },
      { title: "Combat", caption: "Ability and enemy preview", accent: "#6f4028" },
      { title: "UI", caption: "HUD and menu concepts", accent: "#8b5a38" },
    ],
  },
  {
    id: "dataroast",
    title: "DataRoast",
    category: "Dashboard",
    summary: "Analytics portal template",
    about:
      "Template for analytics-heavy systems with KPI cards, chart layouts, and export-ready reports.",
    tech: ["TypeScript", "Charting", "PostgreSQL"],
    slides: [
      { title: "KPI", caption: "Top-level key metrics", accent: "#74462b" },
      { title: "Trends", caption: "Comparative graphs", accent: "#93623f" },
      { title: "Exports", caption: "Reports and downloads", accent: "#b18358" },
    ],
  },
];

const spanPattern = [
  { col: 5, row: 2 },
  { col: 3, row: 2 },
  { col: 4, row: 2 },
  { col: 4, row: 2 },
  { col: 5, row: 2 },
  { col: 3, row: 2 },
];

const shuffleProjects = (items: ProjectTemplate[]) => {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

const getRelativeSlideOffset = (index: number, current: number, total: number) => {
  const forward = (index - current + total) % total;
  const backward = (current - index + total) % total;

  if (forward === 0) return 0;
  return forward <= backward ? forward : -backward;
};

const WorksShowcase = () => {
  const projects = useMemo(() => shuffleProjects(projectsTemplate), []);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;
  const activeSlide = activeProject ? activeProject.slides[activeSlideIndex] : null;

  const openProject = (index: number) => {
    setActiveProjectIndex(index);
    setActiveSlideIndex(0);
  };

  const closeProject = () => {
    setActiveProjectIndex(null);
    setActiveSlideIndex(0);
  };

  const showPrev = () => {
    if (!activeProject) return;
    setActiveSlideIndex((current) => (current - 1 + activeProject.slides.length) % activeProject.slides.length);
  };

  const showNext = () => {
    if (!activeProject) return;
    setActiveSlideIndex((current) => (current + 1) % activeProject.slides.length);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1220,
        mx: "auto",
        px: { xs: 2.5, md: 4 },
        pt: { xs: 14, sm: 13, md: 12 },
        pb: { xs: 10, sm: 9, md: 8 },
        boxSizing: "border-box",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Typography
        sx={{
          color: "#f8efe4",
          fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.7rem" },
          lineHeight: 1.1,
          fontWeight: 700,
          mb: 1.2,
        }}
      >
        PROJECTS
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, minmax(0, 1fr))", md: "repeat(12, minmax(0, 1fr))" },
          gridAutoRows: { xs: "180px", md: "88px" },
          gap: 1.3,
        }}
      >
        {projects.map((project, index) => {
          const span = spanPattern[index % spanPattern.length];

          return (
            <Box
              key={project.id}
              onClick={() => openProject(index)}
              sx={{
                gridColumn: { xs: "span 1", md: `span ${span.col}` },
                gridRow: { xs: "span 1", md: `span ${span.row}` },
                borderRadius: 2,
                p: { xs: 1.5, md: 2 },
                bgcolor: "rgba(248, 239, 228, 0.08)",
                border: "1px solid rgba(194, 148, 102, 0.35)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 14px 28px rgba(20, 10, 5, 0.35)",
                  borderColor: "rgba(226, 177, 125, 0.7)",
                },
              }}
            >
              <Box>
                <Typography sx={{ color: "#f8efe4", fontWeight: 700, fontSize: { xs: "1.03rem", md: "1.1rem" }, lineHeight: 1.25 }}>
                  {project.title}
                </Typography>
                <Typography sx={{ color: "#dcbf9f", mt: 0.35, fontSize: { xs: ".82rem", md: ".88rem" } }}>
                  {project.category}
                </Typography>
              </Box>
              <Typography sx={{ color: "#efe0d0", fontSize: { xs: ".86rem", md: ".93rem" }, opacity: 0.95 }}>
                {project.summary}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Dialog
        open={Boolean(activeProject)}
        onClose={closeProject}
        maxWidth="lg"
        fullWidth
        scroll="body"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(12, 7, 5, 0.42)",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: 0,
            bgcolor: "transparent",
            border: "none",
            boxShadow: "none",
            color: "#f8efe4",
            width: "min(92vw, 1120px)",
            overflow: "visible",
            overflowY: "visible",
            maxHeight: "none",
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 0.6, md: 0.9 }, overflow: "visible", overflowY: "visible" }}>
          {activeProject && activeSlide && (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1.2, mb: { xs: 0.25, md: 0.4 } }}>
                <Box sx={{ display: "flex", gap: 0.65, alignItems: "center" }}>
                  {activeProject.slides.map((slide, dotIndex) => (
                    <Box
                      key={`${slide.title}-dot-${dotIndex}`}
                      onClick={() => setActiveSlideIndex(dotIndex)}
                      sx={{
                        width: dotIndex === activeSlideIndex ? 20 : 8,
                        height: 8,
                        borderRadius: 999,
                        bgcolor: dotIndex === activeSlideIndex ? "#f1d4b5" : "rgba(241, 212, 181, 0.35)",
                        transition: "all .25s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 380, sm: 650, md: 900 },
                  mx: "auto",
                  mt: { xs: 0.2, md: 0.5 },
                  height: { xs: 255, sm: 315, md: 410 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconButton
                  aria-label="Previous slide"
                  onClick={showPrev}
                  sx={{
                    position: "absolute",
                    left: { xs: -40, sm: -50, md: -60 },
                    zIndex: 40,
                    bgcolor: "rgba(10, 6, 4, 0.6)",
                    color: "#fff0e1",
                    border: "1px solid rgba(241, 212, 181, 0.35)",
                    "&:hover": { bgcolor: "rgba(10, 6, 4, 0.82)" },
                  }}
                >
                  <NavigateBeforeIcon />
                </IconButton>

                {activeProject.slides.map((slide, index) => {
                  const offset = getRelativeSlideOffset(index, activeSlideIndex, activeProject.slides.length);
                  const absOffset = Math.abs(offset);
                  const isVisible = absOffset <= 2;

                  return (
                    <Box
                      key={`${slide.title}-${index}`}
                      onClick={() => {
                        if (offset !== 0) setActiveSlideIndex(index);
                      }}
                      sx={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: { xs: 240, sm: 330, md: 420 },
                        height: { xs: 185, sm: 250, md: 320 },
                        borderRadius: 2,
                border: "2px solid rgba(255, 255, 255, 0.2)",
                backgroundImage: slide.image
                  ? `linear-gradient(to top, rgba(8, 5, 3, 0.62) 0%, rgba(8, 5, 3, 0.18) 48%, rgba(8, 5, 3, 0.08) 100%), url('${slide.image}')`
                  : `linear-gradient(145deg, ${slide.accent}, #22140c)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  offset === 0
                    ? "0 20px 30px rgba(0, 0, 0, 0.45)"
                            : "0 12px 24px rgba(0, 0, 0, 0.32)",
                        transform: `translate(-50%, -50%) translateX(${offset * 37}%) rotate(${offset * 8}deg) scale(${offset === 0 ? 1 : absOffset === 1 ? 0.86 : 0.72})`,
                        opacity: offset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.36,
                        zIndex: 20 - absOffset,
                        transition: "transform .35s ease, opacity .35s ease, box-shadow .35s ease",
                        cursor: offset === 0 ? "default" : "pointer",
                        display: isVisible ? "flex" : "none",
                        alignItems: "flex-end",
                        p: 1.15,
                        overflow: "hidden",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(8, 5, 3, 0.72) 0%, rgba(8, 5, 3, 0.12) 62%, rgba(8, 5, 3, 0) 100%)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          fontSize: { xs: ".78rem", sm: ".86rem" },
                          fontWeight: 700,
                          color: "#f7e8d8",
                        }}
                      >
                        {slide.title}
                      </Typography>
                    </Box>
                  );
                })}

                <IconButton
                  aria-label="Next slide"
                  onClick={showNext}
                  sx={{
                    position: "absolute",
                    right: { xs: -40, sm: -50, md: -60 },
                    zIndex: 40,
                    bgcolor: "rgba(10, 6, 4, 0.6)",
                    color: "#fff0e1",
                    border: "1px solid rgba(241, 212, 181, 0.35)",
                    "&:hover": { bgcolor: "rgba(10, 6, 4, 0.82)" },
                  }}
                >
                  <NavigateNextIcon />
                </IconButton>
              </Box>

              <Box sx={{ textAlign: "center", mt: { xs: -1.1, md: -1.35 } }}>
                <Typography sx={{ fontSize: { xs: "1.22rem", md: "1.8rem" }, fontWeight: 700 }}>
                  {activeSlide.title}
                </Typography>
                <Typography sx={{ mt: 0.45, color: "#ead5bf", fontSize: { xs: "1rem", md: "1.18rem" } }}>
                  {activeSlide.caption}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 0.8, md: 1.2 }, pb: { xs: 0.1, md: 0.2 } }}>
                <IconButton
                  onClick={closeProject}
                  aria-label="Close slider"
                  sx={{
                    color: "#ff6b6b",
                    p: 0.75,
                    bgcolor: "rgba(83, 12, 18, 0.68)",
                    border: "1px solid rgba(255, 107, 107, 0.52)",
                    "&:hover": { bgcolor: "rgba(120, 17, 25, 0.82)" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default WorksShowcase;
