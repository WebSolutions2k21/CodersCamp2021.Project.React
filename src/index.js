import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { AuthProvider } from './provider/AuthProvider';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <App />
        </Box>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
