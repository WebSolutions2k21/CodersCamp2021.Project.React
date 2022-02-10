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
          gap: '15%',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{ whiteSpace: 'nowrap', margin: '2% auto' }}
          width={'min-content'}
          paragraph
          variant="h4"
          color="#16bac6"
        >
          Add new Pet
        </Typography>
        <MyPetForm />
      </Box>
    </Layout>
  );
};
