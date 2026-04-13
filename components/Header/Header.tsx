import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';

export const navLinks = [
  { label: 'Home', value: 'home' },
  { label: 'FAQs', value: 'faqs' },
  // { label: 'Wildlife', value: 'wildlife' },
  { label: 'Contribute', value: 'contributing' },
];

const menuLabel = 'STAR LODGE';

export const Header = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [container, setContainer] = useState<(() => HTMLElement) | undefined>(undefined);
  useEffect(() => {
    setContainer(window !== undefined ? () => document.body : undefined);
  }, [ ]);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component={'nav'}
        position={'fixed'}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          padding: '10px 0',
          '&.MuiPaper-root': {
            alignItems: 'flex-end',
            maxWidth: '800px',
            margin: '0 auto',
          },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            maxWidth: '800px',
            display: 'flex',
            justifyContent: {
              xs: 'flex-end',
              md: 'center',
            },
            padding: '0 !important',
            width: '100%',
          }}
          disableGutters
        >
          <IconButton
            sx={{
              color: 'text.primary',
              mr: 2,
              display: { sm: 'none' }
            }}
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '20px' } }}>
            { navLinks.map(({ label, value }) => (
              // <Link key={`d-link-${value}`} href={`/${value}`} >
                (<Typography
                  key={`d-link-${value}`}
                  onClick={() => scrollToId(value)}
                  sx={{
                    color: 'text.primary',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    padding: '0 20px'
                  }}
                >
                  { label }
                </Typography>)
              // </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer
          container={container}
          variant='temporary'
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <SideMenu
            onToggle={scrollToId}
          />
        </Drawer>
      </Box>
    </Box>
  );
};

interface SideMenuProps {
  onToggle: (id: string) => void;
}

const SideMenu = ({ onToggle }: SideMenuProps) => {
  const handleToggle = (id: string) => {
    if (!onToggle) {
      return;
    }
    if (typeof id === 'string') {
      onToggle(id);
    }
  }

  return (
    <Box
      sx={{ textAlign: 'center' }}
    >
      <Typography variant='h6' sx={{ my: 2 }} >
        { menuLabel }
      </Typography>
      <Divider />
      <List>
        { navLinks.map(({ label, value }) => (
          // <Link  href={`/${value}`} >
            (<ListItem key={`m-link-${value}`}
              onClick={() => handleToggle(value)}
            >
              <ListItemText primary={label}
                sx={{
                  cursor: 'pointer',
                }}
              />
            </ListItem>)
          // </Link>
        ))}
      </List>
    </Box>
  );
};
