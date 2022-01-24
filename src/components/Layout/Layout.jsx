import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import { NavigationBar } from '../NavigationBar';
import { Sidebar } from '..';
import { Banner } from '../Banner';

export const Layout = ({ children, showSideBar }) => {
  return (
    <>
      <NavigationBar />
      <Container maxWidth="xl">
        {showSideBar ? (
          <Grid container>
            <Banner />
            <Sidebar />
            <Box component="main">{children}</Box>
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <Box component="main">{children}</Box>
          </Grid>
        )}
      </Container>
    </>
  );
};
