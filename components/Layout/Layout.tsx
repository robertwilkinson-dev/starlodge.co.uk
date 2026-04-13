import { Box, styled } from '@mui/material';
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

      <StyledMain>
        { children }
      </StyledMain>
    </Box>
  )
}

const StyledMain = styled('main')`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;
