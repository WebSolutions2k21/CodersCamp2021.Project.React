import './App.scss';

import { NavigationBar, Signup } from 'components';
import { Input } from './components/inputs/Input';

const App = () => {
  return (
    <>
      <NavigationBar />

      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <Input />
    </>
  );
};

export default App;
