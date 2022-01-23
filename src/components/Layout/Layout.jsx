import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';

import { NavigationBar } from '../NavigationBar';
import { Sidebar } from '..';

export const Layout = ({ children, showSideBar }) => {
  return (
    <>
      <NavigationBar />
      <Container component="main" maxWidth="xl">
        <Box sx={{ display: 'flex' }}>
          {showSideBar && (
            <aside>
              <Sidebar />
            </aside>
          )}
          <Box component="main" sx={{ flexGrow: 1, paddingTop: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      </Container>
    </>
  );
};
