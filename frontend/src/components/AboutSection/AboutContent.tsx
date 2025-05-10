import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import CircularImage from './CircularImage';

const AboutContent: React.FC = () => {
  const handleDownloadResume = () => {
    // Add resume download functionality here
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      p: 3,
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      flexDirection: { xs: 'column', md: 'row' }
    }}>
      {/* Left side - Image */}
      <Box sx={{ 
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        width: { xs: '100%', md: 'auto' }
      }}>
        <CircularImage alt="Mark Laurenz R. Listangco" size={300} />
      </Box>

      {/* Right side - Content */}
      <Box sx={{ flex: 1 }}>
        {/* About Me Section */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Hello, I'm Mark Laurenz R. Listangco, I am currently a Senior Student from University of Caloocan City studying Bachelor of Science in Computer Science
        </Typography>

        {/* Connect Section */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          Connect with Me
        </Typography>
        <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            href="https://linkedin.com/in/your-profile"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            href="https://github.com/your-username"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:your.email@example.com"
          >
            Email
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </Box>

        {/* Skills Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Paper elevation={3} sx={{ p: 2, flex: '1 1 300px', minWidth: 0 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Programming Languages
              </Typography>
              <Typography variant="body1">
                TypeScript, GDScript, Java, JavaScript, C#, C, Python
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, flex: '1 1 300px', minWidth: 0 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Frameworks
              </Typography>
              <Typography variant="body1">
                React, Express.js, JavaFX/Swing, Godot Engine
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, flex: '1 1 300px', minWidth: 0 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Tools
              </Typography>
              <Typography variant="body1">
                Git, GitHub, VS Code, Eclipse, Postman, Xampp, Aseprite, Figma
              </Typography>
            </Paper>
          </Box>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Databases
            </Typography>
            <Typography variant="body1">
              PostgreSQL, MySQL
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContent;