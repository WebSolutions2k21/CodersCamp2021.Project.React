import React from 'react';
import { Layout, MyPetForm } from '../components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const UserAddPet = () => {
  return (
    <Layout showSideBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          left: '50%',
          right: '50%'
        }}
      >
        <Typography sx={{whiteSpace:"nowrap"}} paragraph marginTop="5vh" variant="h4" color="#16bac6">
          Add new Pet
        </Typography>
        <MyPetForm />
      </Box>
    </Layout>
  );
};