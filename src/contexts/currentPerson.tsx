import React, { createContext, useState } from 'react';

export const currentPersonContext =
  createContext<null | { currentPerson: string; setCurrentPerson: (personId: string) => void }>(null);

const CurrentPersonProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPerson, setCurrentPerson] = useState('');
  return (
    <currentPersonContext.Provider value={{ currentPerson, setCurrentPerson }}>
      {children}
    </currentPersonContext.Provider>
  );
};

export default CurrentPersonProvider;
