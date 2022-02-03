import { auth, db } from './firebase';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// let navigate = useNavigate();

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, 'users'), where('uid', '==', user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: 'google',
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logInWithEmailAndPassword = async (email, password, onSuccess, onError) => {
  try {
    await auth.signInWithEmailAndPassword(auth, email, password);
    onSuccess();
  } catch (error) {
    onError(error);
  }
};

const registerWithEmailAndPassword = async (name, email, password, onSuccessfulRegistration, onRegistrationError) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await db
      .addDoc({
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      })
      .collection(db, 'users');

    onSuccessfulRegistration();
  } catch (err) {
    onRegistrationError(err);
  }
};

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert('Password reset link sent!');
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
  auth.signOut().reload();
};

export { /*signInWithGoogle,*/ logInWithEmailAndPassword, registerWithEmailAndPassword, /*sendPasswordReset,*/ logout };
