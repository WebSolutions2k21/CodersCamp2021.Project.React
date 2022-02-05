import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import { NavigationBar } from '../NavigationBar';
import { Sidebar } from '../Sidebar';
import { Banner } from '../Banner';

export const Layout = ({ children, showSideBar }) => {
  return (
    <div style={{ height: '100vh', display: 'grid', gridTemplateRows: 'min-content min-content 1fr' }}>
      <NavigationBar />
      {showSideBar ? (
        <>
          <Banner />
          <Container maxWidth="xl" style={{ display: 'grid' }}>
            <Grid container wrap="nowrap">
              <Sidebar />
              <Box component="main" width={'100%'} sx={{ height: 'calc(100% - 54px)', zIndex: -1 }}>
                {children}
              </Box>
            </Grid>
          </Container>
        </>
      ) : (
        <Container maxWidth="xl" style={{ display: 'grid' }}>
          <Grid container justifyContent="center">
            <Box component="main">{children}</Box>
          </Grid>
        </Container>
      )}
    </div>
  );
};
//DDFDSAA
