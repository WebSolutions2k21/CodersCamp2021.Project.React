import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import imgLogo from '../assets/logo.png';
import { Layout, CustomButton } from '../components';

export const HomePage = () => {
  return (
    <Layout>
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
        <Typography
          component="span"
          sx={{
            mb: {
              md: '60px',
              xs: '30px',
            },
            display: {
              md: 'none',
              sm: 'block',
              xs: 'block',
            },
          }}
        >
          <img src={imgLogo} alt="logo" />
        </Typography>

        <Typography
          variant="h1"
          fontSize={{
            lg: '60px',
            md: '60px',
            sm: '40px',
            xs: '35px',
          }}
          fontFamily="Ubuntu, sans-serif"
          paddingBottom="40px"
          color="#16BAC6"
          fontWeight="400"
          letterSpacing="1px"
        >
          We love Pets!
        </Typography>

        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <CustomButton color="primary" size="large" text="GET STARTED" />
        </Link>
      </Grid>
    </Layout>
  );
};
