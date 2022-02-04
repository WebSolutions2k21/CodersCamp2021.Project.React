import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { BottomNavigationProvider } from './context/BottomNavigationContext';
import { AuthProvider } from './provider/AuthProvider';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BottomNavigationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BottomNavigationProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
