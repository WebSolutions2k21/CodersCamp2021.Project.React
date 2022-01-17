import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
<<<<<<< HEAD
 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
=======
import { AuthProvider } from './provider/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
>>>>>>> 4e3292d2ea67f0614381b0b6e80f124e009fcac0
);
