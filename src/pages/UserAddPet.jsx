import React from 'react';
import { Layout, Sidebar } from '../components';
import { Box, Toolbar, Typography } from '@mui/material';

export const UserAddPet = () => {
  return (
    <>
      <Layout />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>Add Pet</Typography>
      </Box>
    </>
  );
};
