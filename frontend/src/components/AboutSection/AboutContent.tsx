import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LayersIcon from '@mui/icons-material/Layers';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SourceIcon from '@mui/icons-material/Source';
import HubIcon from '@mui/icons-material/Hub';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ApiIcon from '@mui/icons-material/Api';
import BrushIcon from '@mui/icons-material/Brush';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const AboutContent: React.FC = () => {
  type TechItem = {
    label: string;
    Icon: SvgIconComponent;
  };

  const skills: TechItem[] = [
    { label: 'TypeScript', Icon: DataObjectIcon },
    { label: 'JavaScript', Icon: WebIcon },
    { label: 'C#', Icon: CodeIcon },
    { label: 'Java', Icon: TerminalIcon },
    { label: 'C', Icon: TerminalOutlinedIcon },
    { label: 'Python', Icon: SmartToyIcon },
    { label: 'React', Icon: HubIcon },
    { label: 'Express.js', Icon: ApiIcon },
    { label: 'JavaFX/Swing', Icon: LayersIcon },
    { label: 'Godot Engine', Icon: SportsEsportsIcon }
  ];

  const tools: TechItem[] = [
    { label: 'Git', Icon: SourceIcon },
    { label: 'GitHub', Icon: HubIcon },
    { label: 'VS Code', Icon: CodeIcon },
    { label: 'Eclipse', Icon: IntegrationInstructionsIcon },
    { label: 'Postman', Icon: ApiIcon },
    { label: 'XAMPP', Icon: TerminalIcon },
    { label: 'Aseprite', Icon: BrushIcon },
    { label: 'Figma', Icon: DesignServicesIcon }
  ];

  const databases: TechItem[] = [
    { label: 'PostgreSQL', Icon: StorageIcon },
    { label: 'MySQL', Icon: StorageIcon }
  ];

  const renderTechTags = (items: TechItem[]) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {items.map(({ label, Icon }) => (
        <Box
          key={label}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.6,
            px: 1,
            py: 0.6,
            borderRadius: 999,
            bgcolor: '#eadac8',
            border: '1px solid rgba(95, 61, 36, 0.18)',
            color: '#3c2618',
            fontSize: { xs: '.84rem', md: '.92rem' },
            lineHeight: 1,
            transition: 'transform .18s ease, box-shadow .18s ease',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 6px 14px rgba(60, 38, 24, 0.12)'
            }
          }}
        >
          <Icon sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: '#7a5230' }} />
          <Box component="span">{label}</Box>
        </Box>
      ))}
    </Box>
  );

  const renderCoffeeSticker = (label: string, rotation: string) => (
    <Box
      sx={{
        position: 'absolute',
        top: { xs: -10, md: -12 },
        right: { xs: 10, md: 14 },
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.45,
        px: 1,
        py: 0.45,
        borderRadius: 999,
        bgcolor: '#fff4e6',
        color: '#6f4528',
        border: '1px solid rgba(133, 87, 53, 0.25)',
        boxShadow: '0 8px 18px rgba(66, 35, 15, 0.12)',
        transform: `rotate(${rotation})`,
        fontSize: { xs: '.68rem', md: '.74rem' },
        fontWeight: 700,
        letterSpacing: '.02em',
        zIndex: 2
      }}
    >
      <LocalCafeIcon sx={{ fontSize: { xs: '0.82rem', md: '0.9rem' } }} />
      <Box component="span">{label}</Box>
    </Box>
  );

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
              href="https://www.linkedin.com/in/mark-laurenz-listangco-758329364"
              target="_blank"
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/SKYRENZ"
              target="_blank"
              sx={{ bgcolor: '#7a5230', '&:hover': { bgcolor: '#8a5e37' }, borderRadius: 1.5, px: 1.6, py: .75, fontSize: '.86rem' }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:listangco.marklaurenzbscs@gmail.com"
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
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2, position: 'relative', overflow: 'visible' }}>
            {renderCoffeeSticker('Coffee-fueled', '-5deg')}
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 700, color: '#2d1b12', mb: .8 }}>
              Skills
            </Typography>
            {renderTechTags(skills)}
          </Paper>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2, position: 'relative', overflow: 'visible' }}>
            {renderCoffeeSticker('Caffeine + Tools', '4deg')}
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 700, color: '#2d1b12', mb: .8 }}>
              Tools
            </Typography>
            {renderTechTags(tools)}
          </Paper>
          <Paper elevation={0} sx={{ p: { xs: 2, md: 2.5 }, bgcolor: '#f3e8db', borderRadius: 2, position: 'relative', overflow: 'visible' }}>
            {renderCoffeeSticker('Brewed with SQL', '-3deg')}
            <Typography sx={{ fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 700, color: '#2d1b12', mb: .8 }}>
              Database
            </Typography>
            {renderTechTags(databases)}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContent;
