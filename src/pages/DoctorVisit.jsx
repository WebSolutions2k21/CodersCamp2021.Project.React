import React from 'react';
import { Layout, Sidebar } from '../components';
import { Box, Toolbar, Typography } from '@mui/material';

export const DoctorVisit = () => {
  return (
    <>
      <Layout />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Doctor Visit</Typography>
      </Box>
    </>
  );
};
