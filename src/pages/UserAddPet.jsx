import React from 'react';
import { Layout, MyPetForm } from '../components';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const UserAddPet = () => {
  return (
    <Layout showSideBar>
      <Typography paragraph marginLeft="5vw" marginTop="5vh" variant="h4" color="#16bac6">
        Add new Pet
      </Typography>
      <Box alignContent="center" marginLeft="5vw">
        <MyPetForm></MyPetForm>
      </Box>
    </Layout>
  );
};
