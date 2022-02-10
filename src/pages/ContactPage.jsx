import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Layout } from '../components';
import '../styles/global.scss';
import imgLogob from '../assets/Logo_blue.png';
let theme = createTheme();
theme = responsiveFontSizes(theme);
export const ContactPage = () => {
  return (
    <Layout>
      <Box
        theme={theme}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '25px',
          placeItems: 'center',
          marginTop: '20vh',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            marginTop: '0vh',
          },
        }}
      >
        <Box
          sx={{
            placeItems: 'center',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              marginTop: '40px',
              gap: '20px',
              marginBottom: '40px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '1.6rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
              },
            }}
            color="#FDC161"
          >
            Contact Us!
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
              },
            }}
          >
            email: clinic@puppylog.com
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
              },
            }}
          >
            phone: +48 554 555 111
          </Typography>
        </Box>
        <img src={imgLogob} alt="Logo with blue" className="img_size" />
        <Box
          sx={{
            placeItems: 'center',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              marginTop: '40px',
              gap: '20px',
              marginBottom: '40px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '1.6rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '1.2rem',
              },
            }}
            color="#FDC161"
          >
            Puppy Log
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
              },
            }}
          >
            ul. Bohaterów Warszawy12/2
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
              },
            }}
          >
            78-100 Kołobrzeg
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};
