import React from 'react';

import { Layout, MyVisitForm } from '../components';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

export const UserAddVisit = () => {
  return (
    <Layout showSideBar>
      <Grid
        container
        spacing={6}
        direction="row"
        justifyContent="space-around"
        alignItems="space-around"
        style={{ margin: '1%' }}
      >
        <Typography paragraph marginLeft="20px" marginTop="20px" variant="h4" color="#16bac6">
          Add new visit
        </Typography>
        <Box alignContent="center" width="100%">
          <MyVisitForm></MyVisitForm>
        </Box>
      </Grid>
    </Layout>
  );
};
