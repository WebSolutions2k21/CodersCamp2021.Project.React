import './App.scss';

import { NavigationBar, Signup} from 'components';


const App = ()=> {
  return (
    <>
      <NavigationBar />
    
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />
    </>
  );
}

export default App;
