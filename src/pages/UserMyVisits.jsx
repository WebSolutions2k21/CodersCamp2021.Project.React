import React from 'react';
import { Layout, Sidebar } from '../components';
import { Box, Toolbar, Typography } from '@mui/material';

export const UserMyVisits = () => {
  return (
    <>
      <Layout />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>My visits</Typography>
      </Box>
    </>
  );
};
