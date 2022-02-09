import { useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase';
import { Loading } from '../components';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setPending(false);
    });

    return unsubscribe;
  }, []);

  if (pending) {
    return <Loading />;
  }

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
