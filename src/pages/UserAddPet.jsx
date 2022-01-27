import React from 'react';
import { Layout, MyPetForm } from '../components';
import { Typography } from '@mui/material';

export const UserAddPet = () => {
  return (
    <Layout showSideBar>
      <Typography paragraph>Add Pet</Typography>
      <MyPetForm></MyPetForm>
    </Layout>
  );
};
