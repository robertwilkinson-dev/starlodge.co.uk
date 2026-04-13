import { Box, Typography, Button } from '@mui/material';
import { FAQ, MapCard } from '../../components';
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
      <Box
        sx={{
          padding: '70px 0 50px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
          <Typography
            variant='h1'
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xl: '80px',
                lg: '60px',
                md: '60px',
                sm: '40px',
                xs: '40px',
              },
              lineHeight: '75px',
              color: '#1B1B1D',
              margin: '0 0 40px 0',
              textAlign: 'center',
            }}
          >
            Star Lodge
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xl: '24px',
                lg: '20px',
                md: '20px',
                sm: '16px',
                xs: '16px',
              },
              lineHeight: '28px',
              fontWeight: '400',
              margin: '0 0 50px 0',
              maxWidth: 'sm',
              color: '#1B1B1D',
              textAlign: 'center',
            }}
          >
            Located in Horwich, Bolton Star Lodge is a
            reservoir located near Crown Lane / Butterwick Fields.
            Originally used as a Millpond, Star Lodge is now home
            to a range of wildlife.
          </Typography>

          {/* <Link href='/faqs'> */}
            <Button
              onClick={() => scrollToId('faqs')}
              variant='contained'
              disableRipple
              sx={{
                width: '200px',
                padding: '8px',
                fontSize: '16px',
                borderRadius: '40px',
                fontWeight: 'bold',
              }}
              disableElevation
            >
              Read FAQs
            </Button>
          {/* </Link> */}
      </Box>

      <MapCard />

      <Box sx={{
        padding: '40px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <Typography
          id='faqs'
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontSize: '40px',
            lineHeight: '75px',
            color: '#1B1B1D',
          }}
        >
          FAQs
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          { questions.map(({ id, question, answer }) => (
            <FAQ key={id} question={question} answer={answer} />
          ))}
        </Box>
      </Box>

      <Box sx={{
        padding: '40px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <Typography
          id='contributing'
          variant='h2'
          sx={{
            fontWeight: 'bold',
            fontSize: '40px',
            lineHeight: '75px',
            color: '#1B1B1D',
          }}
        >
          Contributing
        </Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <Typography>
            If your a developer and want to contribute to this project, you can view the GitHub repo <a href='https://github.com/ShadedEmbers/starlodge.co.uk' style={{ color: '#007afc' }}>here</a>. Open a pull request and we will review it.
            If you are not a developer please check back soon as we are working ways for you to contribute such as emails.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default Home;
