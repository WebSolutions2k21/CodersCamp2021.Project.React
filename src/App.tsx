import './App.scss';

import SignUp from 'components/Signup';
import BasicButtons from 'components/Button';

function App() {
  return (
    <>
      {/* <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny user)</p>
      <SignUp /> */}
      <BasicButtons
      text = "JESTĘ BUTTONEM"
      />
    </>
  );
}

export default App;
