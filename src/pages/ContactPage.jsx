import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Layout } from '../components';
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
            marginTop: '5vh',
          },
        }}
      >
        <Box
          sx={{
            placeItems: 'center',
            textAlign: 'center',
            fontSize: '1.6rem',
            [theme.breakpoints.down('md')]: {
              marginTop: '40px',
              gap: '20px',
            },
          }}
        >
          <Typography fontSize="1.6rem" color="#FDC161">
            Contact Us!
          </Typography>
          <Typography fontSize="1.2rem">email: clinic@puppylog.com</Typography>
          <Typography fontSize="1.2rem">phone: +48 554 555 111</Typography>
        </Box>
        <img src={imgLogob} alt="Logo with blue" />
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
          <Typography fontSize="1.6rem" color="#FDC161">
            Puppy Log{' '}
          </Typography>
          <Typography fontSize="1.2rem">ul. Bohaterów Warszawy12/2</Typography>
          <Typography fontSize="1.2rem">78-100 Kołobrzeg</Typography>
        </Box>
      </Box>
    </Layout>
  );
};
