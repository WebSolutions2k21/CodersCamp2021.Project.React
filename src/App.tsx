import './App.scss';

import SignUp from 'components/Signup';
import { Sidebar } from 'components/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>App</h1>
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny user)</p>
      <SignUp />
      <BrowserRouter>
      <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
