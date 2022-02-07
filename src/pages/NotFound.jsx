import { Box, Typography } from '@mui/material';
import React from 'react';
import { CustomButton, Layout } from '../components';
import { paths } from '../config/paths';
import NotFoundIcon from '../assets/NotFoundIcon.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', placeItems: 'center', marginTop: '10vh' }}>
        <Typography variant="h5" color="#EFF0F4" sx={{ alignSelf: 'flex-start' }}>
          Sorry ! We couldn’t find that page
        </Typography>
        <img src={NotFoundIcon} alt="404" style={{ width: '100%' }} />
        <Link to={paths.home} style={{ textDecoration: 'none' }}>
          <CustomButton text="BACK TO HOME" size="large" />
        </Link>
      </Box>
    </Layout>
  );
};
