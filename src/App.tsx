import './App.scss';

import SignUp from 'components/Signup';

import { Input } from './components/inputs/Input'

function App() {
  return (
    <>
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny user)</p>
      <SignUp />

      {/* just for test */}
      <p></p>
      <Input label='email'/>
      <Input label='password' type="password"/>
    </>
  );
}

export default App;
