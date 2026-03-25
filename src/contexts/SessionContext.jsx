import React from 'react';

import { createContext, useEffect, useState, useContext } from 'react';

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
