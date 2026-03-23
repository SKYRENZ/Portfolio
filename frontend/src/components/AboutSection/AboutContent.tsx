import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const AboutContent: React.FC = () => {
  const handleDownloadResume = () => {
    // Add resume download functionality here
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <Box sx={{
      width: '100%',
      maxWidth: 1220,
      mx: 'auto',
      px: { xs: 2.5, md: 4 },
      py: { xs: 10, sm: 9, md: 8 },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1
    }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' }, gap: { xs: 2, md: 3 }, alignItems: 'stretch' }}>
        <Paper sx={{
          p: { xs: 2.4, sm: 2.8, md: 4 },
          bgcolor: 'rgba(248, 239, 228, 0.06)',
          border: '1px solid rgba(185, 138, 92, 0.35)',
          color: '#f8efe4',
          borderRadius: 2
        }}>
          <Typography sx={{ fontSize: { xs: '1.75rem', sm: '1.95rem', md: '2.4rem' }, fontWeight: 700, mb: 1.4, color: '#f8efe4' }}>
            About Me
          </Typography>
          <Typography sx={{ mb: 2.4, lineHeight: 1.6, color: '#e9d7c4', fontSize: { xs: '.97rem', md: '1.06rem' } }}>
            Hello, I&apos;m Mark Laurenz R. Listangco, currently a Senior Student at University of Caloocan City taking Bachelor of Science in Computer Science.
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.45rem', sm: '1.55rem', md: '1.9rem' }, fontWeight: 700, mb: 1.4, color: '#f8efe4' }}>
            Connect with Me
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/your-username"
              target="_blank"
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:your.email@example.com"
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadResume}
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              Resume
            </Button>
          </Box>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: { xs: 1, md: 1.5 } }}>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2 }}>
            <Typography sx={{ fontSize: { xs: '1.45rem', md: '1.8rem' }, fontWeight: 700, color: '#2d1b12', mb: 1.1 }}>
              Skills
            </Typography>
            <Typography sx={{ color: '#3c2618', lineHeight: 1.58, fontSize: { xs: '.95rem', md: '1.05rem' } }}>
              TypeScript, JavaScript, C#, Java, C, Python, React, Express.js, JavaFX/Swing, Godot Engine.
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2 }}>
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 700, color: '#2d1b12', mb: .8 }}>
              Tools
            </Typography>
            <Typography sx={{ color: '#3c2618', lineHeight: 1.5, fontSize: { xs: '.93rem', md: '1rem' } }}>
              Git, GitHub, VS Code, Eclipse, Postman, Xampp, Aseprite, Figma
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2 }}>
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 700, color: '#2d1b12', mb: .8 }}>
              Database
            </Typography>
            <Typography sx={{ color: '#3c2618', fontSize: { xs: '.93rem', md: '1rem' } }}>
              PostgreSQL, MySQL
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContent;
