import { Box } from '@mui/material';
import { Header } from '../';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        component='main'
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        { children }
      </Box>
    </Box>
  )
}
