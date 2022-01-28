import React from 'react';
import { Layout, MyPetForm } from '../components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const UserAddPet = () => {
  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="20px" marginTop="20px" variant="h4" color="#16bac6">
        Add new Pet
      </Typography>
      <Box  alignContent="center" width="100%">
        <MyPetForm></MyPetForm>
      </Box>
    </Layout>
  );
};
