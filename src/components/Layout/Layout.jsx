import React from 'react';
import { Container } from '@mui/material';

import { NavigationBar } from '../NavigationBar';

export const Layout = ({ children }) => {
  return (
    <main>
      <NavigationBar />
      <Container maxWidth="xl">{children}</Container>
    </main>
  );
};
