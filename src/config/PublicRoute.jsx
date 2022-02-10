import React from 'react';
import { Navigate } from 'react-router-dom';
import { paths } from './paths';
import { auth } from '../config/firebase';

export const PublicRoute = ({ children }) => {
  return !auth.currentUser ? children : <Navigate to={paths.myVisits} />;
};
