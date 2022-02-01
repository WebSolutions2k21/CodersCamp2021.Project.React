import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const BottomNavContext = createContext({
  bottomNavValue: 0,
  setBottomNavValue: () => {},
});

export const BottomNavProvider = ({ children }) => {
  const [bottomNavValue, setBottomNavValue] = useState(0);

  return (
    <BottomNavContext.Provider value={{ bottomNavValue, setBottomNavValue }}>{children}</BottomNavContext.Provider>
  );
};
