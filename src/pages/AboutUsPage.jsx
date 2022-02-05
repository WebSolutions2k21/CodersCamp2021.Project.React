import React from 'react';
import { Box, Typography } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Layout } from '../components';
import imgLogo from '../assets/logo.png';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 563,
//   },
// });
let theme = createTheme();
theme = responsiveFontSizes(theme);

export const AboutUsPage = () => {
  // const classes = useStyles();
  return (
    <Layout>
      <Box
        theme={theme}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '100px',
          placeItems: 'center',
          marginTop: '25vh',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            marginTop: '15vh',
            gap: '20px',
          },
        }}
      >
        <img src={imgLogo} alt="logo" />
        <Typography
          sx={{
            alignSelf: 'flex-start',
            maxWidth: 563,
            fontSize: '1rem',
            [theme.breakpoints.down('md')]: {
              margin: '20px',
              fontSize: '0.8rem',
              lineHeight: '1.5rem',
            },
          }}
          align="justify"
        >
          Welcome to the PuppyLog Veterinary Clinic. We offer a comprehensive package of services for dogs and cats. We
          have been operating on the market continuously since 2000, taking care of the health and good condition of our
          pupils. Believing that the patient-doctor relationship is more than just a&nbsp;medical activity, we engage
          our knowledge and experience but also feelings and passion. Our team is a&nbsp;group of three young but
          experienced veterinary doctors and technicians. We acquired our knowledge at the best universities in the
          country but also in Poland. The head of the clinic is veterinarian Aleksander Atam, a specialist in canine and
          feline diseases and veterinary surgery.
        </Typography>
      </Box>
    </Layout>
  );
};
