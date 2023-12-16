import React, { createContext, useContext, useState } from 'react';

export const PrevSelectedNavContext = createContext();

export const PrevSelectedNavProvider = ({ children }) => {
  const [prevSelectedNav, setPrevSelectedNav] = useState('Home');
  

  const togglePrevSelectedNav = (value) => {
    setPrevSelectedNav(value);
  };
 

  return (
    <PrevSelectedNavContext.Provider value={[prevSelectedNav, togglePrevSelectedNav ]}>
      {children}
    </PrevSelectedNavContext.Provider>
  );
};

