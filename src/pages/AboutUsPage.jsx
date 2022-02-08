import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Layout } from '../components';
import imgLogo1 from '../assets/logo_big.png';
import imgAtam from '../assets/Atam.png';
import imgKozak from '../assets/Kozak.png';
import imgKowalski from '../assets/Kowalski.png';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const AboutUsPage = () => {
  return (
    <Layout>
      <Box
        theme={theme}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          placeItems: 'center',
          marginTop: '5vh',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        }}
      >
        <Typography
          variant="h1"
          color="#16BAC6"
          sx={{
            alignSelf: 'center',
            fontSize: '2.5rem',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.6rem',
              lineHeight: '2rem',
            },
          }}
          align="center"
        >
          Welcome to the PuppyLog Veterinary Clinic!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            placeItems: 'center',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              gap: '20px',
            },
          }}
        >
          <Box
            theme={theme}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '55px',
              placeItems: 'center',
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                gap: '20px',
              },
            }}
          >
            <img src={imgLogo1} alt="larger logo" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  maxWidth: 563,
                  fontSize: '1rem',
                  [theme.breakpoints.down('md')]: {
                    marginLeft: '20px',
                    marginRight: '20px',
                    fontSize: '0.8rem',
                    lineHeight: '1.5rem',
                  },
                }}
                align="justify"
              >
                We offer a comprehensive package of services for dogs and cats. We have been operating on the market
                continuously since 2000, taking care of the health and good condition of our pupils. Believing that the
                patient-doctor relationship is more than just a&nbsp;medical activity, we engage our knowledge and
                experience but also feelings and passion.
              </Typography>
              <Typography
                sx={{
                  alignSelf: 'flex-start',
                  maxWidth: 563,
                  marginTop: '20px',
                  fontSize: '1rem',
                  [theme.breakpoints.down('md')]: {
                    margin: '20px',
                    fontSize: '0.8rem',
                    lineHeight: '1.5rem',
                  },
                }}
                align="justify"
              >
                Our team is a&nbsp;group of three young but experienced veterinary doctors and technicians. We acquired
                our knowledge at the best universities in the country but also in Spain. The head of the clinic is
                veterinarian Aleksander Atam, a specialist in canine and feline diseases and veterinary surgery.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              gap: '100px',
              height: '250px',
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                height: 'auto',
                gap: '20px',
              },
            }}
          >
            <Box
              sx={{
                placeItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                  flexDirection: 'column',
                  gap: '20px',
                },
              }}
            >
              <img src={imgAtam} alt="dr Aleksander Atam"></img>
              <Typography
                color="#16BAC6"
                sx={{
                  fontSize: '1.4rem',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem',
                  },
                }}
              >
                dr Aleksander Atam
              </Typography>
              <Typography
                sx={{
                  [theme.breakpoints.down('md')]: {
                    fontSize: '0.8rem',
                    lineHeight: '1.5rem',
                  },
                }}
              >
                head of the Clinic
              </Typography>
            </Box>
            <Box
              sx={{
                placeItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                  marginTop: '40px',
                  gap: '20px',
                },
              }}
            >
              <img src={imgKozak} alt="dr Alicja Kozak"></img>
              <Typography
                color="#16BAC6"
                sx={{
                  fontSize: '1.4rem',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem',
                  },
                }}
              >
                dr Alicja Kozak
              </Typography>
            </Box>
            <Box
              sx={{
                placeItems: 'center',
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                  marginTop: '20px',
                  marginBottom: '40px',
                  gap: '20px',
                },
              }}
            >
              <img src={imgKowalski} alt="dr Alicja Kozak"></img>
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.2rem',
                  },
                }}
                color="#16BAC6"
              >
                dr Jan Kowalski
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
