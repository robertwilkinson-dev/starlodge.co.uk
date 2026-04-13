import { Box, Typography, styled } from '@mui/material';

interface FAQProps {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: FAQProps) => {

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        {question}
      </Typography>
      <StyledAnswer dangerouslySetInnerHTML={{ __html: answer }} />
    </Box>
  )
};

const StyledAnswer = styled('p')({
  fontSize: '16px',
  lineHeight: '24px',
  'a': {
    color: '#007afc',
  }
});
