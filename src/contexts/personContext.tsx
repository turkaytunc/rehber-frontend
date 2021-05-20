import React, { createContext, useState } from 'react';
import { Person } from '../types/Person';

export const personContext =
  createContext<null | { person: Person | null; setPerson: (person: Person | null) => void }>(null);

const PersonContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [person, setPerson] = useState({} as Person | null);
  return <personContext.Provider value={{ person, setPerson }}>{children}</personContext.Provider>;
};

export default PersonContextProvider;
