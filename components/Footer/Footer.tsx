import { Box, Typography } from '@mui/material';
import { Place as PlaceIcon } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)',
        color: 'rgba(255,255,255,0.7)',
        padding: { xs: '30px 20px', md: '40px 20px' },
        textAlign: 'center',
        borderRadius: '40px 40px 0 0',
        mt: 2,
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        mb: 1,
      }}>
        <PlaceIcon sx={{ fontSize: 18 }} />
        <Typography sx={{ fontSize: '14px' }}>
          Horwich, Bolton, Greater Manchester
        </Typography>
      </Box>
      <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
        Star Lodge — A community project
      </Typography>
    </Box>
  );
};
