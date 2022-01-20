import './App.scss';
import { NavigationBar, Signup} from 'components';
import { Input } from './components/inputs/Input';
import { BasicButtons } from 'components/Button';

const App = () => {
  return (
    <>
      <NavigationBar />

      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <BasicButtons
        color="secondary"
        text="JESTĘ BUTTONEM"
      />
      <Input label='email' type='email'/>
      <Input label='password' type='password'/>
    </>
  );
};

export default App;
