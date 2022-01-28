import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { paths } from './paths';

const { currentUser } = useAuth();

export const PrivateRoute = ({ element: Element, ...rest }) => (
  <Route {...rest} render={(props) => (currentUser ? <Element {...props} /> : <Redirect to={paths.login} />)} />
);
