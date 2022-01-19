import './App.scss';

import { NavigationBar, Signup } from 'components';
import { Input } from './components/inputs/Input';
import { default as Button } from 'components/Button';
import { ButtonTheme } from 'components/Themes/CustomButtonTheme'
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  return (
    <>
      <NavigationBar />

      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <ThemeProvider theme={ButtonTheme}>
        <Button
          color="secondary"
          text="JESTĘ BUTTONEM"
        />
      </ThemeProvider>
      <Input label='email' type='email'/>
      <Input label='password' type='password'/>
    </>
  );
};

export default App;
