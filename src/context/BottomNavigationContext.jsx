import { createContext, useState } from 'react';

export const BottomNavigationContext = createContext({
  iconColor: 0,
  setIconColor: () => {},
});

export const BottomNavigationProvider = ({ children }) => {
  const [iconColor, setIconColor] = useState(0);

  return (
    <BottomNavigationContext.Provider value={{ iconColor, setIconColor }}>{children}</BottomNavigationContext.Provider>
  );
};
