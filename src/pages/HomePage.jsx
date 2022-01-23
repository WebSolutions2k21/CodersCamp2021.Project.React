import { Input, Signup, Layout, CustomButton } from '../components';

export const HomePage = () => {
  return (
    <Layout>
      <p>Test tworzenia konta (podaj poprawny email i hasło - w bazie powinien być widoczny</p>
      <Signup />

      {/* just for test */}
      <p></p>
      <Input label="email" type="email" />
      <Input label="password" type="password" />
      <CustomButton color="primary/secondary" size="large" />
    </Layout>
  );
};
