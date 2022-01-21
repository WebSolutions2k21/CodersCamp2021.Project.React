import { Layout } from '../components';
import { Signup } from '../components';
import { Input } from '../components';

export const HomePage = () => {
  return (
    <Layout>
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <Input label="email" type="email" />
      <Input label="password" type="password" />
    </Layout>
  );
};
