import { Box, Typography } from '@mui/material';
import { Info as InfoIcon, Warning as WarningIcon, Error as ErrorIcon } from '@mui/icons-material';

type NoticeType = 'info' | 'warning' | 'error';

interface Notice {
  id: number;
  message: string;
  type: string;
  active: boolean;
}

interface NoticeBarProps {
  notices: Notice[];
}

const styles = {
  info: {
    background: '#e8f4fd',
    border: '#b3d9f2',
    color: '#1a5276',
    icon: <InfoIcon sx={{ fontSize: 18 }} />,
  },
  warning: {
    background: '#fff8e1',
    border: '#ffe082',
    color: '#795600',
    icon: <WarningIcon sx={{ fontSize: 18 }} />,
  },
  error: {
    background: '#fdecea',
    border: '#f5c6cb',
    color: '#8b1a1a',
    icon: <ErrorIcon sx={{ fontSize: 18 }} />,
  },
};

export const NoticeBar = ({ notices }: NoticeBarProps) => {
  const activeNotices = notices.filter((n) => n.active);

  if (activeNotices.length === 0) return null;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: { xs: '20px 20px 0', md: '30px 20px 0' },
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
    }}>
      {activeNotices.map(({ id, message, type }) => {
        const style = styles[type as NoticeType] ?? styles.info;
        return (
          <Box
            key={id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: style.background,
              border: `1px solid ${style.border}`,
              color: style.color,
            }}
          >
            {style.icon}
            <Typography sx={{ fontSize: '14px', lineHeight: 1.5 }}>
              {message}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
