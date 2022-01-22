import { Layout } from '../components';
// import { Signup } from '../components';
import { useStyles } from '../components/buttons/buttonsStyle';
import { Input } from '../components/inputs/Input';


export const SignupPage = () => {
  const signup = useStyles();
  return (
    <Layout>
      <p className= {signup.topText}>Create your account</p>
      <Input label="first name" type="fname"/>
      <Input label="last name" type="lname"/>
      <Input label="email" type="email" />
      <Input label="phone number" type="phone" />
      <Input label="password" type="password" />
      <p className= {signup.downText}>Already have an account?<a className= {signup.logIn}>Log In!</a></p>
      <button className= {signup.btn} >sign up !</button>
    </Layout>
  );
};