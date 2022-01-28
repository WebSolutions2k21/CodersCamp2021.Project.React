import React from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from './paths';
import useAuth from './useAuth';

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return auth ? children : <Navigate to={paths.login} />;
};
