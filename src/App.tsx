import './App.scss';

import SignUp from 'components/Signup';
import { NavigationBar } from 'components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <SignUp />
    </>
  );
}

export default App;
