import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { NavigationBar, Signup} from 'components';
import { Input } from './components/inputs/Input';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Box, Toolbar } from '@mui/material';

const App = () => {
  return (
    <>
      <NavigationBar />
      
      <Box sx={{ flexGrow: 1, pl: 100, pt: 5}}>
        {/* Box isn't marge with sidebar. Padding to separate(must be change) */}
        <Toolbar />
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <Input label='email' type='email'/>
      <Input label='password' type='password'/>
      </Box>
      <BrowserRouter>
      <Sidebar  />
      </BrowserRouter>
    </>
  );
};

export default App;
