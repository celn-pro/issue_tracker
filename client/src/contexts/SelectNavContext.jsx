import React, {createContext, useState} from 'react';

export const SelectedNavContext = createContext();

export const SelectedNavProvider = ({children}) => {
  const [selectedNav, setSelectedNav] = useState('');
  

  const toggleSelectedNav = (value) => {
    setSelectedNav(value);
  };
  

  return (
    <SelectedNavContext.Provider value={[selectedNav, toggleSelectedNav ]}>
      {children}
    </SelectedNavContext.Provider>
  );
};

