import React from 'react';
import { Layout, VisitDescription } from '../components';
import { Typography } from '@mui/material';

export const DoctorVisit = () => {
  return (
    <Layout showSideBar>
      <Typography paragraph>Doctor Visit</Typography>
      <VisitDescription />
    </Layout>
  );
};
