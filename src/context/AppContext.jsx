import { createContext, useLayoutEffect, useState } from 'react';
import { auth, db } from '../config/firebase';

export const AppContext = createContext({
  isAdmin: null,
  userName: '',
  iconColor: 0,
  setIconColor: () => {},
  setIsAdmin: () => {},
});

export const AppProvider = ({ children }) => {
  const [iconColor, setIconColor] = useState(0);
  const [isAdmin, setIsAdmin] = useState([]);
  const [userName, setUserName] = useState([]);

  const user = auth.currentUser;

  useLayoutEffect(() => {
    if (user) {
      db.collection('users')
        .where('uid', '==', user.uid)
        .get()
        .then(function (q) {
          q.forEach(function (doc) {
            setIsAdmin(() => doc.data().isAdmin);
            setUserName(() => doc.data().firstName);
          });
        });
    }
  }, [user,  isAdmin]);

  return <AppContext.Provider value={{ userName, isAdmin, iconColor, setIconColor, setIsAdmin }}>{children}</AppContext.Provider>;
};
