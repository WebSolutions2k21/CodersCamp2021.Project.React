import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { BottomNavProvider } from './context/AuthContext';
import { AuthProvider } from './provider/AuthProvider';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BottomNavProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BottomNavProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
