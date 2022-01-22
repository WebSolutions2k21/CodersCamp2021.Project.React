import { Layout, CustomButton } from "../components";
import { Link } from 'react-router-dom';

import { Typography, Grid } from '@mui/material';


export const HomePage = () => {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{height: "70vh"}}
        >
        
        <Typography 
          variant="h1"
          fontSize="60px"
          fontFamily="Ubuntu, sans-serif"
          paddingBottom="40px"
          color="#16BAC6"
          letterSpacing="1px">
              We love Pets!
        </Typography>
          
        <Link to="/Login" style={{ textDecoration: 'none' }}>
        <CustomButton
          color="primary" 
          size="large" 
          text="GET STARTED"
        />
        </Link>
      </Grid>
    </Layout>
  );
};
