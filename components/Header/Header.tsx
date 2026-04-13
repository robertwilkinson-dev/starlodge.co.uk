import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  QuestionAnswer as FAQIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

export const navLinks = [
  { label: 'Home', value: 'home', icon: <HomeIcon /> },
  { label: 'FAQs', value: 'faqs', icon: <FAQIcon /> },
  { label: 'Contribute', value: 'contributing', icon: <CodeIcon /> },
];

const menuLabel = 'STAR LODGE';

export const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component={'nav'}
        position={'fixed'}
        sx={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          padding: '8px 0',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: {
              xs: 'flex-end',
              sm: 'center',
            },
            padding: '0 20px !important',
            width: '100%',
          }}
          disableGutters
        >
          <IconButton
            sx={{
              color: scrolled ? 'text.primary' : '#fff',
              display: { sm: 'none' },
              transition: 'color 0.3s ease',
            }}
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '8px' }}>
            { navLinks.map(({ label, value }) => (
              <Typography
                key={`d-link-${value}`}
                onClick={() => scrollToId(value)}
                sx={{
                  color: scrolled ? 'text.primary' : '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: scrolled ? 'rgba(0,122,252,0.08)' : 'rgba(255,255,255,0.15)',
                    color: scrolled ? 'primary.main' : '#fff',
                  },
                }}
              >
                { label }
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile bottom-sheet drawer */}
      <Drawer
        anchor='bottom'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            borderRadius: '24px 24px 0 0',
            padding: '16px 20px 32px',
            backgroundColor: '#fff',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}>
          <Typography sx={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em' }}>
            { menuLabel }
          </Typography>
          <IconButton onClick={handleDrawerToggle} size='small'>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          { navLinks.map(({ label, value, icon }) => (
            <Box
              key={`m-link-${value}`}
              onClick={() => scrollToId(value)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: '14px 16px',
                borderRadius: '14px',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0,122,252,0.06)',
                },
                '&:active': {
                  backgroundColor: 'rgba(0,122,252,0.12)',
                },
              }}
            >
              <Box sx={{
                color: '#007afc',
                display: 'flex',
                alignItems: 'center',
              }}>
                { icon }
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: '16px', color: '#1B1B1D' }}>
                { label }
              </Typography>
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};
