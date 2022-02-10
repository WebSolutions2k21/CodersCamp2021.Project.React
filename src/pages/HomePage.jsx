import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import imgLogo from '../assets/logo.png';
import { Layout, CustomButton } from '../components';

export const HomePage = () => {
  return (
    <Layout>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item sx={{ mt: '15vh' }}>
          <Typography
            component="div"
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
            <img src={imgLogo} alt="logo" width="200px"/>
          </Typography>
        </Grid>
        <Grid item sx={{ mt: { md: '10vh' } }}>
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
        </Grid>
        <Grid item sx={{pb:"50px"}}>
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <CustomButton color="primary" size="large" text="GET STARTED" />
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};
