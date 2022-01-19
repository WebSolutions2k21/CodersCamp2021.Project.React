import { auth } from 'config/firebase';

import { useRef } from 'react';

export const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(emailRef.current!.value, passwordRef.current!.value);
    } catch (error) {
      console.error(error);
    }
  };

  //login user
  // const signIn = async () => {
  //   try {
  //     await auth.signInWithEmailAndPassword(emailRef.current!.value, passwordRef.current!.value)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div>
      <form className="mt-4">
        <label>Email</label>
        <input type="email" placeholder="email" ref={emailRef} />

        <label>Password</label>
        <input type="password" placeholder="password" ref={passwordRef} />

        <button type="button" onClick={createAccount}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

