import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Water as WaterIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { MapCard, Footer } from '../../components';
import questions from '../../faqs.json';

const Home = () => {

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id='home'
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          padding: { xs: '100px 20px 80px', md: '140px 20px 100px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #2d6a8a 70%, #3a8f7a 100%)',
          borderRadius: '0 0 40px 40px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        <WaterIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.6)', mb: 2 }} />
        <Typography
          variant='h1'
          sx={{
            fontWeight: 800,
            fontSize: {
              xl: '80px',
              lg: '64px',
              md: '56px',
              sm: '44px',
              xs: '36px',
            },
            lineHeight: 1.1,
            color: '#fff',
            margin: '0 0 24px 0',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Star Lodge
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xl: '22px',
              lg: '20px',
              md: '18px',
              sm: '16px',
              xs: '15px',
            },
            lineHeight: 1.7,
            fontWeight: '400',
            margin: '0 0 40px 0',
            maxWidth: '520px',
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
          }}
        >
          A small reservoir in Horwich, Bolton, located off Crown Lane
          near Butterwick Fields. Originally used as a millpond, Star Lodge
          is now home to a variety of local wildlife.
        </Typography>

        <Button
          onClick={() => scrollToId('faqs')}
          variant='contained'
          disableRipple
          sx={{
            width: '200px',
            padding: '12px 24px',
            fontSize: '15px',
            borderRadius: '40px',
            fontWeight: 700,
            backgroundColor: '#fff',
            color: '#1a3a5c',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.9)',
            },
          }}
          disableElevation
        >
          Read FAQs
        </Button>
      </Box>

      {/* Map Section */}
      <Box sx={{
        padding: { xs: '40px 20px', md: '60px 20px' },
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
      }}>
        <Typography
          variant='h2'
          sx={{
            fontWeight: 700,
            fontSize: { xs: '28px', md: '36px' },
            color: '#1B1B1D',
            mb: 1,
          }}
        >
          Location
        </Typography>
        <Typography sx={{ color: '#666', mb: 3, fontSize: '15px' }}>
          Off Crown Lane, near Butterwick Fields, Horwich
        </Typography>
        <MapCard />
      </Box>

      {/* FAQs Section */}
      <Box sx={{
        backgroundColor: '#fff',
        padding: { xs: '40px 20px', md: '60px 20px' },
      }}>
        <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
          <Typography
            id='faqs'
            variant='h2'
            sx={{
              fontWeight: 700,
              fontSize: { xs: '28px', md: '36px' },
              color: '#1B1B1D',
              mb: 3,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            { questions.map(({ id, question, answer }) => (
              <Accordion
                key={id}
                disableGutters
                elevation={0}
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px !important',
                  '&::before': { display: 'none' },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    padding: '8px 20px',
                    '& .MuiAccordionSummary-content': { margin: '12px 0' },
                  }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                    {question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0 20px 20px' }}>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#555',
                      '& a': { color: '#007afc', '&:hover': { textDecoration: 'underline' } },
                    }}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Contributing Section */}
      <Box sx={{
        padding: { xs: '40px 20px', md: '60px 20px' },
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
      }}>
        <Typography
          id='contributing'
          variant='h2'
          sx={{
            fontWeight: 700,
            fontSize: { xs: '28px', md: '36px' },
            color: '#1B1B1D',
            mb: 2,
          }}
        >
          Contributing
        </Typography>

        <Typography sx={{
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#555',
          mb: 3,
        }}>
          This is an open-source community project. If you're a developer and want to
          contribute, open a pull request on GitHub. If you're not a developer, check
          back soon — we're working on more ways for you to get involved.
        </Typography>

        <Button
          href='https://github.com/ShadedEmbers/starlodge.co.uk'
          target='_blank'
          rel='noopener noreferrer'
          variant='outlined'
          startIcon={<GitHubIcon />}
          sx={{
            borderRadius: '40px',
            textTransform: 'none',
            fontWeight: 600,
            padding: '10px 24px',
            borderColor: '#1B1B1D',
            color: '#1B1B1D',
            '&:hover': {
              borderColor: '#007afc',
              color: '#007afc',
              backgroundColor: 'transparent',
            },
          }}
        >
          View on GitHub
        </Button>
      </Box>

      <Footer />
    </Box>
  )
};

export default Home;
