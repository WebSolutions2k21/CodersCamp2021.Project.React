import './App.scss';

import SignUp from 'components/Signup';
import { default as Button } from 'components/Button';
import { ButtonTheme } from 'components/Themes/CustomButtonTheme'
import { ThemeProvider } from '@mui/material/styles';

// import { Input } from './components/inputs/Input'

function App() {
  return (
    <>
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny user)</p>
      <SignUp />

      {/* just for test */}
      <p></p>
      <Input />
      <ThemeProvider theme={ButtonTheme}>
        <Button
          color="secondary"
          text="JESTĘ BUTTONEM"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
