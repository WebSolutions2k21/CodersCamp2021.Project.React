import React from 'react';

import { NavigationBar } from '../NavigationBar';

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};
